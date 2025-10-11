"use client";
import { useState } from 'react';

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm Matrix AI Assistant. How can I help you with our services today?", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      
      // AI responses based on input
      setTimeout(() => {
        const aiResponse = getAIResponse(input);
        setMessages(prev => [...prev, { text: aiResponse, sender: 'ai' }]);
      }, 1000);
      
      setInput('');
    }
  };

  const getAIResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('service') || input.includes('offer') || input.includes('what do you')) {
      return "We offer Custom Web Applications ($5K-$15K), AI Integration ($10K-$25K), Data Analytics Dashboards ($8K-$20K), and SaaS Development ($15K-$50K+). Which service interests you?";
    } else if (input.includes('price') || input.includes('cost')) {
      return "Our pricing starts at $5,000 for basic web apps and goes up to $50,000+ for enterprise SaaS solutions. All projects include maintenance and support.";
    } else if (input.includes('contact') || input.includes('get started')) {
      return "Great! You can email us at contact@matrixfuture.dev or use the contact form on our website. We typically respond within 2 hours.";
    } else if (input.includes('portfolio') || input.includes('work')) {
      return "We've built JobIntelliTrack (AI job tracking), E-commerce platforms, Data analytics dashboards, and custom business solutions. Check our portfolio page for case studies!";
    } else if (input.includes('timeline') || input.includes('how long')) {
      return "Projects typically take 4-8 weeks for web apps, 6-12 weeks for AI integration, and 12-20 weeks for SaaS platforms. We provide detailed timelines after requirements analysis.";
    } else {
      return "I'd love to help! Could you tell me more about your project needs? Or ask about our services, pricing, or timeline.";
    }
  };

  return (
    <>
      {/* Chat Widget Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 transform hover:scale-110"
      >
        <div className="w-6 h-6">🤖</div>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gray-900 p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-sm">🤖</span>
              </div>
              <div>
                <div className="text-white font-semibold">Matrix AI</div>
                <div className="text-green-400 text-xs">Online</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-green-500 text-white rounded-br-none'
                      : 'bg-gray-700 text-white rounded-bl-none'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about our services..."
                className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                onClick={handleSend}
                className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors"
              >
                ↑
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
