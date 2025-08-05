import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Accommodation from "@/components/sections/Accommodation";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import CallToAction from "@/components/sections/CallToAction";
import { useEffect } from "react";

interface HomePageProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
}

export default function HomePage({ onLoginClick, onSignupClick }: HomePageProps) {
  useEffect(() => {
    document.title = "Homivo - Find Your Perfect Accommodation";
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar onLoginClick={onLoginClick} onSignupClick={onSignupClick} />
      <Hero />
      <Features />
      <Accommodation />
      <Testimonials />
      <Contact />
      <CallToAction />
      <Footer />
    </main>
  );
}