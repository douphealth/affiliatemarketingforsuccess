import { useState, useEffect } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a
          href="https://affiliatemarketingforsuccess.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-primary" />
          <span className="text-sm font-bold tracking-wide">
            <span className="text-primary">AFS</span>{" "}
            <span className="text-foreground">Content Hub</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {[
            { label: "Guides", href: "#guides" },
            { label: "How to Start", href: "https://affiliatemarketingforsuccess.com/how-to-start/" },
            { label: "SEO", href: "https://affiliatemarketingforsuccess.com/seo/" },
            { label: "AI", href: "https://affiliatemarketingforsuccess.com/ai/" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("#") ? undefined : "_blank"}
              rel={link.href.startsWith("#") ? undefined : "noopener noreferrer"}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://affiliatemarketingforsuccess.com/affiliate-growth-checklist/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
        >
          Free Launch Kit
        </a>
      </div>
    </header>
  );
};

export default NavBar;
