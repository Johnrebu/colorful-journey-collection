
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Laptop, Globe, Terminal } from 'lucide-react';

const DevToolsAnimation = () => {
  const tools = [
    { Icon: Code, color: "text-blue-500", delay: 0 },
    { Icon: Database, color: "text-green-500", delay: 0.5 },
    { Icon: Server, color: "text-purple-500", delay: 1 },
    { Icon: Laptop, color: "text-pink-500", delay: 1.5 },
    { Icon: Globe, color: "text-orange-500", delay: 2 },
    { Icon: Terminal, color: "text-cyan-500", delay: 2.5 },
  ];

  return (
    <div className="flex justify-center my-8">
      <div className="relative h-24 w-full max-w-md">
        {tools.map((tool, index) => {
          const { Icon, color, delay } = tool;
          const position = `${(index * 16) + 5}%`;
          
          return (
            <motion.div
              key={index}
              className={`absolute ${color}`}
              style={{ left: position, top: '50%', marginTop: '-12px' }}
              initial={{ y: 0, opacity: 0 }}
              animate={{ 
                y: [-10, 10, -10], 
                opacity: 1,
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                y: { 
                  repeat: Infinity,
                  duration: 3,
                  delay: delay
                },
                rotate: { 
                  repeat: Infinity,
                  duration: 5,
                  delay: delay
                },
                opacity: { duration: 1 }
              }}
            >
              <Icon size={32} className="animate-glow" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default DevToolsAnimation;
