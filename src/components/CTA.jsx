function CTA() {
    return (
      <section className="py-16 bg-coffee-brown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-coffee-brown py-12 px-6 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-cream mb-6">
              Ready to Streamline Your Business Finances?
            </h2>
            <p className="text-lg text-cream max-w-2xl mx-auto mb-8">
              Schedule a complimentary consultation with our team to discover how BukuBalance can help your business thrive financially.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/250788523584"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cream text-coffee-brown px-8 py-3 rounded-md hover:bg-grayish-brown hover:text-white transition font-medium flex items-center justify-center"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M5.339 4.332a10.188 10.188 0 012.2-1.492.052.052 0 01.046 0c.307.154.589.342.85.556a.051.051 0 01.004.073A8.004 8.004 0 005.339 5.55a.05.05 0 01-.71.006.05.05 0 01-.008-.07c.016-.024.033-.046.05-.069a9.99 9.99 0 012.01-1.166A10.283 10.283 0 0118.86 6.114a1.48 1.48 0 01-.033 2.29v.001a10.273 10.273 0 01-10.654 2.15.05.05 0 00-.055.01 4.013 4.013 0 01-.993.80.05.05 0 00-.007.078 10.27 10.27 0 0015.1-7.013A10.249 10.249 0 0011.912.58a10.206 10.206 0 00-6.573 3.752z" fillRule="evenodd" clipRule="evenodd" />
                </svg>
                Chat on WhatsApp
              </a>
              <a
                href="#contact"
                className="border-2 border-cream text-cream px-8 py-3 rounded-md hover:bg-cream hover:text-coffee-brown transition font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default CTA;