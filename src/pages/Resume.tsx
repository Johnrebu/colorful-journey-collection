
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Code,
  ClipboardList,
  Award,
  User,
  CheckCircle
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import GlassCard from "../components/GlassCard";
import SkillTag from "../components/SkillTag";

export default function Resume() {
  const workExperiences = [
    {
      title: "Teacher - Infant Jesus Mat. Hr. Sec. School",
      period: "Pattabiram, Chennai • 06/2015 - 06/2018",
      responsibilities: [
        "Taught Chemistry and Science to classes IX, X, XI, and XII.",
        "Implemented engaging methodologies to improve student understanding."
      ]
    },
    {
      title: "Teacher - Good Shepherd Mat. Hr. Sec. School",
      period: "Pattabiram, Chennai • 06/2015 - 06/2018",
      responsibilities: [
        "Instructed students in Chemistry and Biochemistry across classes VIII to XII.",
        "Enhanced curriculum with practical lab sessions."
      ]
    },
    {
      title: "Teacher - Mount Zion Mat. Hr. Sec. School",
      period: "Pattabiram & Pudukkottai • 06/2018 - 01/2024",
      responsibilities: [
        "Taught Chemistry to classes VI to VIII.",
        "Organized successful science fairs and earned Teacher of the Year honors in 2019."
      ]
    }
  ];

  const educationItems = [
    {
      degree: "B.Ed",
      institution: "Mother Teresa College of Education, Illuppur",
      period: "06/2014 - 06/2015"
    },
    {
      degree: "M.Sc. (Chemistry)",
      institution: "Bishop Heber College, Trichy",
      period: "06/2012 - 06/2014"
    },
    {
      degree: "B.Sc. (Chemistry)",
      institution: "H.H. The Rajah's College, Pudukkottai",
      period: "06/2009 - 06/2012"
    },
    {
      degree: "S.S.L.C. & H.S.C.",
      institution: "Govt. Hr. Sec. School, Sadayampatti",
      period: "06/2006 - 06/2009"
    }
  ];

  const skills = [
    { name: "HTML", scheme: "orange" },
    { name: "CSS", scheme: "blue" },
    { name: "JavaScript", scheme: "orange" },
    { name: "React JS", scheme: "blue" },
    { name: "TypeScript", scheme: "blue" },
    { name: "Tailwind CSS", scheme: "blue" },
    { name: "Python", scheme: "blue" },
    { name: "Django", scheme: "purple" },
    { name: "SQL", scheme: "purple" },
    { name: "WordPress", scheme: "blue" },
  ];

  const certifications = [
    "Full Stack Developer",
    "Python Using AI Workshop",
    "AI Tools and ChatGPT Workshop",
    "Build an E-Commerce platform using React Masterclass"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div
      className="space-y-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SectionTitle icon={<ClipboardList size={28} />}>Resume</SectionTitle>

      {/* Professional Summary */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionTitle icon={<User size={24} />}>Professional Summary</SectionTitle>
        <motion.div variants={itemVariants}>
          <GlassCard>
            <p className="text-gray-700 leading-relaxed">
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

      {/* Work Experience */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionTitle icon={<Briefcase size={24} />}>Work Experience</SectionTitle>
        <div className="space-y-6">
          {workExperiences.map((experience, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative pl-6 border-l-2 border-primary/20 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:bg-primary before:left-[-9px] before:top-0"
            >
              <GlassCard>
                <h4 className="text-xl font-semibold text-gray-800">
                  {experience.title}
                </h4>
                <p className="text-gray-500 mb-4">{experience.period}</p>
                <ul className="space-y-2 text-gray-700">
                  {experience.responsibilities.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary/70 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionTitle icon={<GraduationCap size={24} />}>Education</SectionTitle>
        <div className="space-y-4">
          {educationItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-portfolioPurple"></div>
                <div className="pl-4">
                  <h4 className="text-xl font-semibold text-gray-800">{item.degree}</h4>
                  <p className="text-gray-600">
                    {item.institution} • {item.period}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Technical Skills */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionTitle icon={<Code size={24} />}>Technical Skills</SectionTitle>
        <motion.div variants={itemVariants}>
          <GlassCard>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <SkillTag colorScheme={skill.scheme as any}>{skill.name}</SkillTag>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </motion.section>

      {/* Projects */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionTitle icon={<ClipboardList size={24} />}>Projects</SectionTitle>
        <div className="space-y-6">
          <motion.div variants={itemVariants}>
            <GlassCard>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                React_Colorful Weather Widget
              </h4>
              <p className="text-gray-600">
                "This project demonstrates modern web development practices while
                creating a beautiful and functional weather application. The
                combination of React, Tailwind CSS, and modern API integration
                creates a production-ready application that's both performant and
                visually appealing."
              </p>
            </GlassCard>
          </motion.div>
          <motion.div variants={itemVariants}>
            <GlassCard>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Employee Directory Application
              </h4>
              <p className="text-gray-600">
                "This is a modern React-based Employee Directory application that
                allows organizations to manage and visualize their employee data
                through an intuitive interface. The application provides a
                comprehensive view of employee information with powerful
                filtering, sorting, and visualization capabilities."
              </p>
            </GlassCard>
          </motion.div>
          <motion.div variants={itemVariants}>
            <GlassCard>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                E-commerce_Website
              </h4>
              <p className="text-gray-600">
                "Complete e-commerce website using React JS
                and the MERN stack. The project covers front-end development using
                React, including component creation, routing, state management,
                and integration with a back-end database (MongoDB)."
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </motion.section>

      {/* Certifications */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-16"
      >
        <SectionTitle icon={<Award size={24} />}>Certifications</SectionTitle>
        <motion.div variants={itemVariants}>
          <GlassCard>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="flex items-center p-3 bg-white/50 rounded-lg border border-gray-100 shadow-sm"
                >
                  <div className="p-2 rounded-full bg-primary/10 mr-3">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </motion.section>
      
      <motion.div 
        className="mt-16 mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <GlassCard>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Download My Resume?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get a complete copy of my resume in PDF format for your records.
            </p>
            <motion.a
              href="#" // Add a link to your PDF resume
              className="inline-block px-8 py-3 bg-primary text-white rounded-full font-medium shadow-md"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" 
              }}
              whileTap={{ scale: 0.98 }}
            >
              Download PDF
            </motion.a>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
