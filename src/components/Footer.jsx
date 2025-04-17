function Footer() {
    return (
      <footer className="bg-light-blue text-navy-blue py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Navigation Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:mfredho@gmail.com"
                  className="hover:text-white transition"
                >
                  mfredho@gmail.com
                </a>
              </p>
              <p className="mb-2">
                <strong>WhatsApp:</strong>{' '}
                <a
                  href="https://wa.me/250788523584"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  0788523584
                </a>
              </p>
              <p className="mb-2">
                <strong>Call:</strong>{' '}
                <a
                  href="tel:+250788359588"
                  className="hover:text-white transition"
                >
                  0788359588
                </a>
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2025 BukuBalance Rwanda. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;