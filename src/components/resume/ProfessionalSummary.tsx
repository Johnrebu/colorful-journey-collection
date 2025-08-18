
import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import SectionTitle from "../SectionTitle";
import GlassCard from "../GlassCard";

interface ProfessionalSummaryProps {
  paragraphColor: string;
}

const ProfessionalSummary: React.FC<ProfessionalSummaryProps> = ({ paragraphColor }) => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section
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
      <SectionTitle icon={<User size={24} />}>Professional Summary</SectionTitle>
      <motion.div variants={itemVariants}>
        <GlassCard>
          <p className={`leading-relaxed font-lato text-lg md:text-xl ${paragraphColor}`}>
            Results-driven Full-Stack Developer with expertise in React,
            JavaScript, Python, Django, SQL, and modern web technologies. Adept at
            building scalable, user-friendly web applications that enhance user
            experience and business efficiency. A career switcher from a 9+ year
            educational background in Chemistry, bringing strong analytical,
            problem-solving, and communication skills to software development.
            Passionate about writing clean, maintainable code and collaborating in
            dynamic, fast-paced environments.
          </p>
        </GlassCard>
      </motion.div>
    </motion.section>
  );
};

export default ProfessionalSummary;
