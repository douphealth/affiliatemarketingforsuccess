import ScrollReveal from "./ScrollReveal";

const links = [
  { label: "Home", href: "https://affiliatemarketingforsuccess.com/" },
  { label: "Blog", href: "https://affiliatemarketingforsuccess.com/blog/" },
  { label: "How to Start", href: "https://affiliatemarketingforsuccess.com/how-to-start/" },
  { label: "SEO", href: "https://affiliatemarketingforsuccess.com/seo/" },
  { label: "AI", href: "https://affiliatemarketingforsuccess.com/ai/" },
  { label: "Affiliate Marketing", href: "https://affiliatemarketingforsuccess.com/affiliate-marketing/" },
  { label: "Reviews", href: "https://affiliatemarketingforsuccess.com/reviews/" },
];

const FooterSection = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <img src="/logo.png" alt="Affiliate Marketing for Success" className="h-8 w-auto" />
              </div>
              <p className="text-xs text-muted-foreground">
                Practical systems for traffic, content, and monetization. © {new Date().getFullYear()}
              </p>
            </div>

            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default FooterSection;
