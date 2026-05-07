import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import configData from '../data/config.json';

const PackagesPage = () => {
  const [packages, setPackages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(1);
  
  useEffect(() => {
    setPackages(configData.packages);
  }, []);
  
  useEffect(() => {
    if (packages.length > 0) {
      const interval = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % packages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [packages.length]);

  return (
    <div className="py-20 px-8 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent premium-font drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Packages
        </motion.h2>
        
        <motion.p 
          className="text-center text-white/80 mb-16 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Professional video editing with 4+ years of experience
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className={`bg-black/90 backdrop-blur-sm border rounded-3xl p-6 ${
                pkg.mostPopular ? 'border-blue-500/50 shadow-2xl shadow-blue-500/30' : 'border-white/20'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {pkg.mostPopular && (
                <div className="text-center mb-4">
                  <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    ⭐ Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-light italic text-white mb-2">{pkg.title}</h3>
              {pkg.subtitle && <p className="text-sm text-gray-400 mb-4">{pkg.subtitle}</p>}
              {pkg.duration && <p className="text-gray-400 mb-6">{pkg.duration}</p>}

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="text-gray-300 flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="text-gray-400 text-sm mb-6 italic">→ "{pkg.description}"</p>

              <motion.button 
                className="w-full bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-light italic py-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center bg-black border border-white/20 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-6 premium-font">Why Choose GillaX?</h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div className="flex items-center space-x-3">
              <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2 py-1 rounded">Experience</span>
              <span>4+ years experience in professional editing</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2 py-1 rounded">Adobe Suite</span>
              <span>Expert in Adobe After Effects, Premiere Pro & Photoshop</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2 py-1 rounded">Gaming</span>
              <span>Specializes in gaming smooth edits</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2 py-1 rounded">Versatile</span>
              <span>Skilled in all types of edits (cinematic, reels, social media)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PackagesPage;
