
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Phone, MapPin, Ruler, BedDouble, Bath, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PropertyProps } from "@/components/PropertyCard";
import { toast } from "sonner";

// Mock data for a single property (in a real app, this would come from an API)
const propertyData: Record<string, PropertyProps> = {
  "prop1": {
    id: "prop1",
    title: "Modern Villa with Ocean View",
    price: 850000,
    location: "Malibu, California",
    type: "house",
    listing: "sale",
    beds: 4,
    baths: 3,
    area: 2800,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    contactNumber: "555-123-4567",
    isFeatured: true,
    index: 0,
  },
  "prop2": {
    id: "prop2",
    title: "Downtown Luxury Apartment",
    price: 450000,
    location: "San Francisco, California",
    type: "apartment",
    listing: "sale",
    beds: 2,
    baths: 2,
    area: 1200,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    contactNumber: "555-987-6543",
    isFeatured: false,
    index: 1,
  },
  "prop3": {
    id: "prop3",
    title: "Commercial Office Space",
    price: 12500,
    location: "Los Angeles, California",
    type: "house",
    listing: "lease",
    beds: undefined,
    baths: 2,
    area: 3500,
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    contactNumber: "555-456-7890",
    isFeatured: true,
    index: 2,
  },
  "prop4": {
    id: "prop4",
    title: "Beachfront Land Plot",
    price: 650000,
    location: "Santa Monica, California",
    type: "land",
    listing: "sale",
    area: 5,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    contactNumber: "555-789-0123",
    isFeatured: false,
    index: 3,
  },
  "prop5": {
    id: "prop5",
    title: "Cozy Studio for Rent",
    price: 1800,
    location: "Berkeley, California",
    type: "apartment",
    listing: "rent",
    beds: 1,
    baths: 1,
    area: 650,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    contactNumber: "555-321-0987",
    isFeatured: true,
    index: 4,
  }
};

const PropertyViewPage = () => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState<PropertyProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    // In a real app, this would be an API call
    setTimeout(() => {
      if (propertyId && propertyData[propertyId]) {
        setProperty(propertyData[propertyId]);
      }
      setIsLoading(false);
    }, 500); // Simulate API delay
  }, [propertyId]);

  const handleSaveProperty = () => {
    setIsSaved(!isSaved);
    toast(isSaved ? "Property removed from saved items" : "Property saved to your list", {
      description: isSaved ? "You can add it again anytime" : "View all saved properties in your account",
      action: {
        label: "View",
        onClick: () => console.log("View saved properties"),
      },
    });
  };

  const handleContactOwner = () => {
    toast.success("Contact request sent!", {
      description: "The property owner will get back to you shortly.",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 pt-24 pb-16">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="h-96 bg-gray-200 rounded"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="h-40 bg-gray-200 rounded col-span-2"></div>
              <div className="h-40 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 pt-24 pb-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Property Not Found</h2>
          <p className="mb-6">We couldn't find the property you're looking for.</p>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const { title, price, location, type, listing, beds, baths, area, image, contactNumber } = property;
  const formattedPrice = price.toLocaleString();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16 animate-fade-in">
        {/* Back button and title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" asChild>
              <Link to={`/${listing}`} className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" /> Back to listings
              </Link>
            </Button>
            <Badge variant="secondary" className="capitalize">
              For {listing}
            </Badge>
          </div>
          <Button 
            variant={isSaved ? "default" : "outline"} 
            size="sm" 
            onClick={handleSaveProperty}
            className="flex items-center gap-1"
          >
            <Heart className={`h-4 w-4 ${isSaved ? "fill-white" : ""}`} /> 
            {isSaved ? "Saved" : "Save Property"}
          </Button>
        </div>

        {/* Property title and price */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-2">{title}</h1>
          <div className="flex items-center text-muted-foreground mb-2">
            <MapPin className="h-4 w-4 mr-1" /> {location}
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-primary">
            ${formattedPrice} 
            <span className="text-lg text-muted-foreground ml-1">
              {listing === "rent" || listing === "lease" ? "/month" : ""}
            </span>
          </p>
        </div>

        {/* Property image */}
        <div className="mb-8">
          <div className="rounded-lg overflow-hidden w-full h-[300px] sm:h-[400px] md:h-[500px]">
            <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>

        {/* Property details and contact card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Details */}
          <div className="col-span-2 space-y-8">
            <div className="bg-background p-6 rounded-lg border shadow-sm animate-fade-in" style={{ animationDelay: '100ms' }}>
              <h2 className="text-xl font-semibold mb-4">Property Details</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {type !== "land" && beds !== undefined && (
                  <div className="flex items-center p-4 bg-muted/50 rounded-md">
                    <BedDouble className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <p className="font-medium">{beds}</p>
                      <p className="text-sm text-muted-foreground">Bedrooms</p>
                    </div>
                  </div>
                )}
                
                {type !== "land" && baths !== undefined && (
                  <div className="flex items-center p-4 bg-muted/50 rounded-md">
                    <Bath className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <p className="font-medium">{baths}</p>
                      <p className="text-sm text-muted-foreground">Bathrooms</p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center p-4 bg-muted/50 rounded-md">
                  <Ruler className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="font-medium">{area}</p>
                    <p className="text-sm text-muted-foreground">{type === "land" ? "acres" : "sq.ft"}</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-medium mb-2">Description</h3>
              <p className="text-muted-foreground mb-4">
                {type === "land" 
                  ? `This beautiful ${area}-acre land is located in the prime area of ${location}. Perfect for development, with utilities nearby and zoning appropriate for residential construction.`
                  : `Experience luxury living in this beautiful ${beds}-bedroom, ${baths}-bathroom property located in the heart of ${location}. With ${area} square feet of living space, this ${type} offers comfort and style.`
                }
              </p>
              
              <h3 className="text-lg font-medium mb-2">Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-4">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                  {type === "land" ? "Prime location" : "Central heating"}
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                  {type === "land" ? "Road access" : "Air conditioning"}
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                  {type === "land" ? "Beautiful views" : "High-speed internet"}
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                  {type === "land" ? "Cleared land" : "Modern appliances"}
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                  {type === "land" ? "Utilities nearby" : "Hardwood floors"}
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                  {type === "land" ? "Development potential" : "Walk-in closets"}
                </li>
              </ul>
            </div>
            
            <div className="bg-background p-6 rounded-lg border shadow-sm animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h2 className="text-xl font-semibold mb-4">Location</h2>
              <div className="bg-muted h-64 rounded-md flex items-center justify-center mb-3">
                <p className="text-muted-foreground">Map view of {location}</p>
              </div>
              <p className="text-muted-foreground">
                Located in {location}, this property offers easy access to shopping, dining, and entertainment options.
              </p>
            </div>
          </div>

          {/* Contact card */}
          <div className="col-span-1 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{contactNumber}</p>
                    <p className="text-sm text-muted-foreground">Property Owner</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button className="w-full" onClick={handleContactOwner}>
                    Request a Tour
                  </Button>
                  <Button variant="outline" className="w-full">
                    Message Owner
                  </Button>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-muted-foreground mb-2">Share this property:</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Email
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyViewPage;
