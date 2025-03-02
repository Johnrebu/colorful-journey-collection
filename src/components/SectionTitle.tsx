
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const SectionTitle = ({ children, icon, className }: SectionTitleProps) => {
  return (
    <motion.div 
      className="flex items-center mb-8"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {icon && (
        <motion.div 
          className="mr-3 text-primary"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {icon}
        </motion.div>
      )}
      <h2 className={cn("section-title", className)}>
        {children}
      </h2>
    </motion.div>
  );
};

export default SectionTitle;
