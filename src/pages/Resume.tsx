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
      "Full-stack portfolio built with React, TypeScript, Tailwind CSS & Framer Motion. Features AI chat assistant, SEO optimization, and dynamic PDF resume generation.",
    github: "https://github.com/Johnrebu/colorful-journey-collection",
    live: "https://johnsonrebu.netlify.app/",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Event Companion Platform",
    summary:
      "Event-focused web app with interactive planning flows, responsive UI, and registration workflow for live attendee operations.",
    github: "https://github.com/Johnrebu/event-companion",
    live: "https://moneypechuevents.netlify.app/",
    tech: ["React", "JavaScript", "CSS3", "REST APIs"],
  },
  {
    name: "Rebekha Catering Website",
    summary:
      "Commercial catering business platform designed for brand presentation, menu exploration, inquiry funnel, and high conversion.",
    github: "https://github.com/Johnrebu/rebekha-catering-website",
    live: "https://rebekhacaterers.online/",
    tech: ["WordPress", "Custom Theme", "SEO", "Responsive Design"],
  },
  {
    name: "E-Commerce Storefront",
    summary:
      "Modern e-commerce application featuring catalog browsing, interactive cart management, and stateful checkout simulation.",
    github: "https://github.com/Johnrebu/E-Commerce_Website",
    live: "https://ecommercejohn.netlify.app/",
    tech: ["React", "JavaScript", "Tailwind CSS", "State Management"],
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

// Solid, high-contrast colors for metrics to ensure 100% visibility in PDF & html2canvas
const keyAchievements = [
  { metric: "<300ms", label: "API Response Time", color: "#1a73e8" },
  { metric: "≥99.5%", label: "System Uptime", color: "#1e8e3e" },
  { metric: "100%", label: "CRM Sync Accuracy", color: "#d93025" },
  { metric: "4+/mo", label: "AI Videos Published", color: "#9333ea" },
  { metric: "≥40%", label: "Avg. Watch Time", color: "#d97706" },
  { metric: "9+", label: "Years Experience", color: "#0284c7" },
];

const sectionColors = {
  summary: "#1a73e8",
  achievements: "#d93025",
  experience: "#1e8e3e",
  skills: "#d97706",
  education: "#1a73e8",
  certifications: "#d93025",
  projects: "#1e8e3e",
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

      const rootElement = resumeRef.current;
      const rootRect = rootElement.getBoundingClientRect();

      // Extract all interactive links with their exact bounding rects
      const linkElements = Array.from(
        rootElement.querySelectorAll("a[href]")
      ) as HTMLAnchorElement[];

      const linksData = linkElements
        .map((el) => {
          const rect = el.getBoundingClientRect();
          const href = el.getAttribute("href") || el.href;
          if (!href || href === "#") return null;

          return {
            href: el.href, // full resolved URL
            domX: rect.left - rootRect.left,
            domY: rect.top - rootRect.top,
            domW: rect.width,
            domH: rect.height,
          };
        })
        .filter((item): item is NonNullable<typeof item> => item !== null);

      // Capture the element using high-resolution html2canvas with solid white background
      const canvas = await html2canvas(rootElement, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        scrollX: 0,
        scrollY: 0,
        onclone: (clonedDoc) => {
          // Disable any animations/transitions in cloned document
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
      const margin = 8;
      const contentWidth = pageWidth - margin * 2;
      const contentHeight = pageHeight - margin * 2;

      const pageHeightPx = Math.floor(
        (canvas.width * contentHeight) / contentWidth
      );
      const totalPages = Math.ceil(canvas.height / pageHeightPx);

      // DOM to PDF scale factors
      const domTotalWidth = rootRect.width;
      const domTotalHeight = rootRect.height;
      const domPageHeight = domTotalHeight / totalPages;

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

        const pageImageData = pageCanvas.toDataURL("image/jpeg", 0.98);
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

        // Inject active clickable hyperlinks for this specific page
        const pageDomTop = pageIndex * domPageHeight;
        const pageDomBottom = (pageIndex + 1) * domPageHeight;

        linksData.forEach((link) => {
          if (link.domY >= pageDomTop && link.domY < pageDomBottom) {
            const relDomY = link.domY - pageDomTop;
            const pdfX = margin + (link.domX / domTotalWidth) * contentWidth;
            const pdfY = margin + (relDomY / domPageHeight) * contentHeight;
            const pdfW = (link.domW / domTotalWidth) * contentWidth;
            const pdfH = Math.max((link.domH / domPageHeight) * contentHeight, 3.5);

            pdf.link(pdfX, pdfY, pdfW, pdfH, { url: link.href });
          }
        });
      }

      pdf.save("Johnson_T_Professional_Resume.pdf");
      toast.success("Resume PDF downloaded with active clickable links!");
    } catch (error) {
      console.error("PDF generation failed", error);
      toast.error("Unable to generate PDF. You can also use the 'Print / Save as PDF' option.");
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
        className="relative overflow-hidden rounded-[2rem] bg-white text-slate-900 shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-slate-200 dark:border-zinc-800 dark:bg-[#0e131f] dark:text-zinc-100"
      >
        {/* ── TOP ACCENT BAR (Google Colors) ── */}
        <div className="h-2 w-full bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853]" />

        <div className="p-6 md:p-10 space-y-7">
          {/* ════════════════════════════════════════════════════════
              HEADER CARD — Photo + Name + Verified Contact Links
          ════════════════════════════════════════════════════════ */}
          <header className="print-avoid-break relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 dark:border-zinc-800 dark:bg-zinc-900/80">
            <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
              {/* Profile Photo */}
              <div className="shrink-0">
                <div className="relative">
                  <div className="h-32 w-32 sm:h-36 sm:w-36 rounded-2xl bg-gradient-to-tr from-[#4285F4] via-[#EA4335] to-[#FBBC05] p-[3px] shadow-md">
                    <img
                      src={johnImage}
                      alt="Johnson T"
                      className="h-full w-full rounded-[13px] object-cover object-top bg-white dark:bg-zinc-900"
                      crossOrigin="anonymous"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#34A853] shadow-md dark:border-zinc-900" title="Available for hire">
                    <CheckCircle2 size={15} className="text-white" />
                  </span>
                </div>
              </div>

              {/* Name, Role & Verified Contact Details */}
              <div className="flex-1 text-center sm:text-left space-y-2.5">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    {profile.name}
                  </h1>
                  <div className="mt-1 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="h-6 px-2 py-0.5 rounded-md bg-white border border-slate-200 dark:border-white/10 flex items-center shrink-0 shadow-sm">
                      <img
                        src="/aionion-capital-logo.png"
                        alt="Aionion Capital"
                        className="h-full w-auto object-contain"
                        crossOrigin="anonymous"
                      />
                    </span>
                    <span className="text-base font-bold text-[#1a73e8] dark:text-[#8ab4f8]">
                      {profile.company}
                    </span>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-300">
                    {profile.role}
                  </p>
                </div>

                {/* Contact Links Grid — Real Clickable Anchors */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 text-xs font-semibold text-slate-700 dark:text-zinc-300 pt-1">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-1.5 text-slate-800 dark:text-zinc-200 hover:text-[#1a73e8] underline decoration-slate-300 hover:decoration-[#1a73e8] transition-colors"
                  >
                    <Mail size={13} className="text-[#EA4335] shrink-0" />
                    <span>{profile.email}</span>
                  </a>
                  <a
                    href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-1.5 text-slate-800 dark:text-zinc-200 hover:text-[#1a73e8] underline decoration-slate-300 hover:decoration-[#1a73e8] transition-colors"
                  >
                    <Phone size={13} className="text-[#34A853] shrink-0" />
                    <span>{profile.phone}</span>
                  </a>
                  <span className="inline-flex items-center gap-1.5 text-slate-700 dark:text-zinc-300">
                    <MapPin size={13} className="text-[#FBBC05] shrink-0" />
                    <span>{profile.location}</span>
                  </span>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#1a73e8] dark:text-[#8ab4f8] hover:underline font-bold"
                  >
                    <Linkedin size={13} className="shrink-0" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-900 dark:text-white hover:underline font-bold"
                  >
                    <Github size={13} className="shrink-0" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={profile.portfolio}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#1e8e3e] dark:text-[#81c995] hover:underline font-bold"
                  >
                    <Globe size={13} className="shrink-0" />
                    <span>Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* ════════════════════════════════════════════════════════
              1. PROFESSIONAL SUMMARY
          ════════════════════════════════════════════════════════ */}
          <section className="print-avoid-break">
            <SectionHeading
              icon={<FileText size={16} />}
              title="Professional Summary"
              color={sectionColors.summary}
            />
            <p className="mt-2.5 text-sm leading-relaxed text-slate-700 dark:text-zinc-300 font-normal">
              {summary}
            </p>
          </section>

          {/* ════════════════════════════════════════════════════════
              2. KEY ACHIEVEMENTS & MEASURED IMPACT (Solid Visible Text)
          ════════════════════════════════════════════════════════ */}
          <section className="print-avoid-break">
            <SectionHeading
              icon={<Star size={16} />}
              title="Key Quantified Achievements"
              color={sectionColors.achievements}
            />
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {keyAchievements.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-200 bg-slate-50/90 p-3 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900/80"
                >
                  {/* High contrast, solid color for 100% PDF visibility */}
                  <p
                    className="text-xl sm:text-2xl font-black tracking-tight"
                    style={{ color: item.color }}
                  >
                    {item.metric}
                  </p>
                  <p className="mt-1 text-[11px] font-bold text-slate-600 dark:text-zinc-400 leading-tight">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════
              3. CORE COMPETENCIES (ATS Keywords)
          ════════════════════════════════════════════════════════ */}
          <section className="print-avoid-break">
            <SectionHeading
              icon={<Sparkles size={16} />}
              title="Core Competencies & Keywords"
              color={sectionColors.skills}
            />
            <div className="mt-3 flex flex-wrap gap-2">
              {coreCompetencies.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-bold text-slate-800 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════
              4. WORK EXPERIENCE HISTORY
          ════════════════════════════════════════════════════════ */}
          <section className="print-avoid-break">
            <SectionHeading
              icon={<Briefcase size={16} />}
              title="Work Experience"
              color={sectionColors.experience}
            />
            <div className="mt-3 space-y-3.5">
              {workExperiences.map((experience, idx) => (
                <article
                  key={experience.title}
                  className="print-avoid-break relative rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/80"
                >
                  <div
                    className="absolute top-0 left-0 bottom-0 w-1 rounded-l-xl"
                    style={{
                      backgroundColor:
                        idx === 0
                          ? "#1a73e8"
                          : idx === 1
                          ? "#d93025"
                          : idx === 2
                          ? "#d97706"
                          : "#1e8e3e",
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
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-zinc-100">
                          {experience.title}
                        </h3>
                      </div>
                      <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-bold text-slate-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                        {normalizePeriod(experience.period)}
                      </span>
                    </div>

                    <ul className="mt-2.5 space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                      {experience.responsibilities.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="mt-0.5 shrink-0 text-[#1e8e3e]"
                          />
                          <span className="leading-relaxed font-normal">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════
              5. EDUCATION & TECHNICAL SKILLS / CERTIFICATIONS (2-Col)
          ════════════════════════════════════════════════════════ */}
          <section className="print-avoid-break grid gap-6 lg:grid-cols-2">
            {/* Education */}
            <div className="space-y-3">
              <SectionHeading
                icon={<GraduationCap size={16} />}
                title="Education"
                color={sectionColors.education}
              />
              <div className="space-y-2.5">
                {educationItems.map((item) => (
                  <article
                    key={`${item.degree}-${item.institution}`}
                    className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/80"
                  >
                    <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-100">
                      {item.degree}
                    </h3>
                    <p className="mt-0.5 text-xs font-medium text-slate-600 dark:text-zinc-300">
                      {item.institution}
                    </p>
                    <p className="mt-0.5 text-[11px] font-bold text-slate-400 dark:text-zinc-500">
                      {item.period}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            {/* Technical Skills & Certifications */}
            <div className="space-y-5">
              <div>
                <SectionHeading
                  icon={<Code2 size={16} />}
                  title="Technical Skills"
                  color={sectionColors.skills}
                />
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {skills.map((skill) => {
                    const colorMap: Record<string, string> = {
                      orange: "#d93025",
                      blue: "#1a73e8",
                      purple: "#9333ea",
                    };
                    const dotColor = colorMap[skill.scheme] || "#1a73e8";
                    return (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-bold text-slate-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: dotColor }}
                        />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div>
                <SectionHeading
                  icon={<Award size={16} />}
                  title="Certifications"
                  color={sectionColors.certifications}
                />
                <ul className="mt-2.5 space-y-1.5">
                  {certifications.map((certification) => (
                    <li
                      key={certification}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-zinc-300"
                    >
                      <Award
                        size={14}
                        className="mt-0.5 shrink-0 text-[#d93025]"
                      />
                      <span className="font-medium">{certification}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════
              6. SELECTED PROJECTS WITH CLICKABLE LIVE & SOURCE LINKS
          ════════════════════════════════════════════════════════ */}
          <section className="print-avoid-break">
            <SectionHeading
              icon={<FolderGit2 size={16} />}
              title="Featured Projects"
              color={sectionColors.projects}
            />
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {selectedProjects.map((project) => (
                <article
                  key={project.name}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/80"
                >
                  <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-100">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
                    {project.summary}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-600 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-2.5 flex flex-wrap gap-3 text-xs font-bold">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[#1a73e8] hover:underline"
                    >
                      <Github size={12} />
                      Source Code
                    </a>
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[#1e8e3e] hover:underline"
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
          <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853] opacity-70" />
        </div>
      </div>

      {/* ====== Download & Print Action Toolbar (Ignored in PDF) ====== */}
      <ResumeDownload
        downloadTextColor="text-slate-600 dark:text-zinc-300"
        onDownload={handleDownloadResume}
        isDownloading={isDownloading}
        onPrint={() => window.print()}
      />
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   Section Heading — Reusable ATS Header with Accent Line
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
    <div className="flex items-center gap-2.5">
      <div
        className="flex h-7 w-7 items-center justify-center rounded-lg text-white shadow-sm shrink-0"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      <div className="flex-1 flex items-center gap-2.5">
        <h2
          className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.12em]"
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
