import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import heroPhoto from '../../assets/foto.jpeg';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Frontend Developer.';

  useEffect(() => {
    let timeout;
    let isDeleting = false;
    let currentIndex = 0;

    const type = () => {
      if (isDeleting) {
        setTypedText(fullText.substring(0, currentIndex - 1));
        currentIndex--;

        if (currentIndex === 0) {
          isDeleting = false;
          timeout = setTimeout(type, 500); // Wait before typing again
        } else {
          timeout = setTimeout(type, 100); // Deletion speed
        }
      } else {
        setTypedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;

        if (currentIndex === fullText.length) {
          isDeleting = true;
          timeout = setTimeout(type, 2500); // Pause at full text
        } else {
          timeout = setTimeout(type, 150); // Typing speed
        }
      }
    };

    timeout = setTimeout(type, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 bg-neo-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 lg:order-1 relative z-10"
          >
            <div className="inline-block border-4 border-neo-black bg-neo-cyan px-4 py-2 font-bold mb-6 shadow-neo -rotate-2">
              HELLO WORLD 👋
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tighter uppercase">
              I'm <span className="text-white text-stroke">Faris Khansa Fayzi</span>
              <br />
              <span className="bg-neo-yellow px-2 border-4 border-neo-black shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] inline-block mt-4 min-h-[1.2em] min-w-[2ch]">
                {typedText}<span className="animate-pulse">|</span>
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-medium mb-10 max-w-lg border-l-8 border-neo-red pl-4">
              Building bold, unapologetic, and highly functional web experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button to="#projects" variant="primary" className="text-lg px-8 py-4">
                View My Work
              </Button>
              <Button to="#contact" variant="outline" className="text-lg px-8 py-4 bg-white">
                Contact Me
              </Button>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 relative flex justify-center"
          >
            {/* Decorative Elements */}
            <motion.div
              className="absolute top-0 right-10 w-24 h-24 bg-neo-red rounded-full border-4 border-neo-black shadow-neo"
              animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-16 h-16 bg-neo-blue border-4 border-neo-black shadow-neo"
              animate={{ y: [0, 20, 0], rotate: [-12, 12, -12] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Main Image Container */}
            <div className="relative w-full max-w-md aspect-square bg-neo-yellow border-8 border-neo-black shadow-[16px_16px_0px_0px_rgba(26,26,26,1)] overflow-hidden group">
              <img
                src={heroPhoto}
                alt="Faris"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Custom CSS for text stroke */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .text-stroke {
          -webkit-text-stroke: 3px #1A1A1A;
          color: white;
        }
      `}} />
    </section>
  );
};

export default Hero;
