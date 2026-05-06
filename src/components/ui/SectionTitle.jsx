import React from 'react';

const SectionTitle = ({ children, align = 'left', className = '' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'} ${className}`}>
      <h2 className="inline-block text-4xl md:text-6xl font-bold bg-neo-yellow px-4 py-2 border-4 border-neo-black shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] uppercase -rotate-1 hover:rotate-1 transition-transform duration-300">
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;
