import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Cpu,
  ExternalLink,
  Github,
  Globe2,
  Layers3,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import useSeo from "@/hooks/useSeo";

type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics?: string[];
  archived: boolean;
  fork: boolean;
  updated_at: string;
};

type ProjectCard = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics?: string[];
  updated_at?: string;
};

const GITHUB_USERNAME = "Johnrebu";

const featuredProjectNames = [
  "WeatherApp_ReactResumeProject",
  "E-Commerce_Website",
  "Pro_ForCecilAnna_sortSerch",
];

const fallbackProjects: ProjectCard[] = [
  {
    name: "WeatherApp_ReactResumeProject",
    description: "Location-aware weather forecasting application built with React, TypeScript, and OpenWeather API.",
    html_url: "https://github.com/Johnrebu/WeatherApp_ReactResumeProject",
    homepage: "https://chimerical-sunburst-6fe1b4.netlify.app/",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["weather", "react", "api", "typescript"],
  },
  {
    name: "Pro_ForCecilAnna_sortSerch",
    description: "High-performance employee directory application with multi-column sorting and instant filtering.",
    html_url: "https://github.com/Johnrebu/Pro_ForCecilAnna_sortSerch",
    homepage: "https://stellular-cactus-7acb12.netlify.app/",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["directory", "sorting", "ui", "usememo"],
  },
  {
    name: "E-Commerce_Website",
    description: "Full storefront web application with interactive product catalog, shopping cart, and checkout flow.",
    html_url: "https://github.com/Johnrebu/E-Commerce_Website",
    homepage: "https://ecommercejohn.netlify.app/",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["ecommerce", "react", "frontend", "context-api"],
  },
];

const liveClientProjects: ProjectCard[] = [
  {
    name: "Money Pechu Events",
    description: "Modern event management and registration web platform built for Money Pechu Events, featuring interactive event schedules, registration flows, and mobile UX.",
    html_url: "https://github.com/Johnrebu/event-companion",
    homepage: "https://moneypechuevents.netlify.app/",
    language: "React / TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["events", "react", "live-client", "netlify"],
  },
  {
    name: "Rebekha Caterers",
    description: "Full catering business web portal featuring service menu showcases, event package booking, interactive galleries, and instant client query workflows.",
    html_url: "https://github.com/Johnrebu/rebekha-catering-website",
    homepage: "https://rebekhacaterers.online/",
    language: "Full-Stack",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["catering", "business", "live-client", "full-stack"],
  },
  {
    name: "Tiffin Coffee Range CRM",
    description: "Custom enterprise CRM & administrative management portal built for Tiffin Coffee Range, handling customer relationship tracking, order workflows, and analytics.",
    html_url: "https://github.com/Johnrebu/lead-hub",
    homepage: "https://crm.tiffincoffeerange.com/",
    language: "Python / React",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["crm", "enterprise", "python", "live-client"],
  },
  {
    name: "Dalphina Academy",
    description: "Educational academy web portal featuring course curriculums, interactive inquiry channels, student enrollment pathways, and clean mobile UX.",
    html_url: "https://github.com/Johnrebu/iragu-foundation-support",
    homepage: "https://dalphinaacademy.netlify.app/",
    language: "React / TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["academy", "education", "react", "live-client"],
  },
  {
    name: "Tiffin Coffee Range",
    description: "Official commercial website for Tiffin Coffee Range brand showcasing food & beverage offerings, outlet locations, dynamic menus, and brand experience.",
    html_url: "https://github.com/Johnrebu/TiffinCoffeeRange",
    homepage: "https://tiffincoffeerange.com/",
    language: "Full-Stack",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["commercial", "brand", "full-stack", "live-client"],
  },
];

const engineeringPillars = [
  {
    icon: Workflow,
    title: "User-Centric Interface Design",
    description:
      "Crafting clear visual hierarchies, responsive layouts, and intuitive interaction flows for seamless user experiences.",
  },
  {
    icon: Cpu,
    title: "Modular Code Architecture",
    description:
      "Building reusable React component systems, typed TypeScript models, and scalable state boundaries for long-term maintainability.",
  },
  {
    icon: ShieldCheck,
    title: "Performance & Reliability",
    description:
      "Optimizing web vitals, mobile responsiveness, fast page loads, and accessibility standards across all viewports.",
  },
];

const starPositions = Array.from({ length: 48 }, (_, index) => ({
  left: `${(index * 13) % 100}%`,
  top: `${(index * 29) % 100}%`,
  size: index % 7 === 0 ? 3 : index % 3 === 0 ? 2 : 1.5,
  delay: (index % 9) * 0.35,
  duration: 2.8 + (index % 5) * 0.7,
}));

const formatProjectName = (name: string) => name.replace(/_/g, " ");

const getRepoDescription = (repo: ProjectCard) => {
  if (repo.description && repo.description.trim().length > 0) {
    return repo.description;
  }
  const fallback = fallbackProjects.find((f) => f.name === repo.name);
  if (fallback?.description) {
    return fallback.description;
  }
  const nameLower = repo.name.toLowerCase();
  if (nameLower.includes("weather")) {
    return "Interactive weather forecasting web application featuring location-aware search, dynamic forecast cards, and real-time weather API integration.";
  }
  if (nameLower.includes("commerce") || nameLower.includes("e-commerce")) {
    return "E-commerce storefront web application built with React, featuring product filtering, cart management, and responsive shopping UI.";
  }
  if (nameLower.includes("sort") || nameLower.includes("cecil") || nameLower.includes("directory")) {
    return "High-performance employee directory and management portal with multi-column sorting, instant search, and optimized React state management.";
  }
  return "Production-ready web engineering project built with modern frontend tools, clean architecture, and responsive UI.";
};

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useSeo({
    title: "Projects & Portfolio - Johnson T | Full-Stack Software Engineer",
    description:
      "Explore Johnson T's featured web applications, commercial client platforms, enterprise CRMs, and open-source GitHub builds built with React, TypeScript, and Python.",
    keywords:
      "Johnson T projects, React developer portfolio, full stack applications, commercial websites, GitHub repositories, web engineering",
  });

  useEffect(() => {
    const controller = new AbortController();

    const loadRepos = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(`GitHub API error (${response.status})`);
        }

        const data = (await response.json()) as GitHubRepo[];
        const cleaned = data
          .filter((repo) => !repo.fork && !repo.archived)
          .sort(
            (a, b) =>
              new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          );

        setRepos(cleaned);
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setError("Unable to connect to GitHub API right now.");
        }
      } finally {
        setLoading(false);
      }
    };

    void loadRepos();
    return () => controller.abort();
  }, []);

  const featuredProjects = useMemo(() => {
    if (!repos.length) return [];
    const byName = new Map(repos.map((repo) => [repo.name, repo]));

    return featuredProjectNames
      .map((name): GitHubRepo | null => {
        const repo = byName.get(name);
        if (!repo) return null;
        return {
          ...repo,
          description: getRepoDescription(repo),
        };
      })
      .filter((repo): repo is GitHubRepo => repo !== null);
  }, [repos]);

  const featuredDisplayProjects = useMemo<ProjectCard[]>(
    () => (featuredProjects.length ? featuredProjects : fallbackProjects).slice(0, 3),
    [featuredProjects]
  );

  const otherProjects = useMemo(() => {
    const featuredSet = new Set(featuredDisplayProjects.map((repo) => repo.name));
    return repos.filter((repo) => !featuredSet.has(repo.name));
  }, [repos, featuredDisplayProjects]);

  const dataFeed = useMemo<ProjectCard[]>(
    () => (repos.length ? repos : fallbackProjects),
    [repos]
  );

  const portfolioMetrics = useMemo(
    () => ({
      repoCount: dataFeed.length,
      liveCount: liveClientProjects.length,
    }),
    [dataFeed]
  );

  const renderProjectActions = (repo: ProjectCard) => (
    <div className="flex flex-wrap gap-2 pt-2 items-center">
      {repo.homepage && (
        <a
          href={repo.homepage}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 dark:bg-gradient-to-r dark:from-cyan-400 dark:to-teal-300 px-4 py-2 text-xs font-bold text-white dark:text-slate-950 transition hover:scale-105 shadow-sm"
        >
          <ExternalLink size={14} />
          <span>Launch Site</span>
        </a>
      )}
      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 dark:border-white/15 bg-slate-100 dark:bg-white/5 px-4 py-2 text-xs font-semibold text-slate-800 dark:text-white transition hover:bg-slate-200 dark:hover:bg-white/10 hover:border-cyan-400"
      >
        <Github size={14} />
        <span>View Source</span>
      </a>
    </div>
  );

  const renderRepositoryCard = (repo: ProjectCard, index: number) => (
    <motion.article
      key={repo.name}
      className="group relative flex flex-col justify-between rounded-[1.8rem] border border-slate-200/90 bg-white/80 p-6 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-zinc-950/75 backdrop-blur-xl"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-300">
            {repo.language || "Web Stack"}
          </span>
          <span className="rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-2.5 py-0.5 text-[11px] font-semibold text-slate-700 dark:text-zinc-300">
            {repo.homepage ? "Live Site" : "Source Code"}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
          {formatProjectName(repo.name)}
        </h3>

        <p className="text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
          {getRepoDescription(repo)}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {(repo.topics?.length ? repo.topics : [repo.language?.toLowerCase() || "react"]).slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="rounded-md border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:text-zinc-300"
            >
              #{topic}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-5 mt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-3">
        {renderProjectActions(repo)}
      </div>
    </motion.article>
  );

  return (
    <motion.div
      className="text-left space-y-12 pb-10"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
    >
      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#050b1d] px-6 py-10 shadow-[0_35px_120px_rgba(2,6,23,0.45)] sm:px-10 lg:px-12 lg:py-14">
        {/* Background Radial Glows */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_36%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />

        {/* Ambient Stars */}
        {starPositions.map((star, index) => (
          <motion.span
            key={`star-${index}`}
            className="pointer-events-none absolute rounded-full bg-cyan-100"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
            }}
            animate={{ opacity: [0.2, 0.9, 0.2], scale: [1, 1.25, 1] }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          {/* Left Hero Text */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-200 backdrop-blur-md">
                <Sparkles size={14} className="text-cyan-300 animate-pulse" />
                Featured Portfolio & Live Projects
              </span>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
            >
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-5xl leading-tight">
                Featured Projects &
                <span className="block mt-1 bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Engineering Work
                </span>
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-8">
                A showcase of commercial client platforms, enterprise CRMs, production web builds, and open-source applications engineered with React, TypeScript, and Python.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-3 pt-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.16 }}
            >
              <a
                href="#live-commercial-projects"
                className="cosmos-button inline-flex items-center gap-2 text-sm font-semibold shadow-lg shadow-cyan-500/20"
              >
                View Live Client Builds
                <ArrowRight size={16} />
              </a>

              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noreferrer"
                className="cosmos-button-secondary inline-flex items-center gap-2 text-sm font-semibold"
              >
                <Github size={16} />
                GitHub Profile
              </a>
            </motion.div>
          </div>

          {/* Right Metrics Grid */}
          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            <div className="space-panel p-6 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">Live Client Sites</span>
                <Globe2 size={18} className="text-cyan-400" />
              </div>
              <p className="text-3xl font-extrabold text-white">5 Commercial</p>
              <p className="text-xs text-slate-300">Deployed web platforms & CRM systems</p>
            </div>

            <div className="space-panel p-6 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">Total Codebases</span>
                <Code2 size={18} className="text-cyan-400" />
              </div>
              <p className="text-3xl font-extrabold text-white">{portfolioMetrics.repoCount}+ Repos</p>
              <p className="text-xs text-slate-300">GitHub open-source repositories</p>
            </div>

            <div className="space-panel p-6 space-y-2 sm:col-span-2 lg:col-span-1 xl:col-span-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">Primary Stack</span>
                <Layers3 size={18} className="text-cyan-400" />
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {["React", "TypeScript", "Python", "Tailwind CSS", "REST APIs", "Node.js"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LIVE COMMERCIAL & CLIENT DEPLOYMENTS */}
      <section id="live-commercial-projects" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-700 dark:text-cyan-300 backdrop-blur-md">
              <Globe2 size={14} className="text-cyan-400" />
              Commercial Deployments
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              Live Client Websites & Platforms
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-zinc-300 max-w-2xl">
              Production web applications, event platforms, enterprise CRMs, and commercial business sites launched for live clients.
            </p>
          </div>

          <div className="rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-zinc-950/80 px-4 py-2 text-xs font-bold text-slate-800 dark:text-cyan-200 shrink-0 self-start sm:self-auto shadow-sm backdrop-blur-xl">
            5 Live Web Deployments
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {liveClientProjects.map((project, index) => (
            <motion.article
              key={project.name}
              className="group relative flex flex-col justify-between rounded-[1.8rem] border border-slate-200/90 bg-white/80 p-6 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-zinc-950/75 backdrop-blur-xl"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-bold text-cyan-600 dark:text-cyan-300">
                    {project.language}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live Site
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.topics?.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-md border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:text-zinc-300"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-3">
                <a
                  href={project.homepage!}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 dark:bg-gradient-to-r dark:from-cyan-400 dark:to-teal-300 px-4 py-2 text-xs font-bold text-white dark:text-slate-950 transition hover:scale-105 shadow-sm"
                >
                  <ExternalLink size={14} />
                  <span>Launch Website</span>
                </a>

                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white transition"
                >
                  <Github size={14} />
                  <span>Code</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* FEATURED ENGINEERING PROJECTS */}
      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-700 dark:text-cyan-300 backdrop-blur-md">
              <Zap size={14} className="text-cyan-400" />
              Featured Applications
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              Frontend & Web Applications
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredDisplayProjects.map((repo, index) => (
            <motion.article
              key={repo.name}
              className="group relative flex flex-col justify-between rounded-[1.8rem] border border-slate-200/90 bg-white/80 p-6 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-zinc-950/75 backdrop-blur-xl"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-bold text-cyan-600 dark:text-cyan-300">
                    {repo.language || "TypeScript"}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 px-2.5 py-0.5 text-[11px] font-bold text-cyan-700 dark:text-cyan-300 border border-cyan-300/30">
                    Featured
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {formatProjectName(repo.name)}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
                    {getRepoDescription(repo)}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {(repo.topics?.length ? repo.topics : [repo.language?.toLowerCase() || "react"]).slice(0, 4).map((topic) => (
                    <span
                      key={topic}
                      className="rounded-md border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:text-zinc-300"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-3">
                {renderProjectActions(repo)}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ENGINEERING PILLARS */}
      <section className="grid gap-6 md:grid-cols-3">
        {engineeringPillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={pillar.title}
              className="rounded-[1.8rem] border border-slate-200/90 bg-white/80 p-6 shadow-md backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/75 space-y-3"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-600 dark:text-cyan-300 border border-cyan-300/30">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{pillar.title}</h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
                {pillar.description}
              </p>
            </motion.div>
          );
        })}
      </section>

      {/* OPEN SOURCE GITHUB REPOSITORIES */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-700 dark:text-cyan-300 backdrop-blur-md">
              <Github size={14} className="text-cyan-400" />
              Open Source Repositories
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              All GitHub Codebases
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-zinc-300 max-w-2xl">
              Explore public GitHub repositories, code experiments, and open-source frontend components.
            </p>
          </div>

          <a
            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 px-5 py-2.5 text-xs font-bold text-slate-800 dark:text-white transition hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 shrink-0 self-start md:self-auto shadow-sm"
          >
            <span>Browse Full GitHub Profile</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {loading && (
          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-zinc-950/70 p-6 text-sm text-slate-600 dark:text-zinc-400 text-center">
            Fetching GitHub repositories...
          </div>
        )}

        {error && (
          <div className="rounded-2xl border border-amber-300/30 bg-amber-50 dark:bg-amber-400/10 p-6 text-sm text-amber-800 dark:text-amber-200">
            {error} Featured commercial and showcase projects are displayed above.
          </div>
        )}

        {!loading && !error && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.length ? (
              otherProjects.map(renderRepositoryCard)
            ) : (
              <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-zinc-950/70 p-6 text-sm text-slate-600 dark:text-zinc-400">
                No additional repositories found.
              </div>
            )}
          </div>
        )}
      </section>
    </motion.div>
  );
}