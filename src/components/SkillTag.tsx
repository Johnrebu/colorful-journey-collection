
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillTagProps {
  className?: string;
  children: React.ReactNode;
  colorScheme?: 'blue' | 'purple' | 'pink' | 'orange';
}

const colorSchemes = {
  blue: "bg-portfolioLightBlue text-portfolioBlue",
  purple: "bg-portfolioLightPurple text-portfolioPurple",
  pink: "bg-portfolioLightPink text-portfolioPink",
  orange: "bg-portfolioLightOrange text-portfolioOrange",
};

const SkillTag = ({ children, colorScheme = 'blue', className }: SkillTagProps) => {
  return (
    <span 
      className={cn(
        "skill-tag", 
        colorSchemes[colorScheme],
        className
      )}
    >
      {children}
    </span>
  );
};

export default SkillTag;
