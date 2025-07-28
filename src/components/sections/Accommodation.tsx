import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Accommodation() {
  const accommodationTypes = ["All", "Apartment", "PG", "Hostel", "Co-living"];
  const [activeTab, setActiveTab] = useState("All");

  // Properties data (in a real app, this would come from an API)
  const properties = [
    {
      id: 1,
      title: "Modern Studio Apartment",
      type: "Apartment",
      location: "Koramangala, Bangalore",
      price: "₹16,000",
      beds: 1,
      baths: 1,
      area: "450 sq ft",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.8,
      reviews: 24,
      featured: true
    },
    {
      id: 2,
      title: "Deluxe PG Accommodation",
      type: "PG",
      location: "HSR Layout, Bangalore",
      price: "₹9,500",
      beds: 1,
      baths: "Shared",
      area: "Single Room",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.5,
      reviews: 18,
      featured: false
    },
    {
      id: 3,
      title: "Student Friendly Hostel",
      type: "Hostel",
      location: "Yelahanka, Bangalore",
      price: "₹7,000",
      beds: 1,
      baths: "Shared",
      area: "Shared Room",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.2,
      reviews: 35,
      featured: false
    },
    {
      id: 4,
      title: "Premium Co-living Space",
      type: "Co-living",
      location: "Indiranagar, Bangalore",
      price: "₹14,500",
      beds: 1,
      baths: "Private",
      area: "Private Room",
      image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.7,
      reviews: 42,
      featured: true
    },
    {
      id: 5,
      title: "Spacious 2BHK Apartment",
      type: "Apartment",
      location: "Whitefield, Bangalore",
      price: "₹22,000",
      beds: 2,
      baths: 2,
      area: "950 sq ft",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.9,
      reviews: 15,
      featured: false
    },
    {
      id: 6,
      title: "Affordable PG for Students",
      type: "PG",
      location: "BTM Layout, Bangalore",
      price: "₹8,000",
      beds: 1,
      baths: "Shared",
      area: "Single Room",
      image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.3,
      reviews: 29,
      featured: false
    }
  ];

  const filteredProperties = activeTab === "All" 
    ? properties 
    : properties.filter(property => property.type === activeTab);

  return (
    <section id="accommodation" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Accommodation</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Discover your perfect space
          </p>
          <p className="mt-5 text-xl text-muted-foreground">
            Browse through a wide range of accommodation options tailored to meet your needs and budget.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Tabs defaultValue="All" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              {accommodationTypes.map((type) => (
                <TabsTrigger key={type} value={type} className="text-sm md:text-base">
                  {type}
                </TabsTrigger>
              ))}
            </TabsList>

            {accommodationTypes.map((type) => (
              <TabsContent key={type} value={type} className="mt-0 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
                
                <div className="flex justify-center mt-12">
                  <Button variant="outline">
                    View All {type !== "All" ? type : ""} Properties
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold mb-8">Featured Properties</h3>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex space-x-4 pb-4">
              {properties.filter(p => p.featured).map((property) => (
                <div key={property.id} className="w-[320px]">
                  <PropertyCard property={property} />
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </section>
  );
}

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    type: string;
    location: string;
    price: string;
    beds: number;
    baths: string | number;
    area: string;
    image: string;
    rating: number;
    reviews: number;
    featured?: boolean;
  };
}

function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-border/40 h-full flex flex-col">
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden h-48">
          <img 
            src={property.image} 
            alt={property.title} 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <Badge 
          variant="default" 
          className="absolute top-3 left-3 bg-primary text-white"
        >
          {property.type}
        </Badge>
        {property.featured && (
          <Badge 
            variant="secondary" 
            className="absolute top-3 right-3 bg-yellow-500/90 text-white"
          >
            Featured
          </Badge>
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold line-clamp-1">{property.title}</h3>
            <p className="text-muted-foreground text-sm flex items-center mt-1">
              <i className="fas fa-map-marker-alt mr-1"></i> {property.location}
            </p>
          </div>
          <div className="flex items-center bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">
            <i className="fas fa-star mr-1 text-yellow-500"></i>
            {property.rating}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex justify-between text-sm text-muted-foreground mt-2">
          <div className="flex items-center">
            <i className="fas fa-bed mr-1"></i>
            <span>{property.beds} {property.beds > 1 ? 'Beds' : 'Bed'}</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-bath mr-1"></i>
            <span>{property.baths} {typeof property.baths === 'number' && property.baths > 1 ? 'Baths' : 'Bath'}</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-vector-square mr-1"></i>
            <span>{property.area}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-2 border-t">
        <p className="font-bold text-lg">
          {property.price}<span className="text-muted-foreground text-sm font-normal">/month</span>
        </p>
        <Button variant="secondary" size="sm">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}