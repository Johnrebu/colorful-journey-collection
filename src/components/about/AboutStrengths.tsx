import React from "react";
import { motion } from "framer-motion";
import { Brain, CheckCircle2, Award, Zap, Sparkles } from "lucide-react";

const strengths = [
  {
    title: "Analytical Lab Discipline",
    subtitle: "Hypothesis-Driven Engineering",
    detail: "I break broad product specs into testable, deliverable steps. Debugging is done empirically by isolating variables rather than guessing.",
    icon: <Brain size={22} />,
    color: "#4285F4",
    glow: "rgba(66, 133, 244, 0.15)",
    quote: '"Tested in Chemistry Labs, Applied to React Component Architecture."',
  },
  {
    title: "Pedagogical UX Empathy",
    subtitle: "Clarity Over Complexity",
    detail: "9+ years of teaching taught me to view software through the user's eyes: every element must reduce confusion, build trust, and guide action.",
    icon: <CheckCircle2 size={22} />,
    color: "#EA4335",
    glow: "rgba(234, 67, 53, 0.15)",
    quote: '"If a user gets confused, it\'s a design flaw — not a user error."',
  },
  {
    title: "Execution Discipline",
    subtitle: "Craft & Predictable Shipping",
    detail: "I value clean implementation, strictly typed code, performance optimization, and transparent team communication to keep projects on track.",
    icon: <Award size={22} />,
    color: "#34A853",
    glow: "rgba(52, 168, 83, 0.15)",
    quote: '"Predictable delivery, reviewable PRs, and zero compromise on polish."',
  },
];

export default function AboutStrengths() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#EA4335]" />
          <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-zinc-100 md:text-3xl">
            Core Engineering Superpowers
          </h2>
        </div>
        <span className="hidden text-xs font-semibold text-slate-500 dark:text-zinc-400 sm:inline-block">
          What I Bring to Product Teams
        </span>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {strengths.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.4 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="portfolio-panel relative flex flex-col justify-between overflow-hidden transition-all duration-300 group"
          >
            {/* Top Accent Gradient Line */}
            <div
              className="absolute top-0 left-0 h-1.5 w-full"
              style={{ backgroundColor: item.color }}
            />

            <div>
              {/* Header Icon */}
              <div className="mb-4 flex items-center justify-between">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                  0{index + 1} / Core
                </span>
              </div>

              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                {item.subtitle}
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-slate-900 dark:text-zinc-100">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
                {item.detail}
              </p>
            </div>

            {/* Quote Footer Callout */}
            <div className="mt-5 rounded-xl border border-slate-200/60 bg-slate-50/80 p-3 text-xs italic text-slate-700 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300">
              {item.quote}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
