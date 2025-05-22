
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export interface PropertyProps {
  id: string;
  title: string;
  price: number;
  location: string;
  type: "house" | "apartment" | "land";
  listing: "sale" | "rent" | "lease";
  beds?: number;
  baths?: number;
  area: number;
  image: string;
  contactNumber: string;
  isFeatured?: boolean;
  index: number;
}

const PropertyCard = ({
  id,
  title,
  price,
  location,
  type,
  listing,
  beds,
  baths,
  area,
  image,
  contactNumber,
  isFeatured = false,
  index,
}: PropertyProps) => {
  // Format price with commas
  const formattedPrice = price.toLocaleString();
  const [isSaved, setIsSaved] = useState(false);
  
  // Calculate animation delay based on index
  const animationDelay = `${(index % 8) * 100}ms`;

  const handleSaveProperty = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSaved(!isSaved);
    toast(
      isSaved ? "Property removed from saved items" : "Property saved to your list",
      {
        description: isSaved ? "You can add it again anytime" : "View all saved properties in your account",
      }
    );
  };

  return (
    <div
      className="property-card bg-white rounded-xl overflow-hidden shadow-md hover-lift"
      style={{ animationDelay }}
    >
      {/* Property Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-0 inset-x-0 p-3 flex justify-between items-center">
          <Badge
            variant="secondary"
            className="capitalize font-medium shadow-md backdrop-blur-sm bg-white/80"
          >
            For {listing}
          </Badge>
          
          <Button 
            variant="outline" 
            size="icon" 
            className={`rounded-full h-8 w-8 ${isSaved ? 'bg-primary text-white' : 'bg-white/80 backdrop-blur-sm'} shadow-md`}
            onClick={handleSaveProperty}
          >
            <Heart className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
          </Button>
        </div>
        
        {isFeatured && (
          <Badge
            variant="default"
            className="absolute bottom-3 right-3 bg-accent text-white shadow-md"
          >
            Featured
          </Badge>
        )}
      </div>

      {/* Property Details */}
      <div className="p-5">
        <div className="flex flex-col">
          <p className="text-xl font-bold text-foreground">${formattedPrice}
            <span className="text-sm font-normal text-muted-foreground ml-1">
              {listing === "rent" || listing === "lease" ? "/month" : ""}
            </span>
          </p>
          <h3 className="font-medium text-lg mt-1 line-clamp-1">{title}</h3>
          <p className="text-muted-foreground text-sm mt-1">{location}</p>
        </div>

        {/* Property Specs */}
        <div className="flex items-center mt-4 text-sm text-muted-foreground">
          {type !== "land" && beds !== undefined && (
            <div className="flex items-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>{beds} Beds</span>
            </div>
          )}
          {type !== "land" && baths !== undefined && (
            <div className="flex items-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{baths} Baths</span>
            </div>
          )}
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
              />
            </svg>
            <span>{area} {type === "land" ? "acres" : "sq.ft"}</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
          <div>
            <span className="text-xs text-muted-foreground">Contact:</span>
            <p className="font-medium">{contactNumber}</p>
          </div>
          <Button variant="outline" size="sm" asChild className="rounded-full px-4">
            <Link to={`/property/${id}`}>
              View Details
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
