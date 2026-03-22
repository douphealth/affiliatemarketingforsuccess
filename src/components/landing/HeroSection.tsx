import heroImage from "@/assets/hero-network.jpg";
import ScrollReveal from "./ScrollReveal";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="container relative z-10 py-24">
        <div className="max-w-3xl">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary tracking-wide">CONTENT HUB</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95] text-balance mb-6">
              Every guide you need.{" "}
              <span className="bg-gradient-to-r from-primary to-[hsl(28,90%,52%)] bg-clip-text text-transparent">
                Zero noise.
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed text-pretty mb-10">
              200+ curated guides on affiliate marketing, SEO, AI workflows, and monetization — organized by where you are right now.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://affiliatemarketingforsuccess.com/affiliate-growth-checklist/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-base transition-all duration-200 hover:brightness-110 active:scale-[0.97] shadow-lg shadow-primary/20 animate-pulse-glow"
              >
                Get the Free Launch Kit
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#guides"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border bg-secondary text-secondary-foreground font-medium text-base transition-all duration-200 hover:bg-surface-hover active:scale-[0.97]"
              >
                Browse All Guides
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={320}>
            <div className="flex gap-8 mt-14">
              {[
                { num: "200+", label: "Guides" },
                { num: "7", label: "Categories" },
                { num: "2026", label: "Updated" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold tabular-nums text-foreground">{stat.num}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
