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
        <div className="relative pl-6 after:absolute after:inset-y-0 after:left-6 after:w-0.5 after:bg-gray-200 dark:after:bg-gray-700">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative pl-8 py-4 group"
            >
              <div
                className={`absolute left-0 top-4 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-${event.color}-100 text-${event.color}-600 ring-8 ring-background group-hover:scale-110 transition-transform`}
              >
                {event.icon}
              </div>
              <div className="mb-1 text-sm font-semibold text-primary">
                {event.date}
              </div>
              <h4 className="font-bold text-lg text-gray-800 dark:text-white mb-2">
                {event.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {event.description}
              </p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {valuePropositions.map((prop, index) => (
            <motion.div key={index} variants={cardVariants}>
              <GlassCard className="h-full">
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {prop.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 dark:text-white mb-1">
                      {prop.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {prop.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
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

        <motion.div variants={cardVariants}>
          <GlassCard>
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
                  whileHover={{
                    y: -3,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  <SkillTag colorScheme={skill.scheme as any}>
                    {skill.name}
                  </SkillTag>
                </motion.div>
              ))}
            </motion.div>
          </GlassCard>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
