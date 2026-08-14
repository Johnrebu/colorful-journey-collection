import { motion } from "framer-motion";
import { Briefcase, Building2, Globe, GraduationCap, MapPin, Sparkles, User } from "lucide-react";
import useSeo from "@/hooks/useSeo";
import CurrentRoleImpact from "@/components/CurrentRoleImpact";

export default function Bio() {
  useSeo({
    title: "Bio - Johnson | Full Stack Developer & AI Operations",
    description:
      "Explore Johnson's personal profile, current role at Aionion Capital, education, and multidisciplinary skills.",
    keywords: "bio, profile, personal information, professional summary, Aionion Capital, full stack developer",
  });

  const personalInfo = [
    { title: "Full Name", value: "Johnson T", icon: <User size={17} /> },
    { title: "Date of Birth", value: "December 10, 1991", icon: <Sparkles size={17} /> },
    { title: "Location", value: "Tambaram, Chennai", icon: <MapPin size={17} /> },
    { title: "Languages", value: "Tamil (Native), English, Telugu", icon: <Globe size={17} /> },
  ];

  const professionalInfo = [
    { title: "Current Company", value: "Aionion Capital (2026 – Present)", icon: <Building2 size={17} /> },
    {
      title: "Current Role",
      value: "Full Stack Dev • AI Video • Automation • Design • Event Ops",
      icon: <Briefcase size={17} />,
    },
    { title: "Work Experience", value: "9+ years (STEM & Software)", icon: <Briefcase size={17} /> },
    { title: "Education", value: "M.Sc Chemistry, B.Ed, PGDCA", icon: <GraduationCap size={17} /> },
  ];

  return (
    <motion.div
      className="space-y-10"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
    >
      <section className="google-surface relative overflow-hidden rounded-[2rem] p-6 md:p-10">
        <div className="google-grid-bg absolute inset-0 opacity-60" />
        <div className="relative">
          <span className="google-chip inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700 dark:text-slate-200">
            Bio Data & Profile
          </span>
          <h1 className="mt-4 font-display text-2xl sm:text-4xl text-slate-900 dark:text-zinc-100 md:text-5xl">Personal and Professional Overview</h1>
          <p className="mt-3 max-w-3xl text-slate-700 dark:text-zinc-300">
            A comprehensive snapshot of my multidisciplinary engineering, content, automation, and operational responsibilities at Aionion Capital.
          </p>
        </div>
      </section>

      {/* Current Role & Measured Impact Section */}
      <CurrentRoleImpact />

      <section className="grid gap-4 md:grid-cols-2">
        <article className="portfolio-panel">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#4285F4]" />
            <h2 className="font-display text-2xl text-slate-900 dark:text-zinc-100">Personal Information</h2>
          </div>
          <ul className="space-y-4">
            {personalInfo.map((item) => (
              <li key={item.title} className="rounded-xl border border-slate-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900/70">
                <div className="mb-1 flex items-center gap-2 text-slate-500 dark:text-zinc-400">
                  {item.icon}
                  <span className="text-xs uppercase tracking-[0.12em]">{item.title}</span>
                </div>
                <p className="text-base font-medium text-slate-800 dark:text-zinc-100">{item.value}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="portfolio-panel">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#34A853]" />
            <h2 className="font-display text-2xl text-slate-900 dark:text-zinc-100">Professional Summary</h2>
          </div>
          <ul className="space-y-4">
            {professionalInfo.map((item) => (
              <li key={item.title} className="rounded-xl border border-slate-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900/70">
                <div className="mb-1 flex items-center gap-2 text-slate-500 dark:text-zinc-400">
                  {item.icon}
                  <span className="text-xs uppercase tracking-[0.12em]">{item.title}</span>
                </div>
                <p className="text-base font-medium text-slate-800 dark:text-zinc-100">{item.value}</p>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="portfolio-panel text-center">
        <div className="mx-auto mb-4 flex w-fit items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#4285F4]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#EA4335]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FBBC05]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#34A853]" />
        </div>
        <h3 className="font-display text-2xl text-slate-900 dark:text-zinc-100">Ready to Collaborate?</h3>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-zinc-300">
          I deliver end-to-end full-stack systems, automated workflows, digital content, and high-craft user experiences.
        </p>
        <motion.a
          href="/contact"
          className="mt-6 inline-flex rounded-full bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] px-7 py-3 font-medium text-white shadow-md"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Get In Touch
        </motion.a>
      </section>
    </motion.div>
  );
}
