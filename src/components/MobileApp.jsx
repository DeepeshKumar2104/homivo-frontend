export default function MobileApp() {
  return (
    <section id="mobile-app" className="py-20 bg-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="text-left">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Mobile Experience</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Take Homivo with you everywhere
              </p>
              <p className="mt-5 max-w-2xl text-xl text-gray-500">
                Our mobile app puts the power of Homivo in your pocket. Search, book, and manage your accommodations on the go.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <i className="fas fa-bell"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Real-time notifications</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Get instant updates about new listings, booking confirmations, and important communications.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Location-based search</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Find properties near your current location or explore accommodations in new areas easily.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <i className="fas fa-qrcode"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Digital key access</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Some properties offer digital key access directly through the Homivo app for seamless check-in.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 flex items-center space-x-6">
                <a href="#" className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  <i className="fab fa-apple text-lg mr-2"></i>
                  <span>App Store</span>
                </a>
                <a href="#" className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  <i className="fab fa-google-play text-lg mr-2"></i>
                  <span>Google Play</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs">
              {/* Phone frame */}
              <div className="relative z-10 overflow-hidden rounded-[3rem] shadow-xl border-8 border-gray-900">
                <img 
                  className="w-full" 
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" 
                  alt="Homivo mobile app interface"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/4 -left-20 w-40 h-40 bg-indigo-400 rounded-full opacity-20 filter blur-3xl animate-pulse"></div>
              <div className="absolute top-1/2 -right-10 w-32 h-32 bg-purple-400 rounded-full opacity-20 filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}