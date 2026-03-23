import { useState, useEffect } from "react";
import { Rocket, Wrench, Mail, ArrowUp } from "lucide-react";

const BASE = "https://affiliatemarketingforsuccess.com";

const StickyBottomBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-md">
      <div className="container flex items-center justify-between py-2 sm:py-3 gap-2 sm:gap-4">
        <a
          href={`${BASE}/affiliate-marketing/beginners-guide/`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all active:scale-[0.97]"
        >
          <Rocket className="w-3.5 h-3.5" /> Start Here
        </a>

        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`${BASE}/tools/nexus-ai-free-seo-toolkit/`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-all"
          >
            <Wrench className="w-3.5 h-3.5" /> Free Tools
          </a>
          <a
            href={`${BASE}/affiliate-growth-checklist/`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-all"
          >
            <Mail className="w-3.5 h-3.5" /> Free Kit
          </a>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-all active:scale-[0.95]"
        >
          <ArrowUp className="w-3.5 h-3.5" /> Top
        </button>
      </div>
    </div>
  );
};

export default StickyBottomBar;
