import { useState, useEffect } from 'react';

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState(null);
  
  useEffect(() => {
    setIsVisible(true);
    // Keep year updated if the component stays mounted across year changes
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Simulating API call
      setTimeout(() => {
        setSubscribeStatus('success');
        setEmail('');
        setTimeout(() => setSubscribeStatus(null), 3000);
      }, 500);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-cream to-cream/90 text-coffee-brown pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-coffee-brown rounded-full flex items-center justify-center text-white font-bold text-xl mr-2">
                BB
              </div>
              <h3 className="text-xl font-bold">BukuBalance</h3>
            </div>
            <p className="text-grayish-brown mb-4">
              Empowering Rwandan businesses with digital financial solutions since 2020.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/bukubalance" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full bg-coffee-brown/10 flex items-center justify-center hover:bg-coffee-brown hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com/company/bukubalance" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full bg-coffee-brown/10 flex items-center justify-center hover:bg-coffee-brown hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a 
                href="https://facebook.com/bukubalance" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full bg-coffee-brown/10 flex items-center justify-center hover:bg-coffee-brown hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://instagram.com/bukubalance" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full bg-coffee-brown/10 flex items-center justify-center hover:bg-coffee-brown hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:ml-8">
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-coffee-brown/20">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-coffee-brown hover:font-medium transition flex items-center">
                  <svg className="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-coffee-brown hover:font-medium transition flex items-center">
                  <svg className="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-coffee-brown hover:font-medium transition flex items-center">
                  <svg className="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-coffee-brown hover:font-medium transition flex items-center">
                  <svg className="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-coffee-brown hover:font-medium transition flex items-center">
                  <svg className="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-coffee-brown/20">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-coffee-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-sm text-grayish-brown mb-1">Email</span>
                  <a href="mailto:mfredho@gmail.com" className="hover:text-coffee-brown transition">
                    mfredho@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-coffee-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-sm text-grayish-brown mb-1">Phone</span>
                  <a href="tel:+250788359588" className="hover:text-coffee-brown transition">
                    +250 788 359 588
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-coffee-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-sm text-grayish-brown mb-1">WhatsApp</span>
                  <a 
                    href="https://wa.me/250788523584" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-coffee-brown transition"
                  >
                    +250 788 523 584
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-coffee-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-sm text-grayish-brown mb-1">Location</span>
                  <address className="not-italic">
                    Kigali, Rwanda
                  </address>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-coffee-brown/20">Stay Updated</h3>
            <p className="text-grayish-brown mb-4">
              Subscribe to our newsletter for updates on tax regulations and financial tips.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-2 pl-4 pr-10 rounded-lg bg-white border border-coffee-brown/20 focus:border-coffee-brown focus:outline-none focus:ring-1 focus:ring-coffee-brown"
                  placeholder="Your email address"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-coffee-brown hover:text-coffee-brown/80"
                  aria-label="Subscribe"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              {subscribeStatus === 'success' && (
                <div className="text-green-600 text-sm">
                  Thank you for subscribing!
                </div>
              )}
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-coffee-brown/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-grayish-brown mb-4 md:mb-0">
              © {currentYear} BukuBalance Rwanda. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy-policy" className="text-sm text-grayish-brown hover:text-coffee-brown transition">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-sm text-grayish-brown hover:text-coffee-brown transition">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-sm text-grayish-brown hover:text-coffee-brown transition">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;