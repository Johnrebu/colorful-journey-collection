
import { motion } from "framer-motion";
import { Github, ExternalLink, Code, Layout, Figma } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import GlassCard from "../components/GlassCard";
import SkillTag from "../components/SkillTag";

export default function Projects() {
  const projects = [
    {
      title: "React Colorful Weather Widget",
      description:
        "This project demonstrates modern web development practices while creating a beautiful and functional weather application. The combination of React, Tailwind CSS, and modern API integration creates a production-ready application that's both performant and visually appealing.",
      image:
        "https://media.istockphoto.com/id/2110814435/photo/hot-climate.jpg?s=612x612&w=0&k=20&c=xSGU2_TfO0LJreK3i93aKaP9Wj5qjBwdCNFfw65izPM=",
      technologies: [
        { name: "React", scheme: "blue" },
        { name: "Tailwind CSS", scheme: "blue" },
        { name: "TypeScript", scheme: "blue" },
        { name: "OpenWeatherMap API", scheme: "purple" },
      ],
      githubUrl: "https://github.com/Johnrebu/WeatherApp_ReactResumeProject",
      liveUrl: "https://chimerical-sunburst-6fe1b4.netlify.app/",
      icon: <Layout className="w-5 h-5" />,
    },
    {
      title: "Employee Directory Application",
      description:
        "This is a modern React-based Employee Directory application that allows organizations to manage and visualize their employee data through an intuitive interface. The application provides a comprehensive view of employee information with powerful filtering, sorting, and visualization capabilities.",
      image:
        "https://media.istockphoto.com/id/1430370901/es/foto/lista-de-verificaci%C3%B3n-r%C3%A1pida-y-gesti%C3%B3n-de-tareas-del-portapapeles-completando-formularios-de.jpg?s=612x612&w=0&k=20&c=UJW8NNYOUZsem8H6kiFLEpDJ1mcbB0fR26Z1pkAAK3k=",
      technologies: [
        { name: "React", scheme: "blue" }, 
        { name: "Tailwind CSS", scheme: "blue" }, 
        { name: "TypeScript", scheme: "blue" }, 
        { name: "useMemo", scheme: "purple" }
      ],
      githubUrl: "https://github.com/Johnrebu/Pro_ForCecilAnna_sortSerch",
      liveUrl: "https://stellular-cactus-7acb12.netlify.app/",
      icon: <Figma className="w-5 h-5" />,
    },
    {
      title: "E-commerce Website",
      description:
        "Complete e-commerce website using React JS and the MERN stack. The project covers front-end development using React, including component creation, routing, state management, and integration with a back-end database (MongoDB).",
      image:
        "https://media.istockphoto.com/id/839422436/photo/business-man-showing-online-shopping-concept-in-color-background.jpg?s=612x612&w=0&k=20&c=dRFLX-_NnPdj4nfol4A24-aR0Sw3rCeBiVvSejnSw74=",
      technologies: [
        { name: "React", scheme: "blue" }, 
        { name: "Routing", scheme: "orange" }, 
        { name: "Context API", scheme: "purple" }, 
        { name: "MongoDB", scheme: "green" }
      ],
      githubUrl: "https://vercel.com/johnsons-projects-4da3c79c/ecommerce/HwQLrmjsBJK4XPQYMGJXco9M5ppF",
      liveUrl: "https://ecommerce-nzky6c14k-johnsons-projects-4da3c79c.vercel.app/",
      icon: <Code className="w-5 h-5" />,
    },
  ];

  // Define paragraph colors
  const paragraphColors = {
    projectDesc1: "text-portfolioBlue",
    projectDesc2: "text-portfolioPurple",
    projectDesc3: "text-portfolioPink",
    callToAction: "text-portfolioOrange",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SectionTitle icon={<Code size={28} />}>Projects</SectionTitle>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="h-full"
          >
            <GlassCard className="h-full flex flex-col">
              <div className="relative overflow-hidden rounded-lg mb-6 group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <div className="text-white font-medium">{project.title}</div>
                  <div className="flex space-x-2">
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-primary">
                  {project.icon}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className={`mb-6 line-clamp-3 ${
                  index === 0 ? paragraphColors.projectDesc1 : 
                  index === 1 ? paragraphColors.projectDesc2 : 
                  paragraphColors.projectDesc3
                }`}>
                  {project.description}
                </p>
              </div>
              
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <SkillTag key={techIndex} colorScheme={tech.scheme as any}>
                      {tech.name}
                    </SkillTag>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    className="flex items-center text-gray-700 hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-gray-700 hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <GlassCard>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Interested in working together?</h3>
            <p className={`mb-6 max-w-2xl mx-auto ${paragraphColors.callToAction}`}>
              I'm always looking for new and exciting projects to work on.
              If you like my work and have a project in mind, feel free to reach out!
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
              Let's Talk
            </motion.a>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
