
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

  // Calculate animation delay based on index
  const animationDelay = `${(index % 8) * 100}ms`;

  return (
    <div
      className="property-card property-card-hover bg-white rounded-lg overflow-hidden shadow-md"
      style={{ animationDelay }}
    >
      {/* Property Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <Badge
          variant="secondary"
          className="absolute top-2 left-2 capitalize font-semibold"
        >
          For {listing}
        </Badge>
        {isFeatured && (
          <Badge
            variant="default"
            className="absolute top-2 right-2 bg-accent text-white"
          >
            Featured
          </Badge>
        )}
      </div>

      {/* Property Details */}
      <div className="p-4">
        <p className="text-xl font-bold text-foreground">${formattedPrice}</p>
        <h3 className="font-medium text-lg mt-1">{title}</h3>
        <p className="text-muted-foreground text-sm mt-1">{location}</p>

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
          <Button variant="outline" size="sm" asChild>
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
