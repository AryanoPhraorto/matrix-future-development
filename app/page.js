export default function Home() {
  return (
    <div className="min-h-screen bg-matrix-dark text-white">
      {/* Navigation */}
      <nav className="glass-effect border-b border-matrix-green/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold matrix-glow">
              Matrix Future Development
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-matrix-green transition">Services</a>
              <a href="#portfolio" className="hover:text-matrix-green transition">Portfolio</a>
              <a href="#process" className="hover:text-matrix-green transition">Process</a>
              <a href="#contact" className="hover:text-matrix-green transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 matrix-glow">
            Matrix Future Development
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Building Tomorrow's Solutions Today
          </p>
          <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
            We build intelligent web applications, AI-powered solutions, and data-driven platforms that transform businesses and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-matrix-green text-matrix-dark px-8 py-3 rounded-lg font-bold hover:bg-green-400 transition">
              Start Your Project
            </button>
            <button className="border border-matrix-green text-matrix-green px-8 py-3 rounded-lg font-bold hover:bg-matrix-green/10 transition">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-matrix-gray/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 matrix-glow">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="glass-effect p-8 rounded-xl hover:border-matrix-green/50 transition">
              <h3 className="text-2xl font-bold mb-4">Custom Web Applications</h3>
              <p className="text-gray-300 mb-4">Full-stack solutions built with modern technologies like FastAPI, React, and cloud-native architecture.</p>
              <div className="text-matrix-green text-xl font-bold">$5,000 - $50,000</div>
            </div>
            
            {/* Service 2 */}
            <div className="glass-effect p-8 rounded-xl hover:border-matrix-green/50 transition">
              <h3 className="text-2xl font-bold mb-4">AI Integration</h3>
              <p className="text-gray-300 mb-4">Intelligent features, machine learning models, and data analytics that provide competitive advantages.</p>
              <div className="text-matrix-green text-xl font-bold">$10,000 - $100,000</div>
            </div>
            
            {/* Service 3 */}
            <div className="glass-effect p-8 rounded-xl hover:border-matrix-green/50 transition">
              <h3 className="text-2xl font-bold mb-4">SaaS Development</h3>
              <p className="text-gray-300 mb-4">Scalable software-as-a-service platforms with subscription models and enterprise features.</p>
              <div className="text-matrix-green text-xl font-bold">$25,000 - $150,000</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 matrix-glow">Featured Work</h2>
          <div className="glass-effect p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">JobIntelliTrack</h3>
            <p className="text-xl text-matrix-green mb-6">AI-Powered Job Application Management System</p>
            <p className="text-gray-300 mb-6">
              A full-stack web application that helps job seekers track applications, analyze success probabilities, and optimize their job search strategy using machine learning.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-3">Key Features:</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>✓ AI Application Analysis</li>
                  <li>✓ Skills Match Scoring</li>
                  <li>✓ Interactive Dashboard</li>
                  <li>✓ Resume Parsing</li>
                  <li>✓ Success Prediction</li>
                  <li>✓ Real-time Analytics</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-3">Tech Stack:</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• FastAPI</li>
                  <li>• React</li>
                  <li>• Python</li>
                  <li>• PostgreSQL</li>
                  <li>• Machine Learning</li>
                  <li>• Streamlit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-matrix-gray border-t border-matrix-green/20 py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold matrix-glow mb-4">
            Matrix Future Development
          </div>
          <p className="text-gray-400 mb-8">Building Tomorrow's Solutions Today</p>
          <div className="text-gray-500">
            © 2024 Matrix Future Development. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
