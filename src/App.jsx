import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import CustomCursor from './components/ui/CustomCursor';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-neo-black bg-neo-bg selection:bg-neo-yellow selection:text-neo-black">
      <CustomCursor />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
