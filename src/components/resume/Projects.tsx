
import React from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import SectionTitle from "../SectionTitle";
import GlassCard from "../GlassCard";

interface ProjectsProps {
  paragraphColors: {
    project1: string;
    project2: string;
    project3: string;
  };
}

const Projects: React.FC<ProjectsProps> = ({ paragraphColors }) => {
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
      <SectionTitle icon={<FileText size={24} />}>Projects</SectionTitle>
      <div className="space-y-6">
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <GlassCard>
            <h4 className="text-xl md:text-2xl font-playfair font-semibold text-gray-800 dark:text-white mb-2">
              React_Colorful Weather Widget
            </h4>
            <p className={`font-montserrat md:text-lg ${paragraphColors.project1}`}>
              "This project demonstrates modern web development practices while
              creating a beautiful and functional weather application. The
              combination of React, Tailwind CSS, and modern API integration
              creates a production-ready application that's both performant and
              visually appealing."
            </p>
          </GlassCard>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <GlassCard>
            <h4 className="text-xl md:text-2xl font-playfair font-semibold text-gray-800 dark:text-white mb-2">
              Employee Directory Application
            </h4>
            <p className={`font-montserrat md:text-lg ${paragraphColors.project2}`}>
              "This is a modern React-based Employee Directory application that
              allows organizations to manage and visualize their employee data
              through an intuitive interface. The application provides a
              comprehensive view of employee information with powerful
              filtering, sorting, and visualization capabilities."
            </p>
          </GlassCard>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <GlassCard>
            <h4 className="text-xl md:text-2xl font-playfair font-semibold text-gray-800 dark:text-white mb-2">
              E-commerce_Website
            </h4>
            <p className={`font-montserrat md:text-lg ${paragraphColors.project3}`}>
              "Complete e-commerce website using React JS
              and the MERN stack. The project covers front-end development using
              React, including component creation, routing, state management,
              and integration with a back-end database (MongoDB)."
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
