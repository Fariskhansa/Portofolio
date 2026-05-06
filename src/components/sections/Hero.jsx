import React from 'react';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 bg-neo-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 relative z-10">
            <div className="inline-block border-4 border-neo-black bg-neo-cyan px-4 py-2 font-bold mb-6 shadow-neo -rotate-2">
              HELLO WORLD 👋
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tighter uppercase">
              I'm <span className="text-white text-stroke">Faris</span>
              <br />
              <span className="bg-neo-yellow px-2 border-4 border-neo-black shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] inline-block mt-2">
                Developer.
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
          </div>

          {/* Visual Content */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-10 w-24 h-24 bg-neo-red rounded-full border-4 border-neo-black shadow-neo animate-bounce" style={{animationDuration: '3s'}}></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-neo-blue border-4 border-neo-black shadow-neo -rotate-12"></div>
            
            {/* Main Image Container */}
            <div className="relative w-full max-w-md aspect-square bg-neo-yellow border-8 border-neo-black shadow-[16px_16px_0px_0px_rgba(26,26,26,1)] overflow-hidden group">
              <img 
                src="https://via.placeholder.com/600x600?text=Profile" 
                alt="Faris" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

        </div>
      </div>
      
      {/* Custom CSS for text stroke */}
      <style dangerouslySetInnerHTML={{__html: `
        .text-stroke {
          -webkit-text-stroke: 3px #1A1A1A;
          color: white;
        }
      `}} />
    </section>
  );
};

export default Hero;
