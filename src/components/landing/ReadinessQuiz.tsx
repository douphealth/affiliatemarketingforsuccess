import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import { ClipboardCheck, ArrowRight, ArrowUpRight, RotateCcw, AlertTriangle, Trophy, TrendingUp, CheckCircle2 } from "lucide-react";
import readinessBg from "@/assets/readiness-gauge-bg.jpg";

const BASE = "https://affiliatemarketingforsuccess.com";

interface Question {
  text: string;
  emoji: string;
  category: string;
  options: { label: string; score: number; detail: string }[];
}

const questions: Question[] = [
  {
    text: "Do you have a niche selected for your affiliate business?",
    emoji: "🎯",
    category: "Foundation",
    options: [
      { label: "No idea where to start", score: 0, detail: "We'll help you choose the perfect niche" },
      { label: "I have a few ideas but haven't decided", score: 1, detail: "You're on the right track — validation is key" },
      { label: "Yes, I've researched and committed to one", score: 2, detail: "Great foundation — you're ahead of most" },
    ],
  },
  {
    text: "Do you have a website or blog set up?",
    emoji: "🌐",
    category: "Infrastructure",
    options: [
      { label: "Not yet", score: 0, detail: "You can have one live this weekend" },
      { label: "I've started but it's not live", score: 1, detail: "Almost there — let's get you launched" },
      { label: "Yes, it's live with content", score: 2, detail: "You have the foundation built" },
    ],
  },
  {
    text: "How comfortable are you with SEO basics?",
    emoji: "🔍",
    category: "Traffic Skills",
    options: [
      { label: "I don't know what SEO is", score: 0, detail: "SEO is your #1 free traffic source" },
      { label: "I understand the basics", score: 1, detail: "Time to move from theory to practice" },
      { label: "I actively optimize for search", score: 2, detail: "Excellent — this is a massive advantage" },
    ],
  },
  {
    text: "Have you joined any affiliate programs?",
    emoji: "🤝",
    category: "Monetization",
    options: [
      { label: "No, not yet", score: 0, detail: "The right program makes all the difference" },
      { label: "I've signed up for one or two", score: 1, detail: "Good start — diversification is next" },
      { label: "Yes, I'm active in multiple programs", score: 2, detail: "You know the ecosystem well" },
    ],
  },
  {
    text: "Are you using any AI tools in your workflow?",
    emoji: "🤖",
    category: "AI Readiness",
    options: [
      { label: "I haven't tried any", score: 0, detail: "AI can 10x your productivity starting today" },
      { label: "I use ChatGPT occasionally", score: 1, detail: "Time to go deeper — prompt engineering is key" },
      { label: "AI is integrated into my daily workflow", score: 2, detail: "You're in the top 5% of marketers" },
    ],
  },
  {
    text: "Do you have an email marketing strategy?",
    emoji: "✉️",
    category: "Email",
    options: [
      { label: "No email list yet", score: 0, detail: "Email converts 3-5x better than social media" },
      { label: "I have a list but don't email regularly", score: 1, detail: "Consistency is the secret to email success" },
      { label: "I send regular campaigns with automation", score: 2, detail: "You're maximizing your audience value" },
    ],
  },
  {
    text: "How do you currently create content?",
    emoji: "✍️",
    category: "Content",
    options: [
      { label: "I haven't started creating content yet", score: 0, detail: "Content is the engine of affiliate income" },
      { label: "I write posts manually, 1-2 per week", score: 1, detail: "Good rhythm — AI tools can help you scale" },
      { label: "I use AI + manual editing for consistent output", score: 2, detail: "Smart workflow — you're production-ready" },
    ],
  },
];

type Tier = "starter" | "building" | "ready";

interface TierData {
  icon: typeof AlertTriangle;
  color: string;
  barColor: string;
  title: string;
  desc: string;
  strengths: string[];
  resources: { title: string; href: string; why: string }[];
}

const tiers: Record<Tier, TierData> = {
  starter: {
    icon: AlertTriangle,
    color: "text-amber-500",
    barColor: "from-amber-500 to-orange-500",
    title: "Foundation Phase",
    desc: "You have incredible potential! Focus on the fundamentals first — niche selection, setting up your website, and understanding how affiliate marketing works.",
    strengths: ["Curiosity and willingness to learn", "The AI tools available today make starting easier than ever"],
    resources: [
      { title: "Beginner's Guide to Affiliate Marketing", href: `${BASE}/affiliate-marketing/beginners-guide/`, why: "Your complete starting point" },
      { title: "How to Choose Your Niche", href: `${BASE}/affiliate-marketing/how-to-choose-your-niche/`, why: "Pick a profitable niche with confidence" },
      { title: "The Costs to Start Affiliate Marketing", href: `${BASE}/affiliate-marketing/the-costs-to-start-affiliate-marketing/`, why: "Plan your budget correctly" },
      { title: "10 Simple Steps to Build Your Website", href: `${BASE}/affiliate-marketing/10-simple-steps-to-build-your-affiliate-marketing-website/`, why: "Get live this weekend" },
      { title: "Launch Affiliate Business with AI Tools", href: `${BASE}/affiliate-marketing/launch-affiliate-business-with-ai-tools/`, why: "Fast-track with AI assistance" },
    ],
  },
  building: {
    icon: TrendingUp,
    color: "text-primary",
    barColor: "from-primary to-amber-500",
    title: "Growth Phase",
    desc: "You've got the basics down — nice work! Now it's time to optimize your strategy, supercharge your SEO, and start scaling your traffic and commissions.",
    strengths: ["Foundational knowledge in place", "Ready to implement advanced strategies"],
    resources: [
      { title: "Affiliate Marketing Strategies", href: `${BASE}/affiliate-marketing/affiliate-marketing-strategies/`, why: "Level up your strategy" },
      { title: "Build an Effective SEO Strategy", href: `${BASE}/seo/build-an-effective-seo-strategy/`, why: "Drive organic traffic systematically" },
      { title: "AI Affiliate Marketing 2026", href: `${BASE}/affiliate-marketing/ai-affiliate-marketing-2026/`, why: "Integrate AI into your workflow" },
      { title: "Blog Monetization Strategies", href: `${BASE}/blogging/blog-monetization-strategies/`, why: "Diversify income streams" },
      { title: "Best Affiliate Programs for Beginners", href: `${BASE}/affiliate-marketing/best-affiliate-programs-for-beginners-with-high-commission/`, why: "Upgrade to higher-paying programs" },
    ],
  },
  ready: {
    icon: Trophy,
    color: "text-emerald-500",
    barColor: "from-emerald-500 to-teal-500",
    title: "Scale Phase",
    desc: "You're a powerhouse! Focus on advanced strategies, AI automation, and maximizing ROI. These resources will help you dominate your market.",
    strengths: ["Strong foundation across all key areas", "Ready for enterprise-level optimization"],
    resources: [
      { title: "High Ticket Affiliate Marketing", href: `${BASE}/affiliate-marketing/high-ticket-affiliate-marketing/`, why: "Earn $500-2,000+ per sale" },
      { title: "Predictive AI Affiliate Funnels", href: `${BASE}/affiliate-marketing/predictive-ai-affiliate-funnels/`, why: "AI-predicted conversion optimization" },
      { title: "Zero-Click Affiliate Marketing", href: `${BASE}/affiliate-marketing/zero-click-affiliate-marketing/`, why: "Next-gen affiliate strategies" },
      { title: "Programmatic SEO", href: `${BASE}/seo/programmatic-seo/`, why: "Scale to thousands of pages" },
      { title: "Competitive Gap Analysis — US Market", href: `${BASE}/affiliate-marketing/competitive-gap-analysis-us-market/`, why: "Data-driven competitive edge" },
    ],
  },
};

const ReadinessQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [scoreAnimated, setScoreAnimated] = useState(0);

  const handleAnswer = (score: number) => {
    setAnimating(true);
    const next = [...answers, score];
    setAnswers(next);
    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent(current + 1);
      } else {
        setDone(true);
      }
      setAnimating(false);
    }, 300);
  };

  const total = answers.reduce((a, b) => a + b, 0);
  const maxScore = questions.length * 2;
  const pct = Math.round((total / maxScore) * 100);
  const tier: Tier = pct < 35 ? "starter" : pct < 70 ? "building" : "ready";
  const result = tiers[tier];

  useEffect(() => {
    if (done) {
      setScoreAnimated(0);
      const target = pct;
      const duration = 1200;
      const steps = 30;
      const increment = target / steps;
      let cur = 0;
      const interval = setInterval(() => {
        cur += increment;
        if (cur >= target) {
          setScoreAnimated(target);
          clearInterval(interval);
        } else {
          setScoreAnimated(Math.round(cur));
        }
      }, duration / steps);
      return () => clearInterval(interval);
    }
  }, [done, pct]);

  const reset = () => {
    setCurrent(0);
    setAnswers([]);
    setDone(false);
    setScoreAnimated(0);
  };

  // Category scores for breakdown
  const categoryScores = done ? questions.map((q, i) => ({
    category: q.category,
    score: answers[i] || 0,
    max: 2,
  })) : [];

  return (
    <section id="readiness-quiz" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={readinessBg} alt="" className="w-full h-full object-cover opacity-[0.12]" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="container relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/10 mb-5 animate-pulse-glow">
                <ClipboardCheck className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-primary tracking-wider">READINESS SCORE</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance leading-[1.1]">
                How ready are you to
                <span className="block text-primary mt-1">succeed in affiliate marketing?</span>
              </h2>
              <p className="text-muted-foreground mt-4 text-lg text-pretty max-w-xl mx-auto">
                Answer {questions.length} quick questions. Get your readiness score, skill breakdown, and a personalized action plan.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card/90 backdrop-blur-sm shadow-2xl shadow-primary/5 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/8 rounded-full blur-3xl pointer-events-none" />

              {!done ? (
                <div className="p-8 md:p-10">
                  {/* Progress */}
                  <div className="flex items-center gap-1.5 mb-2">
                    {questions.map((_, i) => (
                      <div key={i} className="flex-1 relative">
                        <div className={`h-2 rounded-full transition-all duration-500 ${
                          i < current ? "bg-primary" : i === current ? "bg-primary/50" : "bg-secondary"
                        }`} />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mb-6 tabular-nums">{current + 1} of {questions.length}</p>

                  <div className={`transition-all duration-300 ${animating ? "opacity-0 translate-x-8" : "opacity-100 translate-x-0"}`}>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-3xl">{questions[current].emoji}</span>
                      <div>
                        <p className="text-[10px] font-bold text-primary/60 tracking-widest uppercase">{questions[current].category}</p>
                        <h3 className="text-xl font-bold">{questions[current].text}</h3>
                      </div>
                    </div>

                    <div className="space-y-3 mt-6">
                      {questions[current].options.map((opt, oi) => (
                        <button
                          key={opt.label}
                          onClick={() => handleAnswer(opt.score)}
                          className="w-full text-left p-5 rounded-2xl border border-border hover:border-primary/50 bg-secondary/30 hover:bg-primary/10 transition-all duration-300 active:scale-[0.97] group"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full border-2 border-border group-hover:border-primary/50 flex items-center justify-center transition-all flex-shrink-0">
                              <div className="w-3 h-3 rounded-full bg-transparent group-hover:bg-primary transition-all" />
                            </div>
                            <div>
                              <span className="text-sm font-semibold group-hover:text-primary transition-colors block">{opt.label}</span>
                              <span className="text-xs text-muted-foreground mt-0.5 block">{opt.detail}</span>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  {/* Score hero */}
                  <div className="p-5 sm:p-8 md:p-10 text-center border-b border-border bg-gradient-to-br from-secondary/30 to-transparent">
                    <div className="relative inline-block mb-4">
                      <svg width="130" height="130" viewBox="0 0 160 160" className="drop-shadow-2xl sm:w-[160px] sm:h-[160px]">
                        <circle cx="80" cy="80" r="70" fill="none" stroke="hsl(var(--secondary))" strokeWidth="8" />
                        <circle
                          cx="80" cy="80" r="70"
                          fill="none"
                          stroke={pct < 35 ? "hsl(38, 92%, 58%)" : pct < 70 ? "hsl(38, 92%, 58%)" : "hsl(160, 60%, 45%)"}
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 70}`}
                          strokeDashoffset={`${2 * Math.PI * 70 * (1 - scoreAnimated / 100)}`}
                          transform="rotate(-90 80 80)"
                          className="transition-all duration-1000 ease-out"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-4xl sm:text-5xl font-black tabular-nums">{scoreAnimated}</span>
                        <span className="text-sm font-bold text-muted-foreground">/ 100</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 mb-2">
                      <result.icon className={`w-5 h-5 ${result.color}`} />
                      <h3 className="text-xl font-extrabold">{result.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">{result.desc}</p>

                    <button onClick={reset} className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors active:scale-[0.95]">
                      <RotateCcw className="w-3.5 h-3.5" /> Retake Quiz
                    </button>
                  </div>

                  {/* Skill breakdown */}
                  <div className="p-8 md:p-10 border-b border-border">
                    <p className="text-sm font-bold mb-4">📊 Your skill breakdown:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {categoryScores.map((cs) => (
                        <div key={cs.category} className="p-3 rounded-xl bg-secondary/30 border border-border text-center">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            {Array.from({ length: cs.max }).map((_, i) => (
                              <div key={i} className={`w-3 h-3 rounded-full ${i < cs.score ? "bg-primary" : "bg-secondary"}`} />
                            ))}
                          </div>
                          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">{cs.category}</p>
                        </div>
                      ))}
                    </div>

                    {result.strengths.length > 0 && (
                      <div className="mt-4">
                        <p className="text-xs font-semibold text-muted-foreground mb-2">Your strengths:</p>
                        {result.strengths.map((s) => (
                          <div key={s} className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                            {s}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Resources */}
                  <div className="p-8 md:p-10">
                    <p className="text-sm font-bold mb-4 flex items-center gap-2">
                      <span>📚</span> Your recommended action plan:
                    </p>
                    <div className="space-y-3">
                      {result.resources.map((r, i) => (
                        <a
                          key={r.href}
                          href={r.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-4 p-4 rounded-2xl border border-border hover:border-primary/50 bg-secondary/20 hover:bg-primary/10 transition-all duration-300 active:scale-[0.97] group"
                        >
                          <span className={`w-9 h-9 rounded-xl bg-gradient-to-br ${result.barColor} flex items-center justify-center flex-shrink-0 text-xs font-black text-white shadow-md`}>
                            {i + 1}
                          </span>
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-semibold group-hover:text-primary transition-colors block">{r.title}</span>
                            <span className="text-xs text-muted-foreground mt-0.5 block">{r.why}</span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0 transition-all group-hover:translate-x-1 mt-1" />
                        </a>
                      ))}
                    </div>
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

export default ReadinessQuiz;
