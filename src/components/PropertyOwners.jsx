export default function PropertyOwners() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-5">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80" 
              alt="Property management" 
              className="rounded-lg shadow-2xl"
            />
          </div>
          
          <div className="mt-12 lg:mt-0 lg:col-span-7 lg:pl-12">
            <div className="text-left">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">For Property Owners</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Maximize your property's potential
              </p>
              <p className="mt-5 text-xl text-gray-500">
                Join thousands of property owners who trust Homivo to manage their listings, find reliable tenants, and boost their rental income.
              </p>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-check-circle text-xl"></i>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Verified Tenants</h3>
                  <p className="text-gray-500">
                    Every tenant on our platform is verified through our rigorous KYC process, ensuring reliability and trustworthiness.
                  </p>
                </div>
                
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-chart-line text-xl"></i>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Performance Analytics</h3>
                  <p className="text-gray-500">
                    Gain insights into your property's performance with detailed analytics on views, bookings, and revenue.
                  </p>
                </div>
                
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-rupee-sign text-xl"></i>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Secure Payments</h3>
                  <p className="text-gray-500">
                    Receive rent payments directly to your bank account with our secure and reliable payment system.
                  </p>
                </div>
                
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-file-contract text-xl"></i>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Legal Documentation</h3>
                  <p className="text-gray-500">
                    Access legally vetted rental agreements and documentation tailored to your property type.
                  </p>
                </div>
              </div>
              
              <div className="mt-10">
                <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                  List your property
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}