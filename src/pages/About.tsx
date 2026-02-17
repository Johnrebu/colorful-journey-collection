import { motion } from "framer-motion";
import {
  Code,
  Award,
  ScrollText,
  BookOpen,
  Briefcase,
  BrainCircuit,
  User,
  Sparkles,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import GlassCard from "../components/GlassCard";
import SkillTag from "../components/SkillTag";
import StarAnimation from "../components/animations/StarAnimation";
import SelfIntroduction from "../components/SelfIntroduction";

export default function About() {
  const timelineEvents = [
    {
      icon: <BookOpen />,
      date: "2015 - 2024",
      title: "Educator & Innovator",
      description:
        "Spent nearly a decade as a Chemistry and Science teacher, honing skills in communication, problem-solving, and curriculum development. Received 'Teacher of the Year' honors in 2019.",
      color: "blue",
    },
    {
      icon: <Code />,
      date: "2024",
      title: "Transition to Tech",
      description:
        "Driven by curiosity, I completed a 9-month Python full-stack developer course, officially pivoting my career into the IT industry.",
      color: "purple",
    },
    {
      icon: <Briefcase />,
      date: "2024 - Present",
      title: "Full-Stack Developer",
      description:
        "Gained 8 months of hands-on experience as a React and WordPress developer intern at OOR Cabs, working with modern web technologies and AI tools.",
      color: "pink",
    },
  ];

  const skills = [
    { name: "HTML", scheme: "orange" },
    { name: "CSS", scheme: "blue" },
    { name: "JavaScript", scheme: "orange" },
    { name: "React.JS", scheme: "blue" },
    { name: "TypeScript", scheme: "blue" },
    { name: "Tailwind CSS", scheme: "blue" },
    { name: "Python", scheme: "blue" },
    { name: "Django", scheme: "purple" },
    { name: "SQL", scheme: "purple" },
    { name: "WordPress", scheme: "blue" },
  ];

  const valuePropositions = [
    {
      icon: <BrainCircuit size={28} className="text-primary" />,
      title: "Analytical Problem-Solving",
      description:
        "My scientific background provides a methodical, analytical approach to debugging and development.",
    },
    {
      icon: <User size={28} className="text-portfolioPurple" />,
      title: "Clear Communication",
      description:
        "Years of teaching complex topics enable me to communicate technical ideas clearly to any audience.",
    },
    {
      icon: <Award size={28} className="text-portfolioPink" />,
      title: "Disciplined & Adaptable",
      description:
        "I bring a strong work ethic and a proven ability to quickly master new technologies and concepts.",
    },
    {
      icon: <Sparkles size={28} className="text-portfolioOrange" />,
      title: "Educational Insight",
      description:
        "I combine educational principles with tech to build intuitive, user-centric applications.",
    },
  ];
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className="font-montserrat relative space-y-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <StarAnimation />

      {/* Component that tells the personal story */}
      <SelfIntroduction />

      {/* My Journey Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionTitle icon={<ScrollText size={28} />}>My Journey</SectionTitle>
        <div className="space-y-4 mt-8">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
            >
              <div className="pb-6 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 text-${event.color}-600 dark:text-${event.color}-400 pt-1`}>
                    {event.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      {event.date}
                    </div>
                    <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">
                      {event.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* What I Bring Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionTitle icon={<Award size={28} />}>
          What I Bring to the Table
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {valuePropositions.map((prop, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  {prop.icon}
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    {prop.title}
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed ml-9">
                  {prop.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Technical Skills Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionTitle icon={<Code size={28} />}>Technical Skills</SectionTitle>

        <motion.div variants={containerVariants} className="mt-8">
          <motion.div
            className="flex flex-wrap gap-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
              >
                <SkillTag colorScheme={skill.scheme as any}>
                  {skill.name}
                </SkillTag>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
