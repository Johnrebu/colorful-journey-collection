import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import StarAnimation from "../components/animations/StarAnimation";

// Import resume components
import ProfessionalSummary from "../components/resume/ProfessionalSummary";
import WorkExperience from "../components/resume/WorkExperience";
import Education from "../components/resume/Education";
import Skills from "../components/resume/Skills";
import Projects from "../components/resume/Projects";
import Certifications from "../components/resume/Certifications";
import ResumeDownload from "../components/resume/ResumeDownload";

// Import resume data
import {
  workExperiences,
  educationItems,
  skills,
  certifications,
  paragraphColors,
} from "../components/resume/resumeData";

export default function Resume() {
  // Direct URL for the resume download
  const resumeUrl =
    "https://drive.google.com/uc?export=download&id=1FnME7oKuZuQNgCBQ5rfID-hXfOJsVeO0";

  return (
    <motion.div
      className="space-y-12 font-montserrat relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <StarAnimation />
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <SectionTitle icon={<FileText size={28} />} colorScheme="gradient">
          My Resume
        </SectionTitle>
      </motion.div>

      {/* Professional Summary */}
      <ProfessionalSummary paragraphColor={paragraphColors.summary} />

      {/* Work Experience */}
      <WorkExperience experiences={workExperiences} />

      {/* Education */}
      <Education educationItems={educationItems} />

      {/* Technical Skills */}
      <Skills skills={skills} />

      {/* Projects */}
      <Projects
        paragraphColors={{
          project1: paragraphColors.project1,
          project2: paragraphColors.project2,
          project3: paragraphColors.project3,
        }}
      />

      {/* Certifications */}
      <Certifications certifications={certifications} />

      {/* Download Resume */}
      <ResumeDownload
        resumeUrl={resumeUrl}
        downloadTextColor={paragraphColors.downloadText}
      />
    </motion.div>
  );
}
