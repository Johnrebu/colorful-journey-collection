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
  Mail,
  MapPin,
  MessageSquareText,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Terminal,
  Zap,
} from "lucide-react";
import useSeo from "@/hooks/useSeo";
import { getPersonSchema, getWebsiteSchema } from "@/lib/seo";
import johnImage from "@/images/john.jpg";

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

// Featured Projects Showcase
const featuredProjects = [
  {
    id: "weather-app",
    title: "WeatherApp Forecast Platform",
    category: "React / TypeScript / API",
    description:
      "Interactive weather forecasting application featuring real-time location detection, dynamic weather visualizers, and responsive layout performance.",
    tags: ["React", "TypeScript", "Tailwind CSS", "REST API", "Netlify"],
    liveUrl: "https://chimerical-sunburst-6fe1b4.netlify.app/",
    githubUrl: "https://github.com/Johnrebu/WeatherApp_ReactResumeProject",
    highlights: ["Geolocation lookup", "Dynamic background updates", "Fast state transitions"],
  },
  {
    id: "employee-directory",
    title: "Employee Directory & Filter System",
    category: "React / Data Filtering UX",
    description:
      "Enterprise-style employee directory application optimized for fast search indexing, multi-attribute filtering, and accessible sorting workflows.",
    tags: ["React", "TypeScript", "Search & Filter UX", "Tailwind CSS"],
    liveUrl: "https://stellular-cactus-7acb12.netlify.app/",
    githubUrl: "https://github.com/Johnrebu/Pro_ForCecilAnna_sortSerch",
    highlights: ["Instant multi-field filtering", "Keyboard accessibility", "Clean data grid"],
  },
  {
    id: "ecommerce-store",
    title: "E-Commerce Storefront Experience",
    category: "JavaScript / Storefront UX",
    description:
      "Full-featured online storefront experience with dynamic product filtering, cart drawer state management, and conversion-focused design.",
    tags: ["JavaScript", "React", "Storefront UX", "CSS Modules"],
    liveUrl: "https://ecommercejohn.netlify.app/",
    githubUrl: "https://github.com/Johnrebu/E-Commerce_Website",
    highlights: ["Reactive shopping cart", "Product catalog filter", "Responsive mobile UX"],
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
      <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#050b1d] px-5 py-8 shadow-[0_35px_120px_rgba(2,6,23,0.45)] sm:px-8 lg:px-12 lg:py-14">
        {/* Radial Background Glows */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_36%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />

        {/* Ambient Stars */}
        {starPositions.map((star, index) => (
          <motion.span
            key={`star-${index}`}
            className="pointer-events-none absolute rounded-full bg-cyan-100"
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
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200 backdrop-blur">
                  <Sparkles size={14} className="text-cyan-300 animate-pulse" />
                  Available for Full-Stack & Web Engineering Roles
                </span>
              </motion.div>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 }}
              >
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.12]">
                  Johnson T
                  <span className="block mt-2 bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-400 bg-clip-text text-transparent font-extrabold">
                    Full-Stack Software Engineer
                  </span>
                </h1>

                <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-8">
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
                  className="cosmos-button inline-flex items-center gap-2 text-sm font-semibold shadow-lg shadow-cyan-500/20"
                >
                  View Featured Work
                  <ArrowRight size={16} />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-300/20 hover:border-cyan-300/40"
                >
                  <Mail size={16} />
                  Contact Me
                </Link>

                <Link
                  to="/about"
                  className="cosmos-button-secondary inline-flex items-center gap-2 text-sm font-semibold"
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
              <div className="space-panel relative overflow-hidden p-6 sm:p-7">
                <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-cyan-400/15 blur-3xl" />

                <div className="relative space-y-6">
                  {/* Portrait Container */}
                  <div className="flex flex-col items-center sm:flex-row sm:items-center gap-5">
                    <div className="relative shrink-0">
                      <div className="h-28 w-28 rounded-full bg-gradient-to-tr from-cyan-300 via-blue-500 to-indigo-600 p-[2.5px] shadow-[0_0_35px_rgba(34,211,238,0.3)]">
                        <div className="h-full w-full rounded-full bg-[#071125] p-1.5 overflow-hidden">
                          <img
                            src={johnImage}
                            alt="Johnson T"
                            className="h-full w-full rounded-full object-cover"
                          />
                        </div>
                      </div>
                      <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-[#050b1d] bg-emerald-400" title="Available for work" />
                    </div>

                    <div className="text-center sm:text-left space-y-1">
                      <h2 className="text-xl font-bold text-white">Johnson T</h2>
                      <p className="text-xs uppercase tracking-wider text-cyan-200/90 font-medium">
                        Full-Stack Software Engineer
                      </p>
                      <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-slate-300 pt-1">
                        <MapPin size={13} className="text-cyan-300" />
                        <span>Chennai, Tamil Nadu, India</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlight Chips */}
                  <div className="grid gap-2.5 pt-2">
                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-slate-200">
                      <CheckCircle2 size={15} className="text-cyan-300 shrink-0" />
                      <span>9+ Years Educator & Analytical Background</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-slate-200">
                      <CheckCircle2 size={15} className="text-cyan-300 shrink-0" />
                      <span>Full-Stack Development (React, TypeScript & Python)</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-slate-200">
                      <CheckCircle2 size={15} className="text-cyan-300 shrink-0" />
                      <span>WordPress & End-to-End Web Delivery</span>
                    </div>
                  </div>

                  {/* Social Buttons */}
                  <div className="flex items-center gap-2 pt-2 justify-center sm:justify-start">
                    {socialLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                          rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white"
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
          <div className="grid gap-4 sm:grid-cols-3 pt-4 border-t border-white/10">
            {heroSignals.map((signal, index) => (
              <motion.div
                key={signal.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-cyan-300/30 hover:bg-white/[0.07]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.2 + index * 0.06 }}
              >
                <p className="text-2xl sm:text-3xl font-extrabold text-white bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
                  {signal.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-200">{signal.label}</p>
                <p className="mt-0.5 text-xs text-slate-400">{signal.subtext}</p>
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
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            <GraduationCap size={14} />
            About Snapshot
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Combining Educator Clarity with Software Engineering Discipline
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
            After 9 years as a Science Educator developing a deep foundation in analytical problem solving and communication, I transitioned fully into software development. Today, I build end-to-end full-stack applications, interactive React frontends, and robust backend systems where technical rigor meets user-centered design.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 pt-8 mt-8 border-t border-white/10">
          {aboutHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-300/30 hover:bg-white/[0.08]"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p>
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
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            <Cpu size={14} />
            Tech Stack & Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Built for Modern Web Engineering
          </h2>
          <p className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
            A practical, modern toolset focused on building clean component structures, reliable state flow, and polished user interfaces.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 pt-8">
          {techCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.article
                key={cat.category}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur flex flex-col justify-between transition hover:border-cyan-300/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <div>
                  <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-lg font-bold text-white">{cat.category}</h3>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
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
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              <Star size={14} />
              Featured Work
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Highlighted Projects
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Selected applications demonstrating React architecture, responsive design, data filtering, and production UI polish.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200 shrink-0"
          >
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 pt-8">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_20px_50px_rgba(2,6,23,0.5)]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-semibold text-cyan-300/90">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:bg-cyan-300/20 hover:text-white"
                      title="GitHub Source"
                    >
                      <Github size={14} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 transition hover:bg-cyan-300/20 hover:text-white"
                      title="Live Demo"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="space-y-1.5 pt-1">
                  {project.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags & Action Footer */}
              <div className="pt-6 mt-6 border-t border-white/10 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-300 transition hover:text-cyan-100"
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
      {/* 5. QUICK STATS & CREDIBILITY MARKERS */}
      {/* ============================================================ */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-panel p-6">
          <p className="text-xs uppercase tracking-wider text-cyan-300 font-semibold">Experience</p>
          <p className="mt-2 text-4xl font-extrabold text-white">9+ Years</p>
          <p className="mt-1 text-sm text-slate-300 leading-snug">Analytical communication, structured problem solving & teaching</p>
        </div>
        <div className="space-panel p-6">
          <p className="text-xs uppercase tracking-wider text-cyan-300 font-semibold">Track Record</p>
          <p className="mt-2 text-4xl font-extrabold text-white">10+ Builds</p>
          <p className="mt-1 text-sm text-slate-300 leading-snug">React applications, WordPress websites & UI tools</p>
        </div>
        <div className="space-panel p-6">
          <p className="text-xs uppercase tracking-wider text-cyan-300 font-semibold">UX Standard</p>
          <p className="mt-2 text-4xl font-extrabold text-white">100%</p>
          <p className="mt-1 text-sm text-slate-300 leading-snug">Responsive layout execution & cross-device compatibility</p>
        </div>
        <div className="space-panel p-6">
          <p className="text-xs uppercase tracking-wider text-cyan-300 font-semibold">Core Focus</p>
          <p className="mt-2 text-4xl font-extrabold text-white">Full-Stack</p>
          <p className="mt-1 text-sm text-slate-300 leading-snug">React, TypeScript, Python & End-to-End Web Systems</p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. CALL-TO-ACTION FOOTER */}
      {/* ============================================================ */}
      <section className="space-panel relative overflow-hidden p-8 sm:p-12 text-center lg:text-left">
        <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              <MessageSquareText size={14} />
              Let&apos;s Connect
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Discuss Engineering Opportunities?
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Whether you are hiring for a full-stack engineering role, looking for web application builds, or open to collaboration, I would love to connect.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 shrink-0">
            <Link
              to="/contact"
              className="cosmos-button inline-flex items-center gap-2 text-sm font-semibold shadow-lg shadow-cyan-500/20"
            >
              Get In Touch
              <ArrowRight size={16} />
            </Link>

            <a
              href="mailto:johnchemist91@gmail.com"
              className="cosmos-button-secondary inline-flex items-center gap-2 text-sm font-semibold"
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

