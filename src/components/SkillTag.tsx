
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SkillTagProps {
  className?: string;
  children: React.ReactNode;
  colorScheme?: 'blue' | 'purple' | 'pink' | 'orange' | 'green' | 'teal' | 'yellow' | 'red';
  icon?: React.ReactNode;
}

const colorSchemes = {
  blue: "bg-blue-100/80 text-blue-700 border-blue-200",
  purple: "bg-purple-100/80 text-purple-700 border-purple-200",
  pink: "bg-pink-100/80 text-pink-700 border-pink-200",
  orange: "bg-orange-100/80 text-orange-700 border-orange-200",
  green: "bg-green-100/80 text-green-700 border-green-200",
  teal: "bg-teal-100/80 text-teal-700 border-teal-200",
  yellow: "bg-yellow-100/80 text-yellow-700 border-yellow-200",
  red: "bg-red-100/80 text-red-700 border-red-200",
};

const SkillTag = ({ children, colorScheme = 'blue', icon, className }: SkillTagProps) => {
  return (
    <motion.span 
      className={cn(
        "skill-tag inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border", 
        colorSchemes[colorScheme],
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </motion.span>
  );
};

export default SkillTag;
