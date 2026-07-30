import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Atom, Beaker, Code2, Sparkles, Cpu, Flame, Layers, ArrowRight } from "lucide-react";

interface ChemicalElement {
  symbol: string;
  name: string;
  atomicNumber: number;
  category: string;
  color: string;
  accentBg: string;
  description: string;
  codeAnalogy: string;
  realWorldImpact: string;
}

const elements: ChemicalElement[] = [
  {
    symbol: "Pe",
    name: "Pedagogy",
    atomicNumber: 9,
    category: "STEM Foundation",
    color: "#4285F4",
    accentBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
    description: "9+ years of teaching Chemistry and Science to over 1,000 students across Tamil Nadu.",
    codeAnalogy: "Translating complex algorithms and data flows into clear, intuitive step-by-step user interfaces.",
    realWorldImpact: "Eliminating user confusion by designing software with pedagogical clarity and zero ambiguity.",
  },
  {
    symbol: "Ch",
    name: "Chemistry",
    atomicNumber: 10,
    category: "Analytical Mindset",
    color: "#EA4335",
    accentBg: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800",
    description: "M.Sc & B.Ed in Chemistry focusing on molecular structure, reaction kinetics, and stoichiometry.",
    codeAnalogy: "Hypothesis-driven debugging: isolating variables, tracing root causes, and testing state systematically.",
    realWorldImpact: "Zero-assumption troubleshooting that finds edge-case bugs faster and stabilizes production code.",
  },
  {
    symbol: "Re",
    name: "React Stack",
    atomicNumber: 24,
    category: "Frontend Core",
    color: "#34A853",
    accentBg: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800",
    description: "Modern JavaScript, TypeScript, React 18, Tailwind CSS, and Framer Motion animation engine.",
    codeAnalogy: "Modular compound building: reusable UI components acting like predictable molecular building blocks.",
    realWorldImpact: "High-performance, modular web applications built with speed, accessibility, and visual polish.",
  },
  {
    symbol: "Ux",
    name: "User Centricity",
    atomicNumber: 100,
    category: "Design Philosophy",
    color: "#FBBC05",
    accentBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800",
    description: "Focusing on cognitive load reduction, accessible design tokens, and smooth interactions.",
    codeAnalogy: "Catalytic reduction of activation energy: making complex digital tasks effortless for the user.",
    realWorldImpact: "Interfaces that build trust instantly, guide action, and deliver delightful digital experiences.",
  },
];

export default function ScienceOfCode() {
  const [selectedSymbol, setSelectedSymbol] = useState<string>("Pe");
  const activeElement = elements.find((e) => e.symbol === selectedSymbol) || elements[0];

  return (
    <section className="portfolio-panel relative overflow-hidden rounded-[2.5rem] p-6 md:p-10 shadow-lg">
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-gradient-to-br from-blue-500/10 to-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EA4335] text-white">
              <Atom size={16} />
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-zinc-400">
              Unique Synthesis
            </span>
          </div>
          <h2 className="mt-2 font-display text-2xl font-bold text-slate-900 dark:text-zinc-100 md:text-3xl">
            The Science of Code: Chemical Catalyst Formula
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-zinc-300">
            Click any elemental card below to see how scientific principles catalyze better software design.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium text-slate-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-300">
          <Beaker size={14} className="text-[#34A853]" />
          <span>Interactive Synthesis Lab</span>
        </div>
      </div>

      {/* Grid of Chemical Cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
        {elements.map((el) => {
          const isSelected = selectedSymbol === el.symbol;
          return (
            <motion.button
              key={el.symbol}
              onClick={() => setSelectedSymbol(el.symbol)}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`group relative flex flex-col justify-between rounded-2xl border p-4 text-left transition-all duration-300 ${
                isSelected
                  ? "border-2 bg-white shadow-xl dark:bg-zinc-900 ring-2 ring-offset-2 ring-blue-400/40 dark:ring-offset-zinc-950"
                  : "border-slate-200 bg-white/70 hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:bg-zinc-900"
              }`}
              style={{
                borderColor: isSelected ? el.color : undefined,
              }}
            >
              {/* Top Row: Atomic # and Category */}
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-slate-400 dark:text-zinc-500">#{el.atomicNumber}</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                  {el.symbol}
                </span>
              </div>

              {/* Center Element Symbol */}
              <div className="my-3 text-center">
                <span
                  className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl"
                  style={{ color: el.color }}
                >
                  {el.symbol}
                </span>
                <p className="mt-1 text-xs font-bold text-slate-800 dark:text-zinc-200">{el.name}</p>
              </div>

              {/* Bottom Tag */}
              <div className="mt-2 text-center">
                <span className={`inline-block rounded-md px-2 py-0.5 text-[10px] font-semibold ${el.accentBg}`}>
                  {el.category}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Selected Element Reaction Output Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeElement.symbol}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="mt-6 rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/90 md:p-6"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-zinc-800">
            <div className="flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl font-display text-xl font-black text-white shadow-md"
                style={{ backgroundColor: activeElement.color }}
              >
                {activeElement.symbol}
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                  Element {activeElement.symbol}: {activeElement.name}
                </h3>
                <p className="text-xs font-medium text-slate-500 dark:text-zinc-400">
                  {activeElement.category} • Atomic Weight: 9+ Years Applied Logic
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-zinc-400">
              <Sparkles size={14} style={{ color: activeElement.color }} />
              <span>Catalytic Reaction Output</span>
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-4 dark:bg-zinc-800/60">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-1">
                🔬 Scientific Foundation
              </p>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-zinc-300">
                {activeElement.description}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4 dark:bg-zinc-800/60">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-1">
                💻 Software Engineering Analogy
              </p>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-zinc-300">
                {activeElement.codeAnalogy}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4 dark:bg-zinc-800/60">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-1">
                🚀 Real-World Product Impact
              </p>
              <p className="text-sm leading-relaxed font-medium text-slate-800 dark:text-zinc-200">
                {activeElement.realWorldImpact}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
