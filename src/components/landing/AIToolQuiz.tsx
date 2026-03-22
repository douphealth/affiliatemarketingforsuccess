import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Cpu, ArrowRight, RotateCcw, ArrowUpRight } from "lucide-react";

const BASE = "https://affiliatemarketingforsuccess.com";

type Need = "content" | "seo" | "funnels" | "research" | "prompts";

interface ToolRec {
  tool: string;
  why: string;
  guide: { title: string; href: string };
}

const toolMap: Record<Need, { title: string; desc: string; tools: ToolRec[] }> = {
  content: {
    title: "AI Content Creation Stack",
    desc: "You need AI tools that help you write faster, better, and at scale — without sacrificing quality or originality.",
    tools: [
      { tool: "Claude AI", why: "Best for long-form affiliate content with nuance and depth", guide: { title: "Claude AI for Affiliate Marketers", href: `${BASE}/ai/claude-ai-for-affiliate-marketers/` } },
      { tool: "Surfer AI", why: "Combines AI writing with real-time SEO optimization", guide: { title: "Surfer AI Review", href: `${BASE}/reviews/surfer-ai/` } },
      { tool: "Frase", why: "Research-first AI writing with SERP analysis built in", guide: { title: "Frase Review", href: `${BASE}/reviews/frase-review/` } },
    ],
  },
  seo: {
    title: "AI SEO Optimization Stack",
    desc: "You need tools that automate keyword research, on-page optimization, and competitive analysis with AI intelligence.",
    tools: [
      { tool: "Semrush + AI", why: "Industry-leading SEO platform with AI-powered insights", guide: { title: "Semrush Review", href: `${BASE}/reviews/semrush-review/` } },
      { tool: "Nexus AI SEO Toolkit", why: "Free AI-powered toolkit built for affiliate marketers", guide: { title: "Nexus AI Free SEO Toolkit", href: `${BASE}/tools/nexus-ai-free-seo-toolkit/` } },
      { tool: "Programmatic SEO", why: "Scale your pages with AI-driven content architecture", guide: { title: "Programmatic SEO Guide", href: `${BASE}/seo/programmatic-seo/` } },
    ],
  },
  funnels: {
    title: "AI Funnel Automation Stack",
    desc: "You need AI to optimize your entire affiliate funnel — from traffic capture through to conversion and commission tracking.",
    tools: [
      { tool: "Predictive AI Funnels", why: "Use AI to predict which visitors will convert", guide: { title: "Predictive AI Affiliate Funnels", href: `${BASE}/affiliate-marketing/predictive-ai-affiliate-funnels/` } },
      { tool: "AI Affiliate Funnels", why: "Automate content, traffic, and conversion flows", guide: { title: "AI Affiliate Funnels", href: `${BASE}/affiliate-marketing/ai-affiliate-funnels/` } },
      { tool: "Sales Funnel Optimization", why: "Optimize every stage of your affiliate pipeline", guide: { title: "Optimize Your Sales Funnel", href: `${BASE}/affiliate-marketing/optimize-your-sales-funnel/` } },
    ],
  },
  research: {
    title: "AI Research & Analysis Stack",
    desc: "You need AI tools for market research, competitor analysis, and trend spotting to stay ahead of the competition.",
    tools: [
      { tool: "Perplexity AI", why: "Real-time research with cited sources — perfect for market analysis", guide: { title: "Boost Earnings with Perplexity AI", href: `${BASE}/ai/boost-earnings-with-perplexity-ai/` } },
      { tool: "Semantic Clustering", why: "Organize topics into authority-building clusters", guide: { title: "AI-Powered Semantic Clustering", href: `${BASE}/ai/ai-powered-semantic-clustering/` } },
      { tool: "Gap Analysis Tools", why: "Find untapped opportunities your competitors miss", guide: { title: "Best Gap Analysis Tools", href: `${BASE}/affiliate-marketing/best-gap-analysis-tools/` } },
    ],
  },
  prompts: {
    title: "Prompt Engineering Mastery Stack",
    desc: "You need to master the art of communicating with AI — better prompts mean 10x better output from every tool you use.",
    tools: [
      { tool: "Prompt Engineering Course", why: "Complete curriculum from beginner to advanced", guide: { title: "Learn Prompt Engineering", href: `${BASE}/ai/learn-prompt-engineering/` } },
      { tool: "ChatGPT Prompts Library", why: "73+ ready-to-use prompts for affiliate marketers", guide: { title: "Awesome ChatGPT Prompts", href: `${BASE}/chatgpt-prompts/awesome-chatgpt-prompts/` } },
      { tool: "Advanced Techniques", why: "Secret techniques that separate amateurs from pros", guide: { title: "Prompt Engineering Secrets", href: `${BASE}/ai/prompt-engineering-secrets/` } },
    ],
  },
};

const needs: { value: Need; label: string; desc: string }[] = [
  { value: "content", label: "Write better content faster", desc: "AI-assisted writing and editing" },
  { value: "seo", label: "Dominate search rankings", desc: "AI-powered SEO optimization" },
  { value: "funnels", label: "Automate my sales funnels", desc: "AI funnel building and optimization" },
  { value: "research", label: "Research markets and competitors", desc: "AI-driven analysis and insights" },
  { value: "prompts", label: "Master AI prompting", desc: "Get better results from every AI tool" },
];

const AIToolQuiz = () => {
  const [selected, setSelected] = useState<Need | null>(null);

  const result = selected ? toolMap[selected] : null;

  return (
    <section id="ai-tool-quiz" className="py-24">
      <div className="container">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-4">
                <Cpu className="w-3.5 h-3.5 text-primary" />
                <span className="text-sm font-semibold text-primary tracking-wide">AI TOOL FINDER</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
                Which AI tools should you use?
              </h2>
              <p className="text-muted-foreground mt-3 text-pretty">
                Tell us your biggest need and we'll recommend the perfect AI stack for your affiliate business.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              {!result ? (
                <div>
                  <h3 className="text-lg font-bold mb-6">What's your #1 priority right now?</h3>
                  <div className="space-y-3">
                    {needs.map((n) => (
                      <button
                        key={n.value}
                        onClick={() => setSelected(n.value)}
                        className="w-full text-left p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-surface-hover transition-all duration-200 active:scale-[0.98] group"
                      >
                        <span className="font-semibold text-sm group-hover:text-primary transition-colors">{n.label}</span>
                        <span className="block text-xs text-muted-foreground mt-0.5">{n.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold">{result.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{result.desc}</p>
                    </div>
                    <button onClick={() => setSelected(null)} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors active:scale-[0.95] flex-shrink-0">
                      <RotateCcw className="w-3.5 h-3.5" /> Change
                    </button>
                  </div>

                  <div className="space-y-4 mt-6">
                    {result.tools.map((t, i) => (
                      <div key={t.tool} className="p-4 rounded-xl border border-border bg-card">
                        <div className="flex items-start gap-3 mb-3">
                          <span className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary mt-0.5">
                            {i + 1}
                          </span>
                          <div className="flex-1">
                            <p className="text-sm font-bold">{t.tool}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{t.why}</p>
                          </div>
                        </div>
                        <a
                          href={t.guide.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 ml-10 text-sm font-medium text-primary hover:underline group"
                        >
                          {t.guide.title}
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-5 border-t border-border text-center">
                    <a
                      href={`${BASE}/affiliate-marketing/ai-affiliate-marketing-2026/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all active:scale-[0.97] shadow-lg shadow-primary/20"
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
