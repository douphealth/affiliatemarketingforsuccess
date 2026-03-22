import ScrollReveal from "./ScrollReveal";
import { CheckCircle2, ArrowRight } from "lucide-react";

const items = [
  "Niche selection worksheet",
  "Starter content plan",
  "Keyword research map",
  "Email sequence outline",
];

const CtaSection = () => {
  return (
    <section className="py-28">
      <div className="container">
        <ScrollReveal>
          <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-10 md:p-16 overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Free Resource</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4">
                Affiliate Site Launch Kit
              </h2>
              <p className="text-muted-foreground text-lg mb-8 text-pretty max-w-lg">
                Go from "I want to start" to "I know my next 5 actions." Everything you need to launch with clarity.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4.5 h-4.5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://affiliatemarketingforsuccess.com/affiliate-growth-checklist/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-200 hover:brightness-110 active:scale-[0.97] shadow-lg shadow-primary/20"
                >
                  Get the free kit
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://affiliatemarketingforsuccess.com/affiliate-success-planner-quiz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border bg-secondary text-secondary-foreground font-medium transition-all duration-200 hover:bg-surface-hover active:scale-[0.97]"
                >
                  Take the planner quiz
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CtaSection;
