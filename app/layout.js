import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Matrix Future Development - AI-Powered Solutions',
  description: 'Building tomorrow\'s solutions today with cutting-edge AI and web development.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed top-0 w-full bg-black bg-opacity-90 backdrop-blur-sm z-50 border-b border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold text-green-400">
                <Link href="/">Matrix Future</Link>
              </div>
              <div className="space-x-6">
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
                <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
