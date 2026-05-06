import React from 'react';
import FastMarquee from 'react-fast-marquee';

const Marquee = FastMarquee.default || FastMarquee;

const MarqueeText = ({ text }) => {
  return (
    <div className="bg-neo-yellow border-y-8 border-neo-black py-4 flex overflow-hidden shadow-[0px_8px_0px_0px_rgba(26,26,26,1)] z-10 relative">
      <Marquee speed={80} gradient={false} autoFill={true}>
        <span className="text-2xl md:text-3xl font-black uppercase tracking-widest text-neo-black mx-4">
          {text} • 
        </span>
      </Marquee>
    </div>
  );
};

export default MarqueeText;
