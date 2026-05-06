import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import redbullImage from '../../assets/redbull.png';

const Projects = () => {
  const projectsData = [
    {
      title: 'RedBull F1 Fanpage',
      description: 'A fanpage dedicated to the RedBull Racing Formula 1 team. Built with React and modern web technologies.',
      image: redbullImage,
      tags: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/Fariskhansa/RedBullFanpage',
      liveLink: 'https://red-bull-fanpage.vercel.app/'
    },
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
