import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projectsData from '../data/projects.json';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [projects, setProjects] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [viewMode, setViewMode] = useState('reels');
  
  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'gaming', name: 'Gaming' },
    { id: 'education', name: 'Education' },
    { id: 'motion', name: 'Motion Graphics' },
    { id: '3d', name: '3D Animation' }
  ];

  const viewModes = [
    { id: 'reels', name: 'Reels & Shorts' },
    { id: 'youtube', name: 'YouTube Videos' }
  ];

  const filteredProjects = projects.filter(project => {
    const typeMatch = project.type === viewMode;
    return typeMatch;
  });

  const extractYouTubeId = (url) => {
    if (!url) return null;
    let videoId = '';
    if (url.includes('watch?v=')) {
      videoId = url.split('watch?v=')[1]?.split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0];
    } else if (url.includes('/embed/')) {
      videoId = url.split('/embed/')[1]?.split('?')[0];
    }
    return videoId || null;
  };

  return (
    <section id="portfolio" className="py-20 px-8 bg-black min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30" whileHover={{ scale: 1.05 }}>
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Work</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent premium-font">
            Video Showcase
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our collection of stunning reels and full-length videos
          </p>
        </motion.div>

        <motion.div className="flex justify-center gap-4 mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          {viewModes.map((mode, index) => (
            <motion.button
              key={mode.id}
              onClick={() => setViewMode(mode.id)}
              className={`relative px-8 py-4 rounded-2xl font-bold transition-all overflow-hidden ${viewMode === mode.id ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {viewMode === mode.id && (
                <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" layoutId="activeTab" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
              )}
              {viewMode !== mode.id && <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10" />}
              <span className="relative z-10">{mode.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {filteredProjects.length === 0 ? (
          <motion.div className="text-center py-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="text-gray-400 text-lg">No videos found. Try a different filter!</p>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div 
              key={viewMode}
              className={`grid gap-6 ${viewMode === 'reels' ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 max-w-[1800px] mx-auto' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id} 
                className="relative rounded-3xl overflow-hidden group bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                layout
              >
                <motion.div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                
                <div 
                  className={`relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 cursor-pointer ${project.type === 'reels' ? 'aspect-[9/16]' : 'aspect-video'}`}
                  onMouseEnter={() => setHoveredVideo(project)}
                  onMouseLeave={() => setHoveredVideo(null)}
                  onClick={() => setSelectedVideo(project)}
                >
                  {hoveredVideo && hoveredVideo.id === project.id ? (
                    (() => {
                      const videoId = extractYouTubeId(project.youtubeLink);
                      if (videoId) {
                        return (
                          <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                          />
                        );
                      }
                      return null;
                    })()
                  ) : (
                    (() => {
                      const videoId = extractYouTubeId(project.youtubeLink);
                      const thumbnailSrc = project.thumbnail || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                      return (
                        <>
                          <img
                            src={thumbnailSrc}
                            alt={project.title}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                            onError={(e) => {
                              e.target.src = `https://via.placeholder.com/800x450/1f2937/ffffff?text=${encodeURIComponent(project.title)}`;
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60"></div>
                        </>
                      );
                    })()
                  )}
                  
                  <motion.div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/50 transition-all duration-300 rounded-t-3xl" />
                  
                  <motion.div className="absolute inset-0 flex items-center justify-center" initial={{ opacity: 0, scale: 0.8 }} whileHover={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
                    <motion.div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                      <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </motion.div>
                  </motion.div>
                  
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="px-4 py-1.5 bg-black/80 backdrop-blur-md rounded-full border border-white/20">
                      <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">{project.category}</span>
                    </div>
                    {project.type === 'reels' && (
                      <div className="px-3 py-1.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">Reel</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm">
                  <motion.h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-500">Available</span>
                    </div>
                    <motion.button className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center space-x-1" whileHover={{ x: 5 }}>
                      <span>Watch Now</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
      
      <AnimatePresence>
        {selectedVideo && (
          <motion.div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedVideo(null)}>
            <motion.div className="relative w-full max-w-6xl bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/20" initial={{ scale: 0.8, opacity: 0, y: 50 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.8, opacity: 0, y: 50 }} transition={{ type: "spring", damping: 25 }} onClick={(e) => e.stopPropagation()}>
              <motion.button onClick={() => setSelectedVideo(null)} className="absolute top-6 right-6 z-20 w-12 h-12 bg-black/80 hover:bg-red-500/80 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/20" whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
              
              <div className="aspect-video relative bg-black">
                {(() => {
                  const videoId = extractYouTubeId(selectedVideo.youtubeLink);
                  if (videoId) {
                    return (
                      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} className="w-full h-full" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    );
                  }
                  return null;
                })()}
              </div>
              
              <div className="p-8 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <motion.h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-3" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                      {selectedVideo.title}
                    </motion.h3>
                    <motion.p className="text-gray-300 text-lg leading-relaxed" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                      {selectedVideo.description}
                    </motion.p>
                  </div>
                  <motion.div className="ml-6 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}>
                    <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">{selectedVideo.category}</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
