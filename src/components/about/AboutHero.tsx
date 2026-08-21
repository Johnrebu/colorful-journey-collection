import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Brain, Sparkles, Terminal, Code2, GraduationCap, Compass, CheckCircle2 } from "lucide-react";
import ParallaxProfilePhoto from "@/components/ParallaxProfilePhoto";
import johnImage from "@/images/johnson-professional.jpg";

type Lens = "developer" | "educator" | "synthesis";

const lenses: { id: Lens; label: string; icon: React.ReactNode; color: string }[] = [
  { id: "synthesis", label: "The Synthesis", icon: <Sparkles size={16} />, color: "#4285F4" },
  { id: "developer", label: "The Developer", icon: <Terminal size={16} />, color: "#34A853" },
  { id: "educator", label: "The Educator", icon: <GraduationCap size={16} />, color: "#FBBC05" },
];

const lensContent = {
  synthesis: {
    badge: "Chemists & Coders Thinking Alike",
    title: "Synthesizing Scientific Precision with Modern Software Craft.",
    description:
      "My transition from nearly a decade of teaching Chemistry to building modern web applications was driven by a single core insight: both disciplines require breaking complex systems down into clear, predictable, and elegant components.",
    points: [
      "Translating complex logic into intuitive user experiences",
      "Empirical, hypothesis-driven debugging and state management",
      "Human-first empathy honed through teaching 1,000+ students",
    ],
  },
  developer: {
    badge: "Full-Stack Product Engineering",
    title: "Building Scalable, High-Performance Web Applications.",
    description:
      "Specialized in React, TypeScript, Python, and modern UI systems. I build fast, accessible, and resilient frontends backed by robust architecture and clean code standards.",
    points: [
      "Modern React 18, TypeScript, Tailwind CSS & Framer Motion",
      "Python / Django backend development and RESTful APIs",
      "Performance optimization, clean component architecture & SEO",
    ],
  },
  educator: {
    badge: "9+ Years STEM Educator",
    title: "Mastering the Art of Clear Communication & Empathy.",
    description:
      "Teaching Chemistry for 9+ years trained me to communicate complex ideas effortlessly. In software, this translates into clean documentation, transparent team collaboration, and UI design that never leaves users guessing.",
    points: [
      "Simplifying intricate technical workflows for non-technical stakeholders",
      "Structured curriculum development & team mentoring mindset",
      "Uncompromising focus on user clarity and zero friction UI",
    ],
  },
};

export default function AboutHero() {
  const [activeLens, setActiveLens] = useState<Lens>("synthesis");
  const content = lensContent[activeLens];

  return (
    <section className="google-surface relative overflow-hidden rounded-[2.5rem] p-6 md:p-12 shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
      {/* Background Animated Spotlights */}
      <div className="google-grid-bg absolute inset-0 opacity-40 pointer-events-none" />
      <div className="google-spotlight absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-60 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#34A853]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:items-center">
        {/* Left Column: Information & Lens Switcher */}
        <div className="space-y-6 lg:col-span-7">
          {/* Top Tag & Lens Selector */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="google-chip inline-flex items-center gap-2 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-700 dark:text-slate-200">
              <Compass size={14} className="text-[#4285F4]" />
              Interactive View Mode
            </span>

            {/* Lens Pills */}
            <div className="flex items-center rounded-full border border-slate-200 bg-slate-100/80 p-1 dark:border-zinc-700 dark:bg-zinc-900/80">
              {lenses.map((lens) => {
                const isActive = activeLens === lens.id;
                return (
                  <button
                    key={lens.id}
                    onClick={() => setActiveLens(lens.id)}
                    className={`relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-white text-slate-900 shadow-md dark:bg-zinc-800 dark:text-white"
                        : "text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white"
                    }`}
                  >
                    <span style={{ color: lens.color }}>{lens.icon}</span>
                    {lens.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Lens Title & Description with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLens}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-zinc-800/80 dark:text-zinc-300">
                {content.badge}
              </div>

              <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-100 sm:text-4xl md:text-5xl leading-[1.15]">
                {content.title}
              </h1>

              <p className="text-base leading-relaxed text-slate-700 dark:text-zinc-300 sm:text-lg">
                {content.description}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-2 pt-2">
                {content.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-zinc-300">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#34A853]" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#1a73e8] px-6 py-3 text-sm font-semibold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-[#1558b5] hover:shadow-blue-500/25"
            >
              Get In Touch
              <ArrowRight size={16} />
            </a>
            <a
              href="/wikipedia"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/90 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              <BookOpen size={16} className="text-[#EA4335]" />
              Wikipedia Profile
            </a>
          </div>
        </div>

        {/* Right Column: Profile Photo Card with Floating Glass Accents */}
        <div className="relative flex justify-center lg:col-span-5">
          <div className="relative">
            {/* Glowing Backdrop Ring */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-[#4285F4] via-[#EA4335] to-[#34A853] opacity-20 blur-xl animate-pulse" />

            {/* Profile Photo Frame */}
            <div className="relative h-72 w-72 sm:h-80 sm:w-80 overflow-hidden rounded-[2.5rem] border-4 border-white/80 shadow-2xl dark:border-zinc-800">
              <ParallaxProfilePhoto
                src={johnImage}
                alt="Johnson T - Profile Photo"
                shape="square"
                containerClassName="h-full w-full"
                className="scale-105"
              />
            </div>

            {/* Floating Glass Status Badge 1: Experience */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="absolute -bottom-5 left-0 sm:-left-6 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/90 p-3 shadow-xl backdrop-blur-md dark:border-zinc-700 dark:bg-zinc-900/90"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4285F4] text-white">
                <Brain size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-zinc-400">Experience</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">9+ Yrs Problem Solving</p>
              </div>
            </motion.div>

            {/* Floating Glass Status Badge 2: Open to Work */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="absolute -top-4 right-0 sm:-right-4 flex items-center gap-2 rounded-full border border-white/60 bg-white/90 px-4 py-2 shadow-lg backdrop-blur-md dark:border-zinc-700 dark:bg-zinc-900/90"
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34A853] opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#34A853]"></span>
              </span>
              <span className="text-xs font-bold text-slate-800 dark:text-zinc-200">Open for Hire</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
