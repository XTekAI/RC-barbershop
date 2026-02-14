import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', variant = 'primary' }) => {
  const baseStyles = "px-8 py-3 uppercase tracking-wider font-semibold text-sm transition-all duration-300";
  
  const variants = {
    primary: "bg-gold text-black hover:bg-white hover:text-black",
    outline: "border border-gold text-gold hover:bg-gold hover:text-black"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;