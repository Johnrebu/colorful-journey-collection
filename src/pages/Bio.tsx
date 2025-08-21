
import { motion } from "framer-motion";
import { User, Briefcase, GraduationCap, MapPin, Globe, Sparkles } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import GlassCard from "../components/GlassCard";
import StarAnimation from "../components/animations/StarAnimation";

export default function Bio() {
  const personalInfo = [
    { title: "Full Name", value: "Johnson T", icon: <User size={18} /> },
    { title: "Date of Birth", value: "December 10, 1991", icon: <Sparkles size={18} /> },
    { title: "Location", value: "Tambaram, Chennai", icon: <MapPin size={18} /> },
    { title: "Languages", value: "Tamil (Native), English, Telugu", icon: <Globe size={18} /> },
  ];

  const professionalInfo = [
    { title: "Current Role", value: "Full Stack Developer", icon: <Briefcase size={18} /> },
    { title: "Work Experience", value: "9+ years", icon: <Briefcase size={18} /> },
    { title: "Education", value: "M.Sc.Chemistry.,B.Ed.,PGDCA.,", icon: <GraduationCap size={18} /> },
    { title: "Industry Focus", value: "Web Development", icon: <Code size={18} /> },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.2 * index,
        duration: 0.5
      }
    })
  };

  // Define paragraph colors
  const paragraphColors = {
    callToAction: "text-portfolioPurple",
  };

  return (
    <motion.div
      className="font-montserrat relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <StarAnimation />
      <SectionTitle icon={<User size={28} />}>Bio Data</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-6">
            <motion.div 
              className="w-10 h-10 rounded-full bg-portfolioLightBlue flex items-center justify-center mr-3"
              animate={{
                scale: [1, 1.1, 1],
                rotateZ: [0, 5, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <User className="w-5 h-5 text-portfolioBlue" />
            </motion.div>
            <h3 className="text-xl font-playfair font-bold bg-gradient-to-r from-primary via-portfolioPurple to-portfolioPink text-transparent bg-clip-text">Personal Information</h3>
          </div>
          
          <GlassCard className="h-full">
            <ul className="space-y-6">
              {personalInfo.map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex flex-col"
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex items-center mb-1">
                    <motion.div 
                      className="text-primary mr-2"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                        ease: "easeInOut"
                      }}
                    >
                      {item.icon}
                    </motion.div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-300">{item.title}</span>
                  </div>
                  <motion.span 
                    className={`text-lg ml-7 ${index % 2 === 0 ? "text-portfolioBlue" : "text-portfolioPink"}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                  >
                    {item.value}
                  </motion.span>
                </motion.li>
              ))}
            </ul>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-6">
            <motion.div 
              className="w-10 h-10 rounded-full bg-portfolioLightPurple flex items-center justify-center mr-3"
              animate={{
                scale: [1, 1.1, 1],
                rotateZ: [0, -5, 5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 0.5,
                ease: "easeInOut"
              }}
            >
              <Briefcase className="w-5 h-5 text-portfolioPurple" />
            </motion.div>
            <h3 className="text-xl font-playfair font-bold bg-gradient-to-r from-primary via-portfolioPurple to-portfolioPink text-transparent bg-clip-text">Professional Summary</h3>
          </div>
          
          <GlassCard className="h-full">
            <ul className="space-y-6">
              {professionalInfo.map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex flex-col"
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex items-center mb-1">
                    <motion.div 
                      className="text-portfolioPurple mr-2"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                        ease: "easeInOut"
                      }}
                    >
                      {item.icon}
                    </motion.div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-300">{item.title}</span>
                  </div>
                  <motion.span 
                    className={`text-lg ml-7 ${index % 2 === 0 ? "text-portfolioOrange" : "text-portfolioPurple"}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                  >
                    {item.value}
                  </motion.span>
                </motion.li>
              ))}
            </ul>
          </GlassCard>
        </motion.div>
      </div>
      
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <GlassCard>
          <div className="text-center">
            <motion.div 
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-portfolioPurple rounded-full mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-8 h-8 text-white animate-pulse" />
            </motion.div>
            <h3 className="text-2xl font-playfair font-bold bg-gradient-to-r from-primary via-portfolioPurple to-portfolioPink text-transparent bg-clip-text mb-4">Ready to Work Together?</h3>
            <p className={`mb-6 max-w-2xl mx-auto ${paragraphColors.callToAction}`}>
              I'm passionate about creating elegant, functional web applications that solve real-world problems.
              Let's connect and discuss how I can contribute to your next project!
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-white rounded-full font-medium shadow-md"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" 
              }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}

function Code(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
}
