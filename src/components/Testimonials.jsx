import { useState, useEffect } from 'react';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "James Mugabo",
      position: "CEO, TechVent Rwanda",
      content: "BukuBalance transformed our financial management systems. Their expertise in Rwandan tax compliance has saved us time and money.",
      image: "/api/placeholder/64/64"
    },
    {
      id: 2,
      name: "Marie Uwase",
      position: "Director, Green Solutions Cooperative",
      content: "We've been working with BukuBalance for over a year, and our bookkeeping has never been more organized. Highly recommended!",
      image: "/api/placeholder/64/64"
    },
    {
      id: 3,
      name: "Jean-Paul Habimana",
      position: "Founder, Kigali Craft Brewery",
      content: "The BukuBalance team provided incredible support during our tax audit. Their knowledge and preparation made all the difference.",
      image: "/api/placeholder/64/64"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => 
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000); // Auto-rotate every 5 seconds
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-coffee-brown text-center mb-12">
          What Our Clients Say
        </h2>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-cream p-8 rounded-lg shadow-md">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-coffee-brown">{testimonial.name}</h3>
                      <p className="text-grayish-brown">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-lg text-grayish-brown italic">"{testimonial.content}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === activeIndex ? 'bg-coffee-brown' : 'bg-grayish-brown bg-opacity-30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;