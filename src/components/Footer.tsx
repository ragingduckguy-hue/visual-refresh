import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DISCORD = "https://discord.gg/kbx46Cyc";

const DiscordIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
  </svg>
);

const footerLinks = {
  product: [
    { label: "Home", to: "/" },
    { label: "Cheats", to: "/cheats" },
    { label: "Status", to: "/status" },
    { label: "Credits", to: "/credits" },
  ],
  legal: [
    { label: "Terms of Service", to: "/terms" },
    { label: "Privacy Policy", to: "/privacy" },
  ],
  community: [
    { label: "Discord Server", href: DISCORD },
  ],
};

const Footer = () => (
  <footer className="relative mt-32">
    {/* Top gradient line */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

    <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
      {/* Main footer grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-4 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.4 }}
              className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 3L8 8L13 3" stroke="hsl(265, 85%, 70%)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 13L8 8L13 13" stroke="hsl(265, 85%, 70%)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
            <span className="font-display text-sm font-bold text-foreground">X-NETWORK</span>
          </Link>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">
            Free cheats for school platforms. No downloads, no accounts — just open and go.
          </p>
        </div>

        {/* Product links */}
        <div>
          <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">Product</h4>
          <ul className="space-y-3">
            {footerLinks.product.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal links */}
        <div>
          <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">Legal</h4>
          <ul className="space-y-3">
            {footerLinks.legal.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">Community</h4>
          <ul className="space-y-3">
            {footerLinks.community.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <DiscordIcon />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Discord button */}
          <a
            href={DISCORD}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(88,101,242,0.35)] hover:opacity-90"
            style={{ background: "#5865f2", color: "white" }}
          >
            <DiscordIcon />
            Join Server
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-glass-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} X-NETWORK. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Not affiliated with Kahoot, Blooket, Quizizz, IXL, or Wayground.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
