"use client";
import { useState } from 'react';

export default function ProjectCalculator() {
  const [formData, setFormData] = useState({
    projectType: '',
    complexity: 'medium',
    features: [],
    timeline: 'standard'
  });

  const [estimatedPrice, setEstimatedPrice] = useState(null);

  const projectTypes = [
    { id: 'web-app', name: 'Custom Web Application', base: 8000 },
    { id: 'ai-integration', name: 'AI Integration', base: 15000 },
    { id: 'data-dashboard', name: 'Data Analytics Dashboard', base: 12000 },
    { id: 'saas-platform', name: 'SaaS Product', base: 25000 },
    { id: 'mobile-app', name: 'Mobile Application', base: 18000 },
    { id: 'ecommerce', name: 'E-commerce Platform', base: 20000 }
  ];

  const features = [
    { id: 'auth', name: 'User Authentication', price: 1500 },
    { id: 'payment', name: 'Payment Integration', price: 2000 },
    { id: 'api', name: 'Custom API Development', price: 3000 },
    { id: 'admin', name: 'Admin Dashboard', price: 2500 },
    { id: 'realtime', name: 'Real-time Features', price: 3500 },
    { id: 'ai-ml', name: 'AI/ML Capabilities', price: 8000 },
    { id: 'mobile', name: 'Mobile Responsive', price: 2000 },
    { id: 'analytics', name: 'Advanced Analytics', price: 4000 }
  ];

  const calculateEstimate = () => {
    const selectedProject = projectTypes.find(p => p.id === formData.projectType);
    if (!selectedProject) return;

    let basePrice = selectedProject.base;

    // Complexity multiplier
    const complexityMultipliers = { low: 0.7, medium: 1, high: 1.5, enterprise: 2 };
    basePrice *= complexityMultipliers[formData.complexity];

    // Add features
    const featuresTotal = formData.features.reduce((total, featureId) => {
      const feature = features.find(f => f.id === featureId);
      return total + (feature?.price || 0);
    }, 0);

    // Timeline adjustment
    const timelineMultipliers = { rush: 1.3, standard: 1, flexible: 0.9 };
    basePrice *= timelineMultipliers[formData.timeline];

    const total = Math.round(basePrice + featuresTotal);
    setEstimatedPrice(total);
  };

  const handleFeatureToggle = (featureId) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter(id => id !== featureId)
        : [...prev.features, featureId]
    }));
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Project Cost Calculator
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get an instant estimate for your custom development project.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div className="space-y-6">
              {/* Project Type */}
              <div>
                <label className="block text-white mb-3 font-semibold">Project Type</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select project type</option>
                  {projectTypes.map(type => (
                    <option key={type.id} value={type.id}>{type.name}</option>
                  ))}
                </select>
              </div>

              {/* Complexity */}
              <div>
                <label className="block text-white mb-3 font-semibold">Project Complexity</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'low', name: 'Simple', desc: 'Basic features' },
                    { id: 'medium', name: 'Standard', desc: 'Typical business app' },
                    { id: 'high', name: 'Complex', desc: 'Advanced functionality' },
                    { id: 'enterprise', name: 'Enterprise', desc: 'Large scale system' }
                  ].map(complexity => (
                    <button
                      key={complexity.id}
                      onClick={() => setFormData({...formData, complexity: complexity.id})}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        formData.complexity === complexity.id 
                          ? 'border-green-500 bg-green-500 bg-opacity-10' 
                          : 'border-gray-600 bg-gray-700'
                      }`}
                    >
                      <div className="text-white font-semibold">{complexity.name}</div>
                      <div className="text-gray-400 text-sm">{complexity.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <label className="block text-white mb-3 font-semibold">Key Features Needed</label>
                <div className="space-y-2">
                  {features.map(feature => (
                    <label key={feature.id} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.features.includes(feature.id)}
                        onChange={() => handleFeatureToggle(feature.id)}
                        className="rounded border-gray-600 bg-gray-700 text-green-500 focus:ring-green-500"
                      />
                      <span className="text-gray-300 flex-1">{feature.name}</span>
                      <span className="text-green-400 text-sm">+${feature.price.toLocaleString()}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-white mb-3 font-semibold">Timeline</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'rush', name: 'Fast', multiplier: '+30%' },
                    { id: 'standard', name: 'Standard', multiplier: 'Base' },
                    { id: 'flexible', name: 'Flexible', multiplier: '-10%' }
                  ].map(timeline => (
                    <button
                      key={timeline.id}
                      onClick={() => setFormData({...formData, timeline: timeline.id})}
                      className={`p-3 rounded-lg border text-center transition-all ${
                        formData.timeline === timeline.id 
                          ? 'border-green-500 bg-green-500 bg-opacity-10' 
                          : 'border-gray-600 bg-gray-700'
                      }`}
                    >
                      <div className="text-white font-semibold">{timeline.name}</div>
                      <div className="text-gray-400 text-sm">{timeline.multiplier}</div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={calculateEstimate}
                disabled={!formData.projectType}
                className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100"
              >
                Calculate Estimate
              </button>
            </div>
          </div>

          {/* Results Panel */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-green-400 mb-6">Your Estimate</h3>
            
            {estimatedPrice ? (
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-4">
                  ${estimatedPrice.toLocaleString()}
                </div>
                <div className="text-gray-300 mb-6">
                  Estimated project cost
                </div>
                
                <div className="space-y-4 text-left">
                  <div className="flex justify-between text-gray-300">
                    <span>Base Development</span>
                    <span>${projectTypes.find(p => p.id === formData.projectType)?.base.toLocaleString()}</span>
                  </div>
                  
                  {formData.features.map(featureId => {
                    const feature = features.find(f => f.id === featureId);
                    return (
                      <div key={featureId} className="flex justify-between text-gray-300">
                        <span>{feature.name}</span>
                        <span className="text-green-400">+${feature.price.toLocaleString()}</span>
                      </div>
                    );
                  })}

                  <div className="border-t border-gray-600 pt-2">
                    <div className="flex justify-between text-white font-semibold">
                      <span>Total Estimate</span>
                      <span>${estimatedPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Get Detailed Proposal
                  </button>
                  <button className="w-full border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-400 py-12">
                <div className="text-6xl mb-4">📊</div>
                <p>Configure your project to see the estimate</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
