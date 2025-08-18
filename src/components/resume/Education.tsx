
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionTitle from "../SectionTitle";
import GlassCard from "../GlassCard";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

interface EducationProps {
  educationItems: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ educationItems }) => {
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
      <SectionTitle icon={<GraduationCap size={24} />}>Education</SectionTitle>
      <div className="space-y-4">
        {educationItems.map((item, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <GlassCard className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-portfolioPurple"></div>
              <div className="pl-4">
                <h4 className="text-xl md:text-2xl font-playfair font-semibold text-gray-800">{item.degree}</h4>
                <p className={`font-montserrat md:text-lg ${index % 2 === 0 ? "text-portfolioBlue" : "text-portfolioPurple"}`}>
                  {item.institution} • {item.period}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
