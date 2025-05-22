
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SellerSection = () => {
  return (
    <section className="relative py-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-12 h-full">
          <div className="col-span-5 bg-[#102341]"></div>
          <div className="col-span-7">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')" 
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
            <div className="bg-[#102341] text-white p-10 md:p-16 rounded-lg">
              <h3 className="text-2xl font-medium mb-2 uppercase tracking-wider">About Us</h3>
              <h2 className="text-4xl font-bold mb-6">We are specialists in selling</h2>
              <p className="text-white/80 mb-8">
                With over 15 years of experience in the East African real estate market, 
                our team of dedicated professionals has the expertise and local knowledge to 
                help you sell your property at the best possible price.
              </p>
              <Button asChild className="bg-[#c27b43] hover:bg-[#b06b33] text-white border-none">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            {/* This area is intentionally left empty as it's covered by the background image */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerSection;
