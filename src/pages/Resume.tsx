import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { toast } from "sonner";
import useSeo from "@/hooks/useSeo";
import ResumeDownload from "../components/resume/ResumeDownload";
import CurrentRoleImpact from "../components/CurrentRoleImpact";
import { certifications, educationItems, skills, workExperiences } from "../components/resume/resumeData";

const profile = {
  name: "Johnson T",
  role: "Full Stack Developer • AI Video • Automation • Graphic Design • Event Ops",
  company: "Aionion Capital",
  location: "Tambaram, Chennai, India",
  email: "johnchemist91@gmail.com",
  phone: "+91 875-477-4022",
  linkedin: "https://www.linkedin.com/in/johnsonelon/",
  github: "https://github.com/Johnrebu",
};

const selectedProjects = [
  {
    name: "event-companion",
    summary: "Built an event-focused platform experience with clear user flows and practical planning interactions.",
    github: "https://github.com/Johnrebu/event-companion",
    live: "https://moneypechuevents.netlify.app/",
  },
  {
    name: "rebekha-catering-website",
    summary: "Developed a catering business website focused on service presentation, inquiry flow, and conversion.",
    github: "https://github.com/Johnrebu/rebekha-catering-website",
    live: "https://rebekhacaterers.online/",
  },
  {
    name: "E-Commerce Website",
    summary: "Developed a React-based storefront workflow with product navigation and stateful interactions.",
    github: "https://github.com/Johnrebu/E-Commerce_Website",
    live: "https://ecommercejohn.netlify.app/",
  },
];

const summary =
  "Full-Stack Developer, AI Video Creator, and Automation Specialist at Aionion Capital. Experienced in building scalable backend infrastructure with sub-300ms response times, ≥ 99.5% system uptime, 100% CRM lead sync accuracy, end-to-end AI educational video production, graphic design, and live event technology operations. Combines 9+ years of pedagogical problem-solving with cutting-edge digital execution.";

const normalizePeriod = (value: string) => value.replace("•", "•");

export default function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  useSeo({
    title: "Resume & Experience - Johnson | Aionion Capital",
    description:
      "View Johnson's professional resume: Full-Stack Developer & Multidisciplinary Specialist at Aionion Capital with expertise in API automation, AI video production, graphic design, and event tech.",
    keywords: "resume, Aionion Capital, experience, full-stack developer, AI video creator, automation, React, TypeScript, Python",
  });

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
        if (pageIndex > 0) pdf.addPage();

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
      className="space-y-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35 }}
    >
      <div ref={resumeRef} className="google-surface relative overflow-hidden rounded-[2rem] p-6 md:p-10">
        <div className="google-grid-bg absolute inset-0 opacity-55" />
        <div className="relative">
          <header className="border-b border-slate-200 pb-6 dark:border-zinc-700">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">{profile.name}</h1>
                <p className="mt-1 text-lg font-bold text-[#4285F4] dark:text-[#8ab4f8]">{profile.company}</p>
                <p className="mt-1 text-xs sm:text-sm font-medium text-slate-700 dark:text-zinc-300 break-words">{profile.role}</p>
              </div>
              <div className="space-y-2 text-sm text-slate-600 dark:text-zinc-300">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white">
                  <Mail size={15} />
                  {profile.email}
                </a>
                <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white">
                  <Phone size={15} />
                  {profile.phone}
                </a>
                <p className="flex items-center gap-2">
                  <MapPin size={15} />
                  {profile.location}
                </p>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white">
                  <Linkedin size={15} />
                  LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white">
                  <Github size={15} />
                  GitHub
                </a>
              </div>
            </div>
          </header>

          <section className="mt-6">
            <h2 className="inline-flex items-center gap-2 text-base font-semibold uppercase tracking-[0.1em] text-[#4285F4] dark:text-[#8ab4f8]">
              <FileText size={16} />
              Professional Summary
            </h2>
            <p className="mt-3 leading-relaxed text-slate-700 dark:text-zinc-300">{summary}</p>
          </section>

          {/* Current Role & Measured Impact Detailed Section */}
          <section className="mt-8">
            <CurrentRoleImpact />
          </section>

          <section className="mt-8">
            <h2 className="inline-flex items-center gap-2 text-base font-semibold uppercase tracking-[0.1em] text-[#34A853] dark:text-[#7bdc9c]">
              <Briefcase size={16} />
              Work Experience History
            </h2>
            <div className="mt-4 space-y-5">
              {workExperiences.map((experience) => (
                <article key={experience.title} className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-zinc-700 dark:bg-zinc-900/50">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-zinc-100">{experience.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-zinc-400">{normalizePeriod(experience.period)}</p>
                  </div>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-700 dark:text-zinc-300">
                    {experience.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="inline-flex items-center gap-2 text-base font-semibold uppercase tracking-[0.1em] text-[#EA4335] dark:text-[#f28b82]">
                <GraduationCap size={16} />
                Education
              </h2>
              <div className="mt-4 space-y-4">
                {educationItems.map((item) => (
                  <article key={`${item.degree}-${item.institution}`} className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-zinc-700 dark:bg-zinc-900/50">
                    <h3 className="font-semibold text-slate-900 dark:text-zinc-100">{item.degree}</h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-zinc-300">{item.institution}</p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-zinc-400">{item.period}</p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-base font-semibold uppercase tracking-[0.1em] text-[#FBBC05] dark:text-[#fdd663]">Skills & Disciplines</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-sm text-slate-700 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-200"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>

              <h2 className="mt-8 text-base font-semibold uppercase tracking-[0.1em] text-[#4285F4] dark:text-[#8ab4f8]">Certifications</h2>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-zinc-300">
                {certifications.map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-base font-semibold uppercase tracking-[0.1em] text-[#34A853] dark:text-[#7bdc9c]">Selected Projects</h2>
            <div className="mt-4 space-y-4">
              {selectedProjects.map((project) => (
                <article key={project.name} className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-zinc-700 dark:bg-zinc-900/50">
                  <h3 className="font-semibold text-slate-900 dark:text-zinc-100">{project.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-zinc-300">{project.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm">
                    <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[#1a73e8] hover:underline">
                      <Github size={14} />
                      Source
                    </a>
                    {project.live ? (
                      <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[#1a73e8] hover:underline">
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>

      <ResumeDownload
        downloadTextColor="text-slate-600 dark:text-zinc-300"
        onDownload={handleDownloadResume}
        isDownloading={isDownloading}
      />
    </motion.div>
  );
}
