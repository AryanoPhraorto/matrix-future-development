import AIChat from "../../components/ai-chat";
import Link from "next/link";

export default function About() {
  const skills = [
    { category: "Frontend", technologies: ["React/Next.js", "TypeScript", "Tailwind CSS", "Redux"] },
    { category: "Backend", technologies: ["FastAPI/Python", "Node.js", "PostgreSQL", "REST/GraphQL"] },
    { category: "AI/ML", technologies: ["TensorFlow", "spaCy", "scikit-learn", "Computer Vision"] },
    { category: "DevOps", technologies: ["AWS", "Docker", "Vercel", "CI/CD Pipelines"] }
  ];

  const processSteps = [
    { step: "1", title: "Discovery", description: "Deep dive into your business needs and technical requirements" },
    { step: "2", title: "Strategy", description: "Architecture planning and technology stack selection" },
    { step: "3", title: "Development", description: "Agile development with continuous testing and feedback" },
    { step: "4", title: "Launch", description: "Deployment, training, and ongoing support" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              About Matrix Future Development
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              We don&apos;t just write code - we build solutions that transform businesses and drive innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Our Story */}
              <div>
                <h2 className="text-3xl font-bold text-green-400 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Matrix Future Development was born from a simple observation: businesses struggle to find 
                    development partners who truly understand both technology and business strategy.
                  </p>
                  <p>
                    We bridge that gap by combining cutting-edge technical expertise with deep business acumen, 
                    delivering solutions that don&apos;t just work technically but drive real business results.
                  </p>
                  <p>
                    Our name reflects our mission: building the future solutions that businesses need today, 
                    using the most advanced technologies available.
                  </p>
                </div>
              </div>

              {/* Our Mission */}
              <div>
                <h2 className="text-3xl font-bold text-blue-400 mb-6">Our Mission</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    To empower businesses with intelligent, scalable technology solutions that solve real problems 
                    and create sustainable competitive advantages.
                  </p>
                  <p>
                    We believe technology should work for people, not the other way around. Every line of code we 
                    write serves a clear business purpose and delivers measurable value.
                  </p>
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <h3 className="text-xl font-bold text-white mb-3">Why Choose Us?</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        Business-first approach to technology
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        Proven track record with 15+ successful projects
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        Cutting-edge expertise in AI and modern web technologies
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        100% client satisfaction and long-term partnerships
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Technology */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-green-400 mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-700 text-blue-400 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
              Our Development Process
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Let&apos;s discuss how we can transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/contact" className="bg-white text-gray-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </Link>
            <Link href="/portfolio" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <AIChat />
    </main>
  );
}
