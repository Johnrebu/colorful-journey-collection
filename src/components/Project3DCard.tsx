import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface Project3DCardProps {
  title: string;
  description: string;
  image: string;
  technologies: Array<{ name: string; scheme: string }>;
  githubUrl: string;
  liveUrl: string;
  icon: React.ReactNode;
}

const Project3DCard: React.FC<Project3DCardProps> = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  icon,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Check if mobile device
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const handleMouseMove = (e: React.MouseEvent) => {
    // Disable 3D effect on mobile
    if (isMobile) return;
    
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotX = ((y - centerY) / centerY) * 8;
    const rotY = ((x - centerX) / centerX) * -8;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      style={{
        perspective: !isMobile ? '1200px' : 'none',
      }}
    >
      {/* 3D Transform Container - disabled on mobile */}
      <motion.div
        style={{
          rotateX: !isMobile ? rotateX : 0,
          rotateY: !isMobile ? rotateY : 0,
          transformStyle: !isMobile ? 'preserve-3d' : 'flat',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        className="relative h-full"
      >
        {/* Glowing background blur */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-portfolioPurple/50 to-portfolioPink/50 rounded-xl blur-xl opacity-0"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Card content */}
        <div className="relative h-full bg-gradient-to-br from-dark-200 via-dark-300 to-dark-400 rounded-xl border border-primary/20 overflow-hidden shadow-2xl backdrop-blur-sm">
          {/* Image container with overlay */}
          <div className="relative h-48 overflow-hidden group">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.6 }}
            />
            {/* Dark overlay that animates in */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-300/50 to-dark-400/90"
              animate={{
                opacity: isHovered ? 1 : 0.7,
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Code flow accent lines - hide on mobile */}
            {isHovered && !isMobile && (
              <>
                <motion.div
                  className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
                  animate={{
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                  }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-portfolioPurple to-transparent"
                  animate={{
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    delay: 0.3,
                  }}
                />
              </>
            )}
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Title with icon */}
            <div className="flex items-center gap-3">
              <div className="text-primary opacity-75">{icon}</div>
              <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
              {description}
            </p>

            {/* Tech tags with animation */}
            <div className="flex flex-wrap gap-2 pt-2">
              {technologies.map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isHovered ? 1 : 0.7,
                    scale: isHovered ? 1 : 0.95,
                  }}
                  transition={{
                    delay: idx * 0.05,
                    duration: 0.3,
                  }}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors"
                >
                  {tech.name}
                </motion.div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pt-4 border-t border-primary/10">
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors font-medium text-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} />
                <span>Code</span>
              </motion.a>
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-portfolioPurple/10 border border-portfolioPurple/30 text-portfolioPurple hover:bg-portfolioPurple/20 transition-colors font-medium text-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} />
                <span>Live</span>
              </motion.a>
            </div>
          </div>

          {/* Corner decorations - hide on mobile */}
          {isHovered && !isMobile && (
            <>
              <motion.div
                className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-portfolioPurple/50"
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Project3DCard;
