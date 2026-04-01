import { type LucideIcon } from "lucide-react";
import { Zap, Shield, Bot, Brain, Gamepad2, Globe } from "lucide-react";

/* ── Blooket "B" logo ── */
const BlooketLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`${className} rounded-xl flex items-center justify-center overflow-hidden`}
       style={{ background: "linear-gradient(135deg, #2bc4e8, #0a84ff)" }}>
    <span className="text-white font-black text-lg leading-none" style={{ fontFamily: "system-ui" }}>B</span>
  </div>
);

/* ── Kahoot "K!" logo ── */
const KahootLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`${className} rounded-xl flex items-center justify-center overflow-hidden`}
       style={{ background: "#46178f" }}>
    <span className="text-white font-black text-sm leading-none">K!</span>
  </div>
);

/* ── Quizizz "Q" logo ── */
const QuizizzLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`${className} rounded-xl flex items-center justify-center overflow-hidden`}
       style={{ background: "#8854c0" }}>
    <span className="text-white font-black text-base leading-none">Q</span>
  </div>
);

/* ── IXL logo ── */
const IXLLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`${className} rounded-xl flex items-center justify-center overflow-hidden`}
       style={{ background: "linear-gradient(135deg, #00b050, #009e47)" }}>
    <span className="text-white font-black text-[10px] tracking-tight leading-none">IXL</span>
  </div>
);

/* ── Wayground "W" logo ── */
const WaygroundLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`${className} rounded-xl flex items-center justify-center overflow-hidden`}
       style={{ background: "linear-gradient(135deg, #ff6b35, #f7931e)" }}>
    <span className="text-white font-black text-base leading-none">W</span>
  </div>
);

export interface CheatData {
  slug: string;
  game: string;
  tool: string;
  desc: string;
  longDesc: string;
  features: string[];
  status: "operational" | "maintenance" | "N/A";
  icon: LucideIcon;
  logo: React.FC<{ className?: string }>;
  version: string;
  platform: string;
  requirements: string[];
  instructions: string[];
}

export const cheats: CheatData[] = [
  {
    slug: "k-bot",
    game: "Kahoot",
    tool: "K-Bot",
    desc: "World's first ever Kahoot bot (that can actually use scripts).",
    longDesc: "The first ever official Kahoot bot with the most features, taking inspiration from X-Bot.",
    features: ["Bot Flooding", "Auto Answer", "Script Support"],
    status: "operational",
    icon: Bot,
    logo: KahootLogo,
    version: "0.1",
    platform: "Website",
    requirements: ["Chrome / Firefox / Edge", "Tampermonkey or Violentmonkey", "Active Kahoot session"],
    instructions: ["Install the browser extension or userscript", "Navigate to a Kahoot game", "Click the K-Bot overlay to activate", "Select your mode and let it run"],
  },
  {
    slug: "x-gui",
    game: "Blooket",
    tool: "X-GUI",
    desc: "Best cheat GUI for Blooket to date.",
    longDesc: "The most advanced cheat GUI for Blooket, bringing all features from every other GUI into one and more.",
    features: ["Token Generator", "Blook Unlocker", "Game Scripts", "Auto Farm"],
    status: "operational",
    icon: Gamepad2,
    logo: BlooketLogo,
    version: "7.0",
    platform: "Browser Console / Bookmarklet",
    requirements: ["Any modern browser", "Access to browser console (F12)", "Active Blooket session"],
    instructions: ["Open the browser console on Blooket", "Paste the X-GUI loader script", "The overlay will appear in the corner", "Select your exploit from the menu"],
  },
  {
    slug: "x-bot",
    game: "Blooket",
    tool: "X-Bot",
    desc: "Lightweight bot that runs silently in the background.",
    longDesc: "X-Bot is a headless automation tool designed for long-running Blooket sessions. It operates silently in the background, automatically playing games and farming tokens without any user interaction.",
    features: ["Auto Play", "Token Farm", "Silent Mode", "Background Running"],
    status: "operational",
    icon: Zap,
    logo: BlooketLogo,
    version: "1.0",
    platform: "Website",
    requirements: ["Node.js 18+", "npm or yarn", "Blooket account credentials"],
    instructions: ["Clone the X-Bot repository", "Run npm install to set up dependencies", "Configure your credentials in config.json", "Run the bot with npm start"],
  },
  {
    slug: "quizware",
    game: "Quizizz",
    tool: "QuizWare",
    desc: "Free live answer engine for Quizizz. No account needed.",
    longDesc: "QuizWare finds correct answers on Quizizz in real time. Completely free, no sign-up required — paste the script, join a game, and it handles the rest.",
    features: ["Live Answers", "Auto Complete", "Stealth Mode"],
    status: "operational",
    icon: Brain,
    logo: QuizizzLogo,
    version: "1.0",
    platform: "Browser Extension",
    requirements: ["Chrome or Firefox", "QuizWare extension installed", "Active Quizizz session"],
    instructions: ["Install the QuizWare extension", "Join a Quizizz game", "Click the QuizWare icon to open the menu", "Activate and let it handle the rest"],
  },
  {
    slug: "underground",
    game: "Wayground",
    tool: "Underground",
    desc: "Wayground cheat scripts — kick, crash, host swap.",
    longDesc: "The most functional Wayground suite, no longer behind a paywall.",
    features: ["Kick Player", "Start/End Game", "Game Crash", "Modify Powerups", "Become Host"],
    status: "maintenance",
    icon: Globe,
    logo: WaygroundLogo,
    version: "0.1",
    platform: "Tampermonkey Script",
    requirements: ["Chrome / Firefox / Edge", "Tampermonkey", "Wayground account"],
    instructions: ["Install the Tampermonkey userscript", "Navigate to Wayground", "The exploit menu appears automatically", "Currently in maintenance — limited functionality"],
  },
  {
    slug: "ixploit",
    game: "IXL",
    tool: "IXploit",
    desc: "Automated scripts for IXL problem solving.",
    longDesc: "IXploit automates IXL assignments across all subjects.",
    features: ["Auto Solve", "Multi-Subject", "Score Control"],
    status: "operational",
    icon: Shield,
    logo: IXLLogo,
    version: "0.1",
    platform: "Browser Extension / Console",
    requirements: ["Any modern browser", "IXL account with active subscription", "Browser extension or console access"],
    instructions: ["Install the IXploit extension or paste console script", "Navigate to any IXL skill", "Activate and watch it solve"],
  },
];

export const getCheatBySlug = (slug: string) => cheats.find((c) => c.slug === slug);
