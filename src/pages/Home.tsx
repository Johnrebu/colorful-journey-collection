
import { motion } from "framer-motion";
import { Code, ChevronDown } from "lucide-react";
import HeroSection from "../components/HeroSection";
import TerminalIntro from "../components/animations/TerminalIntro";
import CodeFlowAnimation from "../components/animations/CodeFlowAnimation";

// Replace the placeholder image with your profile picture
const profileImageUrl = "https://i.postimg.cc/dQ741Z2x/Firefly-20250216210550.png";

export default function Home() {
  const scrollToProjects = () => {
    document.getElementById('featured-projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { name: "HTML", color: "orange", icon: <Code size={14} /> },
    { name: "CSS", color: "blue", icon: <Code size={14} /> },
    { name: "JavaScript", color: "yellow", icon: <Code size={14} /> },
    { name: "React", color: "teal", icon: <Code size={14} /> },
    { name: "Python", color: "green", icon: <Code size={14} /> },
    { name: "Django", color: "red", icon: <Code size={14} /> },
    { name: "SQL", color: "purple", icon: <Code size={14} /> },
  ];

  return (
    <div className="min-h-[calc(100vh-12rem)] flex flex-col">
      {/* Terminal Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <TerminalIntro />
      </motion.div>

      {/* Code Flow Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mb-8"
      >
        <CodeFlowAnimation />
      </motion.div>

      {/* Main Hero Section */}
      <HeroSection profileImageUrl={profileImageUrl} skills={skills} />
      
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.button
          className="inline-flex items-center text-primary dark:text-primary/80 opacity-70 hover:opacity-100"
          onClick={scrollToProjects}
          animate={{ 
            y: [0, 5, 0],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut" 
          }}
        >
          <span className="mr-2">Explore More</span>
          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 1,
              delay: 0.2,
              ease: "easeInOut" 
            }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.button>
      </motion.div>
      
      <div id="featured-projects" className="pt-20"></div>
    </div>
  );
}
