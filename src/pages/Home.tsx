
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Sparkles, Code, Rocket, Heart } from "lucide-react";
import GlassCard from "../components/GlassCard";
import SkillTag from "../components/SkillTag";
import { Link } from "react-router-dom";

const profileImageUrl = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&h=200";

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
          transition={{ 
            duration: 0.6,
            type: "spring",
            stiffness: 100 
          }}
        >
          <motion.div 
            className="absolute -inset-0.5 bg-gradient-to-r from-primary to-portfolioPurple rounded-full blur opacity-75"
            animate={{ 
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.05, 1],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.img 
            src={profileImageUrl}
            alt="Johnson T" 
            className="relative rounded-full w-32 h-32 object-cover border-4 border-white"
            whileHover={{ scale: 1.05, rotate: 5 }}
            drag
            dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
          />
          <motion.div 
            className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            whileHover={{ rotate: 360 }}
            whileTap={{ scale: 1.2 }}
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
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            J
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            o
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            h
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            n
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            s
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            o
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            n
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="ml-2"
          >
            T
          </motion.span>
        </motion.h1>
        
        <motion.div
          className="relative inline-block mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.span 
            className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 to-portfolioPurple/20 blur"
            animate={{ 
              background: [
                "linear-gradient(90deg, rgba(59,130,246,0.2) 0%, rgba(139,92,246,0.2) 100%)",
                "linear-gradient(90deg, rgba(139,92,246,0.2) 0%, rgba(217,70,239,0.2) 100%)",
                "linear-gradient(90deg, rgba(217,70,239,0.2) 0%, rgba(59,130,246,0.2) 100%)"
              ]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.span 
            className="relative bg-white px-6 py-2 rounded-full text-xl text-gray-800 font-medium"
            whileHover={{ 
              scale: 1.05,
              transition: { type: "spring", stiffness: 400 }
            }}
          >
            <motion.span 
              className="text-primary"
              animate={{ 
                color: ["hsl(221, 83%, 53%)", "hsl(262, 83%, 58%)", "hsl(221, 83%, 53%)"] 
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Full Stack
            </motion.span> Developer 
            <motion.span
              animate={{ 
                x: [0, 5, 0],
                y: [0, -5, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="inline-block ml-1"
            >
              <Rocket className="inline-block text-portfolioPink" size={18} />
            </motion.span>
          </motion.span>
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
            whileHover={{ 
              y: -5, 
              backgroundColor: "#f0f6ff",
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ rotate: -5 }}
            animate={{ rotate: 0 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={22} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/johnsonelon/"
            className="p-3 rounded-full bg-white shadow-md text-gray-700 hover:text-primary transition-all duration-300 hover:shadow-lg"
            variants={item}
            whileHover={{ 
              y: -5,
              backgroundColor: "#f0f6ff",
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
            }}
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
            whileHover={{ 
              y: -5,
              backgroundColor: "#f0f6ff",
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ rotate: 5 }}
            animate={{ rotate: 0 }}
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
            <motion.p 
              className="text-gray-700 leading-relaxed text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Hi there! 
              <motion.span 
                className="animate-wave inline-block"
                animate={{ 
                  rotate: [0, 20, 0, 20, 0],
                  transformOrigin: "bottom right"
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatDelay: 1
                }}
              >
                👋
              </motion.span> 
              I'm a passionate full-stack developer with expertise in
              <motion.span 
                className="font-medium text-primary mx-1"
                animate={{ 
                  color: ["hsl(221, 83%, 53%)", "hsl(262, 83%, 58%)", "hsl(221, 83%, 53%)"] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                HTML, CSS, JavaScript, React, Python, Django, and SQL
              </motion.span>. 
              I love turning
              ideas into seamless, high-performance web applications that make a
              real difference. 
              <motion.span 
                animate={{ scale: [1, 1.2, 1], color: ["#ec4899", "#d946ef", "#ec4899"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block ml-1"
              >
                <Heart className="inline-block text-pink-500" size={18} />
              </motion.span>
            </motion.p>
            
            <motion.div 
              className="mt-6 flex flex-wrap gap-2 justify-center"
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
            
            <div className="mt-8 flex flex-wrap gap-2 justify-center">
              <Link to="/about">
                <motion.button 
                  className="px-6 py-3 bg-primary text-white rounded-full shadow-md font-medium"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  Learn More About Me
                </motion.button>
              </Link>
              <Link to="/projects">
                <motion.button 
                  className="px-6 py-3 bg-white text-primary border border-primary/20 rounded-full shadow-sm font-medium ml-3"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)",
                    backgroundColor: "#f8fafc"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
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
          <span className="mr-2">Scroll Down</span>
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
