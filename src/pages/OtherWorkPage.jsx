import React, { useState } from 'react';
import { motion } from 'framer-motion';

const OtherWorkPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const works = [
    {
      id: 1,
      title: "Gaming Montage",
      description: "Epic gaming content with smooth transitions",
      category: "gaming",
      image: "https://via.placeholder.com/800x450/1f2937/ffffff?text=Gaming+Montage",
      stats: "100K+ views"
    },
    {
      id: 2,
      title: "Educational Content",
      description: "Engaging educational videos",
      category: "education",
      image: "https://via.placeholder.com/800x450/1f2937/ffffff?text=Educational+Content",
      stats: "50K+ views"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'gaming', name: 'Gaming' },
    { id: 'education', name: 'Education' },
    { id: 'branding', name: 'Branding' }
  ];

  const filteredWorks = selectedCategory === 'all' ? works : works.filter(w => w.category === selectedCategory);

  return (
    <div className="py-20 px-8 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent premium-font"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Other Work & Projects
        </motion.h1>
        
        <motion.p 
          className="text-center text-gray-400 mb-16 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Diverse projects across multiple industries
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all border ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary to-secondary text-white border-primary'
                  : 'bg-black text-white border-white/20 hover:border-primary'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work, index) => (
            <motion.div
              key={work.id}
              className="premium-card rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img src={work.image} alt={work.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-blue-500/80 rounded-full text-white text-sm font-medium capitalize">
                  {work.category}
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/80 rounded-full text-blue-400 text-sm font-medium">
                  {work.stats}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {work.title}
                </h3>
                <p className="text-gray-300 text-sm">{work.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherWorkPage;
