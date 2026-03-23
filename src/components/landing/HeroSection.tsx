import { useState, useMemo } from "react";
import heroImage from "@/assets/hero-network.jpg";
import ScrollReveal from "./ScrollReveal";
import { Search, ArrowRight, Sparkles } from "lucide-react";

const BASE = "https://affiliatemarketingforsuccess.com";

const allGuides = [
  { title: "Beginner's Guide to Affiliate Marketing", href: `${BASE}/affiliate-marketing/beginners-guide/` },
  { title: "AI Affiliate Marketing in 2026", href: `${BASE}/affiliate-marketing/ai-affiliate-marketing-2026/` },
  { title: "Best Affiliate Programs for Beginners", href: `${BASE}/affiliate-marketing/best-affiliate-programs-for-beginners-with-high-commission/` },
  { title: "Programmatic SEO for Affiliate Sites", href: `${BASE}/seo/programmatic-seo/` },
  { title: "Learn Prompt Engineering", href: `${BASE}/ai/learn-prompt-engineering/` },
  { title: "Affiliate Marketing Strategies", href: `${BASE}/affiliate-marketing/affiliate-marketing-strategies/` },
  { title: "Best Affiliate Marketing Niches 2025", href: `${BASE}/affiliate-marketing/best-affiliate-marketing-niches-2025/` },
  { title: "Blog Monetization Strategies", href: `${BASE}/blogging/blog-monetization-strategies/` },
  { title: "On-Page SEO Techniques", href: `${BASE}/seo/on-page-seo-techniques/` },
  { title: "Affiliate Marketing Tools", href: `${BASE}/affiliate-marketing/affiliate-marketing-tools/` },
  { title: "Build an Effective SEO Strategy", href: `${BASE}/seo/build-an-effective-seo-strategy/` },
  { title: "WordPress Blogging Tips", href: `${BASE}/blogging/wordpress-blogging-tips/` },
  { title: "High Ticket Affiliate Marketing", href: `${BASE}/affiliate-marketing/high-ticket-affiliate-marketing/` },
  { title: "AI Affiliate Funnels", href: `${BASE}/affiliate-marketing/ai-affiliate-funnels/` },
  { title: "How to Make Money with Affiliate Marketing", href: `${BASE}/affiliate-marketing/how-to-make-money-with-affiliate-marketing/` },
  { title: "ChatGPT Prompts for Marketing", href: `${BASE}/chatgpt-prompts/chatgpt-prompts-for-marketing/` },
  { title: "Semrush Review", href: `${BASE}/reviews/semrush-review/` },
  { title: "Email Marketing Strategies", href: `${BASE}/email-marketing/effective-email-marketing-strategies/` },
  { title: "Keyword Research Guide", href: `${BASE}/seo/keywords-research/` },
  { title: "Content Strategy Guide", href: `${BASE}/blogging/winning-content-strategy/` },
];

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const results = useMemo(() => {
    if (query.length < 2) return [];
    const q = query.toLowerCase();
    return allGuides.filter((g) => g.title.toLowerCase().includes(q)).slice(0, 6);
  }, [query]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="w-full h-full object-cover opacity-20" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </div>

      <div className="container relative z-10 py-28">
        <div className="max-w-3xl">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-8">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-sm font-semibold text-primary tracking-wide">KNOWLEDGE HUB</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95] text-balance mb-6">
              Master Affiliate Marketing with AI-Powered Strategies
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed text-pretty mb-10">
              190+ expert guides on affiliate marketing, AI tools, SEO, blogging, and monetization — your complete success blueprint for 2026.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <div className="relative max-w-lg mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="What do you want to learn?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setTimeout(() => setFocused(false), 200)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-card/80 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200"
                />
              </div>
              {focused && results.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-border bg-card shadow-2xl shadow-background/80 overflow-hidden z-50">
                  {results.map((r) => (
                    <a
                      key={r.href}
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-surface-hover transition-colors duration-150"
                    >
                      <Search className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                      <span className="text-foreground">{r.title}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex flex-wrap gap-4">
              <a
                href={`${BASE}/affiliate-marketing/beginners-guide/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-base transition-all duration-200 hover:brightness-110 active:scale-[0.97] shadow-lg shadow-primary/20"
              >
                Start Here — Beginner's Guide
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#quiz"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border bg-secondary text-secondary-foreground font-medium text-base transition-all duration-200 hover:bg-surface-hover active:scale-[0.97]"
              >
                Take the Quiz →
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={380}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-10 sm:mt-14">
              {[
                { num: "190+", label: "Expert Guides" },
                { num: "8", label: "Free Tools" },
                { num: "2026", label: "Updated" },
                { num: "7", label: "Topic Clusters" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl sm:text-2xl font-bold tabular-nums text-foreground">{stat.num}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
