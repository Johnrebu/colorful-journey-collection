
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface GlassCardProps {
  className?: string;
  children: ReactNode;
  colorScheme?: 'light' | 'dark' | 'primary' | 'gradient' | 'none';
}

const colorSchemes = {
  light: "bg-white/80 backdrop-blur-sm border-white/20",
  dark: "bg-gray-900/80 backdrop-blur-sm border-gray-800/20 text-white",
  primary: "bg-primary/10 backdrop-blur-sm border-primary/20",
  gradient: "bg-white/80 backdrop-blur-sm border-white/20 glass-card-gradient",
  none: "",
};

const GlassCard = ({ 
  className, 
  children, 
  colorScheme = 'light' 
}: GlassCardProps) => {
  return (
    <motion.div
      className={cn(
        "rounded-2xl border shadow-sm p-6", 
        colorSchemes[colorScheme],
        className
      )}
      // Removed the onDrag handler which was causing the error
      whileHover={{ 
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)", 
        translateY: -2
      }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
