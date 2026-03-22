import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

const BASE = "https://affiliatemarketingforsuccess.com";

type ClusterKey = "all" | "affiliate" | "ai" | "seo" | "blogging" | "email" | "reviews";

interface SubCluster {
  name: string;
  guides: { title: string; href: string }[];
}

interface Cluster {
  key: ClusterKey;
  label: string;
  emoji: string;
  synopsis: string;
  subClusters: SubCluster[];
}

const clusters: Cluster[] = [
  {
    key: "affiliate",
    label: "Affiliate Marketing",
    emoji: "🎯",
    synopsis: "The foundation of every successful affiliate marketing business rests on strategic niche selection, the right program partnerships, and a sustainable content strategy. These guides represent a structured learning path from fundamentals to advanced strategies.",
    subClusters: [
      {
        name: "Getting Started",
        guides: [
          { title: "Beginner's Guide to Affiliate Marketing", href: `${BASE}/affiliate-marketing/beginners-guide/` },
          { title: "The Costs to Start", href: `${BASE}/affiliate-marketing/the-costs-to-start-affiliate-marketing/` },
          { title: "How Long to Become an Affiliate Marketer", href: `${BASE}/affiliate-marketing/how-long-does-it-take-to-become-an-affiliate-marketer/` },
          { title: "Why Affiliate Marketing Is the Best Business Model", href: `${BASE}/affiliate-marketing/discover-why-affiliate-marketing-is-the-best-business-model/` },
          { title: "10 Simple Steps to Build Your Website", href: `${BASE}/affiliate-marketing/10-simple-steps-to-build-your-affiliate-marketing-website/` },
        ],
      },
      {
        name: "Strategy & Scaling",
        guides: [
          { title: "Affiliate Marketing Strategies", href: `${BASE}/affiliate-marketing/affiliate-marketing-strategies/` },
          { title: "Create an Affiliate Marketing Strategy", href: `${BASE}/affiliate-marketing/how-to-create-an-affiliate-marketing-strategy/` },
          { title: "High Ticket Affiliate Marketing", href: `${BASE}/affiliate-marketing/high-ticket-affiliate-marketing/` },
          { title: "Zero-Click Affiliate Marketing", href: `${BASE}/affiliate-marketing/zero-click-affiliate-marketing/` },
          { title: "ROI & Profitability Benchmarks", href: `${BASE}/affiliate-marketing/roi-profitability-benchmarks/` },
          { title: "Top 10 Affiliate Marketing Trends 2025", href: `${BASE}/affiliate-marketing/top-10-affiliate-marketing-trends-2025/` },
        ],
      },
      {
        name: "Niche Selection",
        guides: [
          { title: "How to Choose Your Niche", href: `${BASE}/affiliate-marketing/how-to-choose-your-niche/` },
          { title: "Best Affiliate Marketing Niches 2025", href: `${BASE}/affiliate-marketing/best-affiliate-marketing-niches-2025/` },
          { title: "Best AI Affiliate Niches", href: `${BASE}/affiliate-marketing/best-ai-affiliate-niches/` },
          { title: "Niche Selection Mistakes", href: `${BASE}/affiliate-marketing/affiliate-niche-selection-mistakes/` },
        ],
      },
      {
        name: "Programs & Networks",
        guides: [
          { title: "Best Programs for Beginners", href: `${BASE}/affiliate-marketing/best-affiliate-programs-for-beginners-with-high-commission/` },
          { title: "Best Affiliate Products to Promote", href: `${BASE}/affiliate-marketing/best-affiliate-products-to-promote/` },
          { title: "WarriorPlus Affiliate Program", href: `${BASE}/affiliate-marketing/warriorplus-affiliate-program-unlock-lucrative-opportunities/` },
          { title: "Amazon Affiliate Marketing", href: `${BASE}/affiliate-marketing/how-to-make-money-with-amazon-affiliate-marketing/` },
          { title: "Affiliate Program Comparison Tool", href: `${BASE}/tools/affiliate-program-comparison-tool/` },
        ],
      },
      {
        name: "Gap Analysis",
        guides: [
          { title: "Ultimate Guide to Gap Analysis", href: `${BASE}/affiliate-marketing/ultimate-guide-to-affiliate-gap-analysis/` },
          { title: "Best Gap Analysis Tools", href: `${BASE}/affiliate-marketing/best-gap-analysis-tools/` },
          { title: "Competitive Gap Analysis — US Market", href: `${BASE}/affiliate-marketing/competitive-gap-analysis-us-market/` },
          { title: "High-Value Affiliate Keywords", href: `${BASE}/affiliate-marketing/high-value-affiliate-keywords/` },
        ],
      },
      {
        name: "Multi-Channel Promotion",
        guides: [
          { title: "Pinterest for Affiliates", href: `${BASE}/affiliate-marketing/affiliate-marketing-on-pinterest/` },
          { title: "Instagram for Affiliates", href: `${BASE}/affiliate-marketing/affiliate-marketing-on-instagram/` },
          { title: "YouTube for Affiliates", href: `${BASE}/affiliate-marketing/youtube-for-affiliate-marketing/` },
          { title: "Short-Form Video Supremacy", href: `${BASE}/blogging/short-form-video-content-supremacy/` },
        ],
      },
    ],
  },
  {
    key: "ai",
    label: "AI & Prompt Engineering",
    emoji: "🤖",
    synopsis: "AI has fundamentally transformed how successful affiliate marketers operate. In 2026, the affiliate marketers who thrive aren't just using AI as a writing assistant — they're deploying it across their entire workflow from semantic keyword research to predictive funnel optimization.",
    subClusters: [
      {
        name: "AI + Affiliate Strategy",
        guides: [
          { title: "AI Affiliate Marketing 2026", href: `${BASE}/affiliate-marketing/ai-affiliate-marketing-2026/` },
          { title: "AI Affiliate Funnels", href: `${BASE}/affiliate-marketing/ai-affiliate-funnels/` },
          { title: "Predictive AI Affiliate Funnels", href: `${BASE}/affiliate-marketing/predictive-ai-affiliate-funnels/` },
          { title: "Claude AI for Affiliate Marketers", href: `${BASE}/ai/claude-ai-for-affiliate-marketers/` },
          { title: "Boost Earnings with Perplexity AI", href: `${BASE}/ai/boost-earnings-with-perplexity-ai/` },
          { title: "AI Content Strategy", href: `${BASE}/ai/ai-content-strategy/` },
        ],
      },
      {
        name: "Prompt Engineering Mastery",
        guides: [
          { title: "Learn Prompt Engineering", href: `${BASE}/ai/learn-prompt-engineering/` },
          { title: "Prompt Engineering Secrets", href: `${BASE}/ai/prompt-engineering-secrets/` },
          { title: "ChatGPT Prompt Engineering", href: `${BASE}/ai/chatgpt-prompt-engineering/` },
          { title: "Awesome ChatGPT Prompts", href: `${BASE}/chatgpt-prompts/awesome-chatgpt-prompts/` },
          { title: "ChatGPT Prompts for Marketing", href: `${BASE}/chatgpt-prompts/chatgpt-prompts-for-marketing/` },
        ],
      },
      {
        name: "LLM Comparisons",
        guides: [
          { title: "Large Language Models Comparison 2025", href: `${BASE}/ai/large-language-models-comparison-2025/` },
          { title: "DeepSeek R1 vs ChatGPT", href: `${BASE}/ai/deepseek-r1-vs-chatgpt/` },
          { title: "Gemini vs ChatGPT vs Grok", href: `${BASE}/ai/gemini-vs-chatgpt-vs-grok/` },
          { title: "Best ChatGPT Alternatives", href: `${BASE}/ai/best-chatgpt-alternatives/` },
        ],
      },
      {
        name: "Semantic Clustering & Advanced AI",
        guides: [
          { title: "Benefits of Semantic Clustering", href: `${BASE}/ai/benefits-of-semantic-clustering/` },
          { title: "Semantic Clustering Tools", href: `${BASE}/ai/semantic-clustering-tools/` },
          { title: "AI-Powered Semantic Clustering", href: `${BASE}/ai/ai-powered-semantic-clustering/` },
          { title: "Multimodal AI Models Guide", href: `${BASE}/ai/multimodal-ai-models-guide/` },
        ],
      },
    ],
  },
  {
    key: "seo",
    label: "SEO",
    emoji: "🔍",
    synopsis: "SEO remains the highest-ROI traffic channel for affiliate marketers — but the playbook has been rewritten. With AI Overviews, zero-click searches, and answer engines, the affiliates who win in 2026 optimize not just for search engines but for the AI systems that mediate content discovery.",
    subClusters: [
      {
        name: "Strategy",
        guides: [
          { title: "Build an Effective SEO Strategy", href: `${BASE}/seo/build-an-effective-seo-strategy/` },
          { title: "Why Your SEO Strategy Is Failing", href: `${BASE}/seo/why-your-current-seo-strategy-is-failing/` },
          { title: "Programmatic SEO", href: `${BASE}/seo/programmatic-seo/` },
        ],
      },
      {
        name: "On-Page & Technical",
        guides: [
          { title: "On-Page SEO Techniques", href: `${BASE}/seo/on-page-seo-techniques/` },
          { title: "SEO Writing: Complete Guide", href: `${BASE}/seo/seo-writing-complete-guide/` },
          { title: "Write Meta Descriptions That Convert", href: `${BASE}/seo/write-meta-descriptions-that-convert/` },
          { title: "Keyword Research Guide", href: `${BASE}/seo/keywords-research/` },
        ],
      },
      {
        name: "Off-Page & Links",
        guides: [
          { title: "Off-Page SEO Strategy", href: `${BASE}/seo/optimize-your-off-page-seo-strategy/` },
          { title: "Link Building Strategies", href: `${BASE}/seo/link-building-strategies/` },
          { title: "Google Ranking Factors", href: `${BASE}/seo/google-ranking-factors/` },
        ],
      },
      {
        name: "Advanced",
        guides: [
          { title: "Voice Search & SEO", href: `${BASE}/seo/voice-search-and-seo/` },
          { title: "Website Architecture for Conversions", href: `${BASE}/seo/website-architecture-that-drives-conversions/` },
          { title: "SEO Audit Guide", href: `${BASE}/seo/doing-an-seo-audit/` },
        ],
      },
    ],
  },
  {
    key: "blogging",
    label: "Blogging & Content",
    emoji: "✍️",
    synopsis: "Your blog is the engine of your affiliate marketing business. In 2026, you need a strategic, data-informed approach to content creation that balances evergreen value, search intent alignment, and conversion optimization.",
    subClusters: [
      {
        name: "Content Strategy",
        guides: [
          { title: "Winning Content Strategy", href: `${BASE}/blogging/winning-content-strategy/` },
          { title: "Create Evergreen Content", href: `${BASE}/blogging/create-evergreen-content/` },
          { title: "Write High-Ranking Blog Posts", href: `${BASE}/blogging/write-high-ranking-blog-posts/` },
          { title: "Update Old Blog Content", href: `${BASE}/blogging/update-old-blog-content/` },
        ],
      },
      {
        name: "Monetization & Growth",
        guides: [
          { title: "Blog Monetization Strategies", href: `${BASE}/blogging/blog-monetization-strategies/` },
          { title: "Grow Your Affiliate Marketing Blog", href: `${BASE}/blogging/grow-your-affiliate-marketing-blog/` },
          { title: "Increase Domain Authority Quickly", href: `${BASE}/blogging/increase-domain-authority-quickly/` },
          { title: "Reduce Bounce Rate", href: `${BASE}/blogging/reduce-bounce-rate/` },
          { title: "WordPress Blogging Tips", href: `${BASE}/blogging/wordpress-blogging-tips/` },
        ],
      },
      {
        name: "Copywriting",
        guides: [
          { title: "Tips for Successful Copywriting", href: `${BASE}/blogging/8-tips-for-successful-copywriting/` },
          { title: "Storytelling in Content Marketing", href: `${BASE}/blogging/storytelling-in-content-marketing/` },
          { title: "What Is a Creative Copywriter", href: `${BASE}/blogging/what-is-a-creative-copywriter/` },
        ],
      },
    ],
  },
  {
    key: "email",
    label: "Email Marketing",
    emoji: "📧",
    synopsis: "Email remains the highest-converting channel for affiliate marketers. Building a subscriber list gives you a direct line to your audience — independent of algorithm changes or platform shifts.",
    subClusters: [
      {
        name: "All Guides",
        guides: [
          { title: "Understanding Email Marketing", href: `${BASE}/email-marketing/understanding-email-marketing/` },
          { title: "Email Marketing Benefits", href: `${BASE}/email-marketing/email-marketing-benefits/` },
          { title: "Effective Email Marketing Strategies", href: `${BASE}/email-marketing/effective-email-marketing-strategies/` },
          { title: "Build Your Email List", href: `${BASE}/email-marketing/build-your-email-list/` },
          { title: "Proven Ways to Grow Your Email List", href: `${BASE}/email-marketing/proven-ways-to-grow-your-email-list/` },
          { title: "Craft Irresistible Email Newsletters", href: `${BASE}/email-marketing/craft-irresistible-email-newsletters/` },
          { title: "GetResponse Review 2025", href: `${BASE}/reviews/getresponse-review-2025/` },
        ],
      },
    ],
  },
  {
    key: "reviews",
    label: "Tool Reviews",
    emoji: "⭐",
    synopsis: "Every tool reviewed here has been purchased and tested for a minimum of 30 days. We compare features, pricing, and real-world performance so you can make informed decisions.",
    subClusters: [
      {
        name: "AI Writing Tools",
        guides: [
          { title: "Surfer AI Review", href: `${BASE}/reviews/surfer-ai/` },
          { title: "Frase Review", href: `${BASE}/reviews/frase-review/` },
          { title: "Agility Writer Review", href: `${BASE}/reviews/agility-writer-review/` },
          { title: "Scalenut Review", href: `${BASE}/reviews/scalenut-review/` },
          { title: "NeuronWriter Review", href: `${BASE}/reviews/neuronwriter-review/` },
        ],
      },
      {
        name: "SEO Tools",
        guides: [
          { title: "Semrush Review", href: `${BASE}/reviews/semrush-review/` },
          { title: "MarketMuse Review", href: `${BASE}/reviews/marketmuse-review/` },
        ],
      },
      {
        name: "Web Hosting",
        guides: [
          { title: "SiteGround Review", href: `${BASE}/reviews/siteground-review/` },
          { title: "Cloudways Review", href: `${BASE}/reviews/cloudways-review/` },
          { title: "Kinsta Review", href: `${BASE}/reviews/kinsta-review/` },
          { title: "NameHero Review", href: `${BASE}/reviews/namehero-review/` },
        ],
      },
    ],
  },
];

const tabs: { key: ClusterKey; label: string }[] = [
  { key: "all", label: "All Topics" },
  ...clusters.map((c) => ({ key: c.key, label: c.label })),
];

const TopicClusterHub = () => {
  const [activeTab, setActiveTab] = useState<ClusterKey>("all");
  const [expandedSub, setExpandedSub] = useState<string | null>(null);

  const visible = activeTab === "all" ? clusters : clusters.filter((c) => c.key === activeTab);

  return (
    <section id="knowledge-base" className="py-24 bg-card/50">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Complete Knowledge Base</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              Explore 190+ expert guides by topic
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => { setActiveTab(t.key); setExpandedSub(null); }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 active:scale-[0.96] ${
                  activeTab === t.key ? "category-pill-active" : "bg-secondary text-secondary-foreground hover:bg-surface-hover"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {visible.map((cluster) => (
            <ScrollReveal key={cluster.key}>
              <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="p-6 md:p-8 border-b border-border">
                  <h3 className="text-xl font-bold mb-2">
                    <span className="mr-2">{cluster.emoji}</span>
                    {cluster.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl text-pretty">
                    {cluster.synopsis}
                  </p>
                </div>

                <div className="divide-y divide-border">
                  {cluster.subClusters.map((sub) => {
                    const subKey = `${cluster.key}-${sub.name}`;
                    const isOpen = expandedSub === subKey;
                    return (
                      <div key={subKey}>
                        <button
                          onClick={() => setExpandedSub(isOpen ? null : subKey)}
                          className="w-full flex items-center justify-between px-6 md:px-8 py-4 text-left hover:bg-surface-hover transition-colors duration-150 active:scale-[0.995]"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-semibold">{sub.name}</span>
                            <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                              {sub.guides.length} guides
                            </span>
                          </div>
                          {isOpen ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                        </button>
                        {isOpen && (
                          <div className="px-6 md:px-8 pb-5 grid sm:grid-cols-2 gap-2">
                            {sub.guides.map((g) => (
                              <a
                                key={g.href}
                                href={g.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm hover:bg-surface-hover hover:text-primary transition-all duration-150 group"
                              >
                                <span className="flex-1">{g.title}</span>
                                <ArrowUpRight className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 flex-shrink-0 transition-opacity" />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicClusterHub;
