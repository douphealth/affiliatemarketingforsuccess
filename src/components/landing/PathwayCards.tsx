import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Rocket, TrendingUp, Bot, Wrench, ChevronDown, ChevronUp, ArrowUpRight } from "lucide-react";

const BASE = "https://affiliatemarketingforsuccess.com";

const pathways = [
  {
    icon: Rocket,
    label: "🌱 Beginner",
    tagline: "I'm just starting",
    description: "Learn the fundamentals, choose a niche, and earn your first commission.",
    color: "from-emerald-500/20 to-emerald-600/5",
    iconColor: "text-emerald-400",
    borderHover: "hover:border-emerald-500/40",
    guides: [
      { title: "Beginner's Guide to Affiliate Marketing", href: `${BASE}/affiliate-marketing/beginners-guide/` },
      { title: "The Costs to Start Affiliate Marketing", href: `${BASE}/affiliate-marketing/the-costs-to-start-affiliate-marketing/` },
      { title: "How to Choose Your Niche", href: `${BASE}/affiliate-marketing/how-to-choose-your-niche/` },
      { title: "Best Affiliate Programs for Beginners", href: `${BASE}/affiliate-marketing/best-affiliate-programs-for-beginners-with-high-commission/` },
      { title: "10 Simple Steps to Build Your Website", href: `${BASE}/affiliate-marketing/10-simple-steps-to-build-your-affiliate-marketing-website/` },
    ],
  },
  {
    icon: TrendingUp,
    label: "📈 Growing",
    tagline: "I want to scale",
    description: "Advanced strategies for traffic, SEO, and scaling your affiliate income.",
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
    borderHover: "hover:border-accent/40",
    guides: [
      { title: "Affiliate Marketing Strategies", href: `${BASE}/affiliate-marketing/affiliate-marketing-strategies/` },
      { title: "High Ticket Affiliate Marketing", href: `${BASE}/affiliate-marketing/high-ticket-affiliate-marketing/` },
      { title: "Build an Effective SEO Strategy", href: `${BASE}/seo/build-an-effective-seo-strategy/` },
      { title: "Blog Monetization Strategies", href: `${BASE}/blogging/blog-monetization-strategies/` },
      { title: "Optimize Your Sales Funnel", href: `${BASE}/affiliate-marketing/optimize-your-sales-funnel/` },
    ],
  },
  {
    icon: Bot,
    label: "🤖 AI-First",
    tagline: "I want to leverage AI",
    description: "Master AI tools, prompt engineering, and automated workflows.",
    color: "from-violet-500/20 to-violet-600/5",
    iconColor: "text-violet-400",
    borderHover: "hover:border-violet-500/40",
    guides: [
      { title: "AI Affiliate Marketing 2026", href: `${BASE}/affiliate-marketing/ai-affiliate-marketing-2026/` },
      { title: "Learn Prompt Engineering", href: `${BASE}/ai/learn-prompt-engineering/` },
      { title: "Best ChatGPT Alternatives", href: `${BASE}/ai/best-chatgpt-alternatives/` },
      { title: "Predictive AI Affiliate Funnels", href: `${BASE}/affiliate-marketing/predictive-ai-affiliate-funnels/` },
      { title: "AI Content Strategy", href: `${BASE}/ai/ai-content-strategy/` },
    ],
  },
  {
    icon: Wrench,
    label: "🛠️ Tools & Reviews",
    tagline: "I need the best tools",
    description: "Honest, tested reviews and comparisons of the top marketing tools.",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    borderHover: "hover:border-primary/40",
    guides: [
      { title: "Affiliate Marketing Tools", href: `${BASE}/affiliate-marketing/affiliate-marketing-tools/` },
      { title: "Nexus AI Free SEO Toolkit", href: `${BASE}/tools/nexus-ai-free-seo-toolkit/` },
      { title: "Semrush Review", href: `${BASE}/reviews/semrush-review/` },
      { title: "Frase Review", href: `${BASE}/reviews/frase-review/` },
      { title: "Affiliate Program Comparison Tool", href: `${BASE}/tools/affiliate-program-comparison-tool/` },
    ],
  },
];

const PathwayCards = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Choose Your Path</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              Where are you on your affiliate marketing journey?
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-pretty">
              Select your stage — each path reveals a curated 5-post learning track.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pathways.map((p, i) => (
            <ScrollReveal key={p.label} delay={i * 80}>
              <div
                className={`group h-full rounded-xl border border-border bg-card transition-all duration-300 ${p.borderHover} hover:shadow-lg hover:shadow-primary/5`}
              >
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="w-full text-left p-6 active:scale-[0.98] transition-transform duration-150"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${p.color} flex items-center justify-center mb-5`}>
                    <p.icon className={`w-5 h-5 ${p.iconColor}`} />
                  </div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">{p.label}</span>
                  <h3 className="text-lg font-bold mt-1 mb-1">{p.tagline}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty mb-3">{p.description}</p>
                  <div className="flex items-center gap-1 text-sm font-medium text-primary">
                    {expanded === i ? "Hide" : "Show"} learning path
                    {expanded === i ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {expanded === i && (
                  <div className="px-6 pb-6 space-y-2 border-t border-border pt-4 animate-reveal-up" style={{ animationDuration: "0.3s" }}>
                    {p.guides.map((g, gi) => (
                      <a
                        key={g.href}
                        href={g.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-2.5 py-2 text-sm hover:text-primary transition-colors duration-150 group/link"
                      >
                        <span className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold text-muted-foreground">
                          {gi + 1}
                        </span>
                        <span className="flex-1 leading-snug">{g.title}</span>
                        <ArrowUpRight className="w-3 h-3 text-muted-foreground opacity-0 group-hover/link:opacity-100 flex-shrink-0 mt-1 transition-opacity duration-150" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathwayCards;
