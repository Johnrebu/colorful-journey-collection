import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Cpu,
  ExternalLink,
  Github,
  Globe2,
  GraduationCap,
  Layers3,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  MessageSquareText,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Terminal,
  Youtube,
  Zap,
} from "lucide-react";
import useSeo from "@/hooks/useSeo";
import { getPersonSchema, getWebsiteSchema } from "@/lib/seo";
import johnImage from "@/images/johnson-professional.jpg";
import ServicesSection from "@/components/services/ServicesSection";
import ParallaxProfilePhoto from "@/components/ParallaxProfilePhoto";
import { youtubeChannels } from "@/data/youtubeData";

// Quick Credibility Stats
const heroSignals = [
  {
    value: "9+",
    label: "Years Professional Experience",
    subtext: "Analytical & communication discipline",
  },
  {
    value: "React + TS",
    label: "Primary Tech Stack",
    subtext: "Component systems & modern frontend",
  },
  {
    value: "100%",
    label: "Responsive & Accessible",
    subtext: "Tested across mobile, tablet & desktop",
  },
];

// Tech Stack Categories
const techCategories = [
  {
    category: "Frontend Core",
    icon: Code2,
    skills: ["React", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"],
  },
  {
    category: "Web & Backend",
    icon: Globe2,
    skills: ["WordPress", "Python", "REST APIs", "Node.js Basics", "JSON Data", "Netlify Deployment"],
  },
  {
    category: "Architecture & Tools",
    icon: Layers3,
    skills: ["Responsive Systems", "State Management", "Git & GitHub", "Vite", "UI Components", "Web Performance"],
  },
];

// Featured Projects Showcase (Live Client Sites & Commercial Deployments)
const featuredProjects = [
  {
    id: "moneypechu-events",
    title: "Money Pechu Events",
    category: "Live Client Platform",
    description:
      "Modern event management and registration web platform built for Money Pechu Events, featuring interactive event schedules, registration flows, and mobile UX.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Event UX", "Live Site"],
    liveUrl: "https://moneypechuevents.netlify.app/",
    githubUrl: "https://github.com/Johnrebu/event-companion",
    highlights: ["Event registration flows", "Interactive agenda", "Mobile-optimized UX"],
  },
  {
    id: "rebekha-caterers",
    title: "Rebekha Caterers",
    category: "Commercial Business Site",
    description:
      "Full catering business web portal featuring service menu showcases, event package booking, interactive galleries, and instant client query workflows.",
    tags: ["Full-Stack", "React", "Custom UI", "Catering UX", "Live Site"],
    liveUrl: "https://rebekhacaterers.online/",
    githubUrl: "https://github.com/Johnrebu/rebekha-catering-website",
    highlights: ["Interactive menu showcase", "Event query booking", "Responsive mobile UX"],
  },
  {
    id: "tiffin-coffee-crm",
    title: "Tiffin Coffee Range CRM",
    category: "Enterprise Full-Stack CRM",
    description:
      "Custom enterprise CRM & administrative management portal built for Tiffin Coffee Range, handling customer relationship tracking, order workflows, and analytics.",
    tags: ["Full-Stack", "Python", "React", "Enterprise Dashboard", "Live Site"],
    liveUrl: "https://crm.tiffincoffeerange.com/",
    githubUrl: "https://github.com/Johnrebu/lead-hub",
    highlights: ["Customer management", "Order pipelines", "Administrative analytics"],
  },
  {
    id: "dalphina-academy",
    title: "Dalphina Academy",
    category: "Education & Learning Portal",
    description:
      "Educational academy web portal featuring course curriculums, interactive inquiry channels, student enrollment pathways, and clean mobile UX.",
    tags: ["React", "TypeScript", "Education UX", "Tailwind CSS", "Live Site"],
    liveUrl: "https://dalphinaacademy.netlify.app/",
    githubUrl: "https://github.com/Johnrebu/iragu-foundation-support",
    highlights: ["Course curriculum view", "Student inquiry form", "Responsive layout"],
  },
  {
    id: "tiffin-coffee-official",
    title: "Tiffin Coffee Range",
    category: "Commercial Brand Site",
    description:
      "Official commercial website for Tiffin Coffee Range brand showcasing food & beverage offerings, outlet locations, dynamic menus, and brand experience.",
    tags: ["Full-Stack", "Commercial Web", "Responsive Design", "Live Site"],
    liveUrl: "https://tiffincoffeerange.com/",
    githubUrl: "https://github.com/Johnrebu/TiffinCoffeeRange",
    highlights: ["Brand menu showcase", "Outlet locator", "Cross-device responsiveness"],
  },
];

// About Snapshot Highlights
const aboutHighlights = [
  {
    icon: GraduationCap,
    title: "Educator Background",
    description: "9 years of science teaching built habits of clear communication, empathetic problem solving, and structured thinking.",
  },
  {
    icon: Rocket,
    title: "Full-Stack Transition",
    description: "Completed intensive full-stack Python training in 2024, shifting into software engineering with a product-first mindset.",
  },
  {
    icon: Zap,
    title: "Full-Stack Delivery",
    description: "Shipping modern React & Python applications focused on end-to-end architecture, clean code, fast performance, and intuitive user experiences.",
  },
];

// Social Links
const socialLinks = [
  {
    href: "https://github.com/Johnrebu",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/johnsonelon/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "mailto:johnchemist91@gmail.com",
    label: "Email",
    icon: Mail,
  },
  {
    href: "https://www.instagram.com/aionionoffl?igsh=bjE2OXVuOHd5NjI1",
    label: "Instagram",
    icon: Instagram,
  },
];

// Subtle Animated Background Stars
const starPositions = Array.from({ length: 36 }, (_, index) => ({
  left: `${(index * 19) % 100}%`,
  top: `${(index * 31) % 100}%`,
  size: index % 5 === 0 ? 3 : index % 3 === 0 ? 2 : 1.5,
  delay: (index % 6) * 0.4,
  duration: 3 + (index % 4) * 0.75,
}));

export default function Home() {
  useSeo({
    title: "Johnson T | Full-Stack Software Engineer",
    description:
      "Johnson T is a Full-Stack Software Engineer specializing in React, TypeScript, Python, and modern web applications. Explore projects, skills, and background.",
    keywords:
      "Johnson T portfolio, full stack software engineer, full stack developer, React developer, Python developer, web application portfolio, Chennai software developer",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [getPersonSchema(), getWebsiteSchema()],
    },
  });

  return (
    <motion.div
      className="text-left space-y-12 lg:space-y-16 pb-8"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
    >
      {/* ============================================================ */}
      {/* 1. HERO SECTION */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/90 bg-gradient-to-br from-indigo-50/90 via-purple-50/70 to-cyan-50/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[#050b1d] dark:shadow-[0_35px_120px_rgba(2,6,23,0.45)] px-4 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-14">
        {/* Radial Background Glows */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.15),transparent_40%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_36%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40 dark:opacity-25" />

        {/* Ambient Stars */}
        {starPositions.map((star, index) => (
          <motion.span
            key={`star-${index}`}
            className="pointer-events-none absolute rounded-full bg-indigo-500/40 dark:bg-cyan-100"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
            }}
            animate={{ opacity: [0.2, 0.9, 0.2], scale: [1, 1.25, 1] }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="relative space-y-10">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            {/* Left Content Column */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-purple-700 dark:border-cyan-300/30 dark:bg-cyan-300/10 dark:text-cyan-200 backdrop-blur shadow-sm">
                  <Sparkles size={14} className="text-purple-600 dark:text-cyan-300 animate-pulse" />
                  Available for Full-Stack & Web Engineering Roles
                </span>
              </motion.div>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 }}
              >
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl leading-[1.12]">
                  Johnson T
                  <span className="block mt-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-cyan-200 dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent font-black">
                    Full-Stack Software Engineer
                  </span>
                </h1>

                <p className="max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8 font-medium">
                  Crafting scalable React frontends, robust Python backends, and full-stack web applications built with performance, clarity, and production-ready precision.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-wrap items-center gap-3 pt-2"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.16 }}
              >
                <a
                  href="#featured-projects"
                  className="cosmos-button inline-flex items-center gap-2 text-sm font-bold shadow-lg shadow-cyan-500/25"
                >
                  View Featured Work
                  <ArrowRight size={16} />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-500/10 px-5 py-3 text-sm font-bold text-indigo-700 hover:bg-indigo-500/20 hover:border-indigo-500/50 dark:border-cyan-300/25 dark:bg-cyan-300/10 dark:text-cyan-100 dark:hover:bg-cyan-300/20 dark:hover:border-cyan-300/40 transition hover:-translate-y-0.5 shadow-sm"
                >
                  <Mail size={16} />
                  Contact Me
                </Link>

                <Link
                  to="/about"
                  className="cosmos-button-secondary inline-flex items-center gap-2 text-sm font-bold"
                >
                  <BookOpen size={16} />
                  Read My Story
                </Link>
              </motion.div>
            </div>

            {/* Right Portrait & Profile Card */}
            <motion.div
              className="relative mx-auto w-full max-w-sm lg:max-w-none"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.12 }}
            >
              <div className="space-panel relative overflow-hidden p-6 sm:p-7 border-indigo-200/80 bg-white/90 shadow-xl dark:border-white/10 dark:bg-zinc-950/80">
                <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-indigo-500/20 dark:bg-cyan-400/15 blur-3xl" />

                <div className="relative space-y-6">
                  {/* Portrait Container */}
                  <div className="flex flex-col items-center sm:flex-row sm:items-center gap-5">
                    <div className="relative shrink-0">
                      <div className="h-28 w-28 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-400 p-[3px] shadow-[0_0_30px_rgba(168,85,247,0.35)]">
                        <div className="h-full w-full rounded-full bg-slate-900 p-1.5 overflow-hidden">
                          <ParallaxProfilePhoto
                            src={johnImage}
                            alt="Johnson T"
                            shape="circle"
                            containerClassName="h-full w-full"
                          />
                        </div>
                      </div>
                      <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white dark:border-[#050b1d] bg-emerald-500 shadow-sm" title="Available for work" />
                    </div>

                    <div className="text-center sm:text-left space-y-1">
                      <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">Johnson T</h2>
                      <p className="text-xs uppercase tracking-wider text-purple-700 dark:text-cyan-200/90 font-bold">
                        Full-Stack Software Engineer
                      </p>
                      <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-slate-600 dark:text-slate-300 pt-1 font-medium">
                        <MapPin size={13} className="text-indigo-600 dark:text-cyan-300" />
                        <span>Chennai, Tamil Nadu, India</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlight Chips */}
                  <div className="grid gap-2.5 pt-2">
                    <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/80 dark:border-white/10 dark:bg-white/5 px-3.5 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm">
                      <CheckCircle2 size={15} className="text-emerald-500 dark:text-cyan-300 shrink-0" />
                      <span>9+ Years Educator & Analytical Background</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/80 dark:border-white/10 dark:bg-white/5 px-3.5 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm">
                      <CheckCircle2 size={15} className="text-indigo-500 dark:text-cyan-300 shrink-0" />
                      <span>Full-Stack Development (React, TypeScript & Python)</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/80 dark:border-white/10 dark:bg-white/5 px-3.5 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm">
                      <CheckCircle2 size={15} className="text-purple-500 dark:text-cyan-300 shrink-0" />
                      <span>WordPress & End-to-End Web Delivery</span>
                    </div>
                  </div>

                  {/* Social Buttons */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 justify-center sm:justify-start">
                    {socialLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                          rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                          className="inline-flex items-center gap-1.5 rounded-full border border-slate-300/80 bg-white/90 dark:border-white/10 dark:bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 shadow-sm transition hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-900 dark:hover:border-cyan-300/40 dark:hover:bg-cyan-300/10 dark:hover:text-white shrink-0"
                        >
                          <Icon size={14} />
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Credibility Signals Bar */}
          <div className="grid gap-4 sm:grid-cols-3 pt-4 border-t border-slate-200/80 dark:border-white/10">
            {heroSignals.map((signal, index) => (
              <motion.div
                key={signal.label}
                className="rounded-2xl border border-slate-200/80 bg-white/80 dark:border-white/10 dark:bg-white/5 p-5 backdrop-blur shadow-sm transition hover:border-indigo-400/40 hover:bg-white dark:hover:border-cyan-300/30 dark:hover:bg-white/[0.07]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.2 + index * 0.06 }}
              >
                <p className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-white dark:via-cyan-100 dark:to-cyan-300">
                  {signal.value}
                </p>
                <p className="mt-1 text-sm font-bold text-slate-800 dark:text-slate-200">{signal.label}</p>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 font-medium">{signal.subtext}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. BRIEF INTRO / ABOUT SNAPSHOT */}
      {/* ============================================================ */}
      <section className="space-panel p-6 sm:p-8 lg:p-10">
        <div className="max-w-3xl space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-indigo-700 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200">
            <GraduationCap size={14} />
            About Snapshot
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">
            Combining Educator Clarity with Software Engineering Discipline
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed pt-2 font-medium">
            After 9 years as a Science Educator developing a deep foundation in analytical problem solving and communication, I transitioned fully into software development. Today, I build end-to-end full-stack applications, interactive React frontends, and robust backend systems where technical rigor meets user-centered design.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 pt-8 mt-8 border-t border-slate-200/80 dark:border-white/10">
          {aboutHighlights.map((item, index) => {
            const Icon = item.icon;
            const cardAccents = [
              "border-amber-200/80 bg-amber-50/50 dark:border-white/10 dark:bg-white/5",
              "border-emerald-200/80 bg-emerald-50/50 dark:border-white/10 dark:bg-white/5",
              "border-indigo-200/80 bg-indigo-50/50 dark:border-white/10 dark:bg-white/5",
            ];
            const iconAccents = [
              "border-amber-400/40 bg-amber-500/10 text-amber-700 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200",
              "border-emerald-400/40 bg-emerald-500/10 text-emerald-700 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200",
              "border-indigo-400/40 bg-indigo-500/10 text-indigo-700 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200",
            ];
            return (
              <motion.article
                key={item.title}
                className={`rounded-2xl border p-5 transition-all duration-300 hover:shadow-md dark:hover:border-cyan-300/30 dark:hover:bg-white/[0.08] ${cardAccents[index % 3]}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border ${iconAccents[index % 3]}`}>
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-medium">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. KEY SKILLS / TECH STACK VISUAL DISPLAY */}
      {/* ============================================================ */}
      <section className="space-panel p-6 sm:p-8 lg:p-10">
        <div className="space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-purple-700 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200">
            <Cpu size={14} />
            Tech Stack & Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">
            Built for Modern Web Engineering
          </h2>
          <p className="max-w-2xl text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
            A practical, modern toolset focused on building clean component structures, reliable state flow, and polished user interfaces.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 pt-8">
          {techCategories.map((cat, index) => {
            const Icon = cat.icon;
            const categoryPills = [
              "border-cyan-300/50 bg-cyan-500/10 text-cyan-800 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-100",
              "border-purple-300/50 bg-purple-500/10 text-purple-800 dark:border-purple-300/20 dark:bg-purple-300/10 dark:text-purple-100",
              "border-emerald-300/50 bg-emerald-500/10 text-emerald-800 dark:border-emerald-300/20 dark:bg-emerald-300/10 dark:text-emerald-100",
            ];
            const dotColors = ["bg-cyan-500", "bg-purple-500", "bg-emerald-500"];
            return (
              <motion.article
                key={cat.category}
                className="rounded-2xl border border-slate-200/90 bg-white/90 p-6 backdrop-blur flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-300/30 dark:hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <div>
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-200/80 dark:border-white/10">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 dark:border-cyan-300/20 dark:bg-cyan-300/10 text-indigo-600 dark:text-cyan-200">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{cat.category}</h3>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold transition hover:scale-105 ${categoryPills[index % 3]}`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${dotColors[index % 3]}`} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. FEATURED PROJECTS */}
      {/* ============================================================ */}
      <section id="featured-projects" className="space-panel p-6 sm:p-8 lg:p-10 scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-amber-700 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200">
              <Star size={14} />
              Featured Work
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">
              Highlighted Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
              Selected applications demonstrating React architecture, responsive design, data filtering, and production UI polish.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 dark:text-cyan-300 dark:hover:text-cyan-200 shrink-0"
          >
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pt-8">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white/90 p-6 backdrop-blur shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-300/40 dark:hover:shadow-[0_20px_50px_rgba(2,6,23,0.5)]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-bold text-indigo-600 dark:text-cyan-300/90">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-700 transition hover:bg-indigo-600 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-cyan-300/20 dark:hover:text-white"
                      title="GitHub Source"
                    >
                      <Github size={14} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-indigo-300 bg-indigo-50 text-indigo-600 transition hover:bg-indigo-600 hover:text-white dark:border-cyan-300/30 dark:bg-cyan-300/10 dark:text-cyan-200 dark:hover:bg-cyan-300/20 dark:hover:text-white"
                      title="Live Demo"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-cyan-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
                    {project.description}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="space-y-1.5 pt-1">
                  {project.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-cyan-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags & Action Footer */}
              <div className="pt-6 mt-6 border-t border-slate-200/80 dark:border-white/10 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-800 dark:text-cyan-300 dark:hover:text-cyan-100"
                >
                  Launch Live Demo
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* AI VIDEO SHOWCASE & OFFICIAL CHANNELS */}
      {/* ============================================================ */}
      <section className="space-panel relative overflow-hidden p-8 sm:p-10">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-rose-500/10 dark:bg-red-500/8 blur-[80px]" />
        <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-indigo-500/10 dark:bg-indigo-500/8 blur-[60px]" />

        <div className="relative space-y-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-rose-600 dark:text-red-400">
                <Youtube size={14} className="text-rose-600 dark:text-red-500" />
                Official Media Channels
              </div>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                AI Video Creations & Channels
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl text-sm leading-relaxed font-medium">
                Explore my generative AI video works, synthetic storytelling, and automated content production across my official YouTube channels.
              </p>
            </div>

            <Link
              to="/ai-videos"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-600/30 transition hover:from-red-700 hover:to-rose-700 active:scale-95 shrink-0"
            >
              Explore AI Videos Gallery
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {youtubeChannels.map((channel) => (
              <div
                key={channel.id}
                className={`group relative overflow-hidden rounded-2xl border p-5 transition duration-300 shadow-sm ${
                  channel.isCompany
                    ? "border-blue-200 bg-gradient-to-br from-blue-50/90 to-indigo-50/90 hover:border-blue-400 dark:border-blue-500/20 dark:bg-blue-500/5 dark:hover:border-blue-500/40"
                    : "border-rose-200 bg-gradient-to-br from-rose-50/90 to-orange-50/90 hover:border-rose-400 dark:border-white/10 dark:bg-white/5 dark:hover:border-red-500/40"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-md group-hover:scale-105 transition-transform overflow-hidden ${
                      channel.isCompany
                        ? "bg-white p-1 border border-blue-200 dark:border-blue-500/30"
                        : channel.platform === "instagram"
                        ? "bg-gradient-to-br from-pink-600 to-purple-600"
                        : "bg-gradient-to-br from-red-600 to-rose-600"
                    }`}>
                      {channel.isCompany ? (
                        <img src="/aionion-capital-logo.png" alt="Aionion Capital" className="h-full w-full object-contain" />
                      ) : channel.platform === "instagram" ? (
                        <Instagram size={20} />
                      ) : (
                        <Youtube size={20} />
                      )}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        {channel.name}
                        <CheckCircle2 size={14} className="text-blue-500 dark:text-blue-400" />
                      </h3>
                      <p className={`text-[11px] font-mono font-bold ${
                        channel.isCompany ? "text-blue-600 dark:text-blue-400" : "text-rose-600 dark:text-red-400"
                      }`}>
                        {channel.handle}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2 font-medium">
                  {channel.description}
                </p>

                <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-200/80 dark:border-white/10">
                  <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                    channel.isCompany
                      ? "border border-blue-300 bg-blue-100 text-blue-800 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300"
                      : "border border-rose-300 bg-rose-100 text-rose-800 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300"
                  }`}>
                    {channel.badge}
                  </span>

                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-bold transition ${
                      channel.isCompany
                        ? "text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                        : "text-rose-600 hover:text-rose-800 dark:text-red-400 dark:hover:text-red-300"
                    }`}
                  >
                    Visit Channel
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SERVICES & PRICING PACKAGES */}
      {/* ============================================================ */}
      <ServicesSection id="services" />

      {/* ============================================================ */}
      {/* 5. QUICK STATS & CREDIBILITY MARKERS */}
      {/* ============================================================ */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-panel p-6 border-indigo-200/80 bg-white/90 shadow-sm dark:border-white/10 dark:bg-zinc-950">
          <p className="text-xs uppercase tracking-wider text-indigo-600 dark:text-cyan-300 font-bold">Experience</p>
          <p className="mt-2 text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-white dark:to-cyan-200">9+ Years</p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-snug font-medium">Analytical communication, structured problem solving & teaching</p>
        </div>
        <div className="space-panel p-6 border-purple-200/80 bg-white/90 shadow-sm dark:border-white/10 dark:bg-zinc-950">
          <p className="text-xs uppercase tracking-wider text-purple-600 dark:text-cyan-300 font-bold">Track Record</p>
          <p className="mt-2 text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 dark:from-white dark:to-cyan-200">10+ Builds</p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-snug font-medium">React applications, WordPress websites & UI tools</p>
        </div>
        <div className="space-panel p-6 border-emerald-200/80 bg-white/90 shadow-sm dark:border-white/10 dark:bg-zinc-950">
          <p className="text-xs uppercase tracking-wider text-emerald-600 dark:text-cyan-300 font-bold">UX Standard</p>
          <p className="mt-2 text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-white dark:to-cyan-200">100%</p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-snug font-medium">Responsive layout execution & cross-device compatibility</p>
        </div>
        <div className="space-panel p-6 border-cyan-200/80 bg-white/90 shadow-sm dark:border-white/10 dark:bg-zinc-950">
          <p className="text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-300 font-bold">Core Focus</p>
          <p className="mt-2 text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-white dark:to-cyan-200">Full-Stack</p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-snug font-medium">React, TypeScript, Python & End-to-End Web Systems</p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. CALL-TO-ACTION FOOTER */}
      {/* ============================================================ */}
      <section className="space-panel relative overflow-hidden p-8 sm:p-12 text-center lg:text-left bg-gradient-to-br from-indigo-50/90 via-purple-50/80 to-pink-50/90 border-indigo-200/80 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(13,24,53,0.92),rgba(6,12,31,0.9))]">
        <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-indigo-500/15 dark:bg-cyan-400/15 blur-3xl" />
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-pink-500/15 dark:bg-blue-500/15 blur-3xl" />

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-pink-700 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200">
              <MessageSquareText size={14} />
              Let&apos;s Connect
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Ready to Discuss Engineering Opportunities?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed font-medium">
              Whether you are hiring for a full-stack engineering role, looking for web application builds, or open to collaboration, I would love to connect.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 shrink-0">
            <Link
              to="/contact"
              className="cosmos-button inline-flex items-center gap-2 text-sm font-bold shadow-lg shadow-cyan-500/20"
            >
              Get In Touch
              <ArrowRight size={16} />
            </Link>

            <a
              href="mailto:johnchemist91@gmail.com"
              className="cosmos-button-secondary inline-flex items-center gap-2 text-sm font-bold"
            >
              <Mail size={16} />
              Email Direct
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

