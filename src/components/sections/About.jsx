import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white border-y-8 border-neo-black">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionTitle align="center">About Me</SectionTitle>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto mt-12 bg-neo-bg border-4 border-neo-black shadow-neo p-8 md:p-12 relative"
        >
          {/* Decorative Tape */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-neo-cyan/50 border-2 border-neo-black -rotate-3 z-10"></div>
          
          <div className="prose prose-lg max-w-none font-medium text-neo-black">
            <p className="text-xl md:text-2xl leading-relaxed mb-6">
              I am a passionate <strong className="bg-neo-yellow px-1">Frontend Developer</strong> with a strong focus on creating unique and engaging user experiences. I believe that the web doesn't have to be boring.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed mb-6">
              My approach combines solid engineering principles with striking, brutalist design aesthetics. I build applications that are not only performant and accessible but also leave a lasting visual impact.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, contributing to open-source, or experimenting with the latest web technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
