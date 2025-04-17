import { useEffect, useRef, useState } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const tools = [
    {
      name: 'QuickBooks Online',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.77 12.15c0 .72-.6 1.31-1.35 1.31h-2.59c-.03 0-.05.01-.05.04v2.58c0 .74-.6 1.34-1.35 1.34-.75 0-1.35-.6-1.35-1.34v-2.58c0-.03-.02-.04-.05-.04h-5.26c-.03 0-.05.01-.05.04v2.58c0 .74-.6 1.34-1.35 1.34-.75 0-1.35-.6-1.35-1.34v-2.58c0-.03-.02-.04-.04-.04H4.38c-.74 0-1.35-.59-1.35-1.31 0-.72.61-1.31 1.35-1.31h2.61c.02 0 .04-.01.04-.04V8.22c0-.03-.02-.04-.04-.04H4.38c-.74 0-1.35-.59-1.35-1.31 0-.72.61-1.31 1.35-1.31h2.66c.03 0 .05-.01.05-.04V2.98c0-.74.6-1.34 1.35-1.34.75 0 1.35.6 1.35 1.34v2.54c0 .03.02.04.05.04h5.26c.03 0 .05-.01.05-.04V2.98c0-.74.6-1.34 1.35-1.34.75 0 1.35.6 1.35 1.34v2.54c0 .03.02.04.05.04h2.59c.75 0 1.35.59 1.35 1.31 0 .72-.6 1.31-1.35 1.31h-2.59c-.03 0-.05.01-.05.04v2.58c0 .03.02.04.05.04h2.59c.75 0 1.35.59 1.35 1.31z" />
          <path d="M9.79 13.45c-.03 0-.05.01-.05.04v2.58c0 .03.02.04.05.04h5.26c.03 0 .05-.01.05-.04v-2.58c0-.03-.02-.04-.05-.04H9.79zm0-8.19c-.03 0-.05.01-.05.04v2.58c0 .03.02.04.05.04h5.26c.03 0 .05-.01.05-.04V5.3c0-.03-.02-.04-.05-.04H9.79z" />
        </svg>
      ),
    },
    {
      name: 'Odoo 18',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.3 11.98c0 2.43-1.73 4.4-4.88 4.4-3.15 0-4.9-1.97-4.9-4.4 0-2.45 1.75-4.4 4.9-4.4 3.15 0 4.88 1.95 4.88 4.4zm-4.88-2.94c-1.38 0-2.44 1.13-2.44 2.94 0 1.8 1.06 2.94 2.44 2.94 1.38 0 2.44-1.14 2.44-2.94 0-1.85-1.06-2.94-2.44-2.94zm11.68-3.56v11.47c0 3.33-2.28 5.03-5.39 5.03h-1.84v-2.94h1.84c1.36 0 2.78-.35 2.78-2.1V5.48h2.61z" />
        </svg>
      ),
    },
    {
      name: 'Microsoft Excel',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.17 3H7.83C6.82 3 6 3.82 6 4.83v14.34c0 1.01.82 1.83 1.83 1.83h13.34c1.01 0 1.83-.82 1.83-1.83V4.83c0-1.01-.82-1.83-1.83-1.83zm.17 16c0 .28-.22.5-.5.5h-13c-.28 0-.5-.22-.5-.5V5c0-.28.22-.5.5-.5h13c.28 0 .5.22.5.5v14zm-4.86-8.14L14.14 9h-2.83l-1.91 5.89-1.74-5.89H5l3.25 9h2.91l2.12-6.43L16.05 18H19l-3.52-7.14z" />
        </svg>
      ),
    },
    {
      name: 'Google Sheets',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.5 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-1.5-2zM9 17H6v-2h3v2zm0-3H6v-2h3v2zm0-3H6V9h3v2zm0-3H6V6h3v2zm4 9h-3v-2h3v2zm0-3h-3v-2h3v2zm0-3h-3V9h3v2zm0-3h-3V6h3v2zm5 9h-3v-2h3v2zm0-3h-3v-2h3v2zm0-3h-3V9h3v2zm0-3h-3V6h3v2z" />
        </svg>
      ),
    }
  ];
  
  const clientTypes = [
    {
      type: 'Entrepreneurs',
      icon: '👨‍💼',
    },
    {
      type: 'SMEs',
      icon: '🏢',
    },
    {
      type: 'NGOs',
      icon: '🤝',
    },
    {
      type: 'Cooperatives',
      icon: '👥',
    },
    {
      type: 'Professionals',
      icon: '👩‍💻',
    },
  ];
  
  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '50+', label: 'Satisfied Clients' },
    { value: '100%', label: 'Tax Compliance' },
    { value: '24/7', label: 'Support Available' },
  ];

  const services = [
    { 
      name: 'Bookkeeping', 
      description: 'Accurate recording of financial transactions, reconciliations, and reporting'
    },
    { 
      name: 'Tax Compliance', 
      description: 'Monthly VAT, quarterly and annual declarations with RRA'
    },
    { 
      name: 'Financial Consulting', 
      description: 'Business planning, budgeting, and financial strategy development'
    }
  ];

  const [activeTab, setActiveTab] = useState('mission');

  return (
    <section 
      id="about" 
      className="py-16 bg-white" 
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-coffee-brown mb-6">
              About BukuBalance Rwanda
            </h2>
            
            <p className="text-grayish-brown mb-6">
              BukuBalance Rwanda is a Kigali-based Individual Enterprise offering advisory and operational support services in bookkeeping, tax compliance, and business management. We help entrepreneurs and SMEs stay compliant, financially organized, and ready to grow.
            </p>
            
            <div className="bg-cream p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold text-coffee-brown mb-4">Our Mission</h3>
              <p className="text-grayish-brown italic border-l-4 border-coffee-brown pl-4">
                "To empower Rwandan businesses with digital tools, clear financial systems, and reliable tax support to help them thrive."
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`bg-cream p-4 rounded-lg text-center shadow-sm transition-all duration-1000 delay-${index * 200} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="text-2xl font-bold text-coffee-brown">{stat.value}</div>
                  <div className="text-sm text-grayish-brown">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-cream p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-coffee-brown mb-6">Our Tools</h3>
              <div className="grid grid-cols-2 gap-6">
                {tools.map((tool, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center"
                  >
                    <div className="bg-white p-4 rounded-full shadow-sm text-coffee-brown mb-3">
                      {tool.icon}
                    </div>
                    <span className="text-grayish-brown text-center">{tool.name}</span>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold text-coffee-brown mt-8 mb-6">Our Clients</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {clientTypes.map((client, index) => (
                  <div 
                    key={index} 
                    className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center"
                  >
                    <span className="text-2xl mr-2">{client.icon}</span>
                    <span className="text-grayish-brown">{client.type}</span>
                  </div>
                ))}
              </div>
              
              {/* New content starts here */}
              <h3 className="text-xl font-semibold text-coffee-brown mt-8 mb-6">Core Services</h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-4 rounded-lg shadow-sm transition-all duration-500 hover:shadow-md"
                  >
                    <h4 className="font-medium text-coffee-brown">{service.name}</h4>
                    <p className="text-sm text-grayish-brown mt-1">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional content */}
        <div className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-cream rounded-lg shadow-md overflow-hidden">
            <div className="flex border-b border-coffee-brown/20">
              <button 
                className={`flex-1 py-3 px-4 text-center font-medium ${activeTab === 'mission' ? 'bg-coffee-brown text-white' : 'text-coffee-brown hover:bg-coffee-brown/10'}`}
                onClick={() => setActiveTab('mission')}
              >
                Our Values
              </button>
              <button 
                className={`flex-1 py-3 px-4 text-center font-medium ${activeTab === 'team' ? 'bg-coffee-brown text-white' : 'text-coffee-brown hover:bg-coffee-brown/10'}`}
                onClick={() => setActiveTab('team')}
              >
                Our Team
              </button>
              <button 
                className={`flex-1 py-3 px-4 text-center font-medium ${activeTab === 'story' ? 'bg-coffee-brown text-white' : 'text-coffee-brown hover:bg-coffee-brown/10'}`}
                onClick={() => setActiveTab('story')}
              >
                Our Story
              </button>
            </div>
            
            <div className="p-6">
              {activeTab === 'mission' && (
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-coffee-brown/10 p-2 rounded-full mr-4">
                      <svg className="w-6 h-6 text-coffee-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-coffee-brown">Accuracy</h4>
                      <p className="text-grayish-brown">Delivering precise financial information for confident business decisions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-coffee-brown/10 p-2 rounded-full mr-4">
                      <svg className="w-6 h-6 text-coffee-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-coffee-brown">Confidentiality</h4>
                      <p className="text-grayish-brown">Protecting your financial information with the highest level of security.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-coffee-brown/10 p-2 rounded-full mr-4">
                      <svg className="w-6 h-6 text-coffee-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-coffee-brown">Efficiency</h4>
                      <p className="text-grayish-brown">Streamlining processes to save you time and resources.</p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'team' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-20 h-20 bg-coffee-brown/20 rounded-full mb-4 flex items-center justify-center">
                      <span className="text-3xl">👩‍💼</span>
                    </div>
                    <h4 className="font-semibold text-coffee-brown">Jeanne Uwamahoro</h4>
                    <p className="text-sm text-grayish-brown">Founder & Principal Consultant</p>
                    <p className="text-grayish-brown text-center mt-4">
                      15+ years experience in accounting and financial management across East Africa.
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-20 h-20 bg-coffee-brown/20 rounded-full mb-4 flex items-center justify-center">
                      <span className="text-3xl">👨‍💻</span>
                    </div>
                    <h4 className="font-semibold text-coffee-brown">Jean Claude Kamanzi</h4>
                    <p className="text-sm text-grayish-brown">Tax Specialist</p>
                    <p className="text-grayish-brown text-center mt-4">
                      Expert in Rwandan tax law with experience at RRA and private consulting.
                    </p>
                  </div>
                </div>
              )}
              
              {activeTab === 'story' && (
                <div className="space-y-4">
                  <p className="text-grayish-brown">
                    BukuBalance was founded in 2020 after identifying a gap in the market for affordable, tech-forward accounting services for small businesses in Rwanda.
                  </p>
                  <p className="text-grayish-brown">
                    Starting with just 5 clients, we've grown to serve over 50 businesses across Kigali and beyond, helping them navigate the complexities of financial management and tax compliance.
                  </p>
                  <p className="text-grayish-brown">
                    Today, we continue to expand our services while maintaining our commitment to personalized support and technological innovation in financial management.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Call-to-action section */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-coffee-brown mb-4">Ready to get your finances in order?</h3>
          <p className="text-grayish-brown mb-6 max-w-2xl mx-auto">
            Schedule a free consultation to discuss how we can help your business achieve financial clarity and compliance.
          </p>
          <button className="bg-coffee-brown text-white px-8 py-3 rounded-lg font-medium shadow-md hover:bg-coffee-brown/90 transition-colors duration-300">
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;