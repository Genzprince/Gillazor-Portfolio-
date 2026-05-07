import React from 'react';
import { motion } from 'framer-motion';
import projects from '../data/projects.json';

export default function PortfolioPage() {
  return (
    <div className="pt-32 px-8 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <motion.h1 
        className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Our Portfolio
      </motion.h1>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img src={project.thumbnail} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <span className="inline-block bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                {project.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
