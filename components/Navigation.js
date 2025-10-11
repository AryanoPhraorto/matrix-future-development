'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-green-400">MATRIX FUTURE</span>
              <span className="ml-1 text-white">DEVELOPMENT</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-green-400 transition duration-300">Home</Link>
            <Link href="/services" className="hover:text-green-400 transition duration-300">Services</Link>
            <Link href="/portfolio" className="hover:text-green-400 transition duration-300">Portfolio</Link>
            <Link href="/about" className="hover:text-green-400 transition duration-300">About</Link>
            <Link href="/contact" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md transition duration-300">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-400 hover:text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2">
              <Link href="/" className="block px-3 py-2 hover:text-green-400">Home</Link>
              <Link href="/services" className="block px-3 py-2 hover:text-green-400">Services</Link>
              <Link href="/portfolio" className="block px-3 py-2 hover:text-green-400">Portfolio</Link>
              <Link href="/about" className="block px-3 py-2 hover:text-green-400">About</Link>
              <Link href="/contact" className="block px-3 py-2 bg-green-500 hover:bg-green-600 rounded-md">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
