import AIChat from "../../components/ai-chat";

export default function Services() {
  const services = [
    {
      title: "Custom Web Applications",
      price: "$5,000 - $15,000",
      description: "Fully customized web applications built with modern React/Next.js architecture, featuring responsive design, user authentication, and real-time functionality.",
      features: ["React/Next.js Frontend", "FastAPI Backend", "PostgreSQL Database", "Responsive Design", "User Authentication", "Admin Dashboard"],
      timeline: "4-8 weeks",
      bestFor: "Startups & SMEs needing custom business solutions"
    },
    {
      title: "AI Integration Services", 
      price: "$10,000 - $25,000",
      description: "Intelligent AI-powered solutions including chatbots, predictive analytics, computer vision, and natural language processing systems.",
      features: ["Machine Learning Models", "AI Chatbots", "Predictive Analytics", "Computer Vision", "NLP Processing", "API Integration"],
      timeline: "6-12 weeks",
      bestFor: "Businesses wanting AI automation & intelligence"
    },
    {
      title: "Data Analytics Dashboards",
      price: "$8,000 - $20,000",
      description: "Interactive data visualization dashboards that transform complex data into actionable business insights with real-time analytics.",
      features: ["Real-time Analytics", "Interactive Charts", "Data Export", "Custom Metrics", "Automated Reports", "Multi-source Integration"],
      timeline: "4-10 weeks",
      bestFor: "Data-driven companies needing business intelligence"
    },
    {
      title: "SaaS Product Development",
      price: "$15,000 - $50,000+",
      description: "End-to-end SaaS platform development including multi-tenant architecture, subscription management, and scalable cloud infrastructure.",
      features: ["Multi-tenant Architecture", "Subscription Billing", "Scalable Infrastructure", "API Development", "Admin Panel", "User Management"],
      timeline: "12-20 weeks",
      bestFor: "Entrepreneurs & enterprises building scalable software products"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Premium AI-powered development solutions tailored to transform your business and drive innovation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700">
                <h3 className="text-2xl font-bold text-green-400 mb-4">{service.title}</h3>
                <div className="text-3xl font-bold text-white mb-4">{service.price}</div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                  <ul className="text-gray-300 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Timeline: <strong className="text-white">{service.timeline}</strong></span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-400">
                    <strong className="text-white">Best for:</strong> {service.bestFor}
                  </p>
                </div>

                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Our Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {["React/Next.js", "FastAPI", "PostgreSQL", "Python", "TensorFlow", "Docker", "AWS", "Tailwind CSS"].map((tech, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="text-green-400 font-semibold">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AIChat />
    </main>
  );
}
