import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageSquare, Coffee, CheckCircle2 } from "lucide-react";

const stats = [
  { value: "9+", label: "Years STEM Experience", sub: "Chemistry Educator & Academic Lead" },
  { value: "1,000+", label: "Students Mentored", sub: "Fostered clarity & scientific curiosity" },
  { value: "15+", label: "Web & Tech Projects", sub: "React, Python, WordPress, MCP" },
  { value: "100%", label: "Commitment to Craft", sub: "Clean code & empathetic UI" },
];

export default function AboutStats() {
  return (
    <section className="space-y-8">
      {/* Stats Counter Bar */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            whileHover={{ y: -4 }}
            className="portfolio-panel text-center transition-all duration-300"
          >
            <span className="font-display text-3xl font-extrabold text-[#4285F4] dark:text-blue-400 sm:text-4xl">
              {stat.value}
            </span>
            <p className="mt-1 font-display text-sm font-bold text-slate-900 dark:text-zinc-100">
              {stat.label}
            </p>
            <p className="mt-0.5 text-[11px] text-slate-500 dark:text-zinc-400">
              {stat.sub}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Dynamic CTA Footer Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="google-surface relative overflow-hidden rounded-[2.5rem] p-8 text-center md:p-12 shadow-xl"
      >
        <div className="mx-auto mb-4 flex w-fit items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#4285F4]" />
          <span className="h-3 w-3 rounded-full bg-[#EA4335]" />
          <span className="h-3 w-3 rounded-full bg-[#FBBC05]" />
          <span className="h-3 w-3 rounded-full bg-[#34A853]" />
        </div>

        <h3 className="font-display text-3xl font-extrabold text-slate-900 dark:text-zinc-100 md:text-4xl">
          Ready to Build Something Extraordinary?
        </h3>

        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-zinc-300">
          Whether you need a modern web app, a custom frontend integration, or a full-stack product built with clarity and precision — let's bring your vision to life.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] px-8 py-3.5 font-bold text-white shadow-lg transition"
          >
            Start a Conversation
            <ArrowRight size={18} />
          </motion.a>
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/90 px-8 py-3.5 font-semibold text-slate-800 shadow-sm transition hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/90 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            Explore My Projects
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
