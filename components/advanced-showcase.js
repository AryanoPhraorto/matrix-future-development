"use client";
import { useState, useEffect } from 'react';

export default function AdvancedShowcase() {
  const [stats, setStats] = useState({ projects: 0, clients: 0, revenue: 0, satisfaction: 0 });
  const targetStats = { projects: 18, clients: 24, revenue: 2.3, satisfaction: 100 };
  
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    Object.keys(targetStats).forEach(stat => {
      let current = 0;
      const target = targetStats[stat];
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setStats(prev => ({ ...prev, [stat]: Number(current.toFixed(stat === 'revenue' ? 1 : 0)) }));
      }, stepDuration);
    });
  }, [targetStats]);

  const technologies = [
    { name: "React/Next.js", icon: "⚛️", color: "from-blue-500 to-cyan-400" },
    { name: "FastAPI/Python", icon: "🐍", color: "from-green-500 to-emerald-400" },
    { name: "PostgreSQL", icon: "🐘", color: "from-blue-600 to-indigo-500" },
    { name: "TensorFlow", icon: "🧠", color: "from-orange-500 to-red-500" },
    { name: "AWS", icon: "☁️", color: "from-yellow-500 to-orange-400" },
    { name: "Docker", icon: "🐳", color: "from-blue-400 to-cyan-300" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Animated Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-2">
              {stats.projects}+
            </div>
            <div className="text-gray-400">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-blue-400 mb-2">
              {stats.clients}+
            </div>
            <div className="text-gray-400">Satisfied Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-purple-400 mb-2">
              ${stats.revenue}M+
            </div>
            <div className="text-gray-400">Client Value Generated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-2">
              {stats.satisfaction}%
            </div>
            <div className="text-gray-400">Satisfaction Rate</div>
          </div>
        </div>

        {/* 3D Tech Stack */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Cutting-Edge Technology Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We master the modern technologies that power tomorrow&apos;s innovations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {technologies.map((tech) => (
            <div 
              key={tech.name}
              className="group relative"
            >
              <div className={`
                relative bg-gray-800 rounded-2xl p-6 border-2 border-gray-700 
                transition-all duration-500 transform group-hover:scale-110 
                group-hover:rotate-3 hover:shadow-2xl overflow-hidden
                hover:bg-gradient-to-br ${tech.color}
              `}>
                <div className="text-4xl mb-3 transform group-hover:scale-125 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div className="text-white font-semibold text-sm opacity-90 group-hover:opacity-100">
                  {tech.name}
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
