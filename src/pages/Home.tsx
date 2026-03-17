import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Github,
  Globe2,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  MessageSquareText,
  Rocket,
  Sparkles,
  Star,
} from "lucide-react";
import useSeo from "@/hooks/useSeo";
import { getPersonSchema, getWebsiteSchema } from "@/lib/seo";
import johnImage from "@/images/john.jpg";

const heroSignals = [
  {
    value: "9+",
    label: "Years of communication-heavy experience",
  },
  {
    value: "React",
    label: "TypeScript-first frontend delivery",
  },
  {
    value: "2024",
    label: "Career transition into software engineering",
  },
];

const capabilities = [
  {
    icon: Code2,
    title: "Frontend Systems",
    description:
      "React, TypeScript, Tailwind CSS, and Framer Motion for interfaces that feel polished and stay maintainable.",
  },
  {
    icon: Layers3,
    title: "UI Architecture",
    description:
      "Reusable components, clear layout hierarchy, and practical state boundaries instead of one-off screens.",
  },
  {
    icon: Globe2,
    title: "WordPress + Web Delivery",
    description:
      "Content-driven builds, responsive implementation, and production-minded execution across modern web surfaces.",
  },
  {
    icon: MessageSquareText,
    title: "Clear Collaboration",
    description:
      "A teaching background turned into stronger documentation, stakeholder communication, and clearer implementation handoff.",
  },
];

const journeySteps = [
  {
    period: "2015 - 2024",
    title: "Science Educator",
    description:
      "Nine years of teaching built the habit of explaining complex ideas clearly and structuring work around people.",
  },
  {
    period: "2024",
    title: "Full-Stack Transition",
    description:
      "Completed intensive Python full-stack training and moved fully into software with a practical product mindset.",
  },
  {
    period: "Now",
    title: "Frontend-Focused Builder",
    description:
      "Shipping React and WordPress work with attention to visual polish, interaction quality, and usability.",
  },
];

const focusPoints = [
  "Responsive layouts that stay clean from mobile to desktop.",
  "Motion and visual hierarchy that make portfolio work feel premium.",
  "User-facing interfaces that are easier to understand and trust.",
];

const stack = ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Python", "WordPress"];

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

const starPositions = Array.from({ length: 48 }, (_, index) => ({
  left: `${(index * 17) % 100}%`,
  top: `${(index * 27) % 100}%`,
  size: index % 6 === 0 ? 3 : index % 3 === 0 ? 2.5 : 2,
  delay: (index % 8) * 0.35,
  duration: 3 + (index % 5) * 0.65,
}));

export default function Home() {
  useSeo({
    title: "Johnson | Frontend Developer Portfolio",
    description:
      "Johnson T is a frontend-focused developer building polished React interfaces, responsive web experiences, and clear product-driven UI systems.",
    keywords:
      "Johnson T portfolio, frontend developer, React developer, TypeScript portfolio, Tailwind CSS, Framer Motion, WordPress developer",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [getPersonSchema(), getWebsiteSchema()],
    },
  });

  return (
    <motion.div
      className="text-left"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.45 }}
    >
      <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#050b1d] px-4 py-5 shadow-[0_35px_120px_rgba(2,6,23,0.45)] sm:px-6 lg:px-8 lg:py-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.12),transparent_24%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:88px_88px] opacity-20" />

        {starPositions.map((star, index) => (
          <motion.span
            key={`${star.left}-${star.top}-${index}`}
            className="pointer-events-none absolute rounded-full bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
            }}
            animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.3, 1] }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="relative space-y-6 lg:space-y-8">
          <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
            <motion.section
              className="space-panel relative overflow-hidden p-7 sm:p-8"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="absolute -left-16 top-16 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl" />
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative flex h-full flex-col justify-between gap-10">
                <div className="space-y-6">
                  <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
                    <Sparkles size={14} />
                    Portfolio Home
                  </span>

                  <div className="max-w-3xl space-y-4">
                    <h1 className="text-4xl leading-tight text-white md:text-6xl">
                      Johnson T builds
                      <span className="block bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        thoughtful frontend experiences.
                      </span>
                    </h1>

                    <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                      Chennai-based developer with a teaching background, now focused on React,
                      responsive UI systems, and product-minded web experiences that look stronger
                      and communicate more clearly.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link to="/projects" className="cosmos-button inline-flex items-center gap-2">
                      View Projects
                      <ArrowRight size={16} />
                    </Link>
                    <Link to="/about" className="cosmos-button-secondary inline-flex items-center gap-2">
                      Read My Story
                      <BookOpen size={16} />
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-3 text-sm font-semibold text-cyan-50 transition hover:-translate-y-0.5 hover:bg-cyan-300/20"
                    >
                      Contact Me
                    </Link>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {heroSignals.map((signal) => (
                    <div
                      key={signal.label}
                      className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4"
                    >
                      <p className="text-3xl font-semibold text-white">{signal.value}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-300">{signal.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            <div className="grid gap-6">
              <motion.section
                className="space-panel relative overflow-hidden p-6 sm:p-7"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
              >
                <div className="absolute right-8 top-8 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative flex h-full flex-col gap-6">
                  <div className="flex flex-col gap-6 md:flex-row md:items-center">
                    <div className="mx-auto w-full max-w-[15rem] md:mx-0">
                      <div className="relative mx-auto aspect-square w-full">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300 via-blue-500 to-slate-950 p-[2px] shadow-[0_0_55px_rgba(34,211,238,0.25)]">
                          <div className="h-full w-full rounded-full bg-[#071125] p-3">
                            <img
                              src={johnImage}
                              alt="Johnson T portrait"
                              className="h-full w-full rounded-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="absolute inset-[-10%] rounded-full border border-cyan-300/15" />
                        <div className="absolute inset-[-18%] rounded-full border border-white/10" />
                        <div className="absolute -right-2 top-6 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-100 backdrop-blur">
                          Frontend
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/75">
                          Profile
                        </p>
                        <h2 className="mt-2 text-3xl text-white">Frontend Developer</h2>
                        <p className="mt-3 text-sm leading-7 text-slate-300">
                          I care about interfaces that feel deliberate: stronger hierarchy, clear
                          interactions, and code structure that supports growth instead of slowing it
                          down.
                        </p>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                          <div className="flex items-center gap-2 text-cyan-100">
                            <MapPin size={16} />
                            <span className="text-sm font-medium">Tambaram, Chennai</span>
                          </div>
                          <p className="mt-2 text-sm leading-6 text-slate-300">
                            Based in Tamil Nadu and building web experiences for modern product teams.
                          </p>
                        </div>
                        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                          <div className="flex items-center gap-2 text-cyan-100">
                            <BriefcaseBusiness size={16} />
                            <span className="text-sm font-medium">Current Focus</span>
                          </div>
                          <p className="mt-2 text-sm leading-6 text-slate-300">
                            React, WordPress, motion, responsive polish, and portfolio-quality UI.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link) => {
                      const Icon = link.icon;

                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                          rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-cyan-300/10"
                        >
                          <Icon size={16} />
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.section>

              <div className="grid gap-4 sm:grid-cols-2">
                <motion.article
                  className="space-panel p-5"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.14 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                      <GraduationCap size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-300">Background</p>
                      <p className="text-lg text-white">Teacher to Developer</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    A non-traditional path that adds communication discipline and user empathy to technical execution.
                  </p>
                </motion.article>

                <motion.article
                  className="space-panel p-5"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.2 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                      <Rocket size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-300">Stack Snapshot</p>
                      <p className="text-lg text-white">React + Tailwind + Motion</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    Practical frontend tooling chosen for clean UI delivery, responsive behavior, and faster iteration.
                  </p>
                </motion.article>
              </div>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <section className="space-panel p-6 sm:p-7">
              <div className="mb-6 flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                  <Star size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/75">
                    What I Bring
                  </p>
                  <h2 className="text-3xl text-white">Capabilities That Shape The Work</h2>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {capabilities.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.article
                      key={item.title}
                      className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: index * 0.06 }}
                      whileHover={{ y: -6 }}
                    >
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                        <Icon size={18} />
                      </div>
                      <h3 className="mt-4 text-xl text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                    </motion.article>
                  );
                })}
              </div>
            </section>

            <section className="space-panel p-6 sm:p-7">
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/75">Journey</p>
                <h2 className="mt-2 text-3xl text-white">How The Direction Changed</h2>
              </div>

              <div className="space-y-4">
                {journeySteps.map((step, index) => (
                  <motion.article
                    key={step.title}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.08 }}
                  >
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500 text-sm font-semibold text-slate-950">
                        0{index + 1}
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/80">
                          {step.period}
                        </p>
                        <h3 className="mt-2 text-xl text-white">{step.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-300">{step.description}</p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
          </div>

          <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
            <section className="space-panel p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                  <Sparkles size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/75">
                    Design Direction
                  </p>
                  <h2 className="text-3xl text-white">What This Home Page Emphasizes</h2>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {focusPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-[1.35rem] border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-300 text-xs font-bold text-slate-950">
                      +
                    </span>
                    <p className="text-sm leading-7 text-slate-300">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-cyan-300/15 bg-cyan-300/10 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/80">Core Stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <section className="space-panel relative overflow-hidden p-6 sm:p-7">
              <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative flex h-full flex-col justify-between gap-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/75">
                    Next Move
                  </p>
                  <h2 className="mt-2 max-w-2xl text-3xl text-white md:text-4xl">
                    Explore the work, then start a conversation.
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-300 md:text-base">
                    If you want the rest of the portfolio to feel as intentional as the home page,
                    the projects and contact sections are the next places to look. The design now
                    sets a stronger first impression without losing the personal story behind the work.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <h3 className="text-xl text-white">Project Showcase</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      See featured builds, GitHub-linked work, and the stronger premium layout system in action.
                    </p>
                    <Link
                      to="/projects"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
                    >
                      Browse Projects
                      <ArrowRight size={15} />
                    </Link>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <h3 className="text-xl text-white">Let&apos;s Connect</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Reach out for frontend roles, portfolio work, or collaboration on polished web experiences.
                    </p>
                    <Link
                      to="/contact"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
                    >
                      Open Contact Page
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
