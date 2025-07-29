import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function Hero() {
  const [propertyType, setPropertyType] = useState("any");
  
  return (
    <section id="hero" className="relative bg-gradient-to-br from-primary to-indigo-800 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern/Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-white rounded-full -translate-y-1/4 translate-x-1/3 blur-3xl"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-y-1/4 -translate-x-1/3 blur-3xl"></div>
      </div>
      
      {/* Floating Buildings Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-white" 
            style={{
              width: Math.random() * 60 + 40 + 'px',
              height: Math.random() * 120 + 80 + 'px',
              left: Math.random() * 90 + 5 + '%',
              bottom: Math.random() * 40 + 5 + '%',
              opacity: Math.random() * 0.5 + 0.2,
            }}
          ></div>
        ))}
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Column - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Find Your Perfect <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">Accommodation</span> with Ease
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-white/90 max-w-xl mx-auto lg:mx-0">
              Discover apartments, PGs, hostels, and co-living spaces with verified listings, transparent payments, and hassle-free agreements.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 transition-colors hover:bg-white/10"
              >
                Browse Accommodations
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-primary hover:bg-white/90 transition-colors hover:bg-white/10"
              >
                List Your Property
              </Button>
            </div>
            
            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { value: "10,000+", label: "Listed Properties" },
                { value: "50+", label: "Cities Covered" },
                { value: "20,000+", label: "Happy Users" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm md:text-base text-white/70 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Search Card */}
          <div className="flex-1 w-full max-w-md lg:max-w-lg">
            <Card className="shadow-xl bg-white/95 backdrop-blur border-2 border-primary/10">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold text-center mb-6 text-primary">Find Your New Home</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Location</label>
                    <Input 
                      placeholder="City, Area or Landmark" 
                      className="h-12 text-base border-2 focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Property Type</label>
                      <Select value={propertyType} onValueChange={setPropertyType}>
                        <SelectTrigger className="h-12 border-2 focus:ring-2 focus:ring-primary/30">
                          <SelectValue placeholder="Any Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any Type</SelectItem>
                          <SelectItem value="apartment">Apartment</SelectItem>
                          <SelectItem value="pg">PG</SelectItem>
                          <SelectItem value="hostel">Hostel</SelectItem>
                          <SelectItem value="coliving">Co-living</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Budget</label>
                      <Select defaultValue="any">
                        <SelectTrigger className="h-12 border-2 focus:ring-2 focus:ring-primary/30">
                          <SelectValue placeholder="Any Budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any Budget</SelectItem>
                          <SelectItem value="low">Under ₹10,000</SelectItem>
                          <SelectItem value="mid">₹10,000 - ₹20,000</SelectItem>
                          <SelectItem value="high">Above ₹20,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Amenities</label>
                    <div className="flex flex-wrap gap-2">
                      {['WiFi', 'AC', 'Furnished', 'Food', 'Security'].map((amenity, index) => (
                        <Button 
                          key={index} 
                          variant="outline" 
                          size="sm" 
                          className="rounded-full bg-gray-50 hover:bg-primary/10 hover:text-primary border-gray-200"
                        >
                          {amenity}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4 h-12 text-base font-semibold" size="lg">
                    <i className="fas fa-search mr-2"></i>
                    Search Properties
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6 text-center">
              <p className="text-white text-base font-medium mb-2">Trusted by students, working professionals & families</p>
              {/* <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent transition-colors w-full mt-2"
              >
                <i className="fas fa-home mr-2"></i>
                List Your Property
              </Button> */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-8">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-background">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>
    </section>
  );
}