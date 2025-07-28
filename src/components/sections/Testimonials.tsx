import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    content: "Homivo made finding my student accommodation incredibly easy. The verified listings gave me peace of mind, and I found an affordable PG near my college within days!",
    author: "Priya Sharma",
    role: "Student",
    avatar: "PS",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    content: "As a property owner, I was amazed at how quickly I found quality tenants through Homivo. The digital agreement feature saved us so much time and paperwork.",
    author: "Rajesh Kumar",
    role: "Property Owner",
    avatar: "RK",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    content: "The co-living space I found through Homivo exceeded my expectations. The photos and descriptions were accurate, and the payment system made everything transparent.",
    author: "Aisha Patel",
    role: "Working Professional",
    avatar: "AP",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 4,
    content: "Moving to a new city was stressful, but Homivo simplified finding accommodation. Their customer support helped me every step of the way. Highly recommended!",
    author: "Vikram Singh",
    role: "IT Professional",
    avatar: "VS",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            What our users say
          </p>
          <p className="mt-5 text-xl text-muted-foreground">
            Join thousands of satisfied users who found their perfect accommodation through Homivo
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              className={cn(
                "animate-in zoom-in",
                index === 0 ? "delay-100" : "",
                index === 1 ? "delay-200" : "",
                index === 2 ? "delay-300" : "",
                index === 3 ? "delay-400" : ""
              )}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-primary">
            <span className="text-lg font-medium">4.8</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <i key={star} className="fas fa-star text-yellow-500"></i>
              ))}
            </div>
            <span className="text-muted-foreground">from 200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: {
    id: number;
    content: string;
    author: string;
    role: string;
    avatar: string;
    image?: string;
  };
  className?: string;
}

function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <Card className={cn(
      "bg-card border-border/40 hover:shadow-md transition-shadow relative overflow-hidden",
      className
    )}>
      <CardContent className="pt-6">
        <div className="absolute top-4 left-4">
          <i className="fas fa-quote-left text-3xl text-primary/20"></i>
        </div>
        
        <p className="text-muted-foreground italic pt-6 relative z-10">
          "{testimonial.content}"
        </p>
        
        <div className="mt-6 flex items-center">
          <Avatar className="h-10 w-10 mr-4 border-2 border-primary/20">
            {testimonial.image ? (
              <AvatarImage src={testimonial.image} alt={testimonial.author} />
            ) : null}
            <AvatarFallback className="bg-primary/10 text-primary">
              {testimonial.avatar}
            </AvatarFallback>
          </Avatar>
          
          <div>
            <p className="text-sm font-semibold">{testimonial.author}</p>
            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}