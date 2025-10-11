import AIChat from "../components/ai-chat";
import Testimonials from "../components/testimonials";
import ProjectCalculator from "../components/project-calculator";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-blue-900 to-purple-900"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Matrix Future Development
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Building Tomorrow&apos;s Solutions Today
          </p>
          <p className="text-lg mb-12 max-w-3xl mx-auto text-gray-300">
            Enterprise-grade AI solutions and custom software development for forward-thinking businesses.
          </p>
          <div className="space-x-4">
            <a href="/contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-lg">
              🚀 Start $50K+ Project
            </a>
            <a href="/portfolio" className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg">
              💼 View Enterprise Work
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Project Calculator */}
      <ProjectCalculator />

      {/* AI Chat */}
      <AIChat />
    </main>
  );
}
