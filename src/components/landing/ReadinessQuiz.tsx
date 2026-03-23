import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import { ClipboardCheck, ArrowRight, RotateCcw, AlertTriangle, Trophy, TrendingUp } from "lucide-react";
import readinessBg from "@/assets/readiness-gauge-bg.jpg";

const BASE = "https://affiliatemarketingforsuccess.com";

interface Question {
  text: string;
  emoji: string;
  options: { label: string; score: number }[];
}

const questions: Question[] = [
  {
    text: "Do you have a niche selected for your affiliate business?",
    emoji: "🎯",
    options: [
      { label: "No idea where to start", score: 0 },
      { label: "I have a few ideas but haven't decided", score: 1 },
      { label: "Yes, I've researched and committed to one", score: 2 },
    ],
  },
  {
    text: "Do you have a website or blog set up?",
    emoji: "🌐",
    options: [
      { label: "Not yet", score: 0 },
      { label: "I've started but it's not live", score: 1 },
      { label: "Yes, it's live with content", score: 2 },
    ],
  },
  {
    text: "How comfortable are you with SEO basics?",
    emoji: "🔍",
    options: [
      { label: "I don't know what SEO is", score: 0 },
      { label: "I understand the basics", score: 1 },
      { label: "I actively optimize for search", score: 2 },
    ],
  },
  {
    text: "Have you joined any affiliate programs?",
    emoji: "🤝",
    options: [
      { label: "No, not yet", score: 0 },
      { label: "I've signed up for one or two", score: 1 },
      { label: "Yes, I'm active in multiple programs", score: 2 },
    ],
  },
  {
    text: "Are you using any AI tools in your workflow?",
    emoji: "🤖",
    options: [
      { label: "I haven't tried any", score: 0 },
      { label: "I use ChatGPT occasionally", score: 1 },
      { label: "AI is integrated into my daily workflow", score: 2 },
    ],
  },
];

type Tier = "starter" | "building" | "ready";

const tiers: Record<Tier, { icon: typeof AlertTriangle; color: string; barColor: string; title: string; desc: string; resources: { title: string; href: string }[] }> = {
  starter: {
    icon: AlertTriangle,
    color: "text-amber-500",
    barColor: "from-amber-500 to-orange-500",
    title: "Foundation Phase",
    desc: "You have incredible potential! Focus on the fundamentals first — niche selection, setting up your website, and understanding how affiliate marketing works. The guides below will fast-track your journey.",
    resources: [
      { title: "Beginner's Guide to Affiliate Marketing", href: `${BASE}/affiliate-marketing/beginners-guide/` },
      { title: "How to Choose Your Niche", href: `${BASE}/affiliate-marketing/how-to-choose-your-niche/` },
      { title: "The Costs to Start Affiliate Marketing", href: `${BASE}/affiliate-marketing/the-costs-to-start-affiliate-marketing/` },
      { title: "10 Simple Steps to Build Your Website", href: `${BASE}/affiliate-marketing/10-simple-steps-to-build-your-affiliate-marketing-website/` },
    ],
  },
  building: {
    icon: TrendingUp,
    color: "text-primary",
    barColor: "from-primary to-amber-500",
    title: "Growth Phase",
    desc: "You've got the basics down — nice work! Now it's time to optimize your strategy, supercharge your SEO, and start scaling your traffic and commissions with these advanced resources.",
    resources: [
      { title: "Affiliate Marketing Strategies", href: `${BASE}/affiliate-marketing/affiliate-marketing-strategies/` },
      { title: "Build an Effective SEO Strategy", href: `${BASE}/seo/build-an-effective-seo-strategy/` },
      { title: "Best Affiliate Programs for Beginners", href: `${BASE}/affiliate-marketing/best-affiliate-programs-for-beginners-with-high-commission/` },
      { title: "AI Affiliate Marketing 2026", href: `${BASE}/affiliate-marketing/ai-affiliate-marketing-2026/` },
    ],
  },
  ready: {
    icon: Trophy,
    color: "text-emerald-500",
    barColor: "from-emerald-500 to-teal-500",
    title: "Scale Phase",
    desc: "You're a powerhouse! Focus on advanced strategies, AI automation, and maximizing ROI across multiple channels. These resources will help you dominate your market.",
    resources: [
      { title: "High Ticket Affiliate Marketing", href: `${BASE}/affiliate-marketing/high-ticket-affiliate-marketing/` },
      { title: "Predictive AI Affiliate Funnels", href: `${BASE}/affiliate-marketing/predictive-ai-affiliate-funnels/` },
      { title: "Zero-Click Affiliate Marketing", href: `${BASE}/affiliate-marketing/zero-click-affiliate-marketing/` },
      { title: "Programmatic SEO", href: `${BASE}/seo/programmatic-seo/` },
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

  // Animate score counter
  useEffect(() => {
    if (done) {
      setScoreAnimated(0);
      const target = pct;
      const duration = 1200;
      const steps = 30;
      const increment = target / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          setScoreAnimated(target);
          clearInterval(interval);
        } else {
          setScoreAnimated(Math.round(current));
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

  return (
    <section id="readiness-quiz" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={readinessBg} alt="" className="w-full h-full object-cover opacity-[0.12]" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="container relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            {/* Header */}
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
                Answer 5 quick questions. Get your readiness score and a personalized action plan.
              </p>
            </div>

            {/* Quiz card */}
            <div className="rounded-3xl border border-border bg-card/90 backdrop-blur-sm shadow-2xl shadow-primary/5 relative overflow-hidden">
              {/* Decorative */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/8 rounded-full blur-3xl pointer-events-none" />

              {!done ? (
                <div className="p-8 md:p-10">
                  {/* Visual progress with step indicators */}
                  <div className="flex items-center gap-1.5 mb-6">
                    {questions.map((_, i) => (
                      <div key={i} className="flex-1 relative">
                        <div className={`h-2 rounded-full transition-all duration-500 ${
                          i < current ? "bg-primary" : i === current ? "bg-primary/50" : "bg-secondary"
                        }`} />
                      </div>
                    ))}
                  </div>

                  <div className={`transition-all duration-300 ${animating ? "opacity-0 translate-x-8" : "opacity-100 translate-x-0"}`}>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">{questions[current].emoji}</span>
                      <div>
                        <p className="text-xs font-bold text-primary tracking-wider">
                          QUESTION {current + 1} OF {questions.length}
                        </p>
                        <h3 className="text-xl font-bold">{questions[current].text}</h3>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {questions[current].options.map((opt, oi) => (
                        <button
                          key={opt.label}
                          onClick={() => handleAnswer(opt.score)}
                          className="w-full text-left p-5 rounded-2xl border border-border hover:border-primary/50 bg-secondary/30 hover:bg-primary/10 transition-all duration-300 active:scale-[0.97] group"
                          style={{ animationDelay: `${oi * 80}ms` }}
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full border-2 border-border group-hover:border-primary/50 flex items-center justify-center transition-all">
                              <div className="w-3 h-3 rounded-full bg-transparent group-hover:bg-primary transition-all" />
                            </div>
                            <span className="text-sm font-semibold group-hover:text-primary transition-colors">{opt.label}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  {/* Score hero section */}
                  <div className="p-8 md:p-10 text-center border-b border-border bg-gradient-to-br from-secondary/30 to-transparent">
                    <div className="relative inline-block mb-4">
                      {/* Circular score display */}
                      <svg width="160" height="160" viewBox="0 0 160 160" className="drop-shadow-2xl">
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
                        <span className="text-5xl font-black tabular-nums">{scoreAnimated}</span>
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
                          className="flex items-center gap-4 p-4 rounded-2xl border border-border hover:border-primary/50 bg-secondary/20 hover:bg-primary/10 transition-all duration-300 active:scale-[0.97] group"
                        >
                          <span className={`w-9 h-9 rounded-xl bg-gradient-to-br ${result.barColor} flex items-center justify-center flex-shrink-0 text-xs font-black text-white shadow-md`}>
                            {i + 1}
                          </span>
                          <span className="flex-1 text-sm font-semibold group-hover:text-primary transition-colors">{r.title}</span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0 transition-all group-hover:translate-x-1" />
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
