import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import redbullImage from '../../assets/redbull.png';
import lwaimage from '../../assets/lwa.png';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

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

    {
      title: 'Learn With AI',
      description: 'A Website for teacher and student learn how to use AI for studying and teaching.',
      image: lwaimage,
      tags: ['React', 'Tailwind', 'Vite'],
      githubLink: 'https://github.com/Fariskhansa/Project-Pancasila',
      liveLink: 'https://learnwithai-orcin.vercel.app/'
    },
  ];

  return (
    <section id="projects" className="py-24 bg-neo-yellow">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionTitle align="left" className="mb-16">
          Selected Works
        </SectionTitle>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {projectsData.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="flex h-full">
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
