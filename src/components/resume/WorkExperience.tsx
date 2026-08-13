
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle } from "lucide-react";
import SectionTitle from "../SectionTitle";
import GlassCard from "../GlassCard";

interface WorkExperienceItem {
  title: string;
  period: string;
  responsibilities: string[];
}

interface WorkExperienceProps {
  experiences: WorkExperienceItem[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ experiences }) => {
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
            staggerChildren: 0.3
          }
        }
      }}
      initial="hidden"
      animate="visible"
    >
      <SectionTitle icon={<Briefcase size={24} />}>Work Experience</SectionTitle>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="relative pl-6 border-l-2 border-primary/30 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:bg-primary before:left-[-9px] before:top-0"
          >
            <GlassCard>
              <h4 className="text-xl md:text-2xl font-playfair font-semibold text-gray-800 dark:text-white">
                {experience.title}
              </h4>
              <p className="text-gray-500 font-montserrat mb-4">{experience.period}</p>
              <ul className="space-y-3">
                {experience.responsibilities.map((item, itemIndex) => (
                  <motion.li 
                    key={itemIndex} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * itemIndex + 0.5 }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary/70 mr-2 flex-shrink-0 mt-0.5" />
                    <span className={`font-lato md:text-lg ${index === 0 ? "text-portfolioPurple" : index === 1 ? "text-portfolioPink" : "text-portfolioOrange"}`}>
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WorkExperience;
