
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  hoverEffect?: boolean;
  colorScheme?: 'blue' | 'purple' | 'pink' | 'orange' | 'gradient';
}

const colorSchemes = {
  blue: "bg-blue-50/80 border-blue-200/50 shadow-blue-100/20",
  purple: "bg-purple-50/80 border-purple-200/50 shadow-purple-100/20",
  pink: "bg-pink-50/80 border-pink-200/50 shadow-pink-100/20",
  orange: "bg-orange-50/80 border-orange-200/50 shadow-orange-100/20",
  gradient: "bg-gradient-to-br from-blue-50/90 to-purple-50/90 border-blue-200/50 shadow-blue-100/30",
};

const GlassCard = ({ 
  className, 
  children, 
  hoverEffect = true, 
  colorScheme = 'gradient',
  ...props 
}: GlassCardProps) => {
  return (
    <motion.div 
      className={cn(
        "glass-card rounded-2xl p-6 backdrop-blur-sm border border-white/20",
        colorSchemes[colorScheme], 
        hoverEffect ? "hover-lift transition-all duration-300" : "",
        className
      )} 
      whileHover={hoverEffect ? { y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
