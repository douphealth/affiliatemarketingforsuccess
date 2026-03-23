import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { ArrowUpRight, Clock, Flame, TrendingUp } from "lucide-react";
import carouselBg from "@/assets/trending-carousel-bg.jpg";
import catAi from "@/assets/cat-ai.jpg";
import catSeo from "@/assets/cat-seo.jpg";
import catFunnels from "@/assets/cat-funnels.jpg";
import catBlogging from "@/assets/cat-blogging.jpg";
import catStrategy from "@/assets/cat-strategy.jpg";
import catVideo from "@/assets/cat-video.jpg";
import catNiches from "@/assets/cat-niches.jpg";

const BASE = "https://affiliatemarketingforsuccess.com";

const categoryImages: Record<string, string> = {
  AI: catAi,
  SEO: catSeo,
  Funnels: catFunnels,
  Blogging: catBlogging,
  Strategy: catStrategy,
  Video: catVideo,
  Niches: catNiches,
};

const trending = [
  { title: "AI Affiliate Marketing 2026", href: `${BASE}/affiliate-marketing/ai-affiliate-marketing-2026/`, date: "Mar 22, 2026", category: "AI", readTime: "20 min" },
  { title: "Predictive AI Affiliate Funnels", href: `${BASE}/affiliate-marketing/predictive-ai-affiliate-funnels/`, date: "Mar 21, 2026", category: "Funnels", readTime: "18 min" },
  { title: "Analyze Blog User Behavior Metrics", href: `${BASE}/blogging/how-to-analyze-blog-user-behavior-metrics/`, date: "Mar 21, 2026", category: "Blogging", readTime: "14 min" },
  { title: "Increase Domain Authority Quickly", href: `${BASE}/seo/increase-domain-authority-quickly/`, date: "Mar 21, 2026", category: "SEO", readTime: "12 min" },
  { title: "Benefits of Semantic Clustering", href: `${BASE}/ai/benefits-of-semantic-clustering/`, date: "Mar 21, 2026", category: "AI", readTime: "16 min" },
  { title: "Claude AI for Affiliate Marketers", href: `${BASE}/ai/claude-ai-for-affiliate-marketers/`, date: "Mar 20, 2026", category: "AI", readTime: "22 min" },
  { title: "Zero-Click Affiliate Marketing", href: `${BASE}/affiliate-marketing/zero-click-affiliate-marketing/`, date: "Mar 20, 2026", category: "Strategy", readTime: "15 min" },
  { title: "Short-Form Video Content Supremacy", href: `${BASE}/affiliate-marketing/short-form-video-content-supremacy/`, date: "Mar 19, 2026", category: "Video", readTime: "17 min" },
  { title: "Best Affiliate Marketing Niches 2025", href: `${BASE}/affiliate-marketing/best-affiliate-marketing-niches-2025/`, date: "Mar 19, 2026", category: "Niches", readTime: "14 min" },
  { title: "Learn Prompt Engineering", href: `${BASE}/ai/learn-prompt-engineering/`, date: "Mar 18, 2026", category: "AI", readTime: "22 min" },
  { title: "Build an Effective SEO Strategy", href: `${BASE}/seo/build-an-effective-seo-strategy/`, date: "Mar 18, 2026", category: "SEO", readTime: "19 min" },
  { title: "High Ticket Affiliate Marketing", href: `${BASE}/affiliate-marketing/high-ticket-affiliate-marketing/`, date: "Mar 17, 2026", category: "Strategy", readTime: "16 min" },
];

const TrendingCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animRef = useRef<number>();
  const speedRef = useRef(0.6);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const tick = () => {
      if (!isPaused && el) {
        el.scrollLeft += speedRef.current;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isPaused]);

  const items = [...trending, ...trending];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={carouselBg} alt="" className="w-full h-full object-cover opacity-20" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="container relative z-10">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-4">
                <Flame className="w-3.5 h-3.5 text-primary" />
                <span className="text-sm font-semibold text-primary tracking-wide">LIVE FEED</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
                Trending right now
              </h2>
              <p className="text-muted-foreground mt-2 max-w-md text-pretty">
                Freshly updated content — constantly refreshed with the latest strategies.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="tabular-nums">{trending.length} articles updated this week</span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-5 overflow-x-hidden px-6 py-2 cursor-default"
          style={{ scrollBehavior: "auto" }}
        >
          {items.map((article, i) => {
            const img = categoryImages[article.category] || catAi;
            return (
              <a
                key={`${article.href}-${i}`}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-shrink-0 w-[280px] sm:w-[340px] rounded-2xl border border-border bg-card/80 backdrop-blur-sm hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 active:scale-[0.97] overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Article thumbnail */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={img}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-primary/90 text-primary-foreground shadow-lg">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="text-[11px] text-white/80 tabular-nums bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">{article.date}</span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold leading-snug group-hover:text-primary transition-colors duration-300 line-clamp-2 mb-3">
                    {article.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Read
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrendingCarousel;
