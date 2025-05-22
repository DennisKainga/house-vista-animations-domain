
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const propertyItems = [
  {
    id: 1,
    title: "Modern Villa Retreat",
    location: "Lavington, Nairobi",
    price: "$2,450,000",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bedrooms: 5,
    bathrooms: 4,
    area: 4200,
    tag: "FEATURED"
  },
  {
    id: 2,
    title: "Elegant Apartment",
    location: "Westlands, Nairobi",
    price: "$850,000",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bedrooms: 2,
    bathrooms: 2,
    area: 1400,
    tag: "POPULAR"
  },
  {
    id: 3,
    title: "Luxury Penthouse",
    location: "Kilimani, Nairobi",
    price: "$1,750,000",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bedrooms: 3,
    bathrooms: 3,
    area: 2800,
    tag: "NEW"
  },
  {
    id: 4,
    title: "Luxury Villa with Pool",
    location: "Karen, Nairobi",
    price: "$3,250,000",
    image: "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bedrooms: 6,
    bathrooms: 5,
    area: 5200,
    tag: "FEATURED"
  },
  {
    id: 5,
    title: "Modern Studio",
    location: "Parklands, Nairobi",
    price: "$450,000",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    tag: "POPULAR"
  },
  {
    id: 6,
    title: "Garden Estate Home",
    location: "Runda, Nairobi",
    price: "$1,950,000",
    image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bedrooms: 4,
    bathrooms: 3,
    area: 3600,
    tag: "NEW"
  },
];

const BuyerSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-display mb-10">
          For buyers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertyItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 object-cover"
                />
                <Badge 
                  className="absolute top-4 right-4 bg-[#c27b43] text-white font-medium"
                >
                  {item.tag}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-500 mb-4">{item.location}</p>
                <p className="text-2xl font-bold text-[#102341] mb-6">{item.price}</p>
                
                <div className="flex items-center justify-between text-gray-600 border-t border-gray-100 pt-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>{item.bedrooms} beds</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span>{item.bathrooms} baths</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                    </svg>
                    <span>{item.area} sq ft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button asChild className="bg-[#c27b43] hover:bg-[#b06b33] px-8 py-6 h-auto text-base">
            <Link to="/buy">
              Browse All Properties <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BuyerSection;
