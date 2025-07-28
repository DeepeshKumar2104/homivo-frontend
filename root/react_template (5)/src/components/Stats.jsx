import { useState, useEffect } from 'react';

export default function Stats() {
  // Animation for counting up stats
  const [counts, setCounts] = useState({
    listings: 0,
    users: 0,
    cities: 0,
    bookings: 0
  });
  
  const targetCounts = {
    listings: 5000,
    users: 125000,
    cities: 50,
    bookings: 75000
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds animation
    const frameRate = 50; // Update stats 50 times per second
    const totalFrames = duration / (1000 / frameRate);
    let frame = 0;
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const timer = setInterval(() => {
          frame++;
          
          const progress = frame / totalFrames;
          
          if (frame <= totalFrames) {
            setCounts({
              listings: Math.round(targetCounts.listings * progress),
              users: Math.round(targetCounts.users * progress),
              cities: Math.round(targetCounts.cities * progress),
              bookings: Math.round(targetCounts.bookings * progress)
            });
          } else {
            setCounts(targetCounts);
            clearInterval(timer);
          }
        }, 1000 / frameRate);
        
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    const statsSection = document.querySelector('#stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="stats-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Impact</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Trusted by thousands across the country
          </p>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-500">
            Join India's fastest growing accommodation platform
          </p>
        </div>

        <div className="bg-gradient-to-r from-indigo-800 to-purple-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-indigo-500/30 divide-y md:divide-y-0">
            <div className="p-8 md:p-12 flex flex-col items-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
                {counts.listings.toLocaleString()}+
              </div>
              <p className="text-indigo-200 text-center">Verified Listings</p>
            </div>
            
            <div className="p-8 md:p-12 flex flex-col items-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
                {counts.users.toLocaleString()}+
              </div>
              <p className="text-indigo-200 text-center">Happy Users</p>
            </div>
            
            <div className="p-8 md:p-12 flex flex-col items-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
                {counts.cities.toLocaleString()}+
              </div>
              <p className="text-indigo-200 text-center">Cities Covered</p>
            </div>
            
            <div className="p-8 md:p-12 flex flex-col items-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
                {counts.bookings.toLocaleString()}+
              </div>
              <p className="text-indigo-200 text-center">Successful Bookings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}