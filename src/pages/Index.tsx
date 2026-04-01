import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { Shield, Zap, Users, ArrowRight, ChevronRight, Activity, Clock, Gift, Bot, Brain, Gamepad2, Globe, Eye, Lock, Terminal, Cpu, Download, Crosshair, Code, Layers, Sparkles, RefreshCw, Monitor } from "lucide-react";
import { cheats } from "@/data/cheats";
import heroBg from "@/assets/hero-cyber.jpg";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";
import terminalMockup from "@/assets/terminal-mockup.jpg";
import securityVisual from "@/assets/security-visual.jpg";
import speedVisual from "@/assets/speed-visual.jpg";
import featureBg from "@/assets/feature-bg.jpg";

const DISCORD = "https://discord.gg/kbx46Cyc";

const DiscordIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
  </svg>
);

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <PageWrapper>
      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background image with parallax */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 -top-20">
          <img
            src={heroBg}
            alt=""
            className="w-full h-[120%] object-cover opacity-30"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
        </motion.div>

        {/* Animated grid overlay */}
        <div className="absolute inset-0 grid-pattern opacity-20 radial-fade" />

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/50"
              animate={{
                y: [0, -300, 0],
                x: [0, Math.sin(i) * 80, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeInOut",
              }}
              style={{
                left: `${10 + i * 11}%`,
                top: `${50 + (i % 4) * 12}%`,
              }}
            />
          ))}
        </div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="max-w-7xl mx-auto px-6 w-full relative z-10 py-32"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Hero text */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="space-y-8"
            >
              {/* Status badge */}
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-card/60 backdrop-blur-xl border border-glass-border">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-xs font-semibold text-muted-foreground tracking-wide">All systems operational</span>
                  <div className="w-px h-3 bg-glass-border" />
                  <span className="text-xs font-mono text-primary">v2.0</span>
                </div>
              </motion.div>

              {/* Main heading */}
              <motion.div variants={fadeUp}>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.9] mb-4">
                  <span className="gradient-text">X-NETWORK</span>
                </h1>
                <p className="text-xl md:text-2xl text-foreground font-medium leading-snug">
                  Dominate every school game.
                  <br />
                  <span className="text-muted-foreground">No downloads. No accounts. Free forever.</span>
                </p>
              </motion.div>

              {/* Feature highlights inline */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                {[
                  { icon: Shield, text: "Undetected" },
                  { icon: Zap, text: "Instant" },
                  { icon: Gift, text: "100% Free" },
                  { icon: Code, text: "Open Source" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card/40 border border-glass-border/50 text-xs text-muted-foreground">
                    <Icon className="w-3 h-3 text-primary" />
                    {text}
                  </div>
                ))}
              </motion.div>

              {/* CTA buttons */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
                <Link
                  to="/cheats"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_hsl(265_85%_60%/0.4)] hover:-translate-y-0.5"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary via-neon to-primary bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]" />
                  <span className="relative z-10 flex items-center gap-3">
                    Browse Cheats
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>

                <a
                  href={DISCORD}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-sm transition-all duration-500 hover:shadow-[0_0_30px_rgba(88,101,242,0.4)] hover:-translate-y-0.5"
                  style={{ background: "#5865f2", color: "white" }}
                >
                  <DiscordIcon size={16} />
                  Join Discord
                </a>
              </motion.div>

              {/* Trust stats */}
              <motion.div variants={fadeUp} className="flex items-center gap-8 pt-4">
                {[
                  { value: "1,024+", label: "Users" },
                  { value: "99.5%", label: "Uptime" },
                  { value: "6", label: "Tools" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-display font-bold text-foreground">{s.value}</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Visual showcase — NO macOS window frame */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden border border-glass-border shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
                <img
                  src={dashboardMockup}
                  alt="X-Network dashboard interface"
                  className="w-full"
                  width={1200}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 glass-card px-4 py-3 flex items-center gap-3 shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
              >
                <div className="w-8 h-8 rounded-lg bg-success/15 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-success" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">Fully Undetected</div>
                  <div className="text-[10px] text-muted-foreground">All platforms</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-4 glass-card px-4 py-3 flex items-center gap-3 shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                  <Activity className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">Live Now</div>
                  <div className="text-[10px] text-muted-foreground">6 tools active</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-glass-border flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 rounded-full bg-primary/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== PLATFORM SUPPORT STRIP ===== */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-[11px] font-semibold text-primary uppercase tracking-widest">Supported Platforms</span>
          </motion.div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {["Kahoot", "Blooket", "Quizizz", "IXL", "Wayground"].map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-xl md:text-2xl font-display font-bold text-muted-foreground/40 hover:text-primary/60 transition-colors duration-500"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT IS X-NETWORK — with dual images ===== */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left: text content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 mb-6">
                <Terminal className="w-3 h-3 text-primary" />
                <span className="text-[11px] font-semibold text-primary tracking-wide uppercase">About us</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
                What is{" "}
                <span className="gradient-text">X-NETWORK</span>?
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                X-NETWORK is a collective of developers building the best free cheats for school platforms.
                We don't sell anything — everything we make is open and free to use.
              </p>

              <div className="space-y-5">
                {[
                  { icon: Lock, title: "Undetected", desc: "Built to stay under the radar. We update constantly to stay ahead of platform patches." },
                  { icon: Zap, title: "Instant Setup", desc: "No downloads, no installs. Paste the script and you're in within seconds." },
                  { icon: Eye, title: "Open & Transparent", desc: "All our tools are free. No hidden paywalls, no premium tiers, no bait." },
                  { icon: RefreshCw, title: "Constantly Updated", desc: "We push updates regularly. When platforms change, we adapt within hours." },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: stacked visuals — NO macOS window frame */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Terminal mockup — plain image */}
              <div className="relative rounded-2xl overflow-hidden border border-glass-border shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
                <img
                  src={terminalMockup}
                  alt="X-Network terminal interface"
                  className="w-full"
                  loading="lazy"
                  width={1200}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 glass-card px-4 py-3 flex items-center gap-3 shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
              >
                <div className="w-8 h-8 rounded-lg bg-success/15 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-success" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">100% Undetected</div>
                  <div className="text-[10px] text-muted-foreground">All platforms</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-4 glass-card px-4 py-3 flex items-center gap-3 shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">6 Active Tools</div>
                  <div className="text-[10px] text-muted-foreground">Constantly updated</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FEATURE SHOWCASE — image-driven layout ===== */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[11px] font-semibold text-primary uppercase tracking-widest mb-3 block">Why choose us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Built Different
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              We don't cut corners. Every tool is built from scratch with performance and stealth in mind.
            </p>
          </motion.div>

          {/* Bento grid with images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Large card: Security */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 group"
            >
              <div className="relative overflow-hidden rounded-2xl border border-glass-border h-full bg-card/40 backdrop-blur-xl transition-all duration-500 hover:border-primary/20">
                <div className="grid md:grid-cols-2 h-full">
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mb-6">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">Fully Undetected</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Our cheats are built to stay under the radar. We keep up with platform updates and push patches before detection.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Anti-Detection", "Auto-Update", "Stealth Mode"].map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-lg bg-primary/8 text-[10px] text-primary font-semibold border border-primary/15">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <img src={securityVisual} alt="Security" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" loading="lazy" width={800} height={800} />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-card/80" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Small card: Speed */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl border border-glass-border h-full bg-card/40 backdrop-blur-xl transition-all duration-500 hover:border-primary/20">
                <div className="relative h-48 overflow-hidden">
                  <img src={speedVisual} alt="Speed" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" loading="lazy" width={800} height={800} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-warning/15 flex items-center justify-center mb-4">
                    <Zap className="w-5 h-5 text-warning" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">Lightning Fast</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">No delays, no lag. Sub-18ms response on all tools.</p>
                </div>
              </div>
            </motion.div>

            {/* Small card: Free */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl border border-glass-border h-full bg-card/40 backdrop-blur-xl transition-all duration-500 hover:border-primary/20 p-8">
                <div className="w-14 h-14 rounded-2xl bg-success/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Gift className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Always Free</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  No paywalls, no subscriptions, no premium tiers. Just use it.
                </p>
                <div className="text-3xl font-display font-bold text-success">$0</div>
                <div className="text-xs text-muted-foreground">forever</div>
              </div>
            </motion.div>

            {/* Wide card: Multi-Platform */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 group"
            >
              <div className="relative overflow-hidden rounded-2xl border border-glass-border h-full bg-card/40 backdrop-blur-xl transition-all duration-500 hover:border-primary/20">
                <div className="relative h-48 overflow-hidden">
                  <img src={featureBg} alt="Multi-platform" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" loading="lazy" width={1200} height={600} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                </div>
                <div className="p-8 -mt-16 relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
                      <Layers className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">Multi-Platform Support</h3>
                      <p className="text-xs text-muted-foreground">Works across 5+ school gaming platforms</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-3">
                    {["Kahoot", "Blooket", "Quizizz", "IXL", "Wayground"].map((p) => (
                      <div key={p} className="text-center p-3 rounded-xl bg-secondary/60 border border-glass-border/50 hover:border-primary/20 transition-all duration-300">
                        <span className="text-xs font-bold text-foreground">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional feature row */}
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {[
              { icon: Monitor, title: "No Downloads", desc: "Everything runs in your browser. Zero installs needed.", iconBg: "bg-primary/15", iconColor: "text-primary" },
              { icon: Code, title: "Open Scripts", desc: "All scripts are readable. No obfuscation, no hidden code.", iconBg: "bg-success/15", iconColor: "text-success" },
              { icon: Sparkles, title: "Active Development", desc: "New features and tools added regularly by our dev team.", iconBg: "bg-warning/15", iconColor: "text-warning" },
            ].map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl border border-glass-border p-8 h-full bg-card/40 backdrop-blur-xl transition-all duration-500 hover:border-primary/20">
                  <div className={`w-12 h-12 rounded-2xl ${feat.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                    <feat.icon className={`w-5 h-5 ${feat.iconColor}`} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{feat.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CHEATS SHOWCASE ===== */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4"
          >
            <div>
              <span className="text-[11px] font-semibold text-primary uppercase tracking-widest mb-3 block">Our Arsenal</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Available Cheats
              </h2>
              <p className="text-muted-foreground mt-3 max-w-md">
                Browse our complete suite of tools. All free, all undetected.
              </p>
            </div>
            <Link
              to="/cheats"
              className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:gap-3 transition-all duration-300"
            >
              View All Cheats
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cheats.map((cheat, i) => {
              const isOnline = cheat.status === "operational";
              const Logo = cheat.logo;
              return (
                <motion.div
                  key={cheat.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={`/cheats/${cheat.slug}`}
                    className="group block relative overflow-hidden rounded-2xl border border-glass-border bg-card/40 backdrop-blur-xl p-6 h-full transition-all duration-500 hover:border-primary/25 hover:bg-card/60 hover:shadow-[0_10px_50px_rgba(0,0,0,0.4),0_0_30px_hsl(265_85%_60%/0.06)]"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Logo className="w-10 h-10" />
                        <div>
                          <span className="text-[10px] font-mono text-primary/60 uppercase tracking-widest block mb-1">
                            {cheat.game}
                          </span>
                          <h3 className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {cheat.tool}
                          </h3>
                        </div>
                      </div>
                      <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        isOnline ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${isOnline ? "bg-success" : "bg-warning animate-pulse"}`} />
                        {isOnline ? "Online" : "Maint."}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {cheat.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {cheat.features.slice(0, 3).map((f) => (
                        <span key={f} className="px-2.5 py-1 rounded-lg bg-secondary/80 text-[10px] text-secondary-foreground font-medium border border-glass-border/50">
                          {f}
                        </span>
                      ))}
                      {cheat.features.length > 3 && (
                        <span className="px-2.5 py-1 rounded-lg bg-primary/8 text-[10px] text-primary font-medium">
                          +{cheat.features.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-glass-border/50">
                      <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                        <span className="font-mono">v{cheat.version}</span>
                        <span className="w-1 h-1 rounded-full bg-glass-border" />
                        <span>{cheat.platform}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                        Install
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                      background: "linear-gradient(135deg, hsl(265 85% 60% / 0.05), transparent 50%)",
                    }} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[11px] font-semibold text-primary uppercase tracking-widest mb-3 block">Get started</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Three Steps. That's It.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Pick a Cheat", desc: "Browse our arsenal and find the tool for your platform.", icon: Crosshair },
              { step: "02", title: "Copy the Script", desc: "One-click copy. No downloads, no accounts, no signup.", icon: Terminal },
              { step: "03", title: "Paste & Run", desc: "Open your browser console, paste the code, and you're in.", icon: Zap },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative text-center group"
              >
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-glass-border to-transparent" />
                )}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:shadow-[0_0_30px_hsl(265_85%_60%/0.15)] transition-all duration-500">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-xs font-mono text-primary/40 mb-2">{item.step}</div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY CTA ===== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl border border-glass-border bg-gradient-to-br from-card/80 via-card/60 to-primary/5 p-12 md:p-16 text-center"
          >
            <div className="absolute inset-0 rounded-3xl gradient-border" />
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-scan" />
            </div>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", bounce: 0.3 }}
              className="w-20 h-20 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-8"
            >
              <Users className="w-9 h-9 text-primary" />
            </motion.div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Join the Community
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
              Over 1,000 people are using X-NETWORK. Get help, share scripts, and stay updated.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={DISCORD}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-sm transition-all duration-500 hover:shadow-[0_0_40px_rgba(88,101,242,0.5)] hover:-translate-y-1"
                style={{ background: "#5865f2", color: "white" }}
              >
                <DiscordIcon size={18} />
                Join Discord Server
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                to="/cheats"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm transition-all duration-500 hover:shadow-[0_0_40px_hsl(265_85%_60%/0.4)] hover:-translate-y-1"
              >
                Browse All Cheats
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="mt-10 flex items-center justify-center gap-8 text-xs text-muted-foreground">
              <span className="flex items-center gap-2"><Shield className="w-3.5 h-3.5 text-success" /> Undetected</span>
              <span className="flex items-center gap-2"><Zap className="w-3.5 h-3.5 text-warning" /> No Downloads</span>
              <span className="flex items-center gap-2"><Gift className="w-3.5 h-3.5 text-primary" /> 100% Free</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </PageWrapper>
  );
};

export default Index;
