import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TerminalCommand {
  text: string;
  isCommand: boolean;
  delay: number;
}

const TerminalIntro: React.FC = () => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const commands: TerminalCommand[] = [
    { text: '$ whoami', isCommand: true, delay: 0 },
    { text: 'Johnson T - Full Stack Developer', isCommand: false, delay: 1.5 },
    { text: '$ cd /portfolio', isCommand: true, delay: 3 },
    { text: 'Welcome to my interactive portfolio! 🚀', isCommand: false, delay: 4.5 },
    { text: '$ npm run explore', isCommand: true, delay: 6 },
    { text: 'Loading projects, skills, and experiences...', isCommand: false, delay: 7.5 },
  ];

  useEffect(() => {
    if (currentLineIndex >= commands.length) {
      setIsComplete(true);
      return;
    }

    const command = commands[currentLineIndex];
    const timeoutId = setTimeout(() => {
      if (displayedText.length < command.text.length) {
        setDisplayedText(displayedText + command.text[displayedText.length]);
      } else {
        setCurrentLineIndex(currentLineIndex + 1);
        setDisplayedText('');
      }
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [displayedText, currentLineIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-12 p-6 rounded-lg bg-gradient-to-r from-dark-200 to-dark-300 border border-primary/30 shadow-lg overflow-hidden"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs font-medium text-gray-400">Terminal</span>
      </div>

      <div className="font-mono text-sm space-y-2 min-h-[160px]">
        {commands.slice(0, currentLineIndex).map((cmd, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={cmd.isCommand ? 'text-primary font-semibold' : 'text-green-400'}>
              {cmd.text}
            </div>
          </motion.div>
        ))}

        {currentLineIndex < commands.length && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={commands[currentLineIndex].isCommand ? 'text-primary font-semibold' : 'text-green-400'}>
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="ml-1 inline-block w-2 h-4 bg-primary"
              />
            </div>
          </motion.div>
        )}
      </div>

      {isComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-xs text-gray-400 animate-pulse"
        >
          ✓ Ready to explore
        </motion.div>
      )}
    </motion.div>
  );
};

export default TerminalIntro;
