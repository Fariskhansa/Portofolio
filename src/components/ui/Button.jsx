import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', className = '', to, onClick, type = 'button' }) => {
  const baseClass = 'neo-btn';
  
  const variants = {
    primary: 'bg-neo-yellow text-neo-black',
    secondary: 'bg-neo-blue text-neo-white',
    danger: 'bg-neo-red text-neo-white',
    outline: 'bg-white text-neo-black',
  };

  const combinedClasses = `${baseClass} ${variants[variant]} ${className}`;

  if (to) {
    // If it's an external link
    if (to.startsWith('http') || to.startsWith('mailto:')) {
      return (
        <a href={to} className={combinedClasses} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    // If it's an internal hash link for smooth scrolling
    if (to.startsWith('#')) {
      return (
        <a href={to} className={combinedClasses}>
          {children}
        </a>
      );
    }
    // Otherwise it's a React Router link
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;
