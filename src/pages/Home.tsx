import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Layers,
  Rocket,
  Sparkles,
  Star,
  Workflow,
} from "lucide-react";

const focusAreas = [
  {
    icon: <BrainCircuit size={22} />,
    title: "AI-First Product Thinking",
    description:
      "Designing interfaces that feel human while integrating practical AI capabilities.",
  },
  {
    icon: <Workflow size={22} />,
    title: "Systematic Delivery",
    description:
      "Clear architecture, reliable components, and documentation that supports fast iteration.",
  },
  {
    icon: <Layers size={22} />,
    title: "Frontend Craft",
    description:
      "Purposeful layout, animation, and usability designed to communicate intent at a glance.",
  },
];

const featuredProjects = [
  {
    name: "Adaptive Learning Workspace",
    stack: "React, TypeScript, Python",
    highlight: "Personalized educational workflows powered by behavior-based recommendations.",
  },
  {
    name: "Data Storytelling Dashboard",
    stack: "React, Tailwind, SQL",
    highlight: "Real-time visual insights for decision-makers with clear narrative structure.",
  },
  {
    name: "AI Support Co-Pilot",
    stack: "React, NLP APIs, Node",
    highlight: "Context-aware support assistant with intent routing and action suggestions.",
  },
];

const principles = [
  "Build with clarity before complexity.",
  "Ship fast, but with standards.",
  "Prioritize user confidence over visual noise.",
];

export default function Home() {
  return (
    <motion.div
      className="space-y-14"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.5 }}
    >
      <section className="relative overflow-hidden rounded-[2rem] border border-white/45 bg-white/70 p-6 backdrop-blur-xl shadow-[0_24px_70px_rgba(13,23,40,0.12)] dark:border-white/10 dark:bg-zinc-950/60 md:p-12">
        <div className="pointer-events-none absolute -left-12 top-8 h-48 w-48 rounded-full bg-[radial-gradient(circle,_rgba(43,132,255,0.35),_transparent_70%)] blur-2xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(243,122,59,0.35),_transparent_72%)] blur-2xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-300/60 bg-sky-100/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-900 dark:border-sky-400/40 dark:bg-sky-400/10 dark:text-sky-200">
              <Sparkles size={14} />
              Building For High-Impact Teams
            </span>

            <h1 className="font-display text-4xl leading-tight text-slate-900 dark:text-white md:text-6xl">
              Portfolio engineered for teams like
              <span className="block bg-gradient-to-r from-[#1456d8] via-[#1296c8] to-[#ef7b38] bg-clip-text text-transparent">
                OpenAI.
              </span>
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-slate-700 dark:text-zinc-300 md:text-lg">
              I am Johnson, a frontend-focused developer with a science-education background. I build
              thoughtful, performance-aware interfaces and collaborate with precision across product,
              engineering, and users.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-zinc-200"
              >
                View Projects
                <ArrowRight size={16} />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-500 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="portfolio-panel col-span-2">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-zinc-400">Current Focus</p>
              <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">AI-enhanced web products</p>
            </div>
            <div className="portfolio-panel">
              <p className="text-2xl font-bold text-slate-900 dark:text-white">12+</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-zinc-300">Shipped interfaces</p>
            </div>
            <div className="portfolio-panel">
              <p className="text-2xl font-bold text-slate-900 dark:text-white">9 yrs</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-zinc-300">Teaching + communication</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2 text-slate-700 dark:text-zinc-200">
          <BrainCircuit size={20} className="text-[#1456d8] dark:text-sky-300" />
          <h2 className="font-display text-2xl">Core Focus Areas</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {focusAreas.map((item, index) => (
            <motion.article
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 transition dark:border-zinc-700 dark:from-zinc-900 dark:to-zinc-950"
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 to-orange-500/0 opacity-0 transition group-hover:opacity-10 dark:group-hover:opacity-20" />
              <div className="relative space-y-3">
                <motion.div
                  className="inline-flex rounded-xl bg-gradient-to-br from-sky-500/20 to-orange-500/20 p-3 text-slate-900 dark:text-sky-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-zinc-100">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-slate-600 dark:text-zinc-300">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2 text-slate-700 dark:text-zinc-200">
          <Rocket size={20} className="text-orange-500 dark:text-orange-400" />
          <h2 className="font-display text-2xl">Featured Projects</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.name}
              className="group relative rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 dark:border-zinc-700 dark:from-zinc-900 dark:to-zinc-950"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/0 via-transparent to-orange-500/0 opacity-0 transition group-hover:opacity-10 dark:group-hover:opacity-20" />
              <div className="relative space-y-4">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-600 dark:text-sky-300">
                    {project.stack}
                  </p>
                  <h3 className="font-display text-lg text-slate-900 dark:text-zinc-100">{project.name}</h3>
                </div>
                <p className="leading-relaxed text-slate-600 dark:text-zinc-300">{project.highlight}</p>
                <div className="overflow-hidden pt-2">
                  <motion.div
                    className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 dark:text-sky-300"
                    initial={{ x: -4, opacity: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    Explore<ArrowRight size={14} />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <motion.section
        className="rounded-2xl border border-gradient-to-r border-slate-200 bg-gradient-to-br from-white via-white to-slate-50 p-8 dark:border-zinc-700 dark:from-zinc-900/50 dark:via-zinc-950/50 dark:to-zinc-900"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="mb-8 flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 20 }}
            transition={{ duration: 0.2 }}
          >
            <Star size={22} className="text-sky-500 dark:text-sky-300" />
          </motion.div>
          <h2 className="font-display text-2xl text-slate-900 dark:text-zinc-100">Working Principles</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {principles.map((principle, index) => (
            <motion.div
              key={principle}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 transition hover:border-sky-300 dark:border-zinc-700 dark:bg-zinc-800/50 dark:hover:border-sky-400/50"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2, delay: index * 0.08 }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-500/0 to-orange-500/0 opacity-0 transition group-hover:opacity-5 dark:group-hover:opacity-10" />
              <div className="relative flex items-start gap-3">
                <motion.div
                  className="mt-0.5 flex-shrink-0"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-orange-500 text-xs font-bold text-white">
                    {index + 1}
                  </div>
                </motion.div>
                <p className="font-medium leading-relaxed text-slate-700 dark:text-zinc-100">{principle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
