import ScrollReveal from "./ScrollReveal";
import { AlertTriangle, ArrowUpRight } from "lucide-react";

const BASE = "https://affiliatemarketingforsuccess.com";

const mistakes = [
  { title: "Affiliate Marketing Mistakes", href: `${BASE}/affiliate-marketing/affiliate-marketing-mistakes/` },
  { title: "Why Affiliate Marketers Fail", href: `${BASE}/affiliate-marketing/why-affiliate-marketers-fail/` },
  { title: "Niche Selection Mistakes", href: `${BASE}/affiliate-marketing/affiliate-niche-selection-mistakes/` },
  { title: "Why Your SEO Strategy Is Failing", href: `${BASE}/seo/why-your-current-seo-strategy-is-failing/` },
  { title: "Why Do Blogs Fail?", href: `${BASE}/blogging/why-do-blogs-fail/` },
  { title: "Why Is Affiliate Marketing So Hard?", href: `${BASE}/affiliate-marketing/why-is-affiliate-marketing-so-hard/` },
  { title: "Overcoming Blog Stagnation", href: `${BASE}/blogging/overcoming-blog-stagnation/` },
  { title: "The Imposter Syndrome", href: `${BASE}/blogging/the-imposter-syndrome/` },
];

const MistakesSection = () => (
  <section className="py-24">
    <div className="container">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-destructive/30 bg-destructive/10 mb-4">
              <AlertTriangle className="w-3.5 h-3.5 text-destructive" />
              <span className="text-sm font-semibold text-destructive tracking-wide">AVOID THESE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              Costly mistakes to avoid
            </h2>
            <p className="text-muted-foreground mt-3 text-pretty">
              Learn from others' failures. These guides save you months of wasted effort.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {mistakes.map((m, i) => (
              <ScrollReveal key={m.href} delay={i * 50}>
                <a
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-destructive/30 hover:bg-surface-hover transition-all duration-200 active:scale-[0.98] group"
                >
                  <span className="text-sm font-medium flex-1 group-hover:text-destructive transition-colors">{m.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-destructive flex-shrink-0 transition-colors" />
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default MistakesSection;
