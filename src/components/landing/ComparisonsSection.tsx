import ScrollReveal from "./ScrollReveal";
import { ArrowUpRight, GitCompare } from "lucide-react";

const BASE = "https://affiliatemarketingforsuccess.com";

const comparisons = [
  { title: "DeepSeek R1 vs ChatGPT", href: `${BASE}/ai/deepseek-r1-vs-chatgpt/` },
  { title: "Gemini vs ChatGPT vs Grok", href: `${BASE}/ai/gemini-vs-chatgpt-vs-grok/` },
  { title: "ChatGPT4 vs Gemini Pro in Blog Writing", href: `${BASE}/ai/chatgpt4-vs-gemini-pro-in-blog-writing/` },
  { title: "Frase.io vs Quillbot", href: `${BASE}/reviews/frase-io-vs-quillbot/` },
  { title: "GetResponse vs Mailchimp", href: `${BASE}/reviews/getresponse-vs-mailchimp/` },
  { title: "GetResponse vs ClickFunnels", href: `${BASE}/reviews/getresponse-vs-clickfunnels/` },
  { title: "Writesonic vs SEOWriting AI", href: `${BASE}/reviews/writesonic-vs-seowriting-ai/` },
  { title: "Agility Writer vs Autoblogging AI", href: `${BASE}/reviews/agility-writer-vs-autoblogging-ai/` },
  { title: "Affiliate Marketing vs Dropshipping", href: `${BASE}/affiliate-marketing/affiliate-marketing-vs-dropshipping/` },
  { title: "Turnitin vs Grammarly", href: `${BASE}/ai/turnitin-vs-grammarly/` },
];

const ComparisonsSection = () => (
  <section className="py-24 bg-card/50">
    <div className="container">
      <ScrollReveal>
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-4">
            <GitCompare className="w-3.5 h-3.5 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wide">HEAD-TO-HEAD</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Popular comparisons
          </h2>
        </div>
      </ScrollReveal>

      <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-3">
        {comparisons.map((c, i) => (
          <ScrollReveal key={c.href} delay={i * 50}>
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-surface-hover transition-all duration-200 active:scale-[0.98] group"
            >
              <span className="text-sm font-medium flex-1 group-hover:text-primary transition-colors">{c.title}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary flex-shrink-0 transition-colors" />
            </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ComparisonsSection;
