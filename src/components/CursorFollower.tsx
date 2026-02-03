import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CursorFollower: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }

      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
      }
      if (glowRef.current) {
        glowRef.current.style.opacity = '0';
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1';
      }
      if (glowRef.current) {
        glowRef.current.style.opacity = '0.5';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <>
      <style>{`
        * {
          cursor: none;
        }
        a, button, [role="button"] {
          cursor: none;
        }
        .cursor-glow {
          pointer-events: none;
          position: fixed;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(14, 165, 233, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%);
          filter: blur(2rem);
          opacity: 0;
          transition: opacity 0.3s ease-out;
          mix-blend-mode: screen;
          z-index: 9999;
          transform: translate(-50%, -50%);
        }
        .cursor-main {
          pointer-events: none;
          position: fixed;
          opacity: 0;
          transition: opacity 0.3s ease-out;
          z-index: 10000;
          transform: translate(-50%, -50%);
        }
        .cursor-outer-ring {
          position: absolute;
          width: 24px;
          height: 24px;
          border: 2px solid hsl(var(--primary));
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        .cursor-inner-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          background: hsl(var(--primary));
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>

      {/* Glow effect */}
      <div
        ref={glowRef}
        className="cursor-glow"
      />

      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="cursor-main"
      >
        <div className="relative">
          {/* Outer ring */}
          <div className="cursor-outer-ring" />
          
          {/* Inner dot */}
          <div className="cursor-inner-dot" />
          
          {/* Decorative elements */}
          <motion.div
            className="absolute w-8 h-8 border border-portfolioPurple/50 rounded-full opacity-70"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            style={{ transform: 'translate(-50%, -50%)' }}
          />
        </div>
      </div>
    </>
  );
};

export default CursorFollower;
