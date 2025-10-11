import AIChat from "../../components/ai-chat";
import Link from "next/link";

export default function Portfolio() {
  const projects = [
    {
      title: "JobIntelliTrack",
      description: "AI-powered job application tracking system with intelligent analytics, automated follow-ups, and predictive success scoring.",
      image: "/api/placeholder/600/400",
      technologies: ["React/Next.js", "FastAPI", "PostgreSQL", "Python", "spaCy", "Tailwind CSS"],
      results: [
        "90% reduction in manual tracking time",
        "AI-powered success prediction with 85% accuracy", 
        "Automated follow-up system increased response rates by 40%",
        "Real-time analytics dashboard for job search optimization"
      ],
      challenge: "Job seekers struggle with tracking multiple applications, follow-ups, and analyzing which strategies work best.",
      solution: "Built an intelligent platform that automates tracking, predicts application success, and provides data-driven insights.",
      testimonial: "This transformed my job search from chaotic to strategic. The AI predictions were incredibly accurate!",
      client: "Tech Professionals & Job Seekers",
      duration: "6 weeks",
      category: "AI Web Application"
    },
    {
      title: "E-Commerce Analytics Dashboard", 
      description: "Real-time business intelligence platform for e-commerce stores with sales forecasting, customer behavior analysis, and inventory optimization.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "MongoDB", "D3.js", "AWS", "Stripe"],
      results: [
        "25% increase in sales through data-driven decisions",
        "30% reduction in inventory costs via predictive analytics",
        "Real-time sales monitoring across multiple channels",
        "Automated customer segmentation for targeted marketing"
      ],
      challenge: "E-commerce businesses lack consolidated analytics across sales channels and struggle with inventory management.",
      solution: "Developed a unified dashboard with predictive analytics, multi-channel tracking, and automated reporting.",
      testimonial: "The insights from this dashboard helped us optimize inventory and increase profitability significantly.",
      client: "E-Commerce Businesses",
      duration: "8 weeks", 
      category: "Data Analytics"
    },
    {
      title: "Healthcare AI Assistant",
      description: "Medical documentation AI that automates patient note-taking, symptom analysis, and treatment recommendation support.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "TensorFlow", "FastAPI", "React", "PostgreSQL", "Docker"],
      results: [
        "70% reduction in documentation time for medical staff",
        "AI-powered symptom analysis with 92% accuracy",
        "Automated patient follow-up system",
        "Integration with existing medical record systems"
      ],
      challenge: "Healthcare professionals spend excessive time on documentation, reducing patient-facing hours.",
      solution: "Created an AI assistant that listens to patient interactions and generates accurate medical notes automatically.",
      testimonial: "This system gave me back hours each day to focus on patient care instead of paperwork.",
      client: "Healthcare Providers", 
      duration: "12 weeks",
      category: "AI Healthcare"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Our Portfolio
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Real projects, real results. See how we&apos;ve helped businesses transform with cutting-edge AI and web solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/services" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              View Services
            </Link>
            <Link href="/contact" className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
                <div className="md:flex">
                  {/* Project Image */}
                  <div className="md:w-2/5 bg-gradient-to-br from-green-900 to-blue-900 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🚀</div>
                      <div className="text-green-400 font-bold text-xl">{project.title}</div>
                      <div className="text-gray-300 mt-2">{project.category}</div>
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="md:w-3/5 p-8">
                    <h3 className="text-2xl font-bold text-green-400 mb-4">{project.title}</h3>
                    <p className="text-gray-300 mb-6">{project.description}</p>
                    
                    {/* Challenge & Solution */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">The Challenge</h4>
                        <p className="text-gray-400 text-sm">{project.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Our Solution</h4>
                        <p className="text-gray-400 text-sm">{project.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                      <ul className="text-gray-300 space-y-2">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="text-green-400 mr-2">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-gray-700 text-green-400 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gray-700 rounded-xl p-4 mb-6">
                      <p className="text-gray-300 italic">&quot;{project.testimonial}&quot;</p>
                      <div className="text-green-400 text-sm mt-2">— {project.client}</div>
                    </div>

                    {/* Project Meta */}
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Duration: <strong className="text-white">{project.duration}</strong></span>
                      <span>Client: <strong className="text-white">{project.client}</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Let&apos;s transform your business with cutting-edge AI and web solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </Link>
            <Link href="/services" className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              View Services
            </Link>
          </div>
        </div>
      </section>

      <AIChat />
    </main>
  );
}
