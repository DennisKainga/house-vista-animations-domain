
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedProperties from "@/components/FeaturedProperties";

const PropertyListingPage = () => {
  const { type } = useParams();
  
  const getTitle = () => {
    switch (type) {
      case "buy":
        return "Properties for Sale";
      case "rent":
        return "Properties for Rent";
      case "lease":
        return "Properties for Lease";
      case "land":
        return "Land for Sale";
      default:
        return "All Properties";
    }
  };
  
  const getDescription = () => {
    switch (type) {
      case "buy":
        return "Browse our collection of houses and apartments available for purchase. Find your dream home today.";
      case "rent":
        return "Discover properties available for short-term and long-term rental. Find the perfect place to call home.";
      case "lease":
        return "Explore commercial and residential properties available for lease. Perfect for your business or long-term living needs.";
      case "land":
        return "Browse available land for development, farming, or investment. Find the perfect plot for your needs.";
      default:
        return "Explore our full range of properties available for sale, rent, lease and land investments.";
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-display mb-4">{getTitle()}</h1>
          <p className="text-white/90 max-w-2xl">{getDescription()}</p>
        </div>
      </div>
      <FeaturedProperties />
      <Footer />
    </div>
  );
};

export default PropertyListingPage;
