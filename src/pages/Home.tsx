
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Sparkles, Code, Rocket, Heart } from "lucide-react";
import image from "/src/images/johnelon.png";
import GlassCard from "../components/GlassCard";
import SkillTag from "../components/SkillTag";
import { Link } from "react-router-dom";

export default function Home() {
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
    <div className="min-h-[calc(100vh-12rem)] flex flex-col justify-center">
      <div className="text-center mb-16">
        <motion.div 
          className="relative inline-block mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-portfolioPurple rounded-full blur opacity-75 animate-pulse-subtle"></div>
          <motion.img 
            src={image} 
            alt="Johnson T" 
            className="relative rounded-full w-32 h-32 object-cover border-4 border-white"
            whileHover={{ scale: 1.05 }}
          />
          <motion.div 
            className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <Sparkles size={20} className="text-yellow-400" />
          </motion.div>
        </motion.div>
        
        <motion.h1 
          className="text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-primary via-portfolioPurple to-portfolioPink text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Johnson T
        </motion.h1>
        
        <motion.div
          className="relative inline-block mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 to-portfolioPurple/20 blur"></span>
          <span className="relative bg-white px-6 py-2 rounded-full text-xl text-gray-800 font-medium">
            <span className="text-primary">Full Stack</span> Developer <Rocket className="inline-block ml-1 text-portfolioPink" size={18} />
          </span>
        </motion.div>

        <motion.div 
          className="flex justify-center space-x-6 mb-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.a
            href="https://github.com/Johnrebu"
            className="p-3 rounded-full bg-white shadow-md text-gray-700 hover:text-primary transition-all duration-300 hover:shadow-lg"
            variants={item}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={22} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/johnsonelon/"
            className="p-3 rounded-full bg-white shadow-md text-gray-700 hover:text-primary transition-all duration-300 hover:shadow-lg"
            variants={item}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={22} />
          </motion.a>
          <motion.a
            href="mailto:johnchemist91@gmail.com"
            className="p-3 rounded-full bg-white shadow-md text-gray-700 hover:text-primary transition-all duration-300 hover:shadow-lg"
            variants={item}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={22} />
          </motion.a>
        </motion.div>

        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <GlassCard colorScheme="gradient">
            <p className="text-gray-700 leading-relaxed text-lg">
              Hi there! <span className="animate-wave inline-block">👋</span> I'm a passionate full-stack developer with expertise in
              HTML, CSS, JavaScript, React, Python, Django, and SQL. I love turning
              ideas into seamless, high-performance web applications that make a
              real difference. <Heart className="inline-block text-pink-500" size={18} />
            </p>
            
            <motion.div 
              className="mt-6 flex flex-wrap gap-2 justify-center"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {skills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <SkillTag colorScheme={skill.color as any} icon={skill.icon}>
                    {skill.name}
                  </SkillTag>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="mt-8 flex flex-wrap gap-2 justify-center">
              <Link to="/about">
                <motion.button 
                  className="px-6 py-3 bg-primary text-white rounded-full shadow-md font-medium"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More About Me
                </motion.button>
              </Link>
              <Link to="/projects">
                <motion.button 
                  className="px-6 py-3 bg-white text-primary border border-primary/20 rounded-full shadow-sm font-medium ml-3"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Projects
                </motion.button>
              </Link>
            </div>
          </GlassCard>
        </motion.div>
      </div>
      
      <motion.div 
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.button
          className="inline-flex items-center text-primary opacity-70 hover:opacity-100"
          onClick={scrollToProjects}
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="mr-2">Scroll Down</span>
          <ChevronDown size={18} />
        </motion.button>
      </motion.div>
      
      <div id="featured-projects" className="pt-20"></div>
    </div>
  );
}
