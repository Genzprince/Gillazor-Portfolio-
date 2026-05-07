import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! In a production app, this would send your message via Web3Forms or similar service.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-20 px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent premium-font"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Let's Create Together
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-400 mb-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Ready to bring your vision to life? Get in touch with us today.
        </motion.p>
        
        <motion.div className="flex flex-wrap justify-center gap-4 mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <motion.button onClick={() => window.open('https://wa.me/919646028153', '_blank')} className="bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 rounded-full text-white font-semibold" whileHover={{ scale: 1.05 }}>
            WhatsApp
          </motion.button>
          <motion.button onClick={() => window.open('mailto:gillaxediting@gmail.com', '_blank')} className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 rounded-full text-white font-semibold" whileHover={{ scale: 1.05 }}>
            Email
          </motion.button>
          <motion.button onClick={() => window.open('https://www.instagram.com/gilla_edit/', '_blank')} className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-full text-white font-semibold" whileHover={{ scale: 1.05 }}>
            Instagram
          </motion.button>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <h3 className="text-2xl font-semibold mb-6 text-white">Get in Touch</h3>
            <div className="space-y-6">
              {[
                { label: 'Email', value: 'gillaxediting@gmail.com' },
                { label: 'Instagram', value: 'Gilla_x' },
                { label: 'YouTube', value: '@Gilla_x' }
              ].map((item) => (
                <div key={item.label} className="flex items-center space-x-4 p-4 rounded-lg bg-white/5">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h3 className="text-2xl font-semibold mb-6 text-white">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none" required />
                <input type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none" required />
              </div>
              <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleChange} className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none" />
              <select name="subject" value={formData.subject} onChange={handleChange} className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none" required>
                <option value="">Select Project Type</option>
                <option value="Reels & Shorts">Reels & Shorts</option>
                <option value="Long Format Video">Long Format Video</option>
                <option value="Motion Graphics">Motion Graphics</option>
                <option value="3D Animation">3D Animation</option>
              </select>
              <textarea name="message" placeholder="Tell us about your project..." value={formData.message} onChange={handleChange} rows="6" className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none resize-none" required />
              <motion.button type="submit" className="w-full py-4 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-700" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                Send Message 📤
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
