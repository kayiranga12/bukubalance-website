import { useState, useEffect } from 'react';

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="relative bg-cream text-coffee-brown pt-24 pb-16 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-coffee-brown opacity-5"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-coffee-brown opacity-5"></div>
        <div className="absolute top-40 right-40 w-40 h-40 rounded-full bg-grayish-brown opacity-5"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Empowering <span className="text-grayish-brown">Rwandan</span> Businesses
            </h1>
            <p className="text-lg md:text-xl mb-8 text-grayish-brown max-w-lg">
              Expert bookkeeping, tax compliance, and business advisory services to help SMEs in Rwanda organize their finances and grow with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-coffee-brown text-white px-8 py-3 rounded-md hover:bg-grayish-brown transition shadow-md font-medium text-center"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="border-2 border-coffee-brown text-coffee-brown px-8 py-3 rounded-md hover:bg-coffee-brown hover:text-white transition font-medium text-center"
              >
                Our Services
              </a>
            </div>
            <div className="mt-8 flex items-center">
              <p className="text-grayish-brown mr-4">Trusted by local businesses</p>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-grayish-brown border-2 border-cream text-white flex items-center justify-center text-xs font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Image/Illustration */}
          <div className={`transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="relative">
              <div className="w-full h-80 bg-coffee-brown bg-opacity-10 rounded-lg flex items-center justify-center">
                <div className="text-coffee-brown">
                  <svg className="w-32 h-32 mx-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" />
                    <circle cx="16" cy="12" r="1.5" />
                  </svg>
                  <p className="mt-4 text-lg font-medium">Financial Management Made Simple</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium">Tax Compliant</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <span className="font-medium">Growth Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;