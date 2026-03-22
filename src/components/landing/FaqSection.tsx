import ScrollReveal from "./ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BASE = "https://affiliatemarketingforsuccess.com";

const faqs = [
  {
    q: "How much does it cost to start affiliate marketing?",
    a: "Starting affiliate marketing typically costs between $100–$500 for domain, hosting, and basic tools. The primary investments are a domain name (~$12/year), web hosting (~$3–30/month), and optionally an SEO tool subscription.",
    link: { label: "The Costs to Start Affiliate Marketing →", href: `${BASE}/affiliate-marketing/the-costs-to-start-affiliate-marketing/` },
  },
  {
    q: "How long does it take to make money with affiliate marketing?",
    a: "Most affiliate marketers begin seeing first commissions within 3–6 months, with significant income typically developing after 12–18 months of consistent effort. Success timelines vary based on niche competition, content quality, and traffic strategies.",
    link: { label: "Earning Timeframe Guide →", href: `${BASE}/affiliate-marketing/how-long-does-it-take-to-become-an-affiliate-marketer/` },
  },
  {
    q: "What are the best affiliate marketing niches in 2026?",
    a: "The most profitable affiliate niches in 2026 include AI/SaaS tools, health & wellness, personal finance, online education, and sustainable products. AI-related affiliate programs offer particularly high commissions (20–50% recurring).",
    link: { label: "Best Affiliate Marketing Niches 2025 →", href: `${BASE}/affiliate-marketing/best-affiliate-marketing-niches-2025/` },
  },
  {
    q: "Is affiliate marketing still worth it in 2026?",
    a: "Yes. Affiliate marketing remains one of the most accessible and scalable online business models. AI tools have made content creation, SEO optimization, and funnel building more efficient than ever.",
    link: { label: "Why Affiliate Marketing Is the Best Business Model →", href: `${BASE}/affiliate-marketing/discover-why-affiliate-marketing-is-the-best-business-model/` },
  },
  {
    q: "What AI tools are best for affiliate marketing?",
    a: "The most effective AI tools for affiliate marketers in 2026 include ChatGPT and Claude for content creation, Surfer AI and Frase for SEO optimization, Perplexity for research, and predictive AI tools for funnel optimization.",
    link: { label: "AI Affiliate Marketing 2026 →", href: `${BASE}/affiliate-marketing/ai-affiliate-marketing-2026/` },
  },
  {
    q: "How do I start affiliate marketing as a complete beginner?",
    a: "Start by choosing a niche, building a WordPress website, joining affiliate programs, creating helpful content, and driving traffic through SEO. Our step-by-step beginner's guide walks through each stage with actionable instructions.",
    link: { label: "Beginner's Guide to Affiliate Marketing →", href: `${BASE}/affiliate-marketing/beginners-guide/` },
  },
];

const FaqSection = () => (
  <section className="py-24 bg-card/50">
    <div className="container">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              Frequently asked questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 overflow-hidden bg-card">
                <AccordionTrigger className="text-sm font-semibold text-left hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  <p className="mb-3">{faq.a}</p>
                  <a
                    href={faq.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    {faq.link.label}
                  </a>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default FaqSection;
