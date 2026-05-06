import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neo-black text-white border-t-8 border-neo-yellow py-12">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-mono text-neo-cyan">
          LET'S BUILD SOMETHING BOLD.
        </h2>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="w-12 h-12 bg-white text-neo-black border-4 border-white flex items-center justify-center font-bold text-xl hover:bg-neo-yellow hover:text-neo-black hover:-translate-y-2 hover:shadow-[4px_4px_0px_0px_#F72585] transition-all">
            GH
          </a>
          <a href="#" className="w-12 h-12 bg-white text-neo-black border-4 border-white flex items-center justify-center font-bold text-xl hover:bg-neo-cyan hover:text-neo-black hover:-translate-y-2 hover:shadow-[4px_4px_0px_0px_#FFD500] transition-all">
            LI
          </a>
          <a href="#" className="w-12 h-12 bg-white text-neo-black border-4 border-white flex items-center justify-center font-bold text-xl hover:bg-neo-red hover:text-white hover:-translate-y-2 hover:shadow-[4px_4px_0px_0px_#4361EE] transition-all">
            X
          </a>
        </div>
        <p className="font-bold text-lg opacity-80">
          © {new Date().getFullYear()} Faris. Built with React & Neobrutalism.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
