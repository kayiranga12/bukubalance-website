function Loader() {
    return (
      <div className="fixed inset-0 bg-coffee-brown flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-cream rounded-full opacity-30"></div>
            <div className="absolute top-0 left-0 w-full h-full border-4 border-l-transparent border-cream rounded-full animate-spin"></div>
          </div>
          <h2 className="text-2xl font-bold text-cream">BukuBalance</h2>
          <p className="text-cream">Empowering Rwandan Businesses</p>
        </div>
      </div>
    );
  }
  
  export default Loader;