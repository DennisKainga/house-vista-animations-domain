
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PropertyCard, { PropertyProps } from "./PropertyCard";

// Sample properties data
const properties: PropertyProps[] = [
  {
    id: "1",
    title: "Modern 3 Bedroom House",
    price: 350000,
    location: "123 Main St, Beverly Hills, CA",
    type: "house",
    listing: "sale",
    beds: 3,
    baths: 2,
    area: 1800,
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    contactNumber: "+1 (555) 123-4567",
    isFeatured: true,
    index: 0
  },
  {
    id: "2",
    title: "Luxury Apartment with Ocean View",
    price: 2500,
    location: "456 Ocean Ave, Miami, FL",
    type: "apartment",
    listing: "rent",
    beds: 2,
    baths: 2,
    area: 1200,
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    contactNumber: "+1 (555) 987-6543",
    isFeatured: true,
    index: 1
  },
  {
    id: "3",
    title: "Commercial Space in Downtown",
    price: 4500,
    location: "789 Business St, New York, NY",
    type: "apartment",
    listing: "lease",
    beds: 0,
    baths: 2,
    area: 2500,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    contactNumber: "+1 (555) 456-7890",
    isFeatured: false,
    index: 2
  },
  {
    id: "4",
    title: "Farmland with Mountain View",
    price: 125000,
    location: "Rural Route 5, Boulder, CO",
    type: "land",
    listing: "sale",
    area: 25,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    contactNumber: "+1 (555) 234-5678",
    isFeatured: false,
    index: 3
  },
  {
    id: "5",
    title: "Beachfront Condo",
    price: 3200,
    location: "101 Beach Blvd, San Diego, CA",
    type: "apartment",
    listing: "rent",
    beds: 1,
    baths: 1,
    area: 850,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    contactNumber: "+1 (555) 345-6789",
    isFeatured: true,
    index: 4
  },
  {
    id: "6",
    title: "Family Home with Large Backyard",
    price: 420000,
    location: "222 Suburban Dr, Austin, TX",
    type: "house",
    listing: "sale",
    beds: 4,
    baths: 3,
    area: 2200,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    contactNumber: "+1 (555) 876-5432",
    isFeatured: false,
    index: 5
  },
  {
    id: "7",
    title: "Development Land",
    price: 250000,
    location: "Future Growth Zone, Phoenix, AZ",
    type: "land",
    listing: "sale",
    area: 15,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    contactNumber: "+1 (555) 765-4321",
    isFeatured: false,
    index: 6
  },
  {
    id: "8",
    title: "Downtown Studio Apartment",
    price: 1800,
    location: "555 City Center, Chicago, IL",
    type: "apartment",
    listing: "rent",
    beds: 0,
    baths: 1,
    area: 600,
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    contactNumber: "+1 (555) 543-2109",
    isFeatured: true,
    index: 7
  }
];

const FeaturedProperties = () => {
  const [filter, setFilter] = useState("all");
  
  const filteredProperties = properties.filter(property => {
    if (filter === "all") return true;
    if (filter === "sale") return property.listing === "sale";
    if (filter === "rent") return property.listing === "rent";
    if (filter === "lease") return property.listing === "lease";
    if (filter === "land") return property.type === "land";
    return true;
  });

  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Featured Properties
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our selection of handpicked properties across various categories.
            Find the perfect home, rental, or land for your needs.
          </p>
        </div>

        {/* Filtering Tabs */}
        <div className="mb-8 flex justify-center">
          <Tabs defaultValue="all" onValueChange={setFilter}>
            <TabsList className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-0">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="sale">For Sale</TabsTrigger>
              <TabsTrigger value="rent">For Rent</TabsTrigger>
              <TabsTrigger value="lease">For Lease</TabsTrigger>
              <TabsTrigger value="land">Land</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Load More Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
