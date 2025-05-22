
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import PropertyModel from "./3D/PropertyModel";

const HeroSection = () => {
  const [listingType, setListingType] = useState("buy");

  return (
    <div className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/20"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="animate-fade-in animate-delay-100">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display mb-4">
              Find Your Perfect Property
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Discover houses, land and apartments for sale, rent or lease.
              Connect directly with property owners.
            </p>

            {/* Search Box */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              {/* Tabs */}
              <Tabs defaultValue="buy" className="mb-4" onValueChange={setListingType}>
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
                  className="flex-1"
                />
                <Button type="submit" className="md:w-auto w-full">
                  {`Find ${listingType === "land" ? "Land" : "Homes"}`}
                </Button>
              </div>
            </div>
          </div>

          {/* Right content - 3D Model */}
          <div className="hidden lg:block animate-fade-in animate-delay-200">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <PropertyModel />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-8 left-0 right-0 container mx-auto px-4">
        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in animate-delay-300">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">2,500+</p>
            <p className="text-sm text-gray-600">Properties Listed</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">1,200+</p>
            <p className="text-sm text-gray-600">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">500+</p>
            <p className="text-sm text-gray-600">Cities Covered</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">99%</p>
            <p className="text-sm text-gray-600">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
