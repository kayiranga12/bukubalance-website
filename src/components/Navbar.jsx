import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="bg-coffee-brown text-white fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="../assets/Images/logo3.jpg" className="text-2xl font-bold">BukuBalance Rwanda</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, 'home')}
              className="hover:text-cream transition"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={(e) => handleScroll(e, 'services')}
              className="hover:text-cream transition"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, 'about')}
              className="hover:text-cream transition"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="hover:text-cream transition"
            >
              Contact
            </a>
            <a
              href="https://wa.me/250788523584"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cream text-coffee-brown px-4 py-2 rounded-md hover:bg-grayish-brown hover:text-white transition"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 py-4">
              <a
                href="#home"
                onClick={(e) => handleScroll(e, 'home')}
                className="hover:text-cream transition"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, 'services')}
                className="hover:text-cream transition"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={(e) => handleScroll(e, 'about')}
                className="hover:text-cream transition"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, 'contact')}
                className="hover:text-cream transition"
              >
                Contact
              </a>
              <a
                href="https://wa.me/250788523584"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cream text-coffee-brown px-4 py-2 rounded-md hover:bg-grayish-brown hover:text-white transition text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;