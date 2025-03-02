
import { motion } from "framer-motion";
import { User, Code, Award, ScrollText, Cpu } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import GlassCard from "../components/GlassCard";
import SkillTag from "../components/SkillTag";

export default function About() {
  const skills = [
    { name: "HTML", scheme: "orange" },
    { name: "CSS", scheme: "blue" },
    { name: "JavaScript", scheme: "orange" },
    { name: "React.JS", scheme: "blue" },
    { name: "TypeScript", scheme: "blue" },
    { name: "Tailwind CSS", scheme: "blue" },
    { name: "Python", scheme: "blue" },
    { name: "Django", scheme: "purple" },
    { name: "SQL", scheme: "purple" },
    { name: "WordPress", scheme: "blue" },
  ];
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  // Define paragraph colors
  const paragraphColors = {
    p1: "text-portfolioBlue",
    p2: "text-portfolioPurple",
    p3: "text-portfolioPink",
    p4: "text-portfolioOrange",
    listItem1: "text-emerald-600",
    listItem2: "text-cyan-600",
    listItem3: "text-indigo-600",
    listItem4: "text-amber-600",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-12"
    >
      <SectionTitle icon={<User size={28} />}>About Me</SectionTitle>
      
      <motion.div 
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <GlassCard className="mb-8">
          <p className={`mb-6 leading-relaxed text-lg ${paragraphColors.p1}`}>
            I'm a full-stack developer seeking a challenging full-time role where
            I can apply my strong interpersonal, time management, and
            problem-solving skills to drive organizational success. With 9+ years
            of experience as an educator, I have honed my ability to communicate
            complex concepts effectively, fostering growth and understanding among
            diverse learners.
          </p>
          <p className={`mb-6 leading-relaxed text-lg ${paragraphColors.p2}`}>
            Holding an M.Sc. in Chemistry and a B.Ed., I bring a
            strong analytical mindset, complemented by technical expertise in web
            development. My passion for continuous learning and innovation allows
            me to bridge the gap between education and technology, contributing to
            dynamic and impactful solutions.
          </p>
        </GlassCard>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <motion.div 
              className="flex items-center mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ScrollText className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-2xl font-semibold text-gray-800">My Background</h3>
            </motion.div>
            
            <GlassCard>
              <p className={`mb-4 leading-relaxed ${paragraphColors.p3}`}>
                Coming from 9+ years in education, I've developed exceptional communication 
                and analytical skills. My chemistry background gives me a methodical approach 
                to problem-solving that translates perfectly to coding and development.
              </p>
              <p className={`leading-relaxed ${paragraphColors.p4}`}>
                My transition to tech stems from a passion for building tools that help 
                people learn and work more effectively. I combine educational insights 
                with technical know-how to create intuitive, impactful applications.
              </p>
            </GlassCard>
          </div>
          
          <div>
            <motion.div 
              className="flex items-center mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Award className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-2xl font-semibold text-gray-800">What I Bring</h3>
            </motion.div>
            
            <GlassCard>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✓</span>
                  <span className={paragraphColors.listItem1}>Strong problem-solving abilities from both scientific and educational backgrounds</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✓</span>
                  <span className={paragraphColors.listItem2}>Excellent communication skills and ability to explain complex concepts</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✓</span>
                  <span className={paragraphColors.listItem3}>Disciplined work ethic and commitment to continuous learning</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✓</span>
                  <span className={paragraphColors.listItem4}>Adaptability and ability to quickly master new technologies</span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <motion.div 
          className="flex items-center mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Code className="w-6 h-6 text-primary mr-2" />
          <h3 className="text-2xl font-semibold text-gray-800">Technical Skills</h3>
        </motion.div>
        
        <GlassCard>
          <motion.div 
            className="flex flex-wrap gap-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <SkillTag colorScheme={skill.scheme as any}>{skill.name}</SkillTag>
              </motion.div>
            ))}
          </motion.div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
