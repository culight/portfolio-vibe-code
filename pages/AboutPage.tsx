import React from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="order-2 md:order-1">
          <h1 className="text-4xl font-bold mb-6 tracking-tight">About Me</h1>
          <div className="space-y-6 text-secondary text-lg leading-relaxed">
            <p>
              Hello! I'm Alex, a passionate frontend engineer and UI designer based in San Francisco. I specialize in building high-performance web applications with a focus on interaction design and accessibility.
            </p>
            <p>
              With a background in both Computer Science and Fine Arts, I straddle the line between technical execution and creative direction. I believe that the best digital experiences are those that feel invisible—where the technology gets out of the way of the user's intent.
            </p>
            <p>
              When I'm not coding, you can find me exploring brutalist architecture, brewing way too much coffee, or hiking the Pacific Northwest trails.
            </p>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/5">
             <h3 className="text-white font-medium mb-4">Connect</h3>
             <p className="text-secondary">hello@alexdev.com</p>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative aspect-[3/4] w-full max-w-md mx-auto bg-surface rounded-2xl overflow-hidden border border-white/5 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          >
            <img 
              src="https://picsum.photos/800/1200?grayscale" 
              alt="Portrait of Alex" 
              className="w-full h-full object-cover"
            />
            {/* Overlay texture effect */}
            <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none mix-blend-overlay"></div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;