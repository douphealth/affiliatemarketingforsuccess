import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Shield, ChevronDown, ChevronUp, BookOpen, RefreshCw, CheckCircle2, AlertCircle } from "lucide-react";

const AuthorityBlock = () => {
  const [methodologyOpen, setMethodologyOpen] = useState(false);

  return (
    <section className="py-20 border-b border-border">
      <div className="container">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            {/* Author block */}
            <div className="flex flex-col sm:flex-row gap-6 items-start p-8 rounded-2xl border border-border bg-card">
              <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-primary">AM</span>
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-1">Written & Curated By</p>
                <h3 className="text-xl font-bold mb-2">The AFS Editorial Team</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-pretty">
                  This knowledge hub represents years of hands-on experience building and scaling affiliate marketing businesses. Every strategy recommended here has been tested on real campaigns with real results — not theory, not guesswork.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <BookOpen className="w-3.5 h-3.5 text-primary" /> 190+ guides published
                  </span>
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <RefreshCw className="w-3.5 h-3.5 text-primary" /> Updated March 2026
                  </span>
                </div>
              </div>
            </div>

            {/* Methodology collapsible */}
            <div className="mt-6 rounded-xl border border-border bg-card overflow-hidden">
              <button
                onClick={() => setMethodologyOpen(!methodologyOpen)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-surface-hover transition-colors duration-200 active:scale-[0.99]"
              >
                <div className="flex items-center gap-3">
                  <Shield className="w-4.5 h-4.5 text-primary" />
                  <span className="text-sm font-semibold">Our Editorial Standards & Methodology</span>
                </div>
                {methodologyOpen ? (
                  <ChevronUp className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                )}
              </button>
              {methodologyOpen && (
                <div className="px-6 pb-6 space-y-4 text-sm text-muted-foreground border-t border-border pt-4">
                  {[
                    { icon: CheckCircle2, text: "How we test tools: We purchase and use every tool for a minimum of 30 days before reviewing." },
                    { icon: CheckCircle2, text: "How we verify strategies: All strategies are tested on active affiliate campaigns before recommending." },
                    { icon: RefreshCw, text: "How we update content: Every guide is reviewed and updated quarterly based on latest algorithm changes." },
                    { icon: AlertCircle, text: "Affiliate disclosure: We may earn commissions from products we recommend. This never influences our editorial ratings." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <item.icon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AuthorityBlock;
