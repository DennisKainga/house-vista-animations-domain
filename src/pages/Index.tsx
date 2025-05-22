
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BuyerSection from "@/components/BuyerSection";
import SellerSection from "@/components/SellerSection";
import AgentsSection from "@/components/AgentsSection";
import LifestyleSection from "@/components/LifestyleSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BuyerSection />
      <SellerSection />
      <AgentsSection />
      <LifestyleSection />
      <Footer />
    </div>
  );
};

export default Index;
