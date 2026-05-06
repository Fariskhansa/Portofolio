import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const updateHoverState = (e) => {
      const target = e.target;
      // Check if hovering over interactive elements
      if (
        target.tagName?.toLowerCase() === 'a' ||
        target.tagName?.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.tagName?.toLowerCase() === 'input' ||
        target.tagName?.toLowerCase() === 'textarea'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Only enable custom cursor on desktop devices (non-touch)
    if (window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener('mousemove', updatePosition);
      window.addEventListener('mouseover', updateHoverState);
      window.addEventListener('mouseleave', handleMouseLeave);
      window.addEventListener('mouseenter', handleMouseEnter);
    }

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Hide custom cursor on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[100] flex items-center justify-center transition-opacity duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        // Removing transition for transform to avoid lag behind mouse, pure follow
      }}
    >
      <div 
        className={`bg-neo-yellow border-[3px] border-neo-black shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] transition-all duration-200 ease-out ${
          isHovering 
            ? 'w-10 h-10 bg-neo-cyan rotate-45 scale-110' 
            : 'w-6 h-6 rotate-0'
        }`}
      />
    </div>
  );
};

export default CustomCursor;
