import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  external?: boolean;
  className?: string;
  variant?: 'primary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, href, external, className = '', variant = 'primary' }) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-3 uppercase tracking-wider font-semibold text-sm transition-all duration-300";
  const variants = {
    primary: "bg-gold text-black hover:bg-white hover:text-black",
    outline: "border border-gold text-gold hover:bg-gold hover:text-black"
  };
  const cls = `${baseStyles} ${variants[variant]} ${className}`;
  const motionProps = { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } };

  if (href) {
    return (
      <motion.a
        {...motionProps}
        href={href}
        className={cls}
        onClick={onClick}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </motion.a>
    );
  }
  return <motion.button {...motionProps} className={cls} onClick={onClick}>{children}</motion.button>;
};

export default Button;
