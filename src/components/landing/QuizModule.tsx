import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Target, ArrowRight, ArrowUpRight, RotateCcw } from "lucide-react";

const BASE = "https://affiliatemarketingforsuccess.com";

type Level = "beginner" | "intermediate" | "advanced";
type Goal = "earn" | "scale" | "ai" | "seo" | "email";

const recommendationMap: Record<string, { title: string; href: string }[]> = {
  "beginner-earn": [
    { title: "Beginner's Guide to Affiliate Marketing", href: `${BASE}/affiliate-marketing/beginners-guide/` },
    { title: "How to Make Money with Affiliate Marketing", href: `${BASE}/affiliate-marketing/how-to-make-money-with-affiliate-marketing/` },
    { title: "Best Affiliate Programs for Beginners", href: `${BASE}/affiliate-marketing/best-affiliate-programs-for-beginners-with-high-commission/` },
    { title: "The Costs to Start Affiliate Marketing", href: `${BASE}/affiliate-marketing/the-costs-to-start-affiliate-marketing/` },
    { title: "10 Simple Steps to Build Your Website", href: `${BASE}/affiliate-marketing/10-simple-steps-to-build-your-affiliate-marketing-website/` },
  ],
  "beginner-scale": [
    { title: "Beginner's Guide to Affiliate Marketing", href: `${BASE}/affiliate-marketing/beginners-guide/` },
    { title: "Affiliate Marketing Strategies", href: `${BASE}/affiliate-marketing/affiliate-marketing-strategies/` },
    { title: "Blog Monetization Strategies", href: `${BASE}/blogging/blog-monetization-strategies/` },
    { title: "How to Choose Your Niche", href: `${BASE}/affiliate-marketing/how-to-choose-your-niche/` },
    { title: "Build an Effective SEO Strategy", href: `${BASE}/seo/build-an-effective-seo-strategy/` },
  ],
  "beginner-ai": [
    { title: "Beginner's Guide to Affiliate Marketing", href: `${BASE}/affiliate-marketing/beginners-guide/` },
    { title: "AI Affiliate Marketing 2026", href: `${BASE}/affiliate-marketing/ai-affiliate-marketing-2026/` },
    { title: "Learn Prompt Engineering", href: `${BASE}/ai/learn-prompt-engineering/` },
    { title: "Awesome ChatGPT Prompts", href: `${BASE}/chatgpt-prompts/awesome-chatgpt-prompts/` },
    { title: "Launch Affiliate Business with AI Tools", href: `${BASE}/affiliate-marketing/launch-affiliate-business-with-ai-tools/` },
  ],
  "beginner-seo": [
    { title: "Beginner's Guide to Affiliate Marketing", href: `${BASE}/affiliate-marketing/beginners-guide/` },
    { title: "Build an Effective SEO Strategy", href: `${BASE}/seo/build-an-effective-seo-strategy/` },
    { title: "Keyword Research Guide", href: `${BASE}/seo/keywords-research/` },
    { title: "On-Page SEO Techniques", href: `${BASE}/seo/on-page-seo-techniques/` },
    { title: "SEO Writing: Complete Guide", href: `${BASE}/seo/seo-writing-complete-guide/` },
  ],
  "beginner-email": [
    { title: "Beginner's Guide to Affiliate Marketing", href: `${BASE}/affiliate-marketing/beginners-guide/` },
    { title: "Understanding Email Marketing", href: `${BASE}/email-marketing/understanding-email-marketing/` },
    { title: "Build Your Email List", href: `${BASE}/email-marketing/build-your-email-list/` },
    { title: "Email Marketing Benefits", href: `${BASE}/email-marketing/email-marketing-benefits/` },
    { title: "Craft Irresistible Email Newsletters", href: `${BASE}/email-marketing/craft-irresistible-email-newsletters/` },
  ],
  "intermediate-earn": [
    { title: "High Ticket Affiliate Marketing", href: `${BASE}/affiliate-marketing/high-ticket-affiliate-marketing/` },
    { title: "Best Affiliate Products to Promote", href: `${BASE}/affiliate-marketing/best-affiliate-products-to-promote/` },
    { title: "ROI Profitability Benchmarks", href: `${BASE}/affiliate-marketing/roi-profitability-benchmarks/` },
    { title: "Optimize Your Sales Funnel", href: `${BASE}/affiliate-marketing/optimize-your-sales-funnel/` },
    { title: "WarriorPlus Affiliate Program", href: `${BASE}/affiliate-marketing/warriorplus-affiliate-program-unlock-lucrative-opportunities/` },
  ],
  "intermediate-scale": [
    { title: "Affiliate Marketing Strategies", href: `${BASE}/affiliate-marketing/affiliate-marketing-strategies/` },
    { title: "Grow Your Affiliate Marketing Blog", href: `${BASE}/blogging/grow-your-affiliate-marketing-blog/` },
    { title: "Increase Domain Authority Quickly", href: `${BASE}/blogging/increase-domain-authority-quickly/` },
    { title: "Programmatic SEO", href: `${BASE}/seo/programmatic-seo/` },
    { title: "Link Building Strategies", href: `${BASE}/seo/link-building-strategies/` },
  ],
  "intermediate-ai": [
    { title: "AI Affiliate Funnels", href: `${BASE}/affiliate-marketing/ai-affiliate-funnels/` },
    { title: "AI Content Strategy", href: `${BASE}/ai/ai-content-strategy/` },
    { title: "Claude AI for Affiliate Marketers", href: `${BASE}/ai/claude-ai-for-affiliate-marketers/` },
    { title: "Prompt Engineering Secrets", href: `${BASE}/ai/prompt-engineering-secrets/` },
    { title: "Semantic Clustering Tools", href: `${BASE}/ai/semantic-clustering-tools/` },
  ],
  "intermediate-seo": [
    { title: "Programmatic SEO", href: `${BASE}/seo/programmatic-seo/` },
    { title: "Off-Page SEO Strategy", href: `${BASE}/seo/optimize-your-off-page-seo-strategy/` },
    { title: "Google Ranking Factors", href: `${BASE}/seo/google-ranking-factors/` },
    { title: "Website Architecture for Conversions", href: `${BASE}/seo/website-architecture-that-drives-conversions/` },
    { title: "Voice Search and SEO", href: `${BASE}/seo/voice-search-and-seo/` },
  ],
  "intermediate-email": [
    { title: "Effective Email Marketing Strategies", href: `${BASE}/email-marketing/effective-email-marketing-strategies/` },
    { title: "Proven Ways to Grow Your Email List", href: `${BASE}/email-marketing/proven-ways-to-grow-your-email-list/` },
    { title: "Craft Irresistible Email Newsletters", href: `${BASE}/email-marketing/craft-irresistible-email-newsletters/` },
    { title: "Lead Nurturing", href: `${BASE}/blogging/lead-nurturing/` },
    { title: "GetResponse Review 2025", href: `${BASE}/reviews/getresponse-review-2025/` },
  ],
  "advanced-earn": [
    { title: "Zero-Click Affiliate Marketing", href: `${BASE}/affiliate-marketing/zero-click-affiliate-marketing/` },
    { title: "Predictive AI Affiliate Funnels", href: `${BASE}/affiliate-marketing/predictive-ai-affiliate-funnels/` },
    { title: "Gap Analysis Guide", href: `${BASE}/affiliate-marketing/ultimate-guide-to-affiliate-gap-analysis/` },
    { title: "ROI Profitability Benchmarks", href: `${BASE}/affiliate-marketing/roi-profitability-benchmarks/` },
    { title: "High-Value Affiliate Keywords", href: `${BASE}/affiliate-marketing/high-value-affiliate-keywords/` },
  ],
  "advanced-scale": [
    { title: "Programmatic SEO", href: `${BASE}/seo/programmatic-seo/` },
    { title: "Competitive Gap Analysis — US Market", href: `${BASE}/affiliate-marketing/competitive-gap-analysis-us-market/` },
    { title: "Zero-Click Affiliate Marketing", href: `${BASE}/affiliate-marketing/zero-click-affiliate-marketing/` },
    { title: "AI Affiliate Funnels", href: `${BASE}/affiliate-marketing/ai-affiliate-funnels/` },
    { title: "Top 10 Affiliate Marketing Trends 2025", href: `${BASE}/affiliate-marketing/top-10-affiliate-marketing-trends-2025/` },
  ],
  "advanced-ai": [
    { title: "Predictive AI Affiliate Funnels", href: `${BASE}/affiliate-marketing/predictive-ai-affiliate-funnels/` },
    { title: "Generative AI for Affiliates", href: `${BASE}/affiliate-marketing/generative-ai-for-affiliates/` },
    { title: "Multimodal AI Models Guide", href: `${BASE}/ai/multimodal-ai-models-guide/` },
    { title: "Benefits of Semantic Clustering", href: `${BASE}/ai/benefits-of-semantic-clustering/` },
    { title: "Large Language Models Comparison 2025", href: `${BASE}/ai/large-language-models-comparison-2025/` },
  ],
  "advanced-seo": [
    { title: "Programmatic SEO", href: `${BASE}/seo/programmatic-seo/` },
    { title: "Voice Search and SEO", href: `${BASE}/seo/voice-search-and-seo/` },
    { title: "Website Architecture for Conversions", href: `${BASE}/seo/website-architecture-that-drives-conversions/` },
    { title: "AI-Powered Semantic Clustering", href: `${BASE}/ai/ai-powered-semantic-clustering/` },
    { title: "SEO Audit Guide", href: `${BASE}/seo/doing-an-seo-audit/` },
  ],
  "advanced-email": [
    { title: "Effective Email Marketing Strategies", href: `${BASE}/email-marketing/effective-email-marketing-strategies/` },
    { title: "Lead Nurturing", href: `${BASE}/blogging/lead-nurturing/` },
    { title: "Use New Methods to Capture Leads", href: `${BASE}/blogging/use-new-methods-to-capture-leads/` },
    { title: "Automate Your Blog with AI", href: `${BASE}/blogging/automate-your-blog-with-ai/` },
    { title: "AI Affiliate Funnels", href: `${BASE}/affiliate-marketing/ai-affiliate-funnels/` },
  ],
};

const QuizModule = () => {
  const [step, setStep] = useState(0);
  const [level, setLevel] = useState<Level | null>(null);
  const [goal, setGoal] = useState<Goal | null>(null);

  const results = level && goal ? recommendationMap[`${level}-${goal}`] || [] : [];

  const reset = () => {
    setStep(0);
    setLevel(null);
    setGoal(null);
  };

  return (
    <section id="quiz" className="py-24">
      <div className="container">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-4">
                <Target className="w-3.5 h-3.5 text-primary" />
                <span className="text-sm font-semibold text-primary tracking-wide">PERSONALIZED BLUEPRINT</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
                Get your custom reading path in 30 seconds
              </h2>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              {step === 0 && (
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-4">Question 1 of 2</p>
                  <h3 className="text-lg font-bold mb-6">What's your experience level?</h3>
                  <div className="space-y-3">
                    {([
                      { value: "beginner" as Level, label: "Complete beginner", desc: "Haven't started yet or just exploring" },
                      { value: "intermediate" as Level, label: "Some experience", desc: "Have a site and earning some commissions" },
                      { value: "advanced" as Level, label: "Advanced", desc: "Scaling an existing affiliate business" },
                    ]).map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => { setLevel(opt.value); setStep(1); }}
                        className="w-full text-left p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-surface-hover transition-all duration-200 active:scale-[0.98] group"
                      >
                        <span className="font-semibold text-sm group-hover:text-primary transition-colors">{opt.label}</span>
                        <span className="block text-xs text-muted-foreground mt-0.5">{opt.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-4">Question 2 of 2</p>
                  <h3 className="text-lg font-bold mb-6">What's your primary goal?</h3>
                  <div className="space-y-3">
                    {([
                      { value: "earn" as Goal, label: "Start earning", desc: "Make my first commissions" },
                      { value: "scale" as Goal, label: "Scale my income", desc: "Grow traffic and revenue" },
                      { value: "ai" as Goal, label: "Master AI tools", desc: "Leverage AI for automation" },
                      { value: "seo" as Goal, label: "Improve SEO", desc: "Rank higher and get more organic traffic" },
                      { value: "email" as Goal, label: "Build an email list", desc: "Create a subscriber base" },
                    ]).map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => { setGoal(opt.value); setStep(2); }}
                        className="w-full text-left p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-surface-hover transition-all duration-200 active:scale-[0.98] group"
                      >
                        <span className="font-semibold text-sm group-hover:text-primary transition-colors">{opt.label}</span>
                        <span className="block text-xs text-muted-foreground mt-0.5">{opt.desc}</span>
                      </button>
                    ))}
                  </div>
                  <button onClick={() => setStep(0)} className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors">← Back</button>
                </div>
              )}

              {step === 2 && results.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-bold">Your Personalized Reading Path</h3>
                      <p className="text-sm text-muted-foreground mt-1">5 guides tailored to your goals — read them in order.</p>
                    </div>
                    <button onClick={reset} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors active:scale-[0.95]">
                      <RotateCcw className="w-3.5 h-3.5" /> Retake
                    </button>
                  </div>
                  <div className="space-y-3">
                    {results.map((r, i) => (
                      <a
                        key={r.href}
                        href={r.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-surface-hover transition-all duration-200 active:scale-[0.98] group"
                      >
                        <span className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 text-sm font-bold text-primary">
                          {i + 1}
                        </span>
                        <span className="flex-1 text-sm font-medium group-hover:text-primary transition-colors">{r.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0 transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default QuizModule;
