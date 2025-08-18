
import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import SectionTitle from "../SectionTitle";
import GlassCard from "../GlassCard";
import SkillTag from "../SkillTag";
import DevToolsAnimation from "../animations/DevToolsAnimation";
import StarAnimation from "../animations/StarAnimation";

interface Skill {
  name: string;
  scheme: string;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <motion.section
      className="font-lato relative"
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { 
            when: "beforeChildren",
            staggerChildren: 0.2
          }
        }
      }}
      initial="hidden"
      animate="visible"
    >
      <StarAnimation />
      <SectionTitle icon={<Code size={24} />}>Technical Skills</SectionTitle>
      
      <DevToolsAnimation />
      
      <motion.div
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.5 }
          }
        }}
      >
        <GlassCard>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  delay: index * 0.07, 
                  duration: 0.4 
                }}
                className="animate-bounce-skill"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationDuration: `${3 + index * 0.5}s`
                }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
              >
                <SkillTag colorScheme={skill.scheme as any}>{skill.name}</SkillTag>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
