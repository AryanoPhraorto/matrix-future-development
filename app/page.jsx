"use client"

import React, { useState, useEffect } from 'react'
import { Code2, Brain, Zap, ArrowRight, Menu, X } from 'lucide-react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [typedText, setTypedText] = useState('')
  const fullText = 'Building Tomorrow\'s Solutions Today'

  useEffect(() => {
    let i = 0
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typing)
      }
    }, 100)
    
    return () => clearInterval(typing)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-green-900/10 to-black z-0" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,255,65,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] z-0" />
      
      {/* Navigation */}
      <nav className="relative z-50 border-b border-green-500/20 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-green-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Matrix Future
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="hover:text-green-400 transition-colors">Services</a>
              <a href="#portfolio" className="hover:text-green-400 transition-colors">Portfolio</a>
              <a href="#process" className="hover:text-green-400 transition-colors">Process</a>
              <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
            </div>

            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden mt-4 space-y-4 pb-4">
              <a href="#services" className="block hover:text-green-400 transition-colors">Services</a>
              <a href="#portfolio" className="block hover:text-green-400 transition-colors">Portfolio</a>
              <a href="#process" className="block hover:text-green-400 transition-colors">Process</a>
              <a href="#contact" className="block hover:text-green-400 transition-colors">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 z-10">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Matrix <span className="text-green-500">Future</span>
            <br />
            <span className="text-3xl md:text-5xl font-light">Development</span>
          </h1>
          
          <div className="h-12 mb-8">
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              {typedText}<span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            We build intelligent web applications, AI-powered solutions, and data-driven 
            platforms that transform businesses and drive innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="relative py-20 px-6 z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-green-500">Services</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-8 hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-green-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="text-2xl font-bold text-green-500">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative py-20 px-6 z-10 bg-black/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">
            Featured <span className="text-green-500">Work</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">JobIntelliTrack</h3>
              <p className="text-xl text-gray-300">
                AI-Powered Job Application Management System
              </p>
              <p className="text-gray-400 text-lg">
                A full-stack web application that helps job seekers track applications, 
                analyze success probabilities, and optimize their job search strategy 
                using machine learning.
              </p>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-green-500">Key Features:</h4>
                <ul className="grid grid-cols-2 gap-2 text-gray-300">
                  <li>✓ AI Application Analysis</li>
                  <li>✓ Skills Match Scoring</li>
                  <li>✓ Interactive Dashboard</li>
                  <li>✓ Resume Parsing</li>
                  <li>✓ Success Prediction</li>
                  <li>✓ Real-time Analytics</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-green-500">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {['FastAPI', 'React', 'Python', 'PostgreSQL', 'Machine Learning', 'Streamlit'].map((tech) => (
                    <span key={tech} className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-black font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  View Case Study
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-500/10 to-black border border-green-500/30 rounded-xl p-8 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <Code2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <p className="text-gray-400">JobIntelliTrack Dashboard Preview</p>
                  <div className="mt-4 text-sm text-gray-500">
                    AI Confidence: 87% | Skills Match: 92%
                  </div>
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-transparent rounded-xl blur-sm opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="relative py-20 px-6 z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-green-500">Process</span>
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6 z-10 bg-black/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16">
            Start Your <span className="text-green-500">Project</span>
          </h2>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/50 border border-green-500/30 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-black/50 border border-green-500/30 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Company</label>
                <input 
                  type="text" 
                  className="w-full bg-black/50 border border-green-500/30 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="Your Company Name"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Project Details</label>
                <textarea 
                  rows={4}
                  className="w-full bg-black/50 border border-green-500/30 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="Tell us about your project requirements, timeline, and budget..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
              >
                Send Project Inquiry
              </button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-green-500/20">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h4 className="font-semibold text-green-500 mb-2">Email</h4>
                  <p className="text-gray-400">contact@matrixfuture.dev</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-500 mb-2">Response Time</h4>
                  <p className="text-gray-400">Within 24 hours</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-500 mb-2">Location</h4>
                  <p className="text-gray-400">Global Remote Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-green-500/20 py-8 px-6 z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code2 className="h-6 w-6 text-green-500" />
              <span className="text-lg font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Matrix Future Development
              </span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>Building Tomorrow's Solutions Today</p>
              <p className="text-sm mt-1">© 2024 Matrix Future Development. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const services = [
  {
    icon: React.createElement(Code2, { className: "h-12 w-12" }),
    title: "Custom Web Applications",
    description: "Full-stack solutions built with modern technologies like FastAPI, React, and cloud-native architecture.",
    price: "$5,000 - $50,000"
  },
  {
    icon: React.createElement(Brain, { className: "h-12 w-12" }),
    title: "AI Integration",
    description: "Intelligent features, machine learning models, and data analytics that provide competitive advantages.",
    price: "$10,000 - $100,000"
  },
  {
    icon: React.createElement(Zap, { className: "h-12 w-12" }),
    title: "SaaS Development",
    description: "Scalable software-as-a-service platforms with subscription models and enterprise features.",
    price: "$25,000 - $150,000"
  }
]

const processSteps = [
  {
    title: "Discovery",
    description: "We analyze your requirements and define project scope"
  },
  {
    title: "Design",
    description: "Create wireframes, architecture, and technical specifications"
  },
  {
    title: "Development",
    description: "Agile development with regular updates and testing"
  },
  {
    title: "Delivery",
    description: "Deployment, training, and ongoing support"
  }
]
