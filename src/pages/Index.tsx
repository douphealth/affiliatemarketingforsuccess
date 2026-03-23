import NavBar from "@/components/landing/NavBar";
import HeroSection from "@/components/landing/HeroSection";
import AuthorityBlock from "@/components/landing/AuthorityBlock";
import PathwayCards from "@/components/landing/PathwayCards";
import QuizModule from "@/components/landing/QuizModule";
import ReadinessQuiz from "@/components/landing/ReadinessQuiz";
import TopicClusterHub from "@/components/landing/TopicClusterHub";
import TrendingCarousel from "@/components/landing/TrendingCarousel";
import ToolsShowcase from "@/components/landing/ToolsShowcase";
import AIToolQuiz from "@/components/landing/AIToolQuiz";
import PopularGuides from "@/components/landing/PopularGuides";
import EmailCapture from "@/components/landing/EmailCapture";
import ComparisonsSection from "@/components/landing/ComparisonsSection";
import MistakesSection from "@/components/landing/MistakesSection";
import FaqSection from "@/components/landing/FaqSection";
import FooterSection from "@/components/landing/FooterSection";
import StickyBottomBar from "@/components/landing/StickyBottomBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pb-14">
      <NavBar />
      <HeroSection />
      <AuthorityBlock />
      <PathwayCards />
      <QuizModule />
      <ReadinessQuiz />
      <TopicClusterHub />
      <TrendingCarousel />
      <ToolsShowcase />
      <AIToolQuiz />
      <PopularGuides />
      <EmailCapture />
      <ComparisonsSection />
      <MistakesSection />
      <FaqSection />
      <FooterSection />
      <StickyBottomBar />
    </div>
  );
};

export default Index;
