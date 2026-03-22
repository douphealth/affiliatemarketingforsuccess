import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { ArrowUpRight, Flame, Zap, Target, BookOpen, TrendingUp, Search, Mail, Star } from "lucide-react";

type Category = "all" | "affiliate" | "seo" | "ai" | "blogging" | "email";

interface Guide {
  title: string;
  excerpt: string;
  category: Category;
  categoryLabel: string;
  href: string;
  badge?: string;
  icon: typeof Flame;
}

const guides: Guide[] = [
  {
    title: "AI Affiliate Marketing in 2026: SEO, Content & Conversions",
    excerpt: "How AI fits into affiliate site growth — SEO, content workflows, buyer trust, and conversions without thin content.",
    category: "ai",
    categoryLabel: "AI",
    href: "https://affiliatemarketingforsuccess.com/affiliate-marketing/ai-affiliate-marketing-2026/",
    badge: "Editor's Pick",
    icon: Zap,
  },
  {
    title: "Programmatic SEO for Affiliate Sites",
    excerpt: "Scale pages without letting quality collapse. Practical systems for topic coverage and page architecture.",
    category: "seo",
    categoryLabel: "SEO",
    href: "https://affiliatemarketingforsuccess.com/seo/programmatic-seo/",
    badge: "Top Guide",
    icon: Search,
  },
  {
    title: "Best Affiliate Programs for Beginners (High Commission)",
    excerpt: "Beginner-friendly guide for choosing programs with better fit, real commission data, and commercial potential.",
    category: "affiliate",
    categoryLabel: "Affiliate",
    href: "https://affiliatemarketingforsuccess.com/affiliate-marketing/best-affiliate-programs-for-beginners-with-high-commission/",
    badge: "Most Read",
    icon: Star,
  },
  {
    title: "Best Affiliate Products to Promote in 2026",
    excerpt: "The vetted, evergreen list backed by real data — products that actually convert across niches.",
    category: "affiliate",
    categoryLabel: "Affiliate",
    href: "https://affiliatemarketingforsuccess.com/affiliate-marketing/best-affiliate-products-to-promote/",
    icon: Target,
  },
  {
    title: "WarriorPlus Affiliate Program: 50–100% Commissions",
    excerpt: "Earn 50–100% commissions on digital products instead of low Amazon margins. Over $1M monthly payouts.",
    category: "affiliate",
    categoryLabel: "Affiliate",
    href: "https://affiliatemarketingforsuccess.com/affiliate-marketing/warriorplus-affiliate-program-unlock-lucrative-opportunities/",
    icon: Flame,
  },
  {
    title: "AI Affiliate Funnels: Automate Your Income",
    excerpt: "Automate content, optimize traffic, and scale commissions with the right AI stack.",
    category: "ai",
    categoryLabel: "AI",
    href: "https://affiliatemarketingforsuccess.com/affiliate-marketing/ai-affiliate-funnels/",
    icon: Zap,
  },
  {
    title: "On-Page SEO Techniques That Actually Move the Needle",
    excerpt: "Intent, authority, and action — the decision framework for on-page SEO that works in 2026.",
    category: "seo",
    categoryLabel: "SEO",
    href: "https://affiliatemarketingforsuccess.com/seo/on-page-seo-techniques/",
    icon: TrendingUp,
  },
  {
    title: "ROI Profitability Benchmarks for Affiliate Niches",
    excerpt: "2026 ROI benchmarks — what constitutes a good ROI across industries and how to compare performance.",
    category: "affiliate",
    categoryLabel: "Affiliate",
    href: "https://affiliatemarketingforsuccess.com/affiliate-marketing/roi-profitability-benchmarks/",
    icon: Target,
  },
  {
    title: "Awesome ChatGPT Prompts for Marketers",
    excerpt: "73 proven prompts to boost creativity and productivity — ready-to-use templates for content creators.",
    category: "ai",
    categoryLabel: "AI",
    href: "https://affiliatemarketingforsuccess.com/chatgpt-prompts/awesome-chatgpt-prompts/",
    icon: BookOpen,
  },
  {
    title: "WordPress Blogging Tips That Actually Work",
    excerpt: "Essential tips to avoid common pitfalls. Create a blog that stands out and engages readers effectively.",
    category: "blogging",
    categoryLabel: "Blogging",
    href: "https://affiliatemarketingforsuccess.com/blogging/wordpress-blogging-tips/",
    icon: BookOpen,
  },
  {
    title: "Affiliate Marketing to Boost Your SEO in 2026",
    excerpt: "7 proven strategies that merge affiliate marketing with SEO for compounding growth.",
    category: "seo",
    categoryLabel: "SEO",
    href: "https://affiliatemarketingforsuccess.com/affiliate-marketing/affiliate-marketing-to-boost-your-seo/",
    icon: TrendingUp,
  },
  {
    title: "AI Automation 2026: Transform Industries",
    excerpt: "Complete guide to AI workflows and automation that transform how affiliate businesses operate.",
    category: "ai",
    categoryLabel: "AI",
    href: "https://affiliatemarketingforsuccess.com/ai/auto-ai-transforming-industries-with-automation/",
    icon: Zap,
  },
];

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All Guides" },
  { key: "affiliate", label: "Affiliate" },
  { key: "seo", label: "SEO" },
  { key: "ai", label: "AI" },
  { key: "blogging", label: "Blogging" },
];

const FeaturedGuides = () => {
  const [active, setActive] = useState<Category>("all");
  const filtered = active === "all" ? guides : guides.filter((g) => g.category === active);

  return (
    <section id="guides" className="py-24 bg-card/50">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Content Library</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              Guides worth opening first
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 active:scale-[0.96] ${
                  active === cat.key
                    ? "category-pill-active"
                    : "bg-secondary text-secondary-foreground hover:bg-surface-hover"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((guide, i) => (
            <ScrollReveal key={guide.href} delay={i * 60} direction="scale">
              <a
                href={guide.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 active:scale-[0.98]"
              >
                {guide.badge && (
                  <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase bg-primary/15 text-primary">
                    {guide.badge}
                  </span>
                )}

                <div className="flex items-center gap-2 mb-4">
                  <guide.icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                    {guide.categoryLabel}
                  </span>
                </div>

                <h3 className="text-base font-bold leading-snug mb-2 group-hover:text-primary transition-colors duration-200 pr-8">
                  {guide.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed text-pretty flex-1">
                  {guide.excerpt}
                </p>

                <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-primary">
                  Read guide
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="text-center mt-12">
            <a
              href="https://affiliatemarketingforsuccess.com/blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-border bg-secondary text-secondary-foreground font-medium transition-all duration-200 hover:bg-surface-hover active:scale-[0.97]"
            >
              View all 200+ guides
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturedGuides;
