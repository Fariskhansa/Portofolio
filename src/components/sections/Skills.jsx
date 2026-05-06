import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs } from 'react-icons/si';

const Skills = () => {
  const skillsList = [
    { name: 'HTML', icon: <FaHtml5 />, color: 'bg-[#E34F26]' },
    { name: 'CSS', icon: <FaCss3Alt />, color: 'bg-[#1572B6]' },
    { name: 'JavaScript', icon: <FaJs />, color: 'bg-[#F7DF1E]', textColor: 'text-black' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'bg-[#3178C6]' },
    { name: 'React', icon: <FaReact />, color: 'bg-[#61DAFB]', textColor: 'text-black' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: 'bg-black' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'bg-[#38B2AC]', textColor: 'text-black' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'bg-[#339933]' },
    { name: 'Git', icon: <FaGitAlt />, color: 'bg-[#F05032]' },
  ];

  return (
    <section id="skills" className="py-24 bg-neo-cyan border-y-8 border-neo-black">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionTitle align="right" className="mb-16">
          My Toolkit
        </SectionTitle>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skillsList.map((skill, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center justify-center p-6 border-4 border-neo-black bg-white shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] transition-all duration-300`}
            >
              <div className={`text-5xl mb-4 ${skill.color} ${skill.textColor || 'text-white'} p-4 border-2 border-neo-black rotate-3`}>
                {skill.icon}
              </div>
              <span className="font-bold text-xl">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
