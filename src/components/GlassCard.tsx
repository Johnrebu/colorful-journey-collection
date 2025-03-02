
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  hoverEffect?: boolean;
}

const GlassCard = ({ className, children, hoverEffect = true, ...props }: GlassCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-2xl p-6", 
        hoverEffect ? "hover-lift" : "",
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
