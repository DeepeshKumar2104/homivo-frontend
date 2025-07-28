import { useState, useEffect } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content: "Finding accommodation as a student was always a hassle until I discovered Homivo. The verified listings and secure payment system gave me peace of mind. I found my perfect PG within days!",
      author: "Priya Sharma",
      role: "Graduate Student",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 2,
      content: "As a property owner, Homivo has simplified my rental management process. The digital agreements and automated payment reminders have saved me countless hours of work. Highly recommended!",
      author: "Rahul Kapoor",
      role: "Property Owner",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg"
    },
    {
      id: 3,
      content: "Our company uses Homivo to manage accommodation for our interns and new hires. The platform's enterprise features have streamlined our HR processes considerably.",
      author: "Aisha Patel",
      role: "HR Manager",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            What our users are saying
          </p>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-500">
            Thousands of tenants, property owners, and businesses trust Homivo for their accommodation needs.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="flex overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                    <div className="flex items-center mb-6">
                      <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                        <img src={testimonial.avatar} alt={testimonial.author} className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">{testimonial.author}</h4>
                        <p className="text-sm text-indigo-600">{testimonial.role}</p>
                      </div>
                      <div className="ml-auto">
                        <i className="fas fa-quote-right text-3xl text-indigo-100"></i>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 italic">"{testimonial.content}"</p>
                    <div className="mt-6 flex items-center">
                      <div className="flex text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <span className="ml-2 text-gray-500 text-sm">5.0</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
            <button 
              onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)}
              className="pointer-events-auto w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 -ml-5"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)}
              className="pointer-events-auto w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 -mr-5"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-indigo-600' : 'bg-indigo-200'}`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}