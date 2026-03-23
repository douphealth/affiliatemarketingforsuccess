import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Search, Calculator, Lightbulb, Link2, Timer, Mail, GitCompare, Cpu, ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";
import toolsBg from "@/assets/tools-showcase-bg.jpg";
import toolsFloating from "@/assets/tools-floating.png";

const BASE = "https://affiliatemarketingforsuccess.com";

const tools = [
  { icon: Search, title: "SEO Keyword Research Tool", desc: "Find high-value keywords with AI-powered analysis and real SERP data", href: `${BASE}/tools/seo-keyword-research-tool/`, color: "from-sky-500/20 to-sky-600/5", accent: "sky", badge: "Most Used" },
  { icon: Calculator, title: "Commission Calculator", desc: "Project your earnings across any affiliate program instantly", href: `${BASE}/tools/commission-calculator/`, color: "from-emerald-500/20 to-emerald-600/5", accent: "emerald" },
  { icon: Lightbulb, title: "Content Idea Generator", desc: "AI-generated content ideas tailored to your niche and audience", href: `${BASE}/tools/content-idea-generator/`, color: "from-amber-500/20 to-amber-600/5", accent: "amber" },
  { icon: Link2, title: "Affiliate Link Generator", desc: "Create optimized tracking links with built-in analytics", href: `${BASE}/tools/affiliate-link-generator/`, color: "from-purple-500/20 to-purple-600/5", accent: "purple" },
  { icon: Timer, title: "Script Timer Tool", desc: "Time your video scripts for perfect content length every time", href: `${BASE}/tools/script-timer-tool/`, color: "from-rose-500/20 to-rose-600/5", accent: "rose" },
  { icon: Mail, title: "Email Template Generator", desc: "Conversion-optimized email templates generated on demand", href: `${BASE}/tools/email-marketing-template-generator/`, color: "from-sky-500/20 to-sky-600/5", accent: "sky" },
  { icon: GitCompare, title: "Affiliate Program Compare", desc: "Side-by-side program comparison with real commission data", href: `${BASE}/tools/affiliate-program-comparison-tool/`, color: "from-orange-500/20 to-orange-600/5", accent: "orange" },
  { icon: Cpu, title: "Nexus AI SEO Toolkit", desc: "Enterprise-grade AI SEO suite — completely free, no signup", href: `${BASE}/tools/nexus-ai-free-seo-toolkit/`, color: "from-primary/20 to-primary/5", accent: "primary", badge: "Premium" },
];

const ToolsShowcase = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="tools" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={toolsBg} alt="" className="w-full h-full object-cover opacity-15" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-3xl mx-auto relative">
            <div className="absolute -top-8 right-0 w-48 h-48 opacity-40 pointer-events-none hidden lg:block">
              <img src={toolsFloating} alt="" className="w-full h-full object-contain animate-[float_6s_ease-in-out_infinite]" />
            </div>

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/10 mb-5 animate-pulse-glow">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary tracking-wider">FREE AI-POWERED TOOLS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance leading-[1.1]">
              Your marketing
              <span className="block text-primary mt-1">command center</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-lg text-pretty max-w-xl mx-auto">
              Eight enterprise-grade tools. Zero cost. No signup required. Start using them right now.
            </p>

            <div className="flex items-center justify-center gap-8 mt-8">
              {[
                { value: "8", label: "Free Tools" },
                { value: "47K+", label: "Monthly Users" },
                { value: "4.9★", label: "Avg Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-black text-primary tabular-nums">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-medium mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tools.map((tool, i) => (
            <ScrollReveal key={tool.href} delay={i * 70} direction="scale">
              <a
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col h-full p-6 rounded-2xl border border-border bg-card/80 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 active:scale-[0.97] overflow-hidden"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {tool.badge && (
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase bg-primary/90 text-primary-foreground">
                    {tool.badge}
                  </span>
                )}

                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10">
                    <tool.icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="text-base font-extrabold mb-2 group-hover:text-primary transition-colors duration-300">
                    {tool.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {tool.desc}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-bold text-primary">
                    <span>Try it free</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA - links to /tools */}
        <ScrollReveal delay={600}>
          <div className="mt-14 text-center">
            <div className="inline-flex flex-col items-center gap-3 p-8 rounded-3xl border border-border bg-card/80 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20 mb-1">
                <Cpu className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-extrabold">Explore the full tools library</h3>
              <p className="text-sm text-muted-foreground max-w-md">Access all our free AI-powered marketing tools in one place — no signup required.</p>
              <a
                href={`${BASE}/tools/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 active:scale-[0.97]"
              >
                Browse All Tools
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ToolsShowcase;
