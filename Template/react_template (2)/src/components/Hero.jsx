export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 pt-24 pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left lg:flex lg:flex-col lg:justify-center">
            <div className="mt-4 sm:mt-8 animate-in slide-in-from-left duration-1000">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block">Find Your Perfect</span>
                <span className="block text-indigo-400 mt-1">Accommodation</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Homivo connects tenants with the perfect accommodation - from apartments and PGs to hostels and co-living spaces. Secure, transparent, and tailored to your needs.
              </p>
              
              <div className="mt-8 sm:mt-12">
                <form className="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <div className="sm:flex bg-white p-1 rounded-lg shadow-xl">
                    <div className="min-w-0 flex-1">
                      <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i className="fas fa-search text-gray-400"></i>
                        </div>
                        <input 
                          type="text" 
                          className="block w-full pl-10 pr-3 py-3 border-0 rounded-md focus:ring-0 focus:outline-none sm:text-sm" 
                          placeholder="Search by location, property type..."
                        />
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button type="submit" className="block w-full bg-indigo-600 py-3 px-6 border border-transparent rounded-md shadow text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
                        Search
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-5 flex flex-wrap gap-3 justify-center sm:justify-start text-sm text-white">
                    <span className="px-3 py-1 bg-indigo-700 bg-opacity-60 rounded-full">Apartments</span>
                    <span className="px-3 py-1 bg-indigo-700 bg-opacity-60 rounded-full">PG Accommodation</span>
                    <span className="px-3 py-1 bg-indigo-700 bg-opacity-60 rounded-full">Co-living Spaces</span>
                    <span className="px-3 py-1 bg-indigo-700 bg-opacity-60 rounded-full">Student Hostels</span>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center lg:justify-start space-x-6 text-sm text-white animate-in slide-in-from-bottom duration-1000 delay-300">
              <div className="flex items-center">
                <i className="fas fa-check-circle text-green-400 mr-2"></i>
                <span>Verified Listings</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-shield-alt text-green-400 mr-2"></i>
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-headset text-green-400 mr-2"></i>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-5 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md animate-in fade-in slide-in-from-right duration-1000 delay-200">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <img className="w-full" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Modern apartment interior" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button type="button" className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-600 bg-opacity-75 hover:bg-opacity-100 transition-opacity">
                    <i className="fas fa-play text-white text-xl"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <div className="w-full h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
      </div>
    </div>
  );
}