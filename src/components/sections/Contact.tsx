import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Get in touch with us
          </p>
          <p className="mt-5 text-xl text-muted-foreground">
            Have questions or need assistance? Our team is here to help you find the perfect accommodation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <ContactInfoCard
              icon="fa-phone-alt"
              title="Phone Support"
              details={["(+91) 9876543210", "Monday-Saturday, 9AM-6PM"]}
            />
            
            <ContactInfoCard
              icon="fa-envelope"
              title="Email Us"
              details={["support@homivo.com", "info@homivo.com"]}
            />
            
            <ContactInfoCard
              icon="fa-map-marker-alt"
              title="Office Location"
              details={["123 Tech Park, Koramangala", "Bangalore, Karnataka 560034"]}
            />
          </div>
          
          {/* Contact Form */}
          <Card className="col-span-1 lg:col-span-2 border border-border/40">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Enter subject" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Type your message here..." rows={4} />
                </div>
                
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        {/* Map Section */}
        <div className="mt-16 relative rounded-lg overflow-hidden h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9975588482097!2d77.6341115!3d12.9783334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17b842ee85dd%3A0x6247963f94f10fb4!2sKoramangala%2C%20Bengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1657013130396!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Homivo Office Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

interface ContactInfoCardProps {
  icon: string;
  title: string;
  details: string[];
}

function ContactInfoCard({ icon, title, details }: ContactInfoCardProps) {
  return (
    <Card className="border-border/40 hover:border-primary/30 transition-colors">
      <CardContent className="flex items-start pt-6">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
          <i className={`fas ${icon} text-primary`}></i>
        </div>
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <div className="mt-2 space-y-1">
            {details.map((detail, index) => (
              <p key={index} className="text-muted-foreground">{detail}</p>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}