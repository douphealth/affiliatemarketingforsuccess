import ScrollReveal from "./ScrollReveal";
import { Search, Calculator, Lightbulb, Link2, Timer, Mail, GitCompare, Cpu, ArrowUpRight } from "lucide-react";
import toolsImage from "@/assets/tools-float.jpg";

const BASE = "https://affiliatemarketingforsuccess.com";

const tools = [
  { icon: Search, title: "SEO Keyword Research Tool", href: `${BASE}/tools/seo-keyword-research-tool/` },
  { icon: Calculator, title: "Commission Calculator", href: `${BASE}/tools/commission-calculator/` },
  { icon: Lightbulb, title: "Content Idea Generator", href: `${BASE}/tools/content-idea-generator/` },
  { icon: Link2, title: "Affiliate Link Generator", href: `${BASE}/tools/affiliate-link-generator/` },
  { icon: Timer, title: "Script Timer Tool", href: `${BASE}/tools/script-timer-tool/` },
  { icon: Mail, title: "Email Template Generator", href: `${BASE}/tools/email-marketing-template-generator/` },
  { icon: GitCompare, title: "Affiliate Program Compare", href: `${BASE}/tools/affiliate-program-comparison-tool/` },
  { icon: Cpu, title: "Nexus AI SEO Toolkit", href: `${BASE}/tools/nexus-ai-free-seo-toolkit/` },
];

const ToolsShowcase = () => (
  <section className="py-24">
    <div className="container">
      <ScrollReveal>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Free Tools</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
            AI-powered tools — use them right now
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-pretty">
            Eight free tools to accelerate your affiliate marketing workflow. No signup required.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tools.map((tool, i) => (
          <ScrollReveal key={tool.href} delay={i * 60} direction="scale">
            <a
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 active:scale-[0.98]"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <tool.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-semibold group-hover:text-primary transition-colors duration-200 flex-1">{tool.title}</span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" />
            </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ToolsShowcase;
