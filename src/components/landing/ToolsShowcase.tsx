import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Search, Calculator, Lightbulb, Link2, Timer, Mail, GitCompare, Cpu, ArrowUpRight, Sparkles } from "lucide-react";
import toolsBg from "@/assets/tools-showcase-bg.jpg";

const BASE = "https://affiliatemarketingforsuccess.com";

const tools = [
  { icon: Search, title: "SEO Keyword Research Tool", desc: "Find high-value keywords with AI-powered analysis", href: `${BASE}/tools/seo-keyword-research-tool/`, color: "from-blue-500/20 to-blue-600/5" },
  { icon: Calculator, title: "Commission Calculator", desc: "Project your earnings across any affiliate program", href: `${BASE}/tools/commission-calculator/`, color: "from-emerald-500/20 to-emerald-600/5" },
  { icon: Lightbulb, title: "Content Idea Generator", desc: "AI-generated content ideas tailored to your niche", href: `${BASE}/tools/content-idea-generator/`, color: "from-amber-500/20 to-amber-600/5" },
  { icon: Link2, title: "Affiliate Link Generator", desc: "Create optimized tracking links in seconds", href: `${BASE}/tools/affiliate-link-generator/`, color: "from-purple-500/20 to-purple-600/5" },
  { icon: Timer, title: "Script Timer Tool", desc: "Time your video scripts for perfect content length", href: `${BASE}/tools/script-timer-tool/`, color: "from-rose-500/20 to-rose-600/5" },
  { icon: Mail, title: "Email Template Generator", desc: "Conversion-optimized email templates on demand", href: `${BASE}/tools/email-marketing-template-generator/`, color: "from-sky-500/20 to-sky-600/5" },
  { icon: GitCompare, title: "Affiliate Program Compare", desc: "Side-by-side program comparison with real data", href: `${BASE}/tools/affiliate-program-comparison-tool/`, color: "from-orange-500/20 to-orange-600/5" },
  { icon: Cpu, title: "Nexus AI SEO Toolkit", desc: "Enterprise-grade AI SEO suite — completely free", href: `${BASE}/tools/nexus-ai-free-seo-toolkit/`, color: "from-primary/20 to-primary/5" },
];

const ToolsShowcase = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={toolsBg} alt="" className="w-full h-full object-cover opacity-15" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-sm font-semibold text-primary tracking-wide">FREE AI-POWERED TOOLS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
              Your marketing command center
            </h2>
            <p className="text-muted-foreground mt-4 text-lg text-pretty">
              Eight enterprise-grade tools. Zero cost. No signup required.
            </p>
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
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
                    <tool.icon className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="text-base font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {tool.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {tool.desc}
                  </p>

                  <div className="flex items-center gap-1.5 text-sm font-semibold text-primary">
                    <span>Try it free</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Animated border accent on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={600}>
          <div className="mt-12 text-center">
            <a
              href={`${BASE}/tools/nexus-ai-free-seo-toolkit/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-base hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 active:scale-[0.97]"
            >
              <Cpu className="w-5 h-5" />
              Explore the Full AI Toolkit
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ToolsShowcase;
