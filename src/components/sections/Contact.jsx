import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-neo-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionTitle align="center" className="mb-12">
            Get In Touch
          </SectionTitle>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
            className="bg-neo-red p-8 md:p-12 border-8 border-neo-black shadow-[12px_12px_0px_0px_rgba(26,26,26,1)]"
          >
            <p className="text-white text-xl md:text-2xl font-bold mb-8 text-center">
              Have a project in mind or just want to say hi? I'm always open to new opportunities!
            </p>
            
            <div className="flex flex-col gap-6">
              <a href="https://www.linkedin.com/in/faris-khansa-fayzi-15b921338/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 w-full bg-neo-yellow px-6 py-5 border-4 border-neo-black text-neo-black font-black text-2xl uppercase tracking-wider transition-all duration-200 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_rgba(26,26,26,1)] active:translate-y-0 active:translate-x-0 active:shadow-none">
                <FaLinkedin className="text-4xl" /> LinkedIn
              </a>
              <a href="https://github.com/Fariskhansa" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 w-full bg-white px-6 py-5 border-4 border-neo-black text-neo-black font-black text-2xl uppercase tracking-wider transition-all duration-200 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_rgba(26,26,26,1)] active:translate-y-0 active:translate-x-0 active:shadow-none">
                <FaGithub className="text-4xl" /> GitHub
              </a>
              <a href="https://www.instagram.com/fariskhnsa/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 w-full bg-neo-cyan px-6 py-5 border-4 border-neo-black text-neo-black font-black text-2xl uppercase tracking-wider transition-all duration-200 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_rgba(26,26,26,1)] active:translate-y-0 active:translate-x-0 active:shadow-none">
                <FaInstagram className="text-4xl" /> Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
