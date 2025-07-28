import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-gray-800">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay updated with new listings</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter to receive the latest updates on accommodation options and special offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-900 border-gray-700 text-white"
              />
              <Button type="submit" className="w-full sm:w-auto">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-white flex items-center">
              <img 
                src="/images/Logo.jpg" 
                alt="Homivo" 
                className="h-8 w-auto mr-2" 
              />
              <span>Homivo</span>
            </Link>
            <p className="text-gray-400">
              Your trusted platform for finding the perfect accommodation tailored to your needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-primary transition-colors">Features</a>
              </li>
              <li>
                <a href="#accommodation" className="text-gray-400 hover:text-primary transition-colors">Browse Accommodation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">List Your Property</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-primary transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Tenant Guides</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Property Owner Resources</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary mt-1 mr-3"></i>
                <span>123 Tech Park, Koramangala, Bangalore, Karnataka 560034</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt text-primary mt-1 mr-3"></i>
                <span>(+91) 9876543210</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope text-primary mt-1 mr-3"></i>
                <span>support@homivo.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock text-primary mt-1 mr-3"></i>
                <span>Mon - Sat: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-gray-800" />
        
        {/* Copyright */}
        <div className="py-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Homivo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}