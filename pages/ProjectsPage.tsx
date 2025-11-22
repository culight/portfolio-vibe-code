import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import { getProjects } from '../services/contentService';
import ProjectCard from '../components/ProjectCard';
import { Loader2 } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await getProjects();
      setProjects(data);
      setLoading(false);
    };
    loadData();
  }, []);

  // Heights cycle to create a staggered/masonry visual effect
  const CARD_HEIGHTS = [
    "h-[420px]",
    "h-[500px]",
    "h-[380px]",
    "h-[480px]",
    "h-[400px]",
    "h-[450px]"
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <Loader2 className="animate-spin text-secondary" size={32} />
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Selected Work</h1>
        <p className="text-secondary max-w-xl text-lg">
          A collection of digital products, interfaces, and experiments crafted with precision and care.
        </p>
      </div>

      {/* Staggered Masonry Layout */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {projects.map((project, index) => (
          <div key={project.id} className="break-inside-avoid mb-8">
            <ProjectCard 
              project={project} 
              index={index} 
              heightClass={CARD_HEIGHTS[index % CARD_HEIGHTS.length]} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;