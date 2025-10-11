"use client";
import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechStart Inc",
      role: "CEO",
      content: "Matrix Future Development delivered our AI analytics platform 2 weeks ahead of schedule. The quality exceeded our expectations and we&apos;ve seen a 40% increase in user engagement.",
      project: "SaaS Analytics Platform",
      results: ["40% engagement increase", "2 weeks early delivery", "98% client satisfaction"],
      avatar: "👩‍💼"
    },
    {
      name: "Marcus Rodriguez",
      company: "HealthPlus Clinic",
      role: "Operations Director", 
      content: "The patient portal system transformed our clinic operations. We reduced administrative workload by 60% and improved patient satisfaction scores dramatically.",
      project: "Healthcare Patient Portal",
      results: ["60% workload reduction", "45% faster appointments", "95% patient satisfaction"],
      avatar: "👨‍⚕️"
    },
    {
      name: "Jennifer Kim",
      company: "DataFlow Analytics",
      role: "CTO",
      content: "Their AI integration expertise helped us process 5x more data with higher accuracy. The team is professional, responsive, and truly understands business needs.",
      project: "AI Data Processing System",
      results: ["5x data processing", "92% accuracy improvement", "30% cost reduction"],
      avatar: "👩‍🔬"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. See what our clients say about working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <div className="text-center mb-6">
            <div className="text-4xl mb-4">{testimonials[currentTestimonial].avatar}</div>
            <div className="text-2xl font-bold text-green-400 mb-2">
              {testimonials[currentTestimonial].name}
            </div>
            <div className="text-gray-300">
              {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
            </div>
            <div className="text-green-500 text-sm mt-1">
              Project: {testimonials[currentTestimonial].project}
            </div>
          </div>

          <blockquote className="text-xl text-gray-300 text-center mb-6 italic">
            &quot;{testimonials[currentTestimonial].content}&quot;
          </blockquote>

          <div className="flex justify-center space-x-4 mb-6">
            {testimonials[currentTestimonial].results.map((result, index) => (
              <div key={index} className="bg-gray-700 rounded-lg px-4 py-2">
                <div className="text-green-400 text-sm font-semibold">{result}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-green-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center space-x-12 mt-12 opacity-70">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">15+</div>
            <div className="text-gray-400 text-sm">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">100%</div>
            <div className="text-gray-400 text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">$2M+</div>
            <div className="text-gray-400 text-sm">Client Value Generated</div>
          </div>
        </div>
      </div>
    </section>
  );
}
