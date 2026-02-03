import React from 'react';
import { motion } from 'framer-motion';

const CodeFlowAnimation: React.FC = () => {
  const codeLines = [
    '{ name: "React", type: "UI Library" }',
    '{ skill: "TypeScript", level: "Advanced" }',
    '{ role: "Full Stack Developer" }',
    '{ passion: "Clean Code & Performance" }',
  ];

  return (
    <div className="relative w-full h-32 overflow-hidden rounded-lg bg-gradient-to-r from-dark-200 via-dark-300 to-dark-400 border border-primary/20 p-4">
      {/* Animated background lines */}
      <div className="absolute inset-0 opacity-30">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            animate={{
              y: ['0%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.75,
              ease: 'easeInOut',
            }}
            style={{ top: `${(i + 1) * 25}%` }}
          />
        ))}
      </div>

      {/* Code content */}
      <div className="relative z-10 space-y-2 font-mono text-sm">
        {codeLines.map((line, idx) => (
          <motion.div
            key={idx}
            className="text-gray-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: idx * 0.15,
              duration: 0.5,
            }}
          >
            <span className="text-primary">const</span>
            <span className="text-gray-400"> item</span>
            <span className="text-primary"> = </span>
            <span className="text-green-400">{line}</span>
          </motion.div>
        ))}
      </div>

      {/* Cursor effect */}
      <motion.div
        className="absolute top-4 left-4 w-2 h-6 bg-primary"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </div>
  );
};

export default CodeFlowAnimation;
