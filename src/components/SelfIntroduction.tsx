import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Code, BookOpen, Target } from 'lucide-react';
import SectionTitle from './SectionTitle';
import GlassCard from './GlassCard';

const SelfIntroduction = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <SectionTitle icon={<User size={28} />}>My Story</SectionTitle>
      
      {/* Introduction */}
      <motion.div 
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <GlassCard className="mb-8">
          <p className="mb-6 leading-relaxed text-lg text-portfolioBlue">
            My name is Johnson. I am from Pudukkottai and currently based in Chennai. I have nine years of experience as a chemistry teacher, which has given me strong problem-solving abilities, adaptability, and clear communication skills.
          </p>
        </GlassCard>
      </motion.div>

      {/* Education */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="flex items-center mb-4">
          <GraduationCap className="w-6 h-6 text-primary mr-2" />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Educational Background</h3>
        </div>
        <GlassCard>
          <p className="mb-4 leading-relaxed text-portfolioPurple">
            I completed my B.Sc. in Chemistry from Rajah&apos;s College, Pudukkottai, my M.Sc. from Bishop Heber College, Tiruchirappalli, and my B.Ed. from Mother Teresa College, Iluppur.
          </p>
        </GlassCard>
      </motion.div>

      {/* Career Transition */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="flex items-center mb-4">
          <Code className="w-6 h-6 text-primary mr-2" />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Transition to Technology</h3>
        </div>
        <GlassCard>
          <p className="mb-4 leading-relaxed text-portfolioPink">
            During the COVID-19 lockdown, while conducting online classes, I became very curious about how software like Zoom and different websites worked. This curiosity motivated me to build my computer knowledge – I completed DCA, Tally, DTP, and PGDCA.
          </p>
          <p className="mb-4 leading-relaxed text-portfolioOrange">
            Later, in 2024, I transitioned fully into IT by resigning from teaching and completing a 9-month Python full-stack developer course at Greens Technology. After that, I worked as an intern at OOR Cabs for 8 months, where I gained practical experience as a React and WordPress developer and also worked with AI tools.
          </p>
        </GlassCard>
      </motion.div>

      {/* Personal & Goals */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <BookOpen className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Personal Interests</h3>
            </div>
            <GlassCard>
              <p className="leading-relaxed text-emerald-600 dark:text-emerald-400">
                My hobbies are playing cricket and reading books. These activities keep me active and help me stay curious about the world around me.
              </p>
            </GlassCard>
          </div>
          
          <div>
            <div className="flex items-center mb-4">
              <Target className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Future Goals</h3>
            </div>
            <GlassCard>
              <p className="leading-relaxed text-cyan-600 dark:text-cyan-400">
                My long-term goal is to grow as a software developer and eventually contribute to research and innovation in computer science. With my teaching background, I have developed strong problem-solving skills and a quick learning mindset, which I believe will help me adapt and succeed in the IT industry.
              </p>
            </GlassCard>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SelfIntroduction;