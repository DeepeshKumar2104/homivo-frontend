export default function Partners() {
  const partners = [
    { name: "Acme Properties", logo: "/images/AcmeProperties.jpg" },
    { name: "Skyline Homes", logo: "/images/SkylineHomes.jpg" },
    { name: "Urban Living", logo: "/images/UrbanLiving.jpg" },
    { name: "Metro Realty", logo: "/images/MetroRealty.jpg" },
    { name: "Premium Properties", logo: "/images/RealEstate.jpg" },
    { name: "City Dwellings", logo: "/images/Laravel.jpg" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Partners</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Trusted by leading companies
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex justify-center items-center"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12 md:h-16 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}