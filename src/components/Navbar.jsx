import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-lg border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          GillaX
        </Link>
        <div className="flex gap-8">
          <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
          <Link to="/services" className="text-gray-300 hover:text-white transition">Services</Link>
          <Link to="/portfolio" className="text-gray-300 hover:text-white transition">Portfolio</Link>
          <Link to="/packages" className="text-gray-300 hover:text-white transition">Packages</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
