function Hero() {
    return (
      <section id="home" className="bg-light-blue text-navy-blue pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Empowering Rwandan Businesses
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            BukuBalance Rwanda provides expert bookkeeping, tax compliance, and business advisory services to help SMEs thrive.
          </p>
          <a
            href="#contact"
            className="inline-block bg-navy-blue text-white px-6 py-3 rounded-md hover:bg-blue-900 transition"
          >
            Start Growing Today
          </a>
        </div>
      </section>
    );
  }
  
  export default Hero;