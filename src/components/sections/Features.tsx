import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Features() {
  const features = [
    {
      id: 1,
      title: "Verified Listings",
      description: "Every property on Homivo is verified by our team to ensure authenticity and accuracy of information.",
      icon: "fa-check-circle",
      color: "from-green-500 to-emerald-700",
    },
    {
      id: 2,
      title: "Digital Agreements",
      description: "Create, sign, and manage rental agreements digitally without the hassle of paperwork.",
      icon: "fa-file-signature",
      color: "from-blue-500 to-indigo-700",
    },
    {
      id: 3,
      title: "Secure Payments",
      description: "Process rent payments securely through our platform with complete transparency and automatic receipts.",
      icon: "fa-shield-alt",
      color: "from-purple-500 to-purple-800",
    },
    {
      id: 4,
      title: "Virtual Tours",
      description: "Explore properties from the comfort of your home with high-quality photos and virtual tours.",
      icon: "fa-vr-cardboard",
      color: "from-yellow-500 to-amber-700",
    },
    {
      id: 5,
      title: "Price Comparison",
      description: "Compare similar properties in the same area to ensure you're getting the best value for your money.",
      icon: "fa-balance-scale",
      color: "from-pink-500 to-rose-700",
    },
    {
      id: 6,
      title: "Tenant Verification",
      description: "For property owners, we provide comprehensive tenant verification services for peace of mind.",
      icon: "fa-user-shield",
      color: "from-cyan-500 to-teal-700",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Everything you need for hassle-free accommodation
          </p>
          <p className="mt-5 text-xl text-muted-foreground">
            Homivo simplifies the entire process from finding a property to moving in and managing your stay.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>

        <div className="mt-16 bg-primary/5 rounded-2xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold mb-4">For Property Owners</h3>
              <p className="text-lg text-muted-foreground mb-6">
                List your property on Homivo and connect with thousands of verified tenants. Our platform handles 
                advertising, tenant screening, agreements, and payment processing to make property management effortless.
              </p>
              <ul className="space-y-3">
                {[
                  "Quick and easy listing process",
                  "Tenant verification and screening",
                  "Digital rent collection",
                  "Legal support and documentation",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-2"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button size="lg">
                  List Your Property
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0 w-full max-w-md">
              <img 
                src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Property Management" 
                className="rounded-lg shadow-lg w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  feature: {
    id: number;
    title: string;
    description: string;
    icon: string;
    color: string;
  };
  index: number;
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <Card 
      className={cn(
        "overflow-hidden border-none shadow-lg group hover:shadow-xl transition-all duration-300",
        "animate-in zoom-in",
        index === 0 ? "delay-100" : "",
        index === 1 ? "delay-200" : "",
        index === 2 ? "delay-300" : "",
        index === 3 ? "delay-400" : "",
        index === 4 ? "delay-500" : "",
        index === 5 ? "delay-600" : ""
      )}
    >
      <CardContent className="p-6">
        <div className="h-14 w-14 rounded-full mb-6 flex items-center justify-center bg-gradient-to-br group-hover:scale-110 transition-transform duration-300">
          <div className={`h-14 w-14 rounded-full flex items-center justify-center bg-gradient-to-br ${feature.color}`}>
            <i className={`fas ${feature.icon} text-white text-xl`}></i>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
        <p className="text-muted-foreground">{feature.description}</p>
      </CardContent>
    </Card>
  );
}