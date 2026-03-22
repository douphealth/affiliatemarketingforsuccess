import ScrollReveal from "./ScrollReveal";
import { Trophy, ArrowUpRight, Clock, Star } from "lucide-react";

const BASE = "https://affiliatemarketingforsuccess.com";

const popular = [
  { title: "How to Make Money with Affiliate Marketing", href: `${BASE}/affiliate-marketing/how-to-make-money-with-affiliate-marketing/`, readTime: "18 min", tag: "Most Read" },
  { title: "Best Affiliate Marketing Niches 2025", href: `${BASE}/affiliate-marketing/best-affiliate-marketing-niches-2025/`, readTime: "14 min", tag: "Trending" },
  { title: "Learn Prompt Engineering", href: `${BASE}/ai/learn-prompt-engineering/`, readTime: "22 min", tag: "Top Rated" },
  { title: "Affiliate Marketing Tools (Complete List)", href: `${BASE}/affiliate-marketing/affiliate-marketing-tools/`, readTime: "16 min", tag: "Essential" },
  { title: "How to Make Money with Amazon Affiliates", href: `${BASE}/affiliate-marketing/how-to-make-money-with-amazon-affiliate-marketing/`, readTime: "15 min", tag: "Popular" },
  { title: "AI Affiliate Marketing 2026", href: `${BASE}/affiliate-marketing/ai-affiliate-marketing-2026/`, readTime: "20 min", tag: "Editor's Pick" },
];

const PopularGuides = () => (
  <section className="py-24">
    <div className="container">
      <ScrollReveal>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-4">
            <Trophy className="w-3.5 h-3.5 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wide">MOST POPULAR</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Guides readers come back to
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {popular.map((guide, i) => (
          <ScrollReveal key={guide.href} delay={i * 70} direction="scale">
            <a
              href={guide.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-full p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 active:scale-[0.98]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase bg-primary/15 text-primary">
                  {guide.tag}
                </span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {guide.readTime}
                </div>
              </div>
              <h3 className="text-base font-bold leading-snug group-hover:text-primary transition-colors duration-200 flex-1">
                {guide.title}
              </h3>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                Read guide
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default PopularGuides;
