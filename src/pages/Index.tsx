import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import WhyEthiopia from "@/components/home/WhyEthiopia";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedDestinations />
        <WhyEthiopia />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
