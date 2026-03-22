import ScrollReveal from "./ScrollReveal";
import { Rocket, TrendingUp, DollarSign, Bot } from "lucide-react";

const pathways = [
  {
    icon: Rocket,
    label: "Start",
    title: "Launch with less confusion",
    description: "Niche selection, site setup, and your first affiliate programs — all in one path.",
    href: "https://affiliatemarketingforsuccess.com/how-to-start/",
    color: "from-emerald-500/20 to-emerald-600/5",
    iconColor: "text-emerald-400",
  },
  {
    icon: TrendingUp,
    label: "Grow",
    title: "Build traffic with SEO & AI",
    description: "Ranking systems, content workflows, and search execution that actually moves traffic.",
    href: "https://affiliatemarketingforsuccess.com/seo/",
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
  },
  {
    icon: DollarSign,
    label: "Monetize",
    title: "Turn content into revenue",
    description: "Review pages, comparison content, affiliate funnels, and commercial strategy.",
    href: "https://affiliatemarketingforsuccess.com/affiliate-marketing/",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
  },
  {
    icon: Bot,
    label: "AI",
    title: "Modern workflows & automation",
    description: "AI-assisted content, prompts, automation tools, and smarter affiliate systems.",
    href: "https://affiliatemarketingforsuccess.com/ai/",
    color: "from-violet-500/20 to-violet-600/5",
    iconColor: "text-violet-400",
  },
];

const PathwayCards = () => {
  return (
    <section className="py-24">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Choose Your Path</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              Start where you actually are
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-pretty">
              Four clear pathways. Pick the one that matches your stage — every path leads to curated, practical content.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pathways.map((p, i) => (
            <ScrollReveal key={p.label} delay={i * 80}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 active:scale-[0.98]"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${p.color} flex items-center justify-center mb-5`}>
                  <p.icon className={`w-5 h-5 ${p.iconColor}`} />
                </div>
                <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">{p.label}</span>
                <h3 className="text-lg font-bold mt-1 mb-2 group-hover:text-primary transition-colors duration-200">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{p.description}</p>
                <div className="mt-5 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
                  Explore path
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathwayCards;
