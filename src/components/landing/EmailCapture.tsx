import ScrollReveal from "./ScrollReveal";
import { CheckCircle2, ArrowRight } from "lucide-react";

const BASE = "https://affiliatemarketingforsuccess.com";

const perks = [
  "Weekly curated guides delivered to your inbox",
  "Exclusive AI prompt templates for affiliate marketers",
  "Affiliate program comparison cheat sheet",
  "SEO checklist for affiliate sites",
];

const EmailCapture = () => (
  <section className="py-28">
    <div className="container">
      <ScrollReveal>
        <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-10 md:p-16 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Free Resource</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4">
              Get the FREE Affiliate Marketing Success Kit
            </h2>
            <p className="text-muted-foreground text-lg mb-8 text-pretty max-w-lg">
              Everything you need to launch and scale your affiliate business — delivered free.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {perks.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a
              href={`${BASE}/affiliate-growth-checklist/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-200 hover:brightness-110 active:scale-[0.97] shadow-lg shadow-primary/20"
            >
              Get Free Access
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default EmailCapture;
