import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  Cpu,
  ExternalLink,
  GitFork,
  Github,
  Globe2,
  Orbit,
  Radar,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Telescope,
  TimerReset,
  Workflow,
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
    description: "React weather app with modern UI, location-aware forecasting, and clean data presentation.",
    html_url: "https://github.com/Johnrebu/WeatherApp_ReactResumeProject",
    homepage: "https://chimerical-sunburst-6fe1b4.netlify.app/",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["weather", "react", "api"],
  },
  {
    name: "Pro_ForCecilAnna_sortSerch",
    description: "Employee directory focused on search, sorting, and filtering workflows with production-ready UX.",
    html_url: "https://github.com/Johnrebu/Pro_ForCecilAnna_sortSerch",
    homepage: "https://stellular-cactus-7acb12.netlify.app/",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["directory", "sorting", "ui"],
  },
  {
    name: "E-Commerce_Website",
    description: "Full storefront experience with product browsing, cart flows, and conversion-focused presentation.",
    html_url: "https://github.com/Johnrebu/E-Commerce_Website",
    homepage: "https://ecommercejohn.netlify.app/",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["ecommerce", "react", "frontend"],
  },
];

const liveClientProjects: ProjectCard[] = [
  {
    name: "Money Pechu Events",
    description: "Modern event management and ticketing web platform built for Money Pechu Events, featuring interactive event schedules, registration flows, and mobile UX.",
    html_url: "https://github.com/Johnrebu",
    homepage: "https://moneypechuevents.netlify.app/",
    language: "React / TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["events", "react", "live-client", "netlify"],
  },
  {
    name: "Rebekha Caterers",
    description: "Full catering business web portal featuring service menu showcases, event package booking, interactive galleries, and instant client query workflows.",
    html_url: "https://github.com/Johnrebu",
    homepage: "https://rebekhacaterers.online/",
    language: "Full-Stack",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["catering", "business", "live-client", "full-stack"],
  },
  {
    name: "Tiffin Coffee Range CRM",
    description: "Custom enterprise CRM & administrative management portal built for Tiffin Coffee Range, handling customer relationship tracking, order workflows, and analytics.",
    html_url: "https://github.com/Johnrebu",
    homepage: "https://crm.tiffincoffeerange.com/",
    language: "Python / React",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["crm", "enterprise", "python", "live-client"],
  },
  {
    name: "Dalphina Academy",
    description: "Educational academy web portal featuring course curriculums, interactive inquiry channels, student enrollment pathways, and clean mobile UX.",
    html_url: "https://github.com/Johnrebu",
    homepage: "https://dalphinaacademy.netlify.app/",
    language: "React / TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["academy", "education", "react", "live-client"],
  },
  {
    name: "Tiffin Coffee Range",
    description: "Official commercial website for Tiffin Coffee Range brand showcasing food & beverage offerings, outlet locations, dynamic menus, and brand experience.",
    html_url: "https://github.com/Johnrebu",
    homepage: "https://tiffincoffeerange.com/",
    language: "Full-Stack",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["commercial", "brand", "full-stack", "live-client"],
  },
];

const missionThemes = [
  {
    label: "Flagship Mission",
    planetClass:
      "bg-[radial-gradient(circle_at_30%_30%,#f9fcff_0%,#bfe8ff_22%,#3d7ed8_55%,#102459_100%)]",
    ringClass: "border-cyan-300/40",
    glowClass: "bg-cyan-400/25",
    accentClass: "text-cyan-200",
    borderClass: "border-cyan-300/20",
    buttonClass:
      "bg-cyan-400/15 text-cyan-100 hover:bg-cyan-400/25 border border-cyan-300/25",
  },
  {
    label: "Commerce Orbit",
    planetClass:
      "bg-[radial-gradient(circle_at_35%_30%,#fff4d4_0%,#f0cb72_28%,#c18426_58%,#5b2e0d_100%)]",
    ringClass: "border-amber-300/40",
    glowClass: "bg-amber-400/25",
    accentClass: "text-amber-100",
    borderClass: "border-amber-300/20",
    buttonClass:
      "bg-amber-400/15 text-amber-50 hover:bg-amber-400/25 border border-amber-300/25",
  },
  {
    label: "Data Relay",
    planetClass:
      "bg-[radial-gradient(circle_at_35%_28%,#ccd8ff_0%,#6888ff_25%,#2245a7_58%,#09173e_100%)]",
    ringClass: "border-indigo-300/40",
    glowClass: "bg-indigo-400/25",
    accentClass: "text-indigo-100",
    borderClass: "border-indigo-300/20",
    buttonClass:
      "bg-indigo-400/15 text-indigo-50 hover:bg-indigo-400/25 border border-indigo-300/25",
  },
];

const missionSystems = [
  {
    icon: Workflow,
    title: "Discovery Runway",
    description:
      "Each project starts with a clear product goal, structured user flow, and a delivery scope that avoids weak UX drift.",
  },
  {
    icon: Cpu,
    title: "System Architecture",
    description:
      "React components, reusable UI patterns, and practical state boundaries keep builds maintainable as the surface area grows.",
  },
  {
    icon: ShieldCheck,
    title: "Launch QA",
    description:
      "Accessibility, responsive behavior, and clean interaction details are treated as shipping requirements, not polish later.",
  },
  {
    icon: Radar,
    title: "Telemetry Loop",
    description:
      "GitHub activity, live demos, and portfolio presentation stay aligned so the page reflects current execution instead of stale screenshots.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Map The Mission",
    description: "Translate the product idea into screens, hierarchy, and measurable interaction priorities.",
  },
  {
    step: "02",
    title: "Build The Core",
    description: "Ship the main layout, reusable components, and responsive behavior with production-focused structure.",
  },
  {
    step: "03",
    title: "Launch And Iterate",
    description: "Refine the visual system, tighten polish, and keep the GitHub-backed portfolio updated continuously.",
  },
];

const starPositions = Array.from({ length: 60 }, (_, index) => ({
  left: `${(index * 13) % 100}%`,
  top: `${(index * 29) % 100}%`,
  size: index % 7 === 0 ? 3 : index % 3 === 0 ? 2.5 : 2,
  delay: (index % 9) * 0.35,
  duration: 2.8 + (index % 5) * 0.7,
}));

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const formatProjectName = (name: string) => name.replace(/_/g, " ");

const getMissionTheme = (index: number) => missionThemes[index % missionThemes.length];

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useSeo({
    title: "Projects - Johnson's Portfolio | Premium React Builds & Launches",
    description:
      "Explore Johnson's featured projects through a premium space-inspired portfolio layout with live GitHub sync, featured launches, and production-ready frontend work.",
    keywords:
      "projects, portfolio, React, TypeScript, JavaScript, GitHub, premium portfolio, frontend engineering, live demos",
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
          setError("GitHub sync is unavailable right now.");
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
      .map((name) => byName.get(name))
      .filter((repo): repo is GitHubRepo => Boolean(repo));
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
      liveCount: dataFeed.filter((repo) => Boolean(repo.homepage)).length,
      starCount: dataFeed.reduce((sum, repo) => sum + repo.stargazers_count, 0),
      forkCount: dataFeed.reduce((sum, repo) => sum + repo.forks_count, 0),
    }),
    [dataFeed]
  );

  const languageMix = useMemo(
    () =>
      Array.from(new Set(dataFeed.map((repo) => repo.language).filter(Boolean) as string[])).slice(
        0,
        5
      ),
    [dataFeed]
  );

  const syncStatus = loading ? "Synchronizing GitHub feed" : error ? "Fallback mode active" : "GitHub feed live";

  const renderProjectActions = (repo: ProjectCard, className: string) => (
    <div className="flex flex-wrap gap-2">
      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${className}`}
      >
        <Github size={15} />
        Source
      </a>
      {repo.homepage ? (
        <a
          href={repo.homepage}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#35e0ff] to-[#24c5b8] px-4 py-2 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(53,224,255,0.35)]"
        >
          <ExternalLink size={15} />
          Live Demo
        </a>
      ) : null}
    </div>
  );

  const renderRepositoryCard = (repo: ProjectCard, index: number) => (
    <motion.article
      key={repo.name}
      className="space-panel group relative overflow-hidden p-6"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      whileHover={{ y: -6 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(53,224,255,0.12),transparent_40%)] opacity-0 transition group-hover:opacity-100" />
      <div className="relative flex h-full flex-col justify-between gap-6">
        <div>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/70">
                {repo.language || "Web Project"}
              </p>
              <h3 className="mt-2 text-xl text-white">
                {formatProjectName(repo.name)}
              </h3>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-200/80">
              {repo.homepage ? "Live" : "Code"}
            </span>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            {repo.description || "Project description is being refined in GitHub."}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {repo.topics?.slice(0, 3).map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-50/85"
              >
                #{topic}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300/75">
            <span className="inline-flex items-center gap-1.5">
              <Star size={14} className="text-amber-300" />
              {repo.stargazers_count}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <GitFork size={14} className="text-cyan-300" />
              {repo.forks_count}
            </span>
            {repo.updated_at ? <span>Updated {formatDate(repo.updated_at)}</span> : null}
          </div>

          {renderProjectActions(repo, "border border-white/12 bg-white/5 text-white")}
        </div>
      </div>
    </motion.article>
  );

  return (
    <motion.div
      className="text-left"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45 }}
    >
      <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#060c1f] px-4 py-5 shadow-[0_35px_120px_rgba(2,6,23,0.45)] sm:px-6 lg:px-8 lg:py-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.15),transparent_28%),radial-gradient(circle_at_top_right,rgba(99,102,241,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.12),transparent_24%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:90px_90px] opacity-20" />

        {starPositions.map((star, index) => (
          <motion.span
            key={`${star.left}-${star.top}-${index}`}
            className="pointer-events-none absolute rounded-full bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
            }}
            animate={{ opacity: [0.35, 1, 0.35], scale: [1, 1.25, 1] }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="relative space-y-6 lg:space-y-8">
          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              className="space-panel relative overflow-hidden p-7 sm:p-8"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-cyan-500/15 blur-3xl" />
              <div className="absolute right-10 top-12 h-28 w-28 rounded-full border border-cyan-300/20" />
              <div className="absolute right-14 top-16 h-20 w-20 rounded-full border border-cyan-300/10" />

              <div className="relative flex h-full flex-col justify-between gap-10">
                <div className="space-y-6">
                  <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
                    <Sparkles size={14} />
                    Premium Project Flight Deck
                  </span>

                  <div className="max-w-3xl space-y-4">
                    <h1 className="text-4xl leading-tight text-white md:text-6xl">
                      Chart a stronger visual identity for your
                      <span className="block bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        project showcase.
                      </span>
                    </h1>
                    <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                      This page now presents your GitHub-backed work like a premium launch site:
                      cinematic layout, stronger hierarchy, live repo sync, and clearer calls to
                      action for both code review and demo browsing.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`https://github.com/${GITHUB_USERNAME}`}
                      target="_blank"
                      rel="noreferrer"
                      className="cosmos-button inline-flex items-center gap-2"
                    >
                      Explore GitHub
                      <ArrowRight size={16} />
                    </a>
                    <a href="#featured-projects" className="cosmos-button-secondary inline-flex items-center gap-2">
                      View Featured Builds
                      <Rocket size={16} />
                    </a>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    {
                      label: "Repositories",
                      value: portfolioMetrics.repoCount.toString().padStart(2, "0"),
                    },
                    {
                      label: "Live Demos",
                      value: portfolioMetrics.liveCount.toString().padStart(2, "0"),
                    },
                    {
                      label: "Languages",
                      value: languageMix.length.toString().padStart(2, "0"),
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4"
                    >
                      <p className="text-3xl font-semibold text-white">{item.value}</p>
                      <p className="mt-1 text-sm text-slate-300">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="grid gap-6">
              <motion.div
                className="space-panel relative min-h-[320px] overflow-hidden p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.14),transparent_20%),radial-gradient(circle_at_72%_28%,rgba(56,189,248,0.18),transparent_24%),radial-gradient(circle_at_65%_78%,rgba(99,102,241,0.18),transparent_28%)]" />
                <div className="absolute left-8 top-8 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_35%_30%,#dff7ff_0%,#72d9ff_30%,#1944a4_62%,#0a1026_100%)] shadow-[0_0_40px_rgba(34,211,238,0.25)]" />
                <div className="absolute left-5 top-4 h-36 w-36 rounded-full border border-cyan-200/20" />
                <div className="absolute left-2 top-1 h-44 w-44 rounded-full border border-cyan-200/10" />
                <div className="absolute right-8 top-14 h-24 w-24 rounded-full bg-[radial-gradient(circle_at_35%_35%,#fff4d4_0%,#f0cb72_28%,#c18426_58%,#5b2e0d_100%)] shadow-[0_0_32px_rgba(250,204,21,0.18)]" />
                <div className="absolute right-16 top-44 h-44 w-44 rounded-full border border-white/10" />
                <div className="absolute right-10 top-44 h-44 w-44 -translate-y-6 rotate-[-16deg] rounded-full border border-white/10" />
                <div className="absolute bottom-10 left-1/2 h-20 w-20 -translate-x-1/2 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm" />
                <div className="absolute bottom-16 left-1/2 h-12 w-12 -translate-x-1/2 rounded-full border border-cyan-300/20 bg-cyan-300/10" />

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/75">
                        Mission Control
                      </p>
                      <h2 className="mt-3 max-w-sm text-3xl text-white">
                        A space-grade presentation layer for your portfolio work.
                      </h2>
                    </div>
                    <Orbit className="text-cyan-300/70" size={28} />
                  </div>

                  <div className="max-w-sm">
                    <p className="text-sm leading-7 text-slate-300">
                      Instead of a plain repository list, the page now behaves like a premium
                      product landing page with stronger mood, structure, and conversion flow.
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Sync Status",
                    value: syncStatus,
                    detail: error || "Automatic GitHub repository ingestion is active.",
                    icon: TimerReset,
                  },
                  {
                    title: "Signal Strength",
                    value: `${portfolioMetrics.starCount} stars / ${portfolioMetrics.forkCount} forks`,
                    detail: "Repository activity is surfaced directly inside the design.",
                    icon: Telescope,
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.article
                      key={item.title}
                      className="space-panel p-5"
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.14 + index * 0.06 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="text-sm text-slate-300">{item.title}</p>
                          <p className="text-lg text-white">{item.value}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-slate-300">{item.detail}</p>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <section id="featured-projects" className="space-panel p-6 sm:p-7">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/75">
                    Choose Your Adventure
                  </p>
                  <h2 className="mt-2 text-3xl text-white">Featured Launches</h2>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                  {featuredDisplayProjects.length} highlighted builds
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {featuredDisplayProjects.map((repo, index) => {
                  const theme = getMissionTheme(index);

                  return (
                    <motion.article
                      key={repo.name}
                      className={`relative overflow-hidden rounded-[2rem] border bg-[linear-gradient(180deg,rgba(16,28,64,0.92),rgba(8,14,33,0.94))] p-5 ${theme.borderClass}`}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: index * 0.08 }}
                      whileHover={{ y: -8 }}
                    >
                      <div className={`absolute right-4 top-3 h-28 w-28 rounded-full blur-2xl ${theme.glowClass}`} />
                      <div className="relative flex h-full flex-col">
                        <div className="mb-6 flex min-h-[9rem] items-center justify-center">
                          <div className="relative">
                            <div className={`h-28 w-28 rounded-full shadow-[0_18px_50px_rgba(15,23,42,0.35)] ${theme.planetClass}`} />
                            <div className={`absolute left-1/2 top-1/2 h-16 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border ${theme.ringClass}`} />
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <p className={`text-xs uppercase tracking-[0.2em] ${theme.accentClass}`}>
                              {theme.label}
                            </p>
                            <h3 className="mt-2 text-2xl text-white">
                              {formatProjectName(repo.name)}
                            </h3>
                          </div>

                          <p className="text-sm leading-7 text-slate-300">
                            {repo.description || "Description is being expanded in GitHub."}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {(repo.topics?.slice(0, 2).length ? repo.topics?.slice(0, 2) : [repo.language || "web"])
                              ?.map((item) => (
                                <span
                                  key={item}
                                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                                >
                                  {item}
                                </span>
                              ))}
                          </div>
                        </div>

                        <div className="mt-6 space-y-4">
                          <div className="flex items-center gap-4 text-xs text-slate-300/75">
                            <span className="inline-flex items-center gap-1.5">
                              <Star size={14} className="text-amber-300" />
                              {repo.stargazers_count}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <GitFork size={14} className="text-cyan-300" />
                              {repo.forks_count}
                            </span>
                          </div>

                          {renderProjectActions(repo, theme.buttonClass)}
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </section>

            <section className="grid gap-4">
              {missionSystems.map((system, index) => {
                const Icon = system.icon;

                return (
                  <motion.article
                    key={system.title}
                    className="space-panel p-5"
                    initial={{ opacity: 0, x: 12, y: 12 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.06 * index }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl text-white">{system.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-300">
                          {system.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </section>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <section className="space-panel p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                  <Boxes size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/75">
                    Project Matrix
                  </p>
                  <h2 className="text-3xl text-white">Featured Build Comparison</h2>
                </div>
              </div>

              <div className="mt-6 overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-0 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
                  <thead>
                    <tr className="bg-white/5">
                      <th className="border-b border-white/10 px-4 py-4 text-left text-xs uppercase tracking-[0.2em] text-slate-300">
                        Signal
                      </th>
                      {featuredDisplayProjects.map((repo) => (
                        <th
                          key={repo.name}
                          className="border-b border-white/10 px-4 py-4 text-left text-xs uppercase tracking-[0.2em] text-white"
                        >
                          {formatProjectName(repo.name)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        label: "Language",
                        values: featuredDisplayProjects.map((repo) => repo.language || "Web"),
                      },
                      {
                        label: "Live Demo",
                        values: featuredDisplayProjects.map((repo) => (repo.homepage ? "Available" : "Private")),
                      },
                      {
                        label: "Stars",
                        values: featuredDisplayProjects.map((repo) => repo.stargazers_count.toString()),
                      },
                      {
                        label: "Forks",
                        values: featuredDisplayProjects.map((repo) => repo.forks_count.toString()),
                      },
                      {
                        label: "Updated",
                        values: featuredDisplayProjects.map((repo) =>
                          repo.updated_at ? formatDate(repo.updated_at) : "Portfolio default"
                        ),
                      },
                    ].map((row) => (
                      <tr key={row.label}>
                        <td className="border-b border-white/10 px-4 py-4 text-sm font-medium text-slate-200">
                          {row.label}
                        </td>
                        {row.values.map((value, index) => (
                          <td
                            key={`${row.label}-${index}`}
                            className="border-b border-white/10 px-4 py-4 text-sm text-slate-300"
                          >
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-panel p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                  <Rocket size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/75">
                    Process
                  </p>
                  <h2 className="text-3xl text-white">How The Work Ships</h2>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {processSteps.map((item, index) => (
                  <motion.article
                    key={item.step}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.08 }}
                  >
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500 text-lg font-semibold text-slate-950">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-xl text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-cyan-300/15 bg-cyan-300/10 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/80">
                  Stack Mix
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {languageMix.length ? (
                    languageMix.map((language) => (
                      <span
                        key={language}
                        className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-white"
                      >
                        {language}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-slate-200">TypeScript-first frontend work</span>
                  )}
                </div>
              </div>
            </section>
          </div>

          {/* Live Production Sites Section */}
          <section className="space-panel p-6 sm:p-7">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                  <Globe2 size={14} />
                  Live Production Sites
                </span>
                <h2 className="mt-2 text-3xl font-bold text-white">Live Commercial & Client Deployments</h2>
                <p className="mt-2 text-sm text-slate-300">
                  Production client applications, enterprise CRMs, and live commercial websites launched on public domains.
                </p>
              </div>
              <div className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-semibold text-cyan-200 shrink-0 self-start sm:self-auto">
                5 Live Web Launches
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {liveClientProjects.map((project, index) => (
                <motion.article
                  key={project.name}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_20px_50px_rgba(2,6,23,0.5)]"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider font-semibold text-cyan-300">
                        {project.language}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live Online
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                        {project.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.topics?.map((topic) => (
                        <span
                          key={topic}
                          className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                        >
                          #{topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-3">
                    <a
                      href={project.homepage!}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-300 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                    >
                      <ExternalLink size={14} />
                      Launch Website
                    </a>

                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-400 transition hover:text-white"
                    >
                      <Github size={13} />
                      GitHub
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="space-panel p-6 sm:p-7">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/75">
                  Repository Atlas
                </p>
                <h2 className="mt-2 text-3xl text-white">All Recent Repositories</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                  Every card below still comes from your GitHub account. The redesign changes the
                  presentation, not the source of truth.
                </p>
              </div>
              <a
                href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
                target="_blank"
                rel="noreferrer"
                className="cosmos-button-secondary inline-flex items-center gap-2 self-start md:self-auto"
              >
                Browse Full GitHub
                <Globe2 size={16} />
              </a>
            </div>

            {loading ? (
              <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-300">
                Loading GitHub repositories...
              </div>
            ) : null}

            {error ? (
              <div className="mt-6 rounded-[1.75rem] border border-amber-300/20 bg-amber-400/10 px-5 py-4 text-sm text-amber-100">
                {error} Featured projects remain visible using portfolio fallback data.
              </div>
            ) : null}

            {!loading && !error ? (
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {otherProjects.length ? (
                  otherProjects.map(renderRepositoryCard)
                ) : (
                  <div className="rounded-[1.75rem] border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-300">
                    No additional repositories found yet.
                  </div>
                )}
              </div>
            ) : null}
          </section>
        </div>
      </section>
    </motion.div>
  );
}
// This is the projects page of the portfolio, showcasing the Github repository feed with a premium, space-themed design, live sync, and featured project highlights.