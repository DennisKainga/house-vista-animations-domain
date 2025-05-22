
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const HeroSection = () => {
  const [listingType, setListingType] = useState("buy");

  return (
    <div className="relative h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#102341]/90 to-[#102341]/70"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-display mb-6">
            Exceptional real estates
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl">
            Our extensive network, coupled with deep market insights and exceptional service, makes us the trusted partner for all your real estate needs.
          </p>

          {/* Search Box */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {/* Tabs */}
            <Tabs defaultValue="buy" className="mb-6" onValueChange={setListingType}>
              <TabsList className="grid grid-cols-4">
                <TabsTrigger value="buy">Buy</TabsTrigger>
                <TabsTrigger value="rent">Rent</TabsTrigger>
                <TabsTrigger value="lease">Lease</TabsTrigger>
                <TabsTrigger value="land">Land</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Search Form */}
            <div className="flex flex-col md:flex-row gap-4">
              <Input 
                placeholder="Enter location, area or property name"
                className="flex-1 h-12 text-base"
              />
              <Button type="submit" className="md:w-auto w-full h-12 px-8 bg-[#c27b43] hover:bg-[#b06b33] text-base">
                <Search className="h-4 w-4 mr-2" />
                {`Find ${listingType === "land" ? "Land" : "Homes"}`}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
