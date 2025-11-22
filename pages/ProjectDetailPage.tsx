import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Project } from '../types';
import { getProjectBySlug } from '../services/contentService';
import { ArrowLeft, Calendar, Hash, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProject = async () => {
      if (slug) {
        const data = await getProjectBySlug(slug);
        if (data) {
          setProject(data);
        } else {
          // Handle 404 implicitly by redirecting or showing error
          navigate('/');
        }
      }
      setLoading(false);
    };
    loadProject();
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <Loader2 className="animate-spin text-secondary" size={32} />
      </div>
    );
  }

  if (!project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      {/* Back Button */}
      <Link 
        to="/" 
        className="inline-flex items-center text-secondary hover:text-primary transition-colors mb-8 group"
      >
        <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
        Back to Projects
      </Link>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">{project.title}</h1>
        <div className="flex flex-wrap gap-6 text-sm text-secondary font-mono border-l-2 border-white/10 pl-4">
          <div className="flex items-center">
            <Calendar size={14} className="mr-2" />
            {project.date}
          </div>
          <div className="flex items-center">
            <Hash size={14} className="mr-2" />
            {project.tags.join(', ')}
          </div>
        </div>
      </header>

      {/* Main Image */}
      <div className="w-full aspect-video rounded-xl overflow-hidden mb-12 bg-surface border border-white/5 shadow-2xl">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold mb-4 text-white">Overview</h3>
          <p className="text-secondary text-sm leading-relaxed mb-8">
            {project.shortDescription}
          </p>
          
          <h3 className="text-lg font-semibold mb-4 text-white">Technologies</h3>
          <ul className="space-y-2">
            {project.tags.map(tag => (
              <li key={tag} className="text-secondary text-sm flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white/30 mr-2"></span>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="prose prose-invert prose-lg max-w-none text-secondary/90">
            <p className="leading-8 text-lg whitespace-pre-line">
              {project.fullDescription}
            </p>
            <p className="mt-6 leading-8 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mt-6 leading-8 text-lg">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetailPage;