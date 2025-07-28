import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ onLoginClick, onSignupClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-3xl font-bold">
              <Link to="/" className={`${scrolled ? 'text-indigo-600' : 'text-white'} flex items-center`}>
                <i className="fas fa-home mr-2"></i>
                <span>Homivo</span>
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-indigo-600 transition-colors font-medium`}>Features</a>
            <a href="#accommodation" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-indigo-600 transition-colors font-medium`}>Accommodation</a>
            <a href="#testimonials" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-indigo-600 transition-colors font-medium`}>Testimonials</a>
            <a href="#contact" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-indigo-600 transition-colors font-medium`}>Contact</a>
            <div className="flex items-center space-x-4">
              <button 
                onClick={onLoginClick}
                className={`${scrolled ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'} px-5 py-2 rounded-lg font-medium transition-colors hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
              >
                Login
              </button>
              <button 
                onClick={onSignupClick}
                className={`${scrolled ? 'bg-white text-indigo-600 border border-indigo-600' : 'bg-indigo-600 text-white'} px-5 py-2 rounded-lg font-medium transition-colors hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
              >
                Sign Up
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${scrolled ? 'text-gray-800' : 'text-white'} focus:outline-none`}
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#accommodation" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Accommodation</a>
              <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    onLoginClick();
                  }}
                  className="w-full bg-indigo-600 text-white px-5 py-2 rounded-lg font-medium transition-colors hover:bg-indigo-700"
                >
                  Login
                </button>
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    onSignupClick();
                  }}
                  className="w-full bg-white text-indigo-600 border border-indigo-600 px-5 py-2 rounded-lg font-medium transition-colors hover:bg-gray-100"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}