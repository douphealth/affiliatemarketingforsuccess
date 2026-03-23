import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Target, ArrowRight, ArrowUpRight, RotateCcw, TrendingUp, DollarSign, BarChart3, Users, Zap, Star } from "lucide-react";

const BASE = "https://affiliatemarketingforsuccess.com";

interface Niche {
  name: string;
  emoji: string;
  competition: number; // 1-5
  avgCommission: string;
  monthlySearchVolume: string;
  difficulty: "Low" | "Medium" | "High";
  topPrograms: string[];
  earning12mo: string;
  guides: { title: string; href: string }[];
}

const niches: Niche[] = [
  {
    name: "AI & SaaS Tools",
    emoji: "🤖",
    competition: 3,
    avgCommission: "20-50% recurring",
    monthlySearchVolume: "450K+",
    difficulty: "Medium",
    topPrograms: ["Jasper AI", "Surfer SEO", "Semrush"],
    earning12mo: "$2,000 - $15,000/mo",
    guides: [
      { title: "Best AI Affiliate Niches", href: `${BASE}/affiliate-marketing/best-ai-affiliate-niches/` },
      { title: "AI Affiliate Marketing 2026", href: `${BASE}/affiliate-marketing/ai-affiliate-marketing-2026/` },
      { title: "Best Affiliate Products to Promote", href: `${BASE}/affiliate-marketing/best-affiliate-products-to-promote/` },
    ],
  },
  {
    name: "Web Hosting & WordPress",
    emoji: "🌐",
    competition: 5,
    avgCommission: "$65-200 per sale",
    monthlySearchVolume: "800K+",
    difficulty: "High",
    topPrograms: ["SiteGround", "Cloudways", "Kinsta"],
    earning12mo: "$1,500 - $10,000/mo",
    guides: [
      { title: "SiteGround Review", href: `${BASE}/reviews/siteground-review/` },
      { title: "Cloudways Review", href: `${BASE}/reviews/cloudways-review/` },
      { title: "WordPress Blogging Tips", href: `${BASE}/blogging/wordpress-blogging-tips/` },
    ],
  },
  {
    name: "Online Education & Courses",
    emoji: "📚",
    competition: 3,
    avgCommission: "30-50% per sale",
    monthlySearchVolume: "300K+",
    difficulty: "Medium",
    topPrograms: ["Teachable", "Skillshare", "Coursera"],
    earning12mo: "$1,000 - $8,000/mo",
    guides: [
      { title: "Best Affiliate Marketing Niches 2025", href: `${BASE}/affiliate-marketing/best-affiliate-marketing-niches-2025/` },
      { title: "How to Choose Your Niche", href: `${BASE}/affiliate-marketing/how-to-choose-your-niche/` },
      { title: "Content Strategy Guide", href: `${BASE}/blogging/winning-content-strategy/` },
    ],
  },
  {
    name: "Email Marketing Tools",
    emoji: "✉️",
    competition: 4,
    avgCommission: "20-40% recurring",
    monthlySearchVolume: "200K+",
    difficulty: "Medium",
    topPrograms: ["GetResponse", "ConvertKit", "AWeber"],
    earning12mo: "$800 - $6,000/mo",
    guides: [
      { title: "GetResponse Review 2025", href: `${BASE}/reviews/getresponse-review-2025/` },
      { title: "Effective Email Marketing Strategies", href: `${BASE}/email-marketing/effective-email-marketing-strategies/` },
      { title: "Build Your Email List", href: `${BASE}/email-marketing/build-your-email-list/` },
    ],
  },
  {
    name: "SEO Tools & Software",
    emoji: "🔍",
    competition: 4,
    avgCommission: "30-40% recurring",
    monthlySearchVolume: "350K+",
    difficulty: "High",
    topPrograms: ["Semrush", "Ahrefs", "Surfer SEO"],
    earning12mo: "$2,000 - $12,000/mo",
    guides: [
      { title: "Semrush Review", href: `${BASE}/reviews/semrush-review/` },
      { title: "Nexus AI Free SEO Toolkit", href: `${BASE}/tools/nexus-ai-free-seo-toolkit/` },
      { title: "Build an Effective SEO Strategy", href: `${BASE}/seo/build-an-effective-seo-strategy/` },
    ],
  },
  {
    name: "Digital Marketing",
    emoji: "📈",
    competition: 4,
    avgCommission: "15-30% recurring",
    monthlySearchVolume: "500K+",
    difficulty: "High",
    topPrograms: ["WarriorPlus", "ClickFunnels", "HubSpot"],
    earning12mo: "$1,500 - $10,000/mo",
    guides: [
      { title: "WarriorPlus Affiliate Program", href: `${BASE}/affiliate-marketing/warriorplus-affiliate-program-unlock-lucrative-opportunities/` },
      { title: "High Ticket Affiliate Marketing", href: `${BASE}/affiliate-marketing/high-ticket-affiliate-marketing/` },
      { title: "Affiliate Marketing Strategies", href: `${BASE}/affiliate-marketing/affiliate-marketing-strategies/` },
    ],
  },
];

const NicheProfiler = () => {
  const [selected, setSelected] = useState<Niche | null>(null);

  return (
    <section id="niche-profiler" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />

      <div className="container relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-accent/30 bg-accent/10 mb-5 animate-pulse-glow">
                <Target className="w-4 h-4 text-accent" />
                <span className="text-sm font-bold text-accent tracking-wider">NICHE PROFITABILITY ANALYZER</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance leading-[1.1]">
                Find your most profitable
                <span className="block text-accent mt-1">affiliate niche</span>
              </h2>
              <p className="text-muted-foreground mt-4 text-lg text-pretty max-w-xl mx-auto">
                Select a niche to see real competition data, commission ranges, earning potential, and our recommended reading path.
              </p>
            </div>

            {!selected ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {niches.map((niche) => (
                  <button
                    key={niche.name}
                    onClick={() => setSelected(niche)}
                    className="group text-left p-6 rounded-2xl border border-border bg-card/80 backdrop-blur-sm hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 active:scale-[0.97]"
                  >
                    <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform duration-300">{niche.emoji}</span>
                    <h3 className="font-bold text-sm group-hover:text-accent transition-colors">{niche.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">Avg: {niche.avgCommission}</p>
                    <div className="flex items-center gap-1 mt-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full ${i < niche.competition ? "bg-accent" : "bg-secondary"}`} />
                      ))}
                      <span className="text-[10px] text-muted-foreground ml-1">competition</span>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-border bg-card/90 backdrop-blur-sm shadow-2xl shadow-accent/5 overflow-hidden">
                {/* Header */}
                <div className="p-8 border-b border-border bg-gradient-to-r from-accent/5 via-transparent to-accent/5">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{selected.emoji}</span>
                      <div>
                        <h3 className="text-2xl font-extrabold">{selected.name}</h3>
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold mt-1 ${
                          selected.difficulty === "Low" ? "bg-emerald-500/15 text-emerald-400" :
                          selected.difficulty === "Medium" ? "bg-primary/15 text-primary" :
                          "bg-destructive/15 text-destructive"
                        }`}>
                          {selected.difficulty} Difficulty
                        </span>
                      </div>
                    </div>
                    <button onClick={() => setSelected(null)} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-secondary/50">
                      <RotateCcw className="w-3.5 h-3.5" /> Change niche
                    </button>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
                  {[
                    { icon: DollarSign, label: "Avg Commission", value: selected.avgCommission, color: "text-emerald-400" },
                    { icon: TrendingUp, label: "12-Mo Earnings", value: selected.earning12mo, color: "text-primary" },
                    { icon: Users, label: "Monthly Searches", value: selected.monthlySearchVolume, color: "text-accent" },
                    { icon: BarChart3, label: "Competition", value: `${selected.competition}/5`, color: "text-orange-400" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-card p-5 text-center">
                      <stat.icon className={`w-5 h-5 ${stat.color} mx-auto mb-2`} />
                      <p className="text-lg font-extrabold tabular-nums">{stat.value}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Top programs */}
                <div className="p-8 border-b border-border">
                  <h4 className="text-sm font-bold mb-3 flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary" /> Top Affiliate Programs
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.topPrograms.map((prog) => (
                      <span key={prog} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-secondary border border-border">
                        {prog}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Recommended reading */}
                <div className="p-8">
                  <h4 className="text-sm font-bold mb-4 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-accent" /> Start with these guides
                  </h4>
                  <div className="space-y-3">
                    {selected.guides.map((g, i) => (
                      <a
                        key={g.href}
                        href={g.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-2xl border border-border hover:border-accent/50 bg-secondary/20 hover:bg-accent/10 transition-all duration-300 active:scale-[0.97] group"
                      >
                        <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center flex-shrink-0 text-xs font-black text-white shadow-md">
                          {i + 1}
                        </span>
                        <span className="flex-1 text-sm font-semibold group-hover:text-accent transition-colors">{g.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent flex-shrink-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <a
                      href={`${BASE}/affiliate-marketing/how-to-choose-your-niche/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-bold text-sm hover:shadow-xl hover:shadow-accent/25 transition-all duration-300 active:scale-[0.97]"
                    >
                      Read the Full Niche Selection Guide
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default NicheProfiler;
