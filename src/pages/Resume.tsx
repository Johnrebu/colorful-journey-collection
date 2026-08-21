import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  CheckCircle2,
  Code2,
  ExternalLink,
  FileText,
  FolderGit2,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Star,
  User,
} from "lucide-react";
import { toast } from "sonner";
import useSeo from "@/hooks/useSeo";
import ResumeDownload from "../components/resume/ResumeDownload";
import johnImage from "@/images/johnson-professional.jpg";
import {
  certifications,
  educationItems,
  skills,
  workExperiences,
} from "../components/resume/resumeData";

const profile = {
  name: "Johnson T",
  role: "Full Stack Developer • AI Video • Automation • Graphic Design • Event Ops",
  company: "Aionion Capital",
  location: "Tambaram, Chennai, India",
  email: "johnchemist91@gmail.com",
  phone: "+91 875-477-4022",
  linkedin: "https://www.linkedin.com/in/johnsonelon/",
  github: "https://github.com/Johnrebu",
  portfolio: "https://johnsonrebu.netlify.app",
};

const selectedProjects = [
  {
    name: "Aionion Capital Portfolio",
    summary:
      "Full-stack portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features AI chat assistant, SEO optimization, and professional resume generation.",
    github: "https://github.com/Johnrebu/colorful-journey-collection",
    live: "https://johnsonrebu.netlify.app/",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Event Companion Platform",
    summary:
      "Built an event-focused platform experience with clear user flows, practical planning interactions, and responsive design.",
    github: "https://github.com/Johnrebu/event-companion",
    live: "https://moneypechuevents.netlify.app/",
    tech: ["React", "JavaScript", "CSS3"],
  },
  {
    name: "Rebekha Catering Website",
    summary:
      "Developed a catering business website focused on service presentation, inquiry flow, and conversion optimization.",
    github: "https://github.com/Johnrebu/rebekha-catering-website",
    live: "https://rebekhacaterers.online/",
    tech: ["WordPress", "Custom Theme", "SEO"],
  },
  {
    name: "E-Commerce Storefront",
    summary:
      "Developed a React-based storefront workflow with product navigation, cart management, and stateful interactions.",
    github: "https://github.com/Johnrebu/E-Commerce_Website",
    live: "https://ecommercejohn.netlify.app/",
    tech: ["React", "JavaScript", "Tailwind CSS"],
  },
];

const summary =
  "Results-driven Full-Stack Developer with 9+ years of professional experience combining pedagogical problem-solving with cutting-edge digital execution. Currently at Aionion Capital, building scalable backend infrastructure with sub-300ms response times, maintaining ≥ 99.5% system uptime, and achieving 100% CRM lead sync accuracy. Specialized in React, TypeScript, Python, AI educational video production, graphic design, and live event technology operations.";

const coreCompetencies = [
  "React & TypeScript",
  "Python & Django",
  "RESTful API Design",
  "System Automation",
  "AI Video Production",
  "Responsive Web Design",
  "Performance Optimization",
  "SEO & Accessibility",
  "Graphic Design",
  "Event Tech Operations",
  "WordPress Development",
  "Git & CI/CD",
];

const keyAchievements = [
  { metric: "<300ms", label: "API Response Time" },
  { metric: "≥99.5%", label: "System Uptime" },
  { metric: "100%", label: "CRM Sync Accuracy" },
  { metric: "4+/mo", label: "AI Videos Published" },
  { metric: "≥40%", label: "Avg. Watch Time" },
  { metric: "9+", label: "Years Experience" },
];

// Google-inspired section accent colors
const sectionColors = {
  summary: "#4285F4",
  achievements: "#EA4335",
  experience: "#34A853",
  skills: "#FBBC05",
  education: "#4285F4",
  certifications: "#EA4335",
  projects: "#34A853",
};

const normalizePeriod = (value: string) => value.replace("•", "•");

export default function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  useSeo({
    title: "Resume & Experience - Johnson T | Full Stack Developer",
    description:
      "View Johnson T's professional resume: Full-Stack Developer & Multidisciplinary Specialist at Aionion Capital with expertise in API automation, AI video production, graphic design, and event tech.",
    keywords:
      "resume, Aionion Capital, experience, full-stack developer, AI video creator, automation, React, TypeScript, Python",
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
      const margin = 6;
      const contentWidth = pageWidth - margin * 2;
      const contentHeight = pageHeight - margin * 2;
      const pageHeightPx = Math.floor(
        (canvas.width * contentHeight) / contentWidth
      );
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
        pdf.addImage(
          pageImageData,
          "JPEG",
          margin,
          margin,
          contentWidth,
          renderHeight,
          undefined,
          "FAST"
        );
      }

      pdf.save("Johnson_T_Resume.pdf");
      toast.success("Resume PDF downloaded successfully!");
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
      {/* ====== PDF-Captured Resume ====== */}
      <div
        ref={resumeRef}
        className="relative overflow-hidden rounded-[2rem] bg-white shadow-[0_25px_70px_rgba(15,23,42,0.12)] dark:bg-[#0f1420] dark:shadow-[0_35px_100px_rgba(2,6,23,0.5)]"
      >
        {/* ── TOP ACCENT BAR ── */}
        <div className="h-2 w-full bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853]" />

        <div className="p-6 md:p-10 space-y-8">
          {/* ════════════════════════════════════════════════════════
              HEADER CARD — Photo + Name + Contact
          ════════════════════════════════════════════════════════ */}
          <header className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 p-5 sm:p-6 dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-900/95 dark:to-blue-950/20">
            {/* Subtle background accent */}
            <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-[#4285F4]/8 blur-3xl pointer-events-none dark:bg-[#4285F4]/5" />
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#34A853]/8 blur-3xl pointer-events-none dark:bg-[#34A853]/5" />

            <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
              {/* Profile Photo */}
              <div className="shrink-0">
                <div className="relative">
                  <div className="h-32 w-32 sm:h-36 sm:w-36 rounded-2xl bg-gradient-to-tr from-[#4285F4] via-[#EA4335] to-[#FBBC05] p-[3px] shadow-lg">
                    <img
                      src={johnImage}
                      alt="Johnson T - Full Stack Developer"
                      className="h-full w-full rounded-[13px] object-cover object-top bg-white dark:bg-zinc-900"
                      crossOrigin="anonymous"
                    />
                  </div>
                  {/* Available badge */}
                  <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#34A853] shadow-md dark:border-zinc-900">
                    <CheckCircle2 size={14} className="text-white" />
                  </span>
                </div>
              </div>

              {/* Name & Contact Details */}
              <div className="flex-1 text-center sm:text-left space-y-3">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    {profile.name}
                  </h1>
                  <div className="mt-1.5 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="h-6 px-2 py-0.5 rounded-md bg-white border border-slate-200 dark:border-white/10 flex items-center shrink-0 shadow-sm">
                      <img
                        src="/aionion-capital-logo.png"
                        alt="Aionion Capital"
                        className="h-full w-auto object-contain"
                        crossOrigin="anonymous"
                      />
                    </span>
                    <span className="text-base font-bold text-[#4285F4] dark:text-[#8ab4f8]">
                      {profile.company}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-zinc-300">
                    {profile.role}
                  </p>
                </div>

                {/* Contact Info Grid */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1.5 text-[13px] text-slate-600 dark:text-zinc-400">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-1.5 hover:text-[#4285F4] transition-colors"
                  >
                    <Mail size={13} className="text-[#EA4335]" />
                    {profile.email}
                  </a>
                  <a
                    href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-1.5 hover:text-[#4285F4] transition-colors"
                  >
                    <Phone size={13} className="text-[#34A853]" />
                    {profile.phone}
                  </a>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={13} className="text-[#FBBC05]" />
                    {profile.location}
                  </span>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-[#4285F4] transition-colors"
                  >
                    <Linkedin size={13} className="text-[#4285F4]" />
                    LinkedIn
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-[#4285F4] transition-colors"
                  >
                    <Github size={13} className="text-slate-800 dark:text-zinc-300" />
                    GitHub
                  </a>
                  <a
                    href={profile.portfolio}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-[#4285F4] transition-colors"
                  >
                    <Globe size={13} className="text-[#34A853]" />
                    Portfolio
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* ════════════════════════════════════════════════════════
              PROFESSIONAL SUMMARY
          ════════════════════════════════════════════════════════ */}
          <section>
            <SectionHeading
              icon={<FileText size={16} />}
              title="Professional Summary"
              color={sectionColors.summary}
            />
            <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-zinc-300">
              {summary}
            </p>
          </section>

          {/* ════════════════════════════════════════════════════════
              KEY ACHIEVEMENTS — ATS-Friendly Metrics Bar
          ════════════════════════════════════════════════════════ */}
          <section>
            <SectionHeading
              icon={<Star size={16} />}
              title="Key Achievements"
              color={sectionColors.achievements}
            />
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {keyAchievements.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-200/80 bg-gradient-to-b from-slate-50/80 to-white p-3 text-center shadow-sm dark:border-zinc-800 dark:from-zinc-900/80 dark:to-zinc-900/50"
                >
                  <p className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] to-[#34A853] dark:from-cyan-200 dark:to-blue-400">
                    {item.metric}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold text-slate-500 dark:text-zinc-400 leading-tight">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════
              CORE COMPETENCIES
          ════════════════════════════════════════════════════════ */}
          <section>
            <SectionHeading
              icon={<Sparkles size={16} />}
              title="Core Competencies"
              color={sectionColors.skills}
            />
            <div className="mt-3 flex flex-wrap gap-2">
              {coreCompetencies.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-300/80 bg-gradient-to-r from-slate-50 to-white px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-sm dark:border-zinc-700 dark:from-zinc-900 dark:to-zinc-800 dark:text-zinc-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════
              WORK EXPERIENCE
          ════════════════════════════════════════════════════════ */}
          <section>
            <SectionHeading
              icon={<Briefcase size={16} />}
              title="Work Experience"
              color={sectionColors.experience}
            />
            <div className="mt-4 space-y-4">
              {workExperiences.map((experience, idx) => (
                <article
                  key={experience.title}
                  className="relative rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70"
                >
                  {/* Left accent bar */}
                  <div
                    className="absolute top-0 left-0 bottom-0 w-1 rounded-l-2xl"
                    style={{
                      backgroundColor:
                        idx === 0
                          ? "#4285F4"
                          : idx === 1
                          ? "#EA4335"
                          : idx === 2
                          ? "#FBBC05"
                          : "#34A853",
                    }}
                  />

                  <div className="pl-3">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {experience.title.includes("Aionion Capital") && (
                          <span className="h-6 px-1.5 py-0.5 rounded bg-white border border-slate-200 dark:border-white/10 flex items-center shrink-0 shadow-sm">
                            <img
                              src="/aionion-capital-logo.png"
                              alt="Aionion Capital"
                              className="h-full w-auto object-contain"
                              crossOrigin="anonymous"
                            />
                          </span>
                        )}
                        <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">
                          {experience.title}
                        </h3>
                      </div>
                      <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-semibold text-slate-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
                        {normalizePeriod(experience.period)}
                      </span>
                    </div>
                    <ul className="mt-3 space-y-1.5 text-sm text-slate-700 dark:text-zinc-300">
                      {experience.responsibilities.map((item) => (
                        <li key={item} className="flex gap-2">
                          <CheckCircle2
                            size={14}
                            className="mt-0.5 shrink-0 text-[#34A853]"
                          />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════
              EDUCATION & SKILLS + CERTIFICATIONS (2-column)
          ════════════════════════════════════════════════════════ */}
          <section className="grid gap-8 lg:grid-cols-2">
            {/* Education */}
            <div>
              <SectionHeading
                icon={<GraduationCap size={16} />}
                title="Education"
                color={sectionColors.education}
              />
              <div className="mt-4 space-y-3">
                {educationItems.map((item) => (
                  <article
                    key={`${item.degree}-${item.institution}`}
                    className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70"
                  >
                    <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-100">
                      {item.degree}
                    </h3>
                    <p className="mt-0.5 text-xs font-medium text-slate-600 dark:text-zinc-300">
                      {item.institution}
                    </p>
                    <p className="mt-0.5 text-[11px] font-semibold text-slate-400 dark:text-zinc-500">
                      {item.period}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            {/* Technical Skills & Certifications */}
            <div className="space-y-6">
              {/* Skills Grid */}
              <div>
                <SectionHeading
                  icon={<Code2 size={16} />}
                  title="Technical Skills"
                  color={sectionColors.skills}
                />
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {skills.map((skill) => {
                    const colorMap: Record<string, string> = {
                      orange: "#EA4335",
                      blue: "#4285F4",
                      purple: "#7B61FF",
                    };
                    const dotColor = colorMap[skill.scheme] || "#4285F4";
                    return (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white px-3 py-1 text-xs font-semibold text-slate-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: dotColor }}
                        />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <SectionHeading
                  icon={<Award size={16} />}
                  title="Certifications"
                  color={sectionColors.certifications}
                />
                <ul className="mt-3 space-y-2">
                  {certifications.map((certification) => (
                    <li
                      key={certification}
                      className="flex items-start gap-2 text-sm text-slate-700 dark:text-zinc-300"
                    >
                      <Award
                        size={14}
                        className="mt-0.5 shrink-0 text-[#EA4335]"
                      />
                      <span>{certification}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════
              SELECTED PROJECTS
          ════════════════════════════════════════════════════════ */}
          <section>
            <SectionHeading
              icon={<FolderGit2 size={16} />}
              title="Selected Projects"
              color={sectionColors.projects}
            />
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {selectedProjects.map((project) => (
                <article
                  key={project.name}
                  className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/70"
                >
                  <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-100">
                    {project.name}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
                    {project.summary}
                  </p>
                  {/* Tech Tags */}
                  <div className="mt-2 flex flex-wrap gap-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-500 dark:bg-zinc-800 dark:text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-2.5 flex flex-wrap gap-3 text-xs">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-[#4285F4] hover:underline"
                    >
                      <Github size={12} />
                      Source
                    </a>
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-[#34A853] hover:underline"
                      >
                        <ExternalLink size={12} />
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ── BOTTOM ACCENT BAR ── */}
          <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853] opacity-60" />
        </div>
      </div>

      {/* ====== Download CTA (excluded from PDF) ====== */}
      <ResumeDownload
        downloadTextColor="text-slate-600 dark:text-zinc-300"
        onDownload={handleDownloadResume}
        isDownloading={isDownloading}
      />
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   Section Heading — Reusable ATS-friendly header
   ────────────────────────────────────────────── */
function SectionHeading({
  icon,
  title,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="flex h-8 w-8 items-center justify-center rounded-lg text-white shadow-sm"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      <div className="flex-1 flex items-center gap-3">
        <h2
          className="text-sm font-extrabold uppercase tracking-[0.12em]"
          style={{ color }}
        >
          {title}
        </h2>
        <div
          className="flex-1 h-px opacity-25"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}
