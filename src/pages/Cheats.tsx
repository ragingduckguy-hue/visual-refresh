import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { cheats } from "@/data/cheats";
import { Download, ChevronRight, Search } from "lucide-react";
import { useState } from "react";

const Cheats = () => {
  const [search, setSearch] = useState("");

  const filtered = cheats.filter((c) => {
    return c.tool.toLowerCase().includes(search.toLowerCase()) || c.game.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <PageWrapper>
      <section className="max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 mb-6">
            <Download className="w-3 h-3 text-primary" />
            <span className="text-[11px] font-semibold text-primary tracking-wide uppercase">Arsenal</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-3">
            Our <span className="gradient-text">Cheats</span>
          </h1>
          <p className="text-muted-foreground max-w-lg text-lg">
            Our complete suite of tools, built for speed and stealth. All free.
          </p>
        </motion.div>

        {/* Search only */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search cheats..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-card/60 border border-glass-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/30 transition-colors duration-300"
            />
          </div>
        </motion.div>

        {/* Cheats grid — equal height cards */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="grid md:grid-cols-2 gap-4"
        >
          {filtered.map((c) => {
            const isOnline = c.status === "operational";
            const Logo = c.logo;
            return (
              <motion.div
                key={c.slug}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <Link
                  to={`/cheats/${c.slug}`}
                  className="group block glass-card-hover p-6 relative overflow-hidden h-full flex flex-col"
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Logo className="w-10 h-10" />
                        <div>
                          <span className="text-[11px] font-mono text-primary/60 uppercase tracking-widest">{c.game}</span>
                          <h3 className="font-display text-xl font-bold text-foreground tracking-tight mb-0 group-hover:text-primary transition-colors duration-300">
                            {c.tool}
                          </h3>
                        </div>
                      </div>
                      <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                        isOnline ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${isOnline ? "bg-success" : "bg-warning animate-pulse"}`} />
                        {isOnline ? "Online" : "Maintenance"}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{c.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {c.features.slice(0, 4).map((f) => (
                        <span key={f} className="px-2.5 py-1 rounded-lg bg-secondary/80 text-[10px] text-secondary-foreground font-medium border border-glass-border/50">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom meta */}
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-glass-border/50">
                    <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                      <span className="font-mono">v{c.version}</span>
                      <span className="w-1 h-1 rounded-full bg-glass-border" />
                      <span>{c.platform}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                      <Download className="w-3.5 h-3.5" />
                      Install
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/0 group-hover:bg-primary/5 rounded-full blur-3xl transition-all duration-500 pointer-events-none" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No cheats found matching your search.</p>
          </div>
        )}
      </section>
      <Footer />
    </PageWrapper>
  );
};

export default Cheats;