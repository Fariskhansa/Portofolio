import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  const projectsData = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features secure payments and inventory management.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'Task Tracker Dashboard',
      description: 'A beautiful and responsive task management dashboard using Tailwind CSS and React context API for state management.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      tags: ['React', 'Tailwind', 'Context API'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A brutalist inspired personal portfolio website (this one!) built with Vite, React, and custom Neobrutalism styling.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
      tags: ['React', 'Vite', 'Neobrutalism'],
      githubLink: '#',
      liveLink: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-neo-yellow">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionTitle align="left" className="mb-16">
          Selected Works
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
