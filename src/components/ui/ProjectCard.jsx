import React from 'react';
import Button from './Button';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, image, tags, githubLink, liveLink }) => {
  return (
    <div className="neo-card flex flex-col h-full bg-white overflow-hidden group">
      {/* Image container */}
      <div className="relative border-b-4 border-neo-black overflow-hidden h-48 md:h-64">
        <img 
          src={image || 'https://via.placeholder.com/600x400?text=Project+Image'} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Overlay tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {tags && tags.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="bg-neo-cyan text-neo-black border-2 border-neo-black px-2 py-1 text-xs font-bold font-mono shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-neo-black/80 mb-6 flex-grow">{description}</p>
        
        {/* Actions */}
        <div className="flex gap-4 mt-auto">
          {liveLink && (
            <Button to={liveLink} variant="primary" className="flex-1 py-2 px-4 text-sm flex items-center justify-center gap-2">
              <FaExternalLinkAlt /> Live
            </Button>
          )}
          {githubLink && (
            <Button to={githubLink} variant="outline" className="flex-1 py-2 px-4 text-sm flex items-center justify-center gap-2">
              <FaGithub /> Repo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
