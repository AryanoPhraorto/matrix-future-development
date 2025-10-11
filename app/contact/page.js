"use client";
import AIChat from "../../components/ai-chat";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // In real implementation, you would send to your backend/email service
      console.log("Lead captured:", formData);
    }, 2000);
  };

  const projectTypes = [
    "Custom Web Application",
    "AI Integration",
    "Data Analytics Dashboard", 
    "SaaS Product Development",
    "Mobile Application",
    "Other"
  ];

  const budgetRanges = [
    "$5,000 - $15,000",
    "$15,000 - $30,000", 
    "$30,000 - $50,000",
    "$50,000+",
    "Not sure yet"
  ];

  const timelines = [
    "ASAP (1-2 weeks)",
    "1-2 months",
    "2-4 months", 
    "4-6 months",
    "Flexible timeline"
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Start Your Project
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ready to transform your business? Let&apos;s discuss your project and create something amazing together.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/portfolio" className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {!isSubmitted ? (
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h2 className="text-3xl font-bold text-green-400 mb-2">Get Your Free Consultation</h2>
                <p className="text-gray-300 mb-8">
                  Complete the form below and we&apos;ll get back to you within 2 hours with initial thoughts and next steps.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white mb-2 font-semibold">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2 font-semibold">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white mb-2 font-semibold">Company / Organization</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your company name (optional)"
                    />
                  </div>

                  {/* Project Qualification */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-white mb-2 font-semibold">Project Type *</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select type</option>
                        {projectTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-white mb-2 font-semibold">Budget Range *</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select budget</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-white mb-2 font-semibold">Timeline *</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((time, index) => (
                          <option key={index} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-white mb-2 font-semibold">Project Description *</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Tell us about your project goals, requirements, and any specific challenges you're facing..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </span>
                    ) : (
                      "Get Free Consultation & Proposal"
                    )}
                  </button>

                  <p className="text-gray-400 text-sm text-center">
                    We respect your privacy. Your information will only be used to contact you about your project.
                  </p>
                </form>
              </div>
            ) : (
              /* Success Message */
              <div className="bg-gray-800 rounded-2xl p-8 border border-green-500 text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-3xl font-bold text-green-400 mb-4">Thank You!</h2>
                <p className="text-xl text-gray-300 mb-6">
                  Your project details have been received. We&apos;ll review your information and contact you within 2 hours.
                </p>
                <div className="space-y-4">
                  <p className="text-gray-400">
                    <strong>Next steps:</strong><br />
                    1. We&apos;ll analyze your requirements<br />
                    2. Schedule a free consultation call<br />
                    3. Provide initial project proposal<br />
                    4. Discuss timeline and next steps
                  </p>
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Submit Another Project
                    </button>
                    <Link href="/portfolio" className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                      View Portfolio
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Email Us</h3>
              <p className="text-gray-300">contact@matrixfuture.dev</p>
              <p className="text-gray-400 text-sm">Response within 2 hours</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Live Chat</h3>
              <p className="text-gray-300">Use our AI assistant</p>
              <p className="text-gray-400 text-sm">Available 24/7</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Call Back</h3>
              <p className="text-gray-300">Schedule a call</p>
              <p className="text-gray-400 text-sm">Book through form</p>
            </div>
          </div>
        </div>
      </section>

      <AIChat />
    </main>
  );
}
