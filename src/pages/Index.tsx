import NavBar from "@/components/landing/NavBar";
import HeroSection from "@/components/landing/HeroSection";
import PathwayCards from "@/components/landing/PathwayCards";
import FeaturedGuides from "@/components/landing/FeaturedGuides";
import CtaSection from "@/components/landing/CtaSection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <HeroSection />
      <PathwayCards />
      <FeaturedGuides />
      <CtaSection />
      <FooterSection />
    </div>
  );
};

export default Index;
