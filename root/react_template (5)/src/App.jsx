import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'antd/dist/reset.css'; // Import Ant Design styles

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

// Auth Components
import AuthModal from './components/AuthModal';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState('login'); // 'login' or 'signup'

  useEffect(() => {
    // Simulate loading to ensure smooth animations
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    // Add global function to open auth modal from anywhere
    window.openHomivoAuth = openAuthModal;
  }, []);

  const openAuthModal = (type = 'login') => {
    setAuthType(type);
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
  };

  // Create a global access point for opening the auth modal
  window.openHomivoAuth = openAuthModal;

  const LandingPage = () => {
    return (
      <>
        <Navbar onLoginClick={() => openAuthModal('login')} onSignupClick={() => openAuthModal('signup')} />
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
          <CallToAction onSignupClick={() => openAuthModal('signup')} />
        </main>
        <Footer />
        <AuthModal 
          open={authModalOpen} 
          onClose={closeAuthModal} 
          initialTab={authType}
        />

        {/* Floating login button for mobile and all screens */}
        <div className="fixed bottom-6 right-6 z-50">
          <button 
            onClick={() => openAuthModal('login')}
            className="bg-indigo-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-700 transition-colors"
          >
            <i className="fas fa-user text-lg"></i>
          </button>
        </div>
      </>
    );
  };

  return (
    <div className={`min-h-screen font-sans ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <Router>
        <Routes>
          <Route path="/*" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;