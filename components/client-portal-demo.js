"use client";
import { useState } from 'react';

export default function ClientPortalDemo() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const demoFeatures = [
    {
      id: 'dashboard',
      title: 'Project Dashboard',
      description: 'Real-time project tracking, milestones, and performance metrics',
      features: ['Live progress tracking', 'Team collaboration', 'File sharing', 'Time tracking']
    },
    {
      id: 'communication',
      title: 'Secure Communication',
      description: 'Encrypted messaging, video calls, and document sharing',
      features: ['Encrypted chat', 'Video conferencing', 'File transfer', 'Audit logs']
    },
    {
      id: 'analytics',
      title: 'Advanced Analytics',
      description: 'AI-powered insights and business intelligence dashboards',
      features: ['Custom reports', 'Predictive analytics', 'Data visualization', 'Export capabilities']
    }
  ];

  const activeDemo = demoFeatures.find(f => f.id === activeTab);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Enterprise Client Portal
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the powerful tools we build for our enterprise clients
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-gray-800 rounded-3xl overflow-hidden border border-gray-700 shadow-2xl">
          {/* Demo Header */}
          <div className="bg-gray-900 px-6 py-4 border-b border-gray-700">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-300 text-sm">
                client-portal.matrixfuture.dev | Secure Connection 🔒
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Sidebar */}
            <div className="lg:w-1/4 bg-gray-900 p-6 border-r border-gray-700">
              <h3 className="text-white font-bold mb-4">Navigation</h3>
              <div className="space-y-2">
                {demoFeatures.map(feature => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveTab(feature.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                      activeTab === feature.id 
                        ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg' 
                        : 'text-gray-300 hover:bg-gray-800'
                    }`}
                  >
                    {feature.title}
                  </button>
                ))}
              </div>

              {/* Demo Stats */}
              <div className="mt-8 p-4 bg-gray-800 rounded-xl">
                <h4 className="text-white font-semibold mb-3">Project Stats</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm text-gray-300">
                      <span>Progress</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-300">
                      <span>Budget Used</span>
                      <span>$42,500/$50,000</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4 p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{activeDemo.title}</h3>
                <p className="text-gray-300">{activeDemo.description}</p>
              </div>

              {/* Demo Content Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {activeDemo.features.map((feature, index) => (
                  <div key={index} className="bg-gray-700 rounded-xl p-4 border border-gray-600">
                    <div className="text-green-400 text-lg mb-2">✓ {feature}</div>
                    <div className="text-gray-400 text-sm">
                      Live functionality included in all enterprise projects
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-6 text-center">
                <h4 className="text-white text-xl font-bold mb-3">
                  Ready to Build Your Custom Portal?
                </h4>
                <p className="text-white mb-4 opacity-90">
                  This is exactly what we can build for your business
                </p>
                <button className="bg-white text-gray-900 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  Start Your Project - $50,000+
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
