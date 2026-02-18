import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import StarAnimation from "../components/animations/StarAnimation";
import { toast } from "sonner";

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
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadResume = async () => {
    if (!resumeRef.current || isDownloading) return;

    try {
      setIsDownloading(true);
      const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);

      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        scrollX: 0,
        scrollY: -window.scrollY,
        onclone: (clonedDoc) => {
          clonedDoc.querySelectorAll("*").forEach((node) => {
            const element = node as HTMLElement;
            element.style.animation = "none";
            element.style.transition = "none";
          });
        },
      });

      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 10;
      const contentWidth = pageWidth - margin * 2;
      const contentHeight = pageHeight - margin * 2;
      const pageHeightPx = Math.floor((canvas.width * contentHeight) / contentWidth);
      const totalPages = Math.ceil(canvas.height / pageHeightPx);

      for (let pageIndex = 0; pageIndex < totalPages; pageIndex += 1) {
        if (pageIndex > 0) {
          pdf.addPage();
        }

        const sourceY = pageIndex * pageHeightPx;
        const sliceHeight = Math.min(pageHeightPx, canvas.height - sourceY);
        const pageCanvas = document.createElement("canvas");
        pageCanvas.width = canvas.width;
        pageCanvas.height = sliceHeight;

        const pageContext = pageCanvas.getContext("2d");
        if (!pageContext) {
          throw new Error("Unable to prepare PDF page context");
        }

        pageContext.fillStyle = "#ffffff";
        pageContext.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
        pageContext.drawImage(
          canvas,
          0,
          sourceY,
          canvas.width,
          sliceHeight,
          0,
          0,
          pageCanvas.width,
          pageCanvas.height
        );

        const pageImageData = pageCanvas.toDataURL("image/jpeg", 0.95);
        const renderHeight = (sliceHeight * contentWidth) / canvas.width;
        pdf.addImage(pageImageData, "JPEG", margin, margin, contentWidth, renderHeight, undefined, "FAST");
      }

      pdf.save("Johnson_T_Resume.pdf");
      toast.success("Resume PDF downloaded");
    } catch (error) {
      console.error("PDF generation failed", error);
      toast.error("Unable to generate PDF. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <motion.div
      className="space-y-12 font-montserrat relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      ref={resumeRef}
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
        downloadTextColor={paragraphColors.downloadText}
        onDownload={handleDownloadResume}
        isDownloading={isDownloading}
      />
    </motion.div>
  );
}
