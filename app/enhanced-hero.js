
19580615

"use client"
import { useEffect } from 'react'

export default function EnhancedHero() {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const container = document.querySelector('.hero-container');
    if (container) {
      container.appendChild(canvas);
    }
    
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Matrix rain animation
    const chars = "01アイウエオカキクケコ";
    const drops = [];
    const charSize = 14;
    
    for(let i = 0; i < canvas.width/charSize; i++) {
      drops[i] = { y: Math.random() * -100, speed: 2 + Math.random() * 5 };
    }

    function drawMatrix() {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00ff41';
      ctx.font = charSize + 'px monospace';
      
      drops.forEach((drop, i) => {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * charSize, drop.y);
        
        drop.y += drop.speed;
        if(drop.y > canvas.height && Math.random() > 0.975) {
          drop.y = -20;
        }
      });
    }

    const interval = setInterval(drawMatrix, 33);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
      if (container && container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, []);

  return (
    <div className="hero-container relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 matrix-glow animate-pulse">
          Matrix Future Development
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
          Building Tomorrow's Solutions Today
        </p>
        <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
          We build intelligent web applications, AI-powered solutions, and data-driven platforms that transform businesses and drive innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-matrix-green text-matrix-dark px-8 py-4 rounded-lg font-bold hover:bg-green-400 transition transform hover:scale-105 shadow-lg shadow-matrix-green/30">
            Start Your Project
          </button>
          <button className="border-2 border-matrix-green text-matrix-green px-8 py-4 rounded-lg font-bold hover:bg-matrix-green/10 transition transform hover:scale-105 backdrop-blur-sm">
            View Our Work
          </button>
        </div>
      </div>
    </div>
  )
}
