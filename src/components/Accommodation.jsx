export default function Accommodation() {
  const accommodationTypes = [
    {
      id: "flat",
      name: "Flat/Apartment",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Independent flats for rent (1BHK, 2BHK, Studio)"
    },
    {
      id: "pg",
      name: "Paying Guest (PG)",
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Shared accommodation with food & services"
    },
    {
      id: "hostel",
      name: "Hostel",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "For students/interns, mess facility, shared bath"
    },
    {
      id: "coliving",
      name: "Co-living Space",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Managed shared living with amenities"
    },
    {
      id: "short_stay",
      name: "Short-Term Stay",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Daily/weekly rentals for internships, exams, etc."
    },
    {
      id: "service_flat",
      name: "Fully Managed Flat",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "For NRIs or long-term renters, includes services"
    }
  ];

  return (
    <section id="accommodation" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Accommodation Types</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Find the perfect place to stay
          </p>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-500">
            Homivo offers a wide variety of accommodation options to suit every need and preference.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {accommodationTypes.map((type) => (
            <div key={type.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={type.image} 
                  alt={type.name}
                  className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold mb-1">{type.name}</h3>
                <p className="text-sm text-gray-300">{type.description}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="inline-flex items-center text-sm font-medium text-white hover:text-indigo-300">
                    Explore options
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            View All Accommodation Types
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}