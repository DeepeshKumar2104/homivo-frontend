import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavbarProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
}

export default function Navbar({ onLoginClick, onSignupClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navigationItems = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "Accommodation", href: "#accommodation" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];
  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            {/* <img
              src="/Favicon.png"
              alt="Homivo"
              className="h-8 w-auto"
            /> */}
            <span className={cn(
              "text-xl font-bold transition-colors",
              isScrolled 
                ? "text-gray-900 dark:text-white" 
                : "text-white"
            )}>
              Homivo
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isScrolled 
                    ? "text-gray-700 dark:text-gray-300" 
                    : "text-white/90 hover:text-white"
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant={isScrolled ? "outline" : "ghost"}
              onClick={onLoginClick}
              className={cn(
                "border-primary",
                !isScrolled && "text-white hover:text-white hover:bg-white/10"
              )}
            >
              Log In
            </Button>
            <Button
              onClick={onSignupClick}
              className={!isScrolled ? "bg-white text-primary hover:bg-white/90" : ""}
            >
              Sign Up
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "md:hidden",
                    !isScrolled && "text-white hover:bg-white/10"
                  )}
                >
                  <i className="fas fa-bars text-lg"></i>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="flex items-center">
                    <img
                      src="/images/HomivoLogo.png"
                      alt="Homivo"
                      className="h-8 w-auto mr-2"
                    />
                    Homivo
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium py-2 px-4 hover:bg-muted rounded-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  
                  <div className="pt-6 border-t border-border/30">
                    <Button
                      variant="outline"
                      onClick={() => {
                        onLoginClick();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full mb-3"
                    >
                      Log In
                    </Button>
                    <Button
                      onClick={() => {
                        onSignupClick();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full"
                    >
                      Sign Up
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}