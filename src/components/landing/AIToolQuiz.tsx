import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Cpu, ArrowRight, RotateCcw, ArrowUpRight, Zap, PenTool, Search, GitBranch, BookOpen, MessageSquare } from "lucide-react";
import aiToolsBg from "@/assets/ai-tools-bg.jpg";

const BASE = "https://affiliatemarketingforsuccess.com";

type Need = "content" | "seo" | "funnels" | "research" | "prompts";

interface ToolRec {
  tool: string;
  why: string;
  guide: { title: string; href: string };
}

const needMeta: Record<Need, { icon: typeof PenTool; color: string; gradient: string }> = {
  content: { icon: PenTool, color: "text-sky-400", gradient: "from-sky-500 to-blue-600" },
  seo: { icon: Search, color: "text-emerald-400", gradient: "from-emerald-500 to-teal-600" },
  funnels: { icon: GitBranch, color: "text-purple-400", gradient: "from-purple-500 to-violet-600" },
  research: { icon: BookOpen, color: "text-orange-400", gradient: "from-orange-500 to-red-600" },
  prompts: { icon: MessageSquare, color: "text-primary", gradient: "from-primary to-amber-600" },
};

const toolMap: Record<Need, { title: string; desc: string; tools: ToolRec[] }> = {
  content: {
    title: "AI Content Creation Stack",
    desc: "Write faster, better, and at scale — without sacrificing quality or originality.",
    tools: [
      { tool: "Claude AI", why: "Best for long-form affiliate content with nuance and depth", guide: { title: "Claude AI for Affiliate Marketers", href: `${BASE}/ai/claude-ai-for-affiliate-marketers/` } },
      { tool: "Surfer AI", why: "Combines AI writing with real-time SEO optimization", guide: { title: "Surfer AI Review", href: `${BASE}/reviews/surfer-ai/` } },
      { tool: "Frase", why: "Research-first AI writing with SERP analysis built in", guide: { title: "Frase Review", href: `${BASE}/reviews/frase-review/` } },
    ],
  },
  seo: {
    title: "AI SEO Optimization Stack",
    desc: "Automate keyword research, on-page optimization, and competitive analysis.",
    tools: [
      { tool: "Semrush + AI", why: "Industry-leading SEO platform with AI-powered insights", guide: { title: "Semrush Review", href: `${BASE}/reviews/semrush-review/` } },
      { tool: "Nexus AI SEO Toolkit", why: "Free AI-powered toolkit built for affiliate marketers", guide: { title: "Nexus AI Free SEO Toolkit", href: `${BASE}/tools/nexus-ai-free-seo-toolkit/` } },
      { tool: "Programmatic SEO", why: "Scale your pages with AI-driven content architecture", guide: { title: "Programmatic SEO Guide", href: `${BASE}/seo/programmatic-seo/` } },
    ],
  },
  funnels: {
    title: "AI Funnel Automation Stack",
    desc: "Optimize your entire affiliate funnel — from traffic capture to commission tracking.",
    tools: [
      { tool: "Predictive AI Funnels", why: "Use AI to predict which visitors will convert", guide: { title: "Predictive AI Affiliate Funnels", href: `${BASE}/affiliate-marketing/predictive-ai-affiliate-funnels/` } },
      { tool: "AI Affiliate Funnels", why: "Automate content, traffic, and conversion flows", guide: { title: "AI Affiliate Funnels", href: `${BASE}/affiliate-marketing/ai-affiliate-funnels/` } },
      { tool: "Sales Funnel Optimization", why: "Optimize every stage of your affiliate pipeline", guide: { title: "Optimize Your Sales Funnel", href: `${BASE}/affiliate-marketing/optimize-your-sales-funnel/` } },
    ],
  },
  research: {
    title: "AI Research & Analysis Stack",
    desc: "Market research, competitor analysis, and trend spotting to stay ahead.",
    tools: [
      { tool: "Perplexity AI", why: "Real-time research with cited sources — perfect for market analysis", guide: { title: "Boost Earnings with Perplexity AI", href: `${BASE}/ai/boost-earnings-with-perplexity-ai/` } },
      { tool: "Semantic Clustering", why: "Organize topics into authority-building clusters", guide: { title: "AI-Powered Semantic Clustering", href: `${BASE}/ai/ai-powered-semantic-clustering/` } },
      { tool: "Gap Analysis Tools", why: "Find untapped opportunities your competitors miss", guide: { title: "Best Gap Analysis Tools", href: `${BASE}/affiliate-marketing/best-gap-analysis-tools/` } },
    ],
  },
  prompts: {
    title: "Prompt Engineering Mastery",
    desc: "Better prompts = 10x better output from every AI tool you use.",
    tools: [
      { tool: "Prompt Engineering Course", why: "Complete curriculum from beginner to advanced", guide: { title: "Learn Prompt Engineering", href: `${BASE}/ai/learn-prompt-engineering/` } },
      { tool: "ChatGPT Prompts Library", why: "73+ ready-to-use prompts for affiliate marketers", guide: { title: "Awesome ChatGPT Prompts", href: `${BASE}/chatgpt-prompts/awesome-chatgpt-prompts/` } },
      { tool: "Advanced Techniques", why: "Secret techniques that separate amateurs from pros", guide: { title: "Prompt Engineering Secrets", href: `${BASE}/ai/prompt-engineering-secrets/` } },
    ],
  },
};

const needs: { value: Need; label: string; desc: string; emoji: string }[] = [
  { value: "content", label: "Write better content faster", desc: "AI-assisted writing and editing", emoji: "✍️" },
  { value: "seo", label: "Dominate search rankings", desc: "AI-powered SEO optimization", emoji: "🔍" },
  { value: "funnels", label: "Automate my sales funnels", desc: "AI funnel building & optimization", emoji: "🔄" },
  { value: "research", label: "Research markets & competitors", desc: "AI-driven analysis and insights", emoji: "📊" },
  { value: "prompts", label: "Master AI prompting", desc: "Get better results from every AI tool", emoji: "💬" },
];

const AIToolQuiz = () => {
  const [selected, setSelected] = useState<Need | null>(null);

  const result = selected ? toolMap[selected] : null;
  const meta = selected ? needMeta[selected] : null;

  return (
    <section id="ai-tool-quiz" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={aiToolsBg} alt="" className="w-full h-full object-cover opacity-[0.12]" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="container relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/10 mb-5 animate-pulse-glow">
                <Cpu className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-primary tracking-wider">AI TOOL FINDER</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance leading-[1.1]">
                Which AI tools
                <span className="block text-primary mt-1">should you be using?</span>
              </h2>
              <p className="text-muted-foreground mt-4 text-lg text-pretty max-w-xl mx-auto">
                Tell us your biggest need and we'll recommend the perfect AI stack for your affiliate business.
              </p>
            </div>

            {/* Quiz card */}
            <div className="rounded-3xl border border-border bg-card/90 backdrop-blur-sm p-8 md:p-10 shadow-2xl shadow-primary/5 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/8 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/8 rounded-full blur-3xl pointer-events-none" />

              {!result ? (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">What's your #1 priority right now?</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {needs.map((n) => {
                      const NeedIcon = needMeta[n.value].icon;
                      return (
                        <button
                          key={n.value}
                          onClick={() => setSelected(n.value)}
                          className="text-left p-5 rounded-2xl border border-border hover:border-primary/50 bg-secondary/30 hover:bg-primary/10 transition-all duration-300 active:scale-[0.97] group"
                        >
                          <div className="flex items-start gap-3">
                            <span className="text-2xl">{n.emoji}</span>
                            <div>
                              <span className="font-bold text-sm block group-hover:text-primary transition-colors">{n.label}</span>
                              <span className="text-xs text-muted-foreground mt-0.5 block">{n.desc}</span>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${meta!.gradient} flex items-center justify-center shadow-lg`}>
                        <meta!.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold">{result.title}</h3>
                        <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{result.desc}</p>
                      </div>
                    </div>
                    <button onClick={() => setSelected(null)} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors active:scale-[0.95] flex-shrink-0 px-3 py-1.5 rounded-lg hover:bg-secondary/50">
                      <RotateCcw className="w-3.5 h-3.5" /> Change
                    </button>
                  </div>

                  <div className="space-y-4 mt-6">
                    {result.tools.map((t, i) => (
                      <div key={t.tool} className="p-5 rounded-2xl border border-border bg-secondary/20 hover:bg-secondary/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-3">
                          <span className={`w-10 h-10 rounded-xl bg-gradient-to-br ${meta!.gradient} flex items-center justify-center flex-shrink-0 text-sm font-black text-white shadow-md`}>
                            {i + 1}
                          </span>
                          <div className="flex-1">
                            <p className="text-base font-bold">{t.tool}</p>
                            <p className="text-sm text-muted-foreground mt-1">{t.why}</p>
                          </div>
                        </div>
                        <a
                          href={t.guide.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 ml-14 text-sm font-semibold text-primary hover:underline group"
                        >
                          📖 {t.guide.title}
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border border-primary/20 text-center">
                    <p className="text-sm text-muted-foreground mb-3">Want the complete AI affiliate playbook?</p>
                    <a
                      href={`${BASE}/affiliate-marketing/ai-affiliate-marketing-2026/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 active:scale-[0.97]"
                    >
                      Read the Complete AI Affiliate Guide
                      <ArrowRight className="w-4 h-4" />
                    </a>
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

export default AIToolQuiz;
