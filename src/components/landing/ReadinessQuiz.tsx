import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { ClipboardCheck, ArrowRight, RotateCcw, CheckCircle2, AlertTriangle, Trophy } from "lucide-react";

const BASE = "https://affiliatemarketingforsuccess.com";

interface Question {
  text: string;
  options: { label: string; score: number }[];
}

const questions: Question[] = [
  {
    text: "Do you have a niche selected for your affiliate business?",
    options: [
      { label: "No idea where to start", score: 0 },
      { label: "I have a few ideas but haven't decided", score: 1 },
      { label: "Yes, I've researched and committed to one", score: 2 },
    ],
  },
  {
    text: "Do you have a website or blog set up?",
    options: [
      { label: "Not yet", score: 0 },
      { label: "I've started but it's not live", score: 1 },
      { label: "Yes, it's live with content", score: 2 },
    ],
  },
  {
    text: "How comfortable are you with SEO basics?",
    options: [
      { label: "I don't know what SEO is", score: 0 },
      { label: "I understand the basics", score: 1 },
      { label: "I actively optimize for search", score: 2 },
    ],
  },
  {
    text: "Have you joined any affiliate programs?",
    options: [
      { label: "No, not yet", score: 0 },
      { label: "I've signed up for one or two", score: 1 },
      { label: "Yes, I'm active in multiple programs", score: 2 },
    ],
  },
  {
    text: "Are you using any AI tools in your workflow?",
    options: [
      { label: "I haven't tried any", score: 0 },
      { label: "I use ChatGPT occasionally", score: 1 },
      { label: "AI is integrated into my daily workflow", score: 2 },
    ],
  },
];

type Tier = "starter" | "building" | "ready";

const tiers: Record<Tier, { icon: typeof AlertTriangle; color: string; title: string; desc: string; resources: { title: string; href: string }[] }> = {
  starter: {
    icon: AlertTriangle,
    color: "text-amber-500",
    title: "Foundation Phase — You're Just Getting Started",
    desc: "You have great potential! Focus on the fundamentals first — niche selection, setting up your website, and understanding how affiliate marketing works.",
    resources: [
      { title: "Beginner's Guide to Affiliate Marketing", href: `${BASE}/affiliate-marketing/beginners-guide/` },
      { title: "How to Choose Your Niche", href: `${BASE}/affiliate-marketing/how-to-choose-your-niche/` },
      { title: "The Costs to Start Affiliate Marketing", href: `${BASE}/affiliate-marketing/the-costs-to-start-affiliate-marketing/` },
      { title: "10 Simple Steps to Build Your Website", href: `${BASE}/affiliate-marketing/10-simple-steps-to-build-your-affiliate-marketing-website/` },
    ],
  },
  building: {
    icon: CheckCircle2,
    color: "text-primary",
    title: "Growth Phase — You're Building Momentum",
    desc: "You have the basics down. Now it's time to optimize your strategy, improve your SEO, and start scaling your traffic and commissions.",
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
    title: "Scale Phase — You're Ready to Dominate",
    desc: "You have a strong foundation. Focus on advanced strategies, AI automation, and maximizing your ROI across multiple channels.",
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

  const handleAnswer = (score: number) => {
    const next = [...answers, score];
    setAnswers(next);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setDone(true);
    }
  };

  const total = answers.reduce((a, b) => a + b, 0);
  const maxScore = questions.length * 2;
  const pct = Math.round((total / maxScore) * 100);
  const tier: Tier = pct < 35 ? "starter" : pct < 70 ? "building" : "ready";
  const result = tiers[tier];

  const reset = () => {
    setCurrent(0);
    setAnswers([]);
    setDone(false);
  };

  return (
    <section id="readiness-quiz" className="py-24 bg-card/50">
      <div className="container">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-4">
                <ClipboardCheck className="w-3.5 h-3.5 text-primary" />
                <span className="text-sm font-semibold text-primary tracking-wide">READINESS SCORE</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
                How ready are you to succeed in affiliate marketing?
              </h2>
              <p className="text-muted-foreground mt-3 text-pretty">
                Answer 5 quick questions to discover your readiness level and get a personalized action plan.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              {!done ? (
                <div>
                  {/* Progress */}
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-semibold text-muted-foreground">
                      Question {current + 1} of {questions.length}
                    </p>
                    <p className="text-xs text-muted-foreground">{Math.round(((current) / questions.length) * 100)}% complete</p>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-secondary mb-6 overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${(current / questions.length) * 100}%` }}
                    />
                  </div>

                  <h3 className="text-lg font-bold mb-6">{questions[current].text}</h3>
                  <div className="space-y-3">
                    {questions[current].options.map((opt) => (
                      <button
                        key={opt.label}
                        onClick={() => handleAnswer(opt.score)}
                        className="w-full text-left p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-surface-hover transition-all duration-200 active:scale-[0.98] group"
                      >
                        <span className="text-sm font-medium group-hover:text-primary transition-colors">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <result.icon className={`w-6 h-6 ${result.color}`} />
                      <div>
                        <h3 className="text-lg font-bold">Your Score: {pct}%</h3>
                        <p className="text-sm text-muted-foreground">{result.title}</p>
                      </div>
                    </div>
                    <button onClick={reset} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors active:scale-[0.95]">
                      <RotateCcw className="w-3.5 h-3.5" /> Retake
                    </button>
                  </div>

                  {/* Score bar */}
                  <div className="w-full h-3 rounded-full bg-secondary mb-6 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ease-out ${pct < 35 ? "bg-amber-500" : pct < 70 ? "bg-primary" : "bg-emerald-500"}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{result.desc}</p>

                  <p className="text-sm font-semibold mb-3">📚 Your recommended reading:</p>
                  <div className="space-y-2">
                    {result.resources.map((r, i) => (
                      <a
                        key={r.href}
                        href={r.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/40 hover:bg-surface-hover transition-all duration-200 active:scale-[0.98] group"
                      >
                        <span className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary">
                          {i + 1}
                        </span>
                        <span className="flex-1 text-sm font-medium group-hover:text-primary transition-colors">{r.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary flex-shrink-0 transition-colors" />
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

export default ReadinessQuiz;
