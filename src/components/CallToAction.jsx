export default function CallToAction() {
  return (
    <section className="relative bg-indigo-700 py-16 sm:py-20">
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute right-0 top-0 h-full w-full transform translate-x-1/3 text-indigo-800"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="0,0 90,0 50,100 0,100" />
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Ready to find your next home?
            </h2>
            <p className="mt-4 text-lg text-indigo-100">
              Join thousands of happy tenants who found their perfect accommodation through Homivo. 
              Sign up today and get access to exclusive listings!
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-indigo-700 bg-white hover:bg-gray-50 transition-colors">
                List Your Property
              </a>
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-white rounded-md text-base font-medium text-white hover:bg-indigo-800 transition-colors">
                Find Accommodation
              </a>
            </div>
          </div>
          
          <div className="mt-8 md:mt-0">
            <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 transform md:rotate-3 md:translate-x-6 hover:md:rotate-0 transition-transform duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <i className="fas fa-mobile-alt text-indigo-600"></i>
                  </div>
                  <h3 className="ml-3 text-lg font-medium text-gray-900">Get the App</h3>
                </div>
                <i className="fas fa-chevron-right text-gray-400"></i>
              </div>
              <p className="text-gray-600 mb-4">Download the Homivo app for a better experience on your mobile device.</p>
              <div className="flex space-x-3">
                <a href="#" className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-black text-white hover:bg-gray-900 transition-colors">
                  <i className="fab fa-apple text-lg mr-2"></i>
                  <span className="text-sm">App Store</span>
                </a>
                <a href="#" className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-black text-white hover:bg-gray-900 transition-colors">
                  <i className="fab fa-google-play text-lg mr-2"></i>
                  <span className="text-sm">Google Play</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}