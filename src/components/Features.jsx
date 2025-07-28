export default function Features() {
  const features = [
    {
      icon: "fa-magnifying-glass",
      title: "Advanced Search",
      description: "Find your ideal accommodation with our powerful filters for location, budget, amenities, and more."
    },
    {
      icon: "fa-shield-alt",
      title: "Verified Listings",
      description: "Every property undergoes admin verification to ensure authenticity and quality standards."
    },
    {
      icon: "fa-file-signature",
      title: "Digital Agreements",
      description: "Seamlessly generate and digitally sign rental agreements right from the platform."
    },
    {
      icon: "fa-credit-card",
      title: "Secure Payments",
      description: "Integrated payment system for rent, deposits, and fees with popular payment gateways."
    },
    {
      icon: "fa-comments",
      title: "Real-time Chat",
      description: "Communicate instantly with property owners or tenants via our in-app messaging system."
    },
    {
      icon: "fa-star",
      title: "Ratings & Reviews",
      description: "Make informed decisions based on authentic feedback from previous tenants."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Everything you need for a seamless accommodation experience
          </p>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-500">
            Homivo brings together tenants and property owners with a feature-rich platform designed to simplify the entire accommodation lifecycle.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="relative p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 hover:border-indigo-100 group"
              >
                <div className="absolute top-6 right-6 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                  <i className={`fas ${feature.icon} text-indigo-600 text-xl`}></i>
                </div>
                <div className="pt-12">
                  <h3 className="text-xl font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">{feature.title}</h3>
                  <p className="mt-3 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}