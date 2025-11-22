import React from 'react';
import { motion } from 'framer-motion';
import { Construction } from 'lucide-react';

const ResumePage: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center min-h-[50vh] text-center"
    >
      <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
        <Construction className="text-secondary" size={32} />
      </div>
      <h1 className="text-3xl font-bold mb-2">Work in Progress</h1>
      <p className="text-secondary max-w-md">
        The interactive resume is currently being built. Check back soon for a timeline of my professional journey.
      </p>
    </motion.div>
  );
};

export default ResumePage;