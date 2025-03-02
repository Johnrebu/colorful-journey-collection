
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  colorScheme?: 'blue' | 'purple' | 'gradient' | 'rainbow';
}

const colorSchemes = {
  blue: "from-blue-600 to-blue-400",
  purple: "from-purple-600 to-purple-400",
  gradient: "from-primary via-portfolioPurple to-portfolioPink",
  rainbow: "from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500",
};

const SectionTitle = ({ 
  children, 
  icon, 
  className,
  colorScheme = 'gradient' 
}: SectionTitleProps) => {
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
      <h2 className={cn(
        "bg-gradient-to-r text-transparent bg-clip-text font-bold text-3xl", 
        colorSchemes[colorScheme], 
        className
      )}>
        {children}
      </h2>
      <motion.div 
        className="ml-3 h-1 flex-grow rounded-full bg-gradient-to-r from-primary/20 to-portfolioPurple/20"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "100%", opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      />
    </motion.div>
  );
};

export default SectionTitle;
