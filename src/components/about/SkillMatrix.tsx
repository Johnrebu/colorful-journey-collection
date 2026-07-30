import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Code2, Database, Wrench, GraduationCap, Sparkles, CheckCircle } from "lucide-react";

interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "science" | "tools";
  level: "Advanced" | "Proficient" | "Core";
  icon: string;
  context: string;
}

const skillSet: SkillItem[] = [
  // Frontend
  { name: "React", category: "frontend", level: "Advanced", icon: "⚛️", context: "Hooks, Context, Custom Hooks, Performance" },
  { name: "TypeScript", category: "frontend", level: "Advanced", icon: "📘", context: "Strict Typing, Interfaces, Generics" },
  { name: "Tailwind CSS", category: "frontend", level: "Advanced", icon: "🎨", context: "Utility Styling, Responsive Layouts, Dark Mode" },
  { name: "Framer Motion", category: "frontend", level: "Advanced", icon: "✨", context: "Micro-animations, Layout Shifts, Page Transitions" },
  { name: "JavaScript (ES6+)", category: "frontend", level: "Advanced", icon: "🟨", context: "Async/Await, DOM, Closures, Event Loop" },
  { name: "HTML5 & CSS3", category: "frontend", level: "Advanced", icon: "🌐", context: "Semantic Markup, Flexbox, Grid, Accessibility" },

  // Backend & Database
  { name: "Python", category: "backend", level: "Proficient", icon: "🐍", context: "Data Processing, Scripting, Django Framework" },
  { name: "Django", category: "backend", level: "Proficient", icon: "🎸", context: "REST Framework, Models, Admin, Auth" },
  { name: "SQL & Relational DBs", category: "backend", level: "Proficient", icon: "🗄️", context: "Queries, Schema Design, PostgreSQL/MySQL" },
  { name: "RESTful APIs", category: "backend", level: "Proficient", icon: "🔌", context: "Endpoint Consumption, JSON, Error Handling" },
  { name: "WordPress & PHP", category: "backend", level: "Proficient", icon: "📝", context: "Custom Themes, Elementor, PHP Hooks" },

  // Science & Pedagogy
  { name: "M.Sc Chemistry", category: "science", level: "Advanced", icon: "🧪", context: "Chemical Kinetics, Thermodynamics, Analytics" },
  { name: "STEM Pedagogy", category: "science", level: "Advanced", icon: "🎓", context: "9+ Years Teaching, Curriculum Design, Mentorship" },
  { name: "Scientific Method", category: "science", level: "Advanced", icon: "🔬", context: "Empirical Testing, Variable Isolation, Analytics" },

  // Tools & UX
  { name: "Git & GitHub", category: "tools", level: "Proficient", icon: "🐙", context: "Branch Management, Pull Requests, Version Control" },
  { name: "Vite & Bun/npm", category: "tools", level: "Proficient", icon: "⚡", context: "Module Bundling, Dev Servers, Package Mgmt" },
  { name: "SEO & Web Vitals", category: "tools", level: "Proficient", icon: "📈", context: "Meta Tags, Schema.org, Performance Audit" },
  { name: "AI & MCP Tooling", category: "tools", level: "Proficient", icon: "🤖", context: "Prompt Engineering, MCP Server Protocols" },
];

export default function SkillMatrix() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredSkills = skillSet.filter((skill) => {
    const matchesCategory = activeCategory === "all" || skill.category === activeCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.context.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="portfolio-panel space-y-6 rounded-[2.5rem] p-6 md:p-10">
      {/* Header & Controls */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#34A853]" />
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-zinc-100 md:text-3xl">
              Skills & Technical Arsenal
            </h2>
          </div>
          <p className="mt-1 text-sm text-slate-600 dark:text-zinc-300">
            Interactive breakdown of technologies, scientific capabilities, and engineering tools.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-64">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-zinc-500" />
          <input
            type="text"
            placeholder="Search skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-slate-200 bg-white py-2 pl-9 pr-4 text-xs font-medium text-slate-800 shadow-sm transition focus:border-[#34A853] focus:outline-none focus:ring-2 focus:ring-[#34A853]/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4 dark:border-zinc-800">
        {[
          { id: "all", label: "All Skills", icon: <Sparkles size={14} /> },
          { id: "frontend", label: "Frontend", icon: <Code2 size={14} /> },
          { id: "backend", label: "Backend & Data", icon: <Database size={14} /> },
          { id: "science", label: "Science & Pedagogy", icon: <GraduationCap size={14} /> },
          { id: "tools", label: "Tools & UX", icon: <Wrench size={14} /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id)}
            className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
              activeCategory === tab.id
                ? "bg-[#34A853] text-white shadow-md"
                : "border border-slate-200 bg-white/80 text-slate-700 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:bg-zinc-800"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Skill Grid */}
      <motion.div layout className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white/90 p-4 shadow-sm transition-all dark:border-zinc-800 dark:bg-zinc-900/90 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{skill.icon}</span>
                    <h3 className="font-display text-base font-bold text-slate-900 dark:text-zinc-100">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600 dark:bg-zinc-800 dark:text-zinc-400">
                    {skill.level}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
                  {skill.context}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredSkills.length === 0 && (
        <div className="py-8 text-center text-sm text-slate-500 dark:text-zinc-400">
          No skills found matching "{searchQuery}". Try searching for another term.
        </div>
      )}
    </section>
  );
}
