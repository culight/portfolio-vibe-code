import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
  index: number;
  heightClass?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, heightClass = "h-[400px]" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/projects/${project.slug}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative w-full ${heightClass} cursor-pointer perspective-1000 group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Card Container - The flipping mechanism */}
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-500"
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden bg-surface border border-white/5 shadow-xl">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-6 left-6">
            <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
            <p className="text-secondary text-sm">{project.tags.join(' • ')}</p>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rounded-xl bg-surface border border-white/10 p-8 flex flex-col justify-center items-start shadow-2xl rotate-y-180"
        >
          <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
          <p className="text-secondary leading-relaxed mb-6">
            {project.shortDescription}
          </p>
          <div className="mt-auto flex items-center text-white font-medium group/link">
            View Details
            <ArrowRight size={16} className="ml-2 transition-transform group-hover/link:translate-x-1" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;