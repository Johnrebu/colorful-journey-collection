
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const StarAnimation = () => {
  // Generate random positions for 5 stars
  const stars = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 80}%`,
    left: `${Math.random() * 80}%`,
    size: Math.random() * 10 + 20,
    delay: i * 0.5
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map(star => (
        <motion.div
          key={star.id}
          className="absolute text-yellow-400"
          style={{ 
            top: star.top, 
            left: star.left,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0.7, 1, 0.7],
            opacity: [0.5, 1, 0.5],
            rotate: [0, 180, 360] 
          }}
          transition={{ 
            repeat: Infinity,
            duration: 4,
            delay: star.delay,
            ease: "easeInOut"
          }}
        >
          <Sparkles size={star.size} />
        </motion.div>
      ))}
    </div>
  );
};

export default StarAnimation;
