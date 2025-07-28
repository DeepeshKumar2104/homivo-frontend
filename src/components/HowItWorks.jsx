export default function HowItWorks() {
  const steps = [
    {
      icon: "fa-search",
      title: "Search & Explore",
      description: "Browse through thousands of verified listings based on your preferences and location requirements."
    },
    {
      icon: "fa-calendar-check",
      title: "Book & Schedule",
      description: "Book your preferred accommodation and schedule a visit to ensure it meets your expectations."
    },
    {
      icon: "fa-file-signature",
      title: "Agreement & Payment",
      description: "Sign digital agreements and make secure payments through our integrated payment system."
    },
    {
      icon: "fa-home",
      title: "Move In",
      description: "Get your keys and move into your new accommodation with complete peace of mind."
    }
  ];

  return (
    <section className="py-20 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Finding your dream accommodation is easy
          </p>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-500">
            Homivo streamlines the accommodation process in just a few simple steps
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-indigo-100 via-indigo-400 to-indigo-100 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white text-2xl relative z-10 shadow-lg">
                    <i className={`fas ${step.icon}`}></i>
                  </div>
                  <span className="absolute top-0 bg-white text-indigo-800 font-bold rounded-full w-8 h-8 flex items-center justify-center border-2 border-indigo-600 transform -translate-x-10 translate-y-3 z-20">
                    {index + 1}
                  </span>
                  <h3 className="mt-6 text-xl font-medium text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-base text-gray-500 text-center">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-500 transition-colors">
            Learn more about our process
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}