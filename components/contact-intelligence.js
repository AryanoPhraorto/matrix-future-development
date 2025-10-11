"use client";
import { useState, useEffect } from 'react';

export default function ContactIntelligence() {
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", projectType: "", budget: "", description: ""
  });
  const [leadScore, setLeadScore] = useState(0);
  const [suggestions, setSuggestions] = useState([]);

  // AI-powered lead scoring
  useEffect(() => {
    let score = 0;
    const newSuggestions = [];

    if (formData.budget.includes("$50,000") || formData.budget.includes("$50,000+")) {
      score += 40;
      newSuggestions.push("💰 Premium client detected - prioritize response");
    }
    
    if (formData.projectType.includes("Healthcare") || formData.projectType.includes("Medical")) {
      score += 30;
      newSuggestions.push("🏥 Healthcare project - high budget potential");
    }
    
    if (formData.description.length > 100) {
      score += 20;
      newSuggestions.push("📝 Detailed requirements - serious inquiry");
    }
    
    if (formData.company && formData.company.length > 2) {
      score += 10;
    }

    setLeadScore(score);
    setSuggestions(newSuggestions);
  }, [formData]);

  const getLeadQuality = () => {
    if (leadScore >= 70) return { text: "Hot Lead", color: "text-red-400", bg: "bg-red-500" };
    if (leadScore >= 40) return { text: "Warm Lead", color: "text-orange-400", bg: "bg-orange-500" };
    return { text: "Cold Lead", color: "text-blue-400", bg: "bg-blue-500" };
  };

  const leadQuality = getLeadQuality();

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              AI-Powered Project Intelligence
            </h2>
            <p className="text-xl text-gray-300">
              Our system automatically analyzes your project for optimal matching
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Lead Score Card */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Lead Intelligence</h3>
              <div className="text-center">
                <div className={`text-3xl font-bold mb-2 ${leadQuality.color}`}>
                  {leadScore}%
                </div>
                <div className={`inline-block px-3 py-1 rounded-full text-white text-sm ${leadQuality.bg}`}>
                  {leadQuality.text}
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Response Time</h3>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {leadScore >= 70 ? "1-2 hours" : leadScore >= 40 ? "4-6 hours" : "12-24 hours"}
                </div>
                <div className="text-gray-400 text-sm">Based on lead priority</div>
              </div>
            </div>

            {/* Project Fit */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Project Fit</h3>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {leadScore >= 50 ? "Perfect" : leadScore >= 30 ? "Good" : "Review"}
                </div>
                <div className="text-gray-400 text-sm">Match with our expertise</div>
              </div>
            </div>
          </div>

          {/* AI Suggestions */}
          {suggestions.length > 0 && (
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">🤖 AI Recommendations</h3>
              <div className="space-y-2">
                {suggestions.map((suggestion, index) => (
                  <div key={index} className="flex items-center text-white">
                    <span className="mr-3">💡</span>
                    {suggestion}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
              🚀 Get Immediate Quote
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
              📞 Schedule Call Now
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
              💼 View Similar Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
