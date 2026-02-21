import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Cpu,
  Search,
  ShieldCheck,
  Sparkle,
  Zap,
} from "lucide-react";
import useSeo from "@/hooks/useSeo";
import { getPersonSchema, getWebsiteSchema } from "@/lib/seo";

const googleFocusAreas = [
  {
    icon: <Search size={20} />,
    title: "Search-Friendly Architecture",
    description:
      "Semantic content structure, meaningful headings, and crawlable page patterns that support ranking.",
  },
  {
    icon: <Zap size={20} />,
    title: "Core Web Vitals Discipline",
    description:
      "LCP, CLS, and interaction performance are treated as product requirements, not post-launch cleanup.",
  },
  {
    icon: <Cpu size={20} />,
    title: "Scale-Ready Frontend Systems",
    description:
      "Reliable component boundaries and predictable state flows for large product surfaces.",
  },
];

const executionSignals = [
  {
    metric: "95+",
    label: "Lighthouse Performance",
    context: "Maintained on modern React builds with image and bundle optimization.",
  },
  {
    metric: "12+",
    label: "Shipped Interfaces",
    context: "From data dashboards to AI workflows with measurable UX improvements.",
  },
  {
    metric: "9 yrs",
    label: "Communication-Heavy Delivery",
    context: "Science education background supporting clear documentation and collaboration.",
  },
];

const roleAlignment = [
  "Translate ambiguous product goals into measurable frontend milestones.",
  "Build trustworthy interfaces for complex technical systems and user flows.",
  "Partner across design, engineering, and product with concise execution updates.",
];

export default function Home() {
  useSeo({
    title: "Johnson | Frontend Portfolio for Google-Scale Products",
    description:
      "Portfolio redesign focused on Google-level expectations: SEO-ready architecture, Core Web Vitals, accessible UX, and production React engineering.",
    keywords:
      "Google frontend portfolio, React TypeScript engineer, technical SEO, Core Web Vitals, accessible UI engineering",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [getPersonSchema(), getWebsiteSchema()],
    },
  });

  return (
    <motion.div
      className="space-y-14"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.5 }}
    >
      <section className="google-surface relative overflow-hidden rounded-[2rem] p-6 md:p-12">
        <div className="google-spotlight pointer-events-none absolute -left-16 top-6 h-56 w-56 rounded-full" />
        <div className="google-spotlight pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full opacity-80" />

        <div className="google-grid-bg absolute inset-0 opacity-70" />

        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-7">
            <span className="google-chip inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700 dark:text-slate-200">
              <Sparkle size={14} />
              Portfolio Redesign for Google-Level Standards
            </span>

            <h1 className="font-display text-4xl leading-tight text-slate-900 dark:text-white md:text-6xl">
              Frontend engineering portfolio built for
              <span className="block bg-gradient-to-r from-[#4285F4] via-[#34A853] to-[#EA4335] bg-clip-text text-transparent">
                Google-scale product teams.
              </span>
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-slate-700 dark:text-zinc-200 md:text-lg">
              I design and ship React interfaces that are fast, accessible, and search-ready. This
              portfolio emphasizes the quality bars relevant to Google: technical SEO, Web Vitals, and
              scalable frontend architecture.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#1a73e8] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1558b5]"
              >
                Review Projects
                <ArrowRight size={16} />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/90 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-[#1a73e8] hover:text-[#1a73e8] dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100"
              >
                Contact Johnson
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="portfolio-panel col-span-2">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-zinc-400">Now Optimizing</p>
              <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                Technical SEO and performance for hiring visibility
              </p>
            </div>
            {executionSignals.map((signal) => (
              <div className="portfolio-panel" key={signal.label}>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">{signal.metric}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-zinc-300">{signal.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-center gap-2 text-slate-800 dark:text-zinc-100">
          <BrainCircuit size={20} className="text-[#1a73e8]" />
          <h2 className="font-display text-2xl">How I Build for Google Expectations</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {googleFocusAreas.map((item, index) => (
            <motion.article
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 transition dark:border-zinc-700 dark:from-zinc-900 dark:to-zinc-950"
              whileHover={{ y: -8, boxShadow: "0 20px 38px rgba(15, 23, 42, 0.12)" }}
              transition={{ duration: 0.25, delay: index * 0.08 }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#4285F4]/0 via-[#34A853]/0 to-[#EA4335]/0 opacity-0 transition group-hover:opacity-10 dark:group-hover:opacity-20" />
              <div className="relative space-y-3">
                <div className="inline-flex rounded-xl bg-gradient-to-br from-[#4285F4]/20 to-[#FBBC05]/20 p-3 text-slate-900 dark:text-zinc-100">
                  {item.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-zinc-100">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-slate-600 dark:text-zinc-300">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-center gap-2 text-slate-800 dark:text-zinc-100">
          <BarChart3 size={20} className="text-[#34A853]" />
          <h2 className="font-display text-2xl">Execution Signals</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {executionSignals.map((signal, index) => (
            <motion.article
              key={signal.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-900/70"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, delay: index * 0.05 }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-3xl font-bold text-slate-900 dark:text-white">{signal.metric}</p>
              <h3 className="mt-2 font-display text-lg text-slate-900 dark:text-zinc-100">{signal.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">{signal.context}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <motion.section
        className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white via-slate-50 to-white p-8 dark:border-zinc-700 dark:from-zinc-900/60 dark:via-zinc-900/40 dark:to-zinc-900/60"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.15 }}
      >
        <div className="mb-6 flex items-center gap-2">
          <ShieldCheck size={21} className="text-[#EA4335]" />
          <h2 className="font-display text-2xl text-slate-900 dark:text-zinc-100">
            Team Contributions I Bring
          </h2>
        </div>
        <ul className="grid gap-4 md:grid-cols-3">
          {roleAlignment.map((point, index) => (
            <motion.li
              key={point}
              className="rounded-xl border border-slate-200 bg-white p-5 dark:border-zinc-700 dark:bg-zinc-900/70"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2, delay: index * 0.06 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#34A853] text-xs font-bold text-white">
                  {index + 1}
                </div>
                <p className="leading-relaxed text-slate-700 dark:text-zinc-200">{point}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-zinc-700 dark:bg-zinc-900/70">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl text-slate-900 dark:text-zinc-100">
              Looking for a frontend engineer aligned with Google-quality bars?
            </h2>
            <p className="mt-2 text-slate-600 dark:text-zinc-300">
              Explore project case studies, performance strategy, and delivery process.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#34A853] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2b8c46]"
          >
            Start a Conversation
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </motion.div>
  );
}
