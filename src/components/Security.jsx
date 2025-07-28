export default function Security() {
  return (
    <section id="security" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Trust & Security</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Your safety is our top priority
          </p>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-500">
            At Homivo, we implement strict measures to ensure a safe and secure experience for all users
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Security shield background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-96 h-96 text-indigo-900">
                <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-300">
                <div className="h-14 w-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-user-shield text-2xl text-indigo-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Identity Verification</h3>
                <p className="text-gray-600">
                  All users undergo a comprehensive verification process that includes government ID verification, email confirmation, and phone number verification.
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium inline-flex items-center">
                    Learn more about our verification
                    <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-300">
                <div className="h-14 w-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-lock text-2xl text-indigo-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure Payments</h3>
                <p className="text-gray-600">
                  Our payment system uses bank-level encryption and security. We monitor transactions 24/7 and offer secure escrow services for property deposits.
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium inline-flex items-center">
                    View payment security details
                    <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-300">
                <div className="h-14 w-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-clipboard-check text-2xl text-indigo-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Property Verification</h3>
                <p className="text-gray-600">
                  Our team physically inspects properties before they go live, ensuring that all listings are genuine and accurately represented on our platform.
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium inline-flex items-center">
                    Our verification process
                    <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-700">
                <i className="fas fa-shield-alt mr-2"></i>
                <span className="text-sm font-medium">ISO 27001 Certified for Information Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}