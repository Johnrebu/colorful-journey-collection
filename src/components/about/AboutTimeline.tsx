import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Lightbulb, Target, ChevronDown, ChevronUp, Calendar, CheckCircle2, Award, Building2 } from "lucide-react";

interface TimelineItem {
  id: string;
  era: "education" | "transition" | "developer";
  period: string;
  title: string;
  role: string;
  organization: string;
  accent: string;
  icon: React.ReactNode;
  summary: string;
  details: string[];
  skillsGained: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: "aionion",
    era: "developer",
    period: "2026 – Present",
    title: "Full Stack Developer | AI & Digital Ops Specialist",
    role: "Full Stack Developer • AI Video Creator • Automation Specialist • Graphic Designer • Event Coordinator • Content Creator",
    organization: "Aionion Capital",
    accent: "#4285F4",
    icon: <Building2 size={18} />,
    summary:
      "Leading full-stack system automation, core API architectures, AI video content strategy, corporate branding, and live event production operations for Aionion Capital.",
    details: [
      "⚡ Full-Stack Engineering & Automation: Built backend API routes maintaining <300ms response times, ≥ 99.5% system uptime, and 100% CRM lead sync accuracy.",
      "🎥 AI Video Creation & Content Strategy: Scripted, edited & published 4+ AI educational videos/month with ≥ 40% average watch time and +10% MoM subscriber growth.",
      "🎨 Graphic Design & Creative Branding: Delivered 100% of digital campaign visual assets minimum 5 days prior to launch, resulting in zero campaign delays.",
      "📡 Event Coordination & Digital Operations: Orchestrated live event technology with ≥ 99% AV uptime during sessions, 2-hour dry-runs, and ≥ 95% escalation-free vendor delivery.",
    ],
    skillsGained: [
      "React/TypeScript",
      "API Automation",
      "Sub-300ms Performance",
      "AI Video Production",
      "Graphic Design",
      "Live AV Tech",
      "CRM Sync",
    ],
  },
  {
    id: "dev",
    era: "developer",
    period: "2024 – 2026",
    title: "Full-Stack & Web Application Developer",
    role: "Web Application Developer",
    organization: "Production & Client Projects",
    accent: "#34A853",
    icon: <Target size={18} />,
    summary:
      "Shipped high-quality web applications, responsive user interfaces, and custom digital solutions for clients and product initiatives.",
    details: [
      "Built responsive, high-performance web applications using React, TypeScript, Vite, and Framer Motion.",
      "Created custom WordPress themes and elementor/PHP integrations for business clients.",
      "Integrated AI assistant capabilities, MCP tools, and automated contact pipelines.",
      "Focused on user-centered UI/UX design, SEO best practices, and clean maintainable code.",
    ],
    skillsGained: ["React 18", "TypeScript", "Framer Motion", "Tailwind CSS", "WordPress", "SEO", "UI/UX Craft"],
  },
  {
    id: "pivot",
    era: "transition",
    period: "2024",
    title: "Full-Stack Development Transition",
    role: "Software Engineering Trainee & Product Builder",
    organization: "Intensive Full-Stack Training Program",
    accent: "#FBBC05",
    icon: <Lightbulb size={18} />,
    summary:
      "Pivoted into software engineering by undergoing intensive hands-on training in modern web technologies, Python, and frontend frameworks.",
    details: [
      "Completed intensive modules in Python, Django, SQL databases, and Object-Oriented Programming.",
      "Mastered modern frontend engineering: HTML5, CSS3, JavaScript (ES6+), React, and Tailwind CSS.",
      "Adopted Git version control, collaborative development practices, and API integration techniques.",
      "Built multiple full-stack projects from concept to deployment.",
    ],
    skillsGained: ["Python", "Django", "React", "TypeScript", "SQL", "Git", "REST APIs"],
  },
  {
    id: "edu",
    era: "education",
    period: "2015 – 2024",
    title: "Science Educator & Academic Mentor",
    role: "Senior Chemistry & STEM Educator",
    organization: "Schools & Educational Institutes (Chennai)",
    accent: "#EA4335",
    icon: <GraduationCap size={18} />,
    summary:
      "Taught Chemistry and General Science for nearly a decade, mastering the art of breaking complex theories into clear, structured, and relatable concepts.",
    details: [
      "Mentored and taught 1,000+ students across Secondary and Higher Secondary levels.",
      "Designed interactive lesson plans and laboratory experiments that simplified abstract scientific principles.",
      "Developed deep patience, empathetic communication, and public presentation skills.",
      "Managed academic performance data and student evaluation frameworks.",
    ],
    skillsGained: ["Pedagogical Design", "Clear Communication", "Systemic Problem Solving", "Data Management"],
  },
];

export default function AboutTimeline() {
  const [filter, setFilter] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>("aionion");

  const filteredTimeline = filter === "all" ? timelineData : timelineData.filter((t) => t.era === filter);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="space-y-6">
      {/* Section Title & Filter Tabs */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#4285F4]" />
          <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-zinc-100 md:text-3xl">
            Career Evolution Journey
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 p-1 dark:border-zinc-800 dark:bg-zinc-900/80">
          {[
            { id: "all", label: "All Milestones" },
            { id: "developer", label: "Aionion Capital & Dev" },
            { id: "transition", label: "Tech Pivot" },
            { id: "education", label: "Science Era" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                filter === tab.id
                  ? "bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900"
                  : "text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Vertical Connected Timeline */}
      <div className="relative space-y-4 pl-4 sm:pl-6 border-l-2 border-slate-200 dark:border-zinc-800">
        {filteredTimeline.map((item, idx) => {
          const isExpanded = expandedId === item.id;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Bullet Node */}
              <div
                className="absolute -left-[25px] sm:-left-[33px] top-4 flex h-8 w-8 items-center justify-center rounded-full text-white shadow-md transition-transform duration-200 hover:scale-110"
                style={{ backgroundColor: item.accent }}
              >
                {item.icon}
              </div>

              {/* Card Body */}
              <div className="portfolio-panel relative transition-all duration-300 hover:border-slate-300 dark:hover:border-zinc-700">
                {/* Card Header */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  className="flex cursor-pointer flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className="inline-block rounded-md px-2.5 py-0.5 text-xs font-bold text-white"
                        style={{ backgroundColor: item.accent }}
                      >
                        {item.period}
                      </span>
                      <span className="text-xs font-bold text-slate-800 dark:text-zinc-200">
                        {item.organization}
                      </span>
                    </div>
                    <h3 className="mt-1 font-display text-xl font-bold text-slate-900 dark:text-zinc-100">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-600 dark:text-zinc-400">{item.role}</p>
                  </div>

                  <button
                    className="flex items-center gap-1 self-start rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 sm:self-center"
                    aria-label="Toggle details"
                  >
                    <span>{isExpanded ? "Hide Details" : "View Details"}</span>
                    {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-zinc-300">{item.summary}</p>

                {/* Expandable Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pt-4"
                    >
                      <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-4 dark:border-zinc-800 dark:bg-zinc-900/60 space-y-3">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                          Key Milestones & Measured Impact
                        </p>
                        <ul className="space-y-2">
                          {item.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                              <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#34A853]" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-2">
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-1.5">
                            Competencies & Metrics
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {item.skillsGained.map((sk) => (
                              <span
                                key={sk}
                                className="rounded-md border border-slate-200 bg-white px-2.5 py-0.5 text-xs font-semibold text-slate-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                              >
                                {sk}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
