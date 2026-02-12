import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-8 py-3 font-display font-medium tracking-wide uppercase text-sm transition-all duration-300 transform";
  
  const variants = {
    primary: "bg-brand-red text-white hover:bg-red-900 shadow-lg hover:shadow-xl",
    outline: "border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white",
    white: "bg-white text-slate-900 hover:bg-gray-100 shadow-lg"
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;