export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="fixed top-0 w-full bg-gray-800 shadow-lg z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-green-400">Matrix Future Development</h1>
            <div className="flex space-x-6">
              <a href="/" className="hover:text-green-400">Home</a>
              <a href="/services" className="hover:text-green-400">Services</a>
              <a href="/portfolio" className="hover:text-green-400">Portfolio</a>
              <a href="/process" className="hover:text-green-400">Process</a>
              <a href="/about" className="hover:text-green-400">About</a>
              <a href="/contact" className="hover:text-green-400">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-6xl font-bold mb-6">Matrix Future Development</h1>
          <p className="text-2xl mb-8">Building Tomorrow&apos;s Solutions Today</p>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            We build intelligent web applications, AI-powered solutions, and data-driven platforms 
            that transform businesses and drive innovation.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/contact" className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition duration-300">
              Start Your Project
            </a>
            <a href="/portfolio" className="border border-green-500 text-green-400 px-8 py-3 rounded-lg hover:bg-green-500 hover:text-white transition duration-300">
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
