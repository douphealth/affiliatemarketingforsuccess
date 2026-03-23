import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import { Target, ArrowRight, ArrowUpRight, RotateCcw, Sparkles, Rocket, Brain, BarChart3, Mail, ChevronRight } from "lucide-react";
import quizBg from "@/assets/quiz-pathway-bg.jpg";

const BASE = "https://affiliatemarketingforsuccess.com";

type Level = "beginner" | "intermediate" | "advanced";
type Goal = "earn" | "scale" | "ai" | "seo" | "email";

const levelMeta: Record<Level, { icon: typeof Rocket; color: string; label: string }> = {
  beginner: { icon: Rocket, color: "from-emerald-500 to-emerald-600", label: "Beginner" },
  intermediate: { icon: BarChart3, color: "from-primary to-amber-600", label: "Intermediate" },
  advanced: { icon: Brain, color: "from-accent to-blue-600", label: "Advanced" },
};

const goalMeta: Record<Goal, { icon: typeof Rocket; emoji: string }> = {
  earn: { icon: Sparkles, emoji: "💰" },
  scale: { icon: BarChart3, emoji: "📈" },
  ai: { icon: Brain, emoji: "🤖" },
  seo: { icon: Target, emoji: "🔍" },
  email: { icon: Mail, emoji: "✉️" },
};

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
  const [animating, setAnimating] = useState(false);
  const [visibleResults, setVisibleResults] = useState(0);

  const results = level && goal ? recommendationMap[`${level}-${goal}`] || [] : [];

  const handleLevel = (v: Level) => {
    setAnimating(true);
    setLevel(v);
    setTimeout(() => { setStep(1); setAnimating(false); }, 300);
  };

  const handleGoal = (v: Goal) => {
    setAnimating(true);
    setGoal(v);
    setTimeout(() => { setStep(2); setAnimating(false); }, 300);
  };

  useEffect(() => {
    if (step === 2 && results.length > 0) {
      setVisibleResults(0);
      results.forEach((_, i) => {
        setTimeout(() => setVisibleResults(prev => prev + 1), 150 * (i + 1));
      });
    }
  }, [step, results.length]);

  const reset = () => {
    setStep(0);
    setLevel(null);
    setGoal(null);
    setVisibleResults(0);
  };

  const progressPct = step === 0 ? 0 : step === 1 ? 50 : 100;

  return (
    <section id="quiz" className="py-28 relative overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <img src={quizBg} alt="" className="w-full h-full object-cover opacity-20" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      </div>

      <div className="container relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/10 mb-5 animate-pulse-glow">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-primary tracking-wider">PERSONALIZED BLUEPRINT</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance leading-[1.1]">
                Get your custom reading path
                <span className="block text-primary mt-1">in 30 seconds</span>
              </h2>
              <p className="text-muted-foreground mt-4 text-lg text-pretty max-w-xl mx-auto">
                Answer 2 quick questions and unlock a personalized 5-step learning journey tailored exactly to where you are.
              </p>
            </div>

            {/* Progress bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex items-center justify-between mb-2">
                {["Your Level", "Your Goal", "Your Path"].map((label, i) => (
                  <span key={label} className={`text-xs font-semibold transition-colors duration-300 ${i <= step ? "text-primary" : "text-muted-foreground/50"}`}>
                    {label}
                  </span>
                ))}
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-700 ease-out"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>

            {/* Quiz card */}
            <div className="rounded-3xl border border-border bg-card/90 backdrop-blur-sm p-8 md:p-10 shadow-2xl shadow-primary/5 relative overflow-hidden">
              {/* Decorative corner glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

              <div className={`transition-all duration-300 ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
                {step === 0 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                        <span className="text-lg">🎯</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-primary tracking-wider">STEP 1 OF 2</p>
                        <h3 className="text-xl font-bold">What's your experience level?</h3>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {([
                        { value: "beginner" as Level, label: "Complete beginner", desc: "Haven't started yet or just exploring", emoji: "🌱" },
                        { value: "intermediate" as Level, label: "Some experience", desc: "Have a site and earning some commissions", emoji: "📊" },
                        { value: "advanced" as Level, label: "Advanced marketer", desc: "Scaling an existing affiliate business", emoji: "🚀" },
                      ]).map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => handleLevel(opt.value)}
                          className="w-full text-left p-5 rounded-2xl border border-border hover:border-primary/50 bg-secondary/30 hover:bg-primary/10 transition-all duration-300 active:scale-[0.97] group"
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{opt.emoji}</span>
                            <div className="flex-1">
                              <span className="font-bold text-base group-hover:text-primary transition-colors">{opt.label}</span>
                              <span className="block text-sm text-muted-foreground mt-0.5">{opt.desc}</span>
                            </div>
                            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                        <span className="text-lg">🎯</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-primary tracking-wider">STEP 2 OF 2</p>
                        <h3 className="text-xl font-bold">What's your primary goal?</h3>
                      </div>
                    </div>

                    {/* Selected level badge */}
                    {level && (
                      <div className="mb-6 flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">Level:</span>
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${levelMeta[level].color} text-white`}>
                          {levelMeta[level].label}
                        </span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {([
                        { value: "earn" as Goal, label: "Start earning", desc: "Make my first commissions", emoji: "💰" },
                        { value: "scale" as Goal, label: "Scale my income", desc: "Grow traffic and revenue", emoji: "📈" },
                        { value: "ai" as Goal, label: "Master AI tools", desc: "Leverage AI for automation", emoji: "🤖" },
                        { value: "seo" as Goal, label: "Improve SEO", desc: "Rank higher organically", emoji: "🔍" },
                        { value: "email" as Goal, label: "Build email list", desc: "Create subscriber base", emoji: "✉️" },
                      ]).map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => handleGoal(opt.value)}
                          className="text-left p-5 rounded-2xl border border-border hover:border-primary/50 bg-secondary/30 hover:bg-primary/10 transition-all duration-300 active:scale-[0.97] group"
                        >
                          <span className="text-2xl block mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">{opt.emoji}</span>
                          <span className="font-bold text-sm block group-hover:text-primary transition-colors">{opt.label}</span>
                          <span className="text-xs text-muted-foreground mt-0.5 block">{opt.desc}</span>
                        </button>
                      ))}
                    </div>

                    <button onClick={() => { setStep(0); setLevel(null); }} className="mt-5 text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                      <RotateCcw className="w-3 h-3" /> Back
                    </button>
                  </div>
                )}

                {step === 2 && results.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                          <Sparkles className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-xl font-extrabold">Your Personalized Path</h3>
                          <p className="text-sm text-muted-foreground">5 guides in order — follow the path to success</p>
                        </div>
                      </div>
                      <button onClick={reset} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors active:scale-[0.95] px-3 py-1.5 rounded-lg hover:bg-secondary/50">
                        <RotateCcw className="w-3.5 h-3.5" /> Retake
                      </button>
                    </div>

                    {/* Level + Goal badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {level && (
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${levelMeta[level].color} text-white`}>
                          {levelMeta[level].label}
                        </span>
                      )}
                      {goal && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-secondary text-foreground">
                          {goalMeta[goal].emoji} {goal.charAt(0).toUpperCase() + goal.slice(1)}
                        </span>
                      )}
                    </div>

                    {/* Results with staggered animation */}
                    <div className="space-y-3">
                      {results.map((r, i) => (
                        <a
                          key={r.href}
                          href={r.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-4 p-5 rounded-2xl border border-border hover:border-primary/50 bg-secondary/20 hover:bg-primary/10 transition-all duration-500 active:scale-[0.97] group ${
                            i < visibleResults ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                          }`}
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
                          {/* Numbered circle with connecting line illusion */}
                          <div className="relative">
                            <span className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 group-hover:border-primary/60 flex items-center justify-center text-sm font-extrabold text-primary transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                              {i + 1}
                            </span>
                            {i < results.length - 1 && (
                              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-3 bg-border" />
                            )}
                          </div>
                          <span className="flex-1 text-sm font-semibold group-hover:text-primary transition-colors">{r.title}</span>
                          <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border border-primary/20 text-center">
                      <p className="text-sm text-muted-foreground mb-3">Ready to accelerate your journey?</p>
                      <a
                        href={`${BASE}/affiliate-marketing/ai-affiliate-marketing-2026/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 active:scale-[0.97]"
                      >
                        Read the Complete 2026 Guide
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default QuizModule;
