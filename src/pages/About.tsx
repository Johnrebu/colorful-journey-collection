import { motion } from "framer-motion";
import { ArrowRight, Award, Brain, CheckCircle2, GraduationCap, Lightbulb, Target } from "lucide-react";
import useSeo from "@/hooks/useSeo";

const journey = [
  {
    period: "2015 - 2024",
    title: "Science Educator",
    detail:
      "Built deep communication and structured problem-solving skills by teaching Chemistry and Science for nearly a decade.",
    icon: <GraduationCap size={18} />,
    accent: "#4285F4",
  },
  {
    period: "2024",
    title: "Career Transition",
    detail:
      "Completed an intensive full-stack training path focused on Python, modern frontend systems, and applied product development.",
    icon: <Lightbulb size={18} />,
    accent: "#FBBC05",
  },
  {
    period: "2024 - Present",
    title: "Frontend + Product Builder",
    detail:
      "Shipped production UI work in React and WordPress environments while collaborating with design, content, and business teams.",
    icon: <Target size={18} />,
    accent: "#34A853",
  },
];

const strengths = [
  {
    title: "Analytical by Training",
    detail: "I break broad product goals into testable, deliverable technical steps.",
    icon: <Brain size={18} />,
  },
  {
    title: "Clear Communicator",
    detail: "I write and explain implementation choices so teams move faster with less friction.",
    icon: <CheckCircle2 size={18} />,
  },
  {
    title: "Execution Discipline",
    detail: "I value clean implementation, reviewable code, and predictable delivery.",
    icon: <Award size={18} />,
  },
];

const skills = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Python",
  "Django",
  "SQL",
  "WordPress",
  "API Integration",
  "Prompt-Centered UX",
];

export default function About() {
  useSeo({
    title: "About - Johnson | Science Educator Turned Developer",
    description:
      "Learn about Johnson's journey from science education to full-stack development. 9+ years teaching communication and problem-solving, now building thoughtful web applications.",
    keywords: "about, bio, background, career, science educator, full-stack developer, journey",
  });

  return (
    <motion.div
      className="space-y-10"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.45 }}
    >
      <section className="google-surface relative overflow-hidden rounded-[2rem] p-6 md:p-10">
        <div className="google-grid-bg absolute inset-0 opacity-60" />
        <div className="relative">
          <span className="google-chip inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700 dark:text-slate-200">
            About Johnson
          </span>
          <h1 className="mt-4 font-display text-4xl text-slate-900 dark:text-zinc-100 md:text-5xl">
            Building ambitious software with clarity, speed, and craft.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 dark:text-zinc-300">
            My background in education sharpened the way I think about users: every interface should reduce confusion,
            guide action, and build trust quickly. That mindset now drives how I build modern web products.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1a73e8] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1558b5]"
          >
            Let us connect
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#4285F4]" />
          <h2 className="font-display text-2xl text-slate-900 dark:text-zinc-100">Journey</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {journey.map((item) => (
            <article key={item.title} className="portfolio-panel">
              <div className="mb-3 inline-flex rounded-xl p-2 text-white" style={{ backgroundColor: item.accent }}>
                {item.icon}
              </div>
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-zinc-400">{item.period}</p>
              <h3 className="mt-2 font-display text-xl text-slate-900 dark:text-zinc-100">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#EA4335]" />
          <h2 className="font-display text-2xl text-slate-900 dark:text-zinc-100">What I Bring</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {strengths.map((item) => (
            <article key={item.title} className="portfolio-panel">
              <div className="mb-3 inline-flex rounded-xl border border-slate-300 p-2 text-slate-800 dark:border-zinc-600 dark:text-zinc-100">
                {item.icon}
              </div>
              <h3 className="font-display text-xl text-slate-900 dark:text-zinc-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-panel">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#34A853]" />
          <h2 className="font-display text-2xl text-slate-900 dark:text-zinc-100">Core Skills</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-300 bg-white px-3 py-1 text-sm font-medium text-slate-700 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
