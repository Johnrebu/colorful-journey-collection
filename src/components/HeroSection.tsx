
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Rocket, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import SkillTag from "./SkillTag";
import { Boxes } from "./ui/background-boxes";

type Skill = {
  name: string;
  color: string;
  icon: React.ReactNode;
};

interface HeroSectionProps {
  profileImageUrl: string;
  skills: Skill[];
}

const HeroSection = ({ profileImageUrl, skills }: HeroSectionProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 py-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full bg-background z-0 overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-background z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
      </div>
      {/* Left side - Text Content */}
      <div className="relative z-20 w-full md:w-1/2 space-y-8">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.p 
            className="text-lg font-medium text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hi there <span className="animate-wave inline-block">👋</span>, I'm
          </motion.p>
          
          <motion.h1 
            className="text-5xl sm:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-primary via-portfolioPurple to-portfolioPink text-transparent bg-clip-text">
              Johnson T
            </span>
          </motion.h1>
          
          <motion.div
            className="flex items-center space-x-1 my-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-2xl font-medium text-gray-800 dark:text-white">Full Stack Developer</span>
            <motion.span
              animate={{ 
                rotate: [0, 20, 0],
                y: [0, -5, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                repeatDelay: 2,
                duration: 1
              }}
            >
              <Rocket size={22} className="inline-block text-portfolioPink ml-2" />
            </motion.span>
          </motion.div>
          
          <motion.p 
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-md mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I'm a passionate full-stack developer with expertise in building high-performance web applications that make a real difference.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap gap-2 mt-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ 
                scale: 1.1,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <SkillTag colorScheme={skill.color as any} icon={skill.icon}>
                {skill.name}
              </SkillTag>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link to="/projects">
            <motion.button 
              className="px-6 py-3 bg-primary text-white rounded-full shadow-md font-medium flex items-center gap-2 group"
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 10px 25px -5px rgba(233, 69, 96, 0.5)" 
              }}
              whileTap={{ scale: 0.97 }}
            >
              View My Projects
              <motion.span
                initial={{ x: 0 }}
                className="group-hover:translate-x-1 transition-transform"
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button 
              className="px-6 py-3 bg-transparent text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 rounded-full shadow-sm font-medium"
              whileHover={{ 
                scale: 1.03, 
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.button>
          </Link>
        </motion.div>
        
        <motion.div 
          className="flex justify-start space-x-5 mt-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.a
            href="https://github.com/Johnrebu"
            className="p-3 rounded-full bg-white dark:bg-dark-300 shadow-md text-gray-700 dark:text-gray-300 hover:text-primary transition-all duration-300 hover:shadow-lg"
            variants={item}
            whileHover={{ 
              y: -5, 
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/johnsonelon/"
            className="p-3 rounded-full bg-white dark:bg-dark-300 shadow-md text-gray-700 dark:text-gray-300 hover:text-primary transition-all duration-300 hover:shadow-lg"
            variants={item}
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            href="mailto:johnchemist91@gmail.com"
            className="p-3 rounded-full bg-white dark:bg-dark-300 shadow-md text-gray-700 dark:text-gray-300 hover:text-primary transition-all duration-300 hover:shadow-lg"
            variants={item}
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} />
          </motion.a>
        </motion.div>
      </div>
      
      {/* Right side - Profile Image */}
      <motion.div 
        className="relative z-20 w-full md:w-1/2 flex justify-center md:justify-end"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          delay: 0.3,
          duration: 0.6,
          type: "spring",
          stiffness: 100 
        }}
      >
        <div className="relative">
          {/* Background elements */}
          <motion.div 
            className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-portfolioPink/20 dark:bg-portfolioPink/10 blur-xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-portfolioPurple/20 dark:bg-portfolioPurple/10 blur-xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ 
              duration: 5,
              delay: 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Profile image with glow effect */}
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <motion.div 
              className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary to-portfolioPurple opacity-75 blur-md"
              animate={{ 
                opacity: [0.5, 0.7, 0.5],
                scale: [0.99, 1.01, 0.99],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <Avatar className="w-full h-full border-4 border-white dark:border-dark-100 relative">
              <AvatarImage 
                src={profileImageUrl}
                alt="Johnson T"
                className="object-cover"
                draggable="false"
              />
              <AvatarFallback>JT</AvatarFallback>
            </Avatar>
            <motion.div 
              className="absolute -bottom-2 -right-2 bg-white dark:bg-dark-200 rounded-full p-2 shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.3 }}
              whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
            >
              <Sparkles size={24} className="text-yellow-400" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
