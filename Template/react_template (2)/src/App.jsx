import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Landing Page Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Accommodation from './components/Accommodation';
import HowItWorks from './components/HowItWorks';
import Stats from './components/Stats';
import MobileApp from './components/MobileApp';
import PropertyOwners from './components/PropertyOwners';
import Security from './components/Security';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Faq from './components/Faq';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

// Auth Pages
import Login from './pages/Login';
import Signup from './pages/Signup';

// Main Layout for Landing Page
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Accommodation />
        <Stats />
        <MobileApp />
        <PropertyOwners />
        <Security />
        <Testimonials />
        <Partners />
        <Faq />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading to ensure smooth animations
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  return (
    <div className={`min-h-screen font-sans ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;