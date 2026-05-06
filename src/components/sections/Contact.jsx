import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-neo-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionTitle align="center" className="mb-12">
            Get In Touch
          </SectionTitle>
          
          <div className="bg-neo-red p-8 md:p-12 border-8 border-neo-black shadow-[12px_12px_0px_0px_rgba(26,26,26,1)]">
            <p className="text-white text-xl md:text-2xl font-bold mb-8 text-center">
              Have a project in mind or just want to say hi? I'm always open to new opportunities!
            </p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-white font-bold text-lg mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border-4 border-neo-black focus:outline-none focus:ring-4 focus:ring-neo-yellow text-lg font-medium"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white font-bold text-lg mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border-4 border-neo-black focus:outline-none focus:ring-4 focus:ring-neo-yellow text-lg font-medium"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-bold text-lg mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full px-4 py-3 border-4 border-neo-black focus:outline-none focus:ring-4 focus:ring-neo-yellow text-lg font-medium resize-none"
                  placeholder="Hello..."
                ></textarea>
              </div>
              
              <Button type="submit" variant="primary" className="w-full text-xl py-4 mt-4">
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
