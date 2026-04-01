import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { CheckCircle, AlertTriangle, Activity, Clock, Wifi, Server, Globe, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";

const DISCORD = "https://discord.gg/kbx46Cyc";

const services = [
  { name: "K-Bot", game: "Kahoot", status: "operational", latency: "12ms", lastCheck: "Just now" },
  { name: "X-GUI", game: "Blooket", status: "operational", latency: "8ms", lastCheck: "Just now" },
  { name: "X-Bot", game: "Blooket", status: "operational", latency: "15ms", lastCheck: "Just now" },
  { name: "QuizWare", game: "Quizizz", status: "operational", latency: "11ms", lastCheck: "Just now" },
  { name: "Underground", game: "Wayground", status: "maintenance", latency: "—", lastCheck: "2h ago" },
  { name: "IXploit", game: "IXL", status: "operational", latency: "9ms", lastCheck: "Just now" },
];

const operational = services.filter((s) => s.status === "operational").length;
const allGood = operational === services.length;

// Fake uptime data for the last 30 days
const uptimeDays = Array.from({ length: 30 }, (_, i) => ({
  day: i,
  status: i === 18 ? "partial" : i === 22 && Math.random() > 0.5 ? "partial" : "up",
}));

const Status = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageWrapper>
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/4 rounded-full blur-[180px] pointer-events-none" />

      <section className="max-w-4xl mx-auto px-6 py-24 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 mb-6">
            <Activity className="w-3 h-3 text-primary" />
            <span className="text-[11px] font-semibold text-primary tracking-wide uppercase">System Status</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-3">
            Service <span className="gradient-text">Status</span>
          </h1>
          <p className="text-muted-foreground">Real-time status of all X-NETWORK services.</p>
        </motion.div>

        {/* Overall status banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`glass-card p-6 mb-8 relative overflow-hidden ${
            allGood ? "border-success/20" : "border-warning/20"
          }`}
        >
          <div className={`absolute inset-0 ${allGood ? "bg-success/3" : "bg-warning/3"}`} />
          <div className="relative z-10 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                allGood ? "bg-success/15" : "bg-warning/15"
              }`}>
                {allGood
                  ? <CheckCircle className="w-6 h-6 text-success" />
                  : <AlertTriangle className="w-6 h-6 text-warning" />
                }
              </div>
              <div>
                <div className="font-display text-lg font-bold text-foreground">
                  {allGood ? "All Systems Operational" : `${operational} of ${services.length} Services Online`}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5 flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  Last checked: {currentTime.toLocaleTimeString()}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card/60 border border-glass-border">
              <Wifi className="w-3.5 h-3.5 text-success" />
              <span className="text-xs font-mono text-foreground">99.5% uptime</span>
            </div>
          </div>
        </motion.div>

        {/* 30-day uptime bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass-card p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-sm font-bold text-foreground">30-Day Uptime</h2>
            <span className="text-xs text-muted-foreground">99.5%</span>
          </div>
          <div className="flex gap-1">
            {uptimeDays.map((day, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.2 + i * 0.02 }}
                className={`flex-1 h-8 rounded-sm ${
                  day.status === "up" ? "bg-success/60 hover:bg-success/80" : "bg-warning/60 hover:bg-warning/80"
                } transition-colors duration-200 cursor-pointer`}
                title={`Day ${30 - i}: ${day.status === "up" ? "Operational" : "Partial outage"}`}
              />
            ))}
          </div>
          <div className="flex items-center justify-between mt-2 text-[10px] text-muted-foreground">
            <span>30 days ago</span>
            <span>Today</span>
          </div>
        </motion.div>

        {/* Service list */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.04 } } }}
          className="space-y-3 mb-10"
        >
          {services.map((s) => (
            <motion.div
              key={s.name}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="glass-card-hover px-6 py-5 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className={`w-3 h-3 rounded-full ${
                  s.status === "operational" ? "bg-success" : "bg-warning animate-pulse"
                }`} />
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-display text-sm font-bold text-foreground">{s.name}</span>
                    <span className="text-[10px] font-mono text-muted-foreground px-2 py-0.5 rounded-md bg-secondary/60">{s.game}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-[11px] text-muted-foreground">
                    <span>Latency: {s.latency}</span>
                    <span className="w-1 h-1 rounded-full bg-glass-border" />
                    <span>Checked: {s.lastCheck}</span>
                  </div>
                </div>
              </div>
              <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl ${
                s.status === "operational"
                  ? "bg-success/10 text-success border border-success/20"
                  : "bg-warning/10 text-warning border border-warning/20"
              }`}>
                {s.status === "operational" ? "Operational" : "Maintenance"}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Discord incident banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href={DISCORD}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 glass-card p-6 border-[#5865f2]/20 hover:border-[#5865f2]/40 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(88,101,242,0.15)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#818cf8">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-display font-bold text-foreground mb-0.5">Stay Updated on Incidents</p>
              <p className="text-sm text-muted-foreground">Join our Discord for real-time maintenance alerts and incident reports.</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-[#818cf8] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </a>
        </motion.div>
      </section>
      <Footer />
    </PageWrapper>
  );
};

// Need this import for ChevronRight used in the discord banner
import { ChevronRight } from "lucide-react";

export default Status;
