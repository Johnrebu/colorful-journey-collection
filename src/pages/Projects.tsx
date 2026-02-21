import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, GitFork, Github, Rocket, Star } from "lucide-react";
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

const GITHUB_USERNAME = "Johnrebu";

const featuredProjectNames = [
  "WeatherApp_ReactResumeProject",
  "E-Commerce_Website",
  "Pro_ForCecilAnna_sortSerch",
];

const fallbackProjects = [
  {
    name: "WeatherApp_ReactResumeProject",
    description: "React weather app with modern UI and API integration.",
    html_url: "https://github.com/Johnrebu/WeatherApp_ReactResumeProject",
    homepage: "https://chimerical-sunburst-6fe1b4.netlify.app/",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    name: "Pro_ForCecilAnna_sortSerch",
    description: "Employee directory with search, sorting, and filtering workflows.",
    html_url: "https://github.com/Johnrebu/Pro_ForCecilAnna_sortSerch",
    homepage: "https://stellular-cactus-7acb12.netlify.app/",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    name: "E-Commerce_Website",
    description: "MERN-style e-commerce experience with React frontend.",
    html_url: "https://github.com/Johnrebu/E-Commerce_Website",
    homepage: "https://ecommercejohn.netlify.app/",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
  },
];

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Set up SEO meta tags for projects page
  useSeo({
    title: "Projects - Johnson's Portfolio | React, TypeScript & Web Development",
    description: "Explore Johnson's featured projects including weather apps, e-commerce platforms, and modern web applications built with React, TypeScript, and cutting-edge technologies.",
    keywords: "projects, portfolio, React, TypeScript, JavaScript, web development, GitHub, full-stack",
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
          setError("Unable to fetch GitHub projects right now.");
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

  const otherProjects = useMemo(() => {
    const featuredSet = new Set(featuredProjects.map((repo) => repo.name));
    return repos.filter((repo) => !featuredSet.has(repo.name));
  }, [repos, featuredProjects]);

  const renderCard = (repo: {
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    topics?: string[];
    updated_at?: string;
  }) => (
    <article
      key={repo.name}
      className="portfolio-panel flex h-full flex-col justify-between"
    >
      <div>
        <h3 className="font-display text-xl text-slate-900 dark:text-zinc-100">
          {repo.name.replaceAll("_", " ")}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
          {repo.description || "No description provided yet."}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {repo.language ? (
            <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 dark:border-zinc-600 dark:text-zinc-200">
              {repo.language}
            </span>
          ) : null}
          {repo.topics?.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
            >
              #{topic}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 space-y-3">
        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-zinc-400">
          <span className="inline-flex items-center gap-1">
            <Star size={14} />
            {repo.stargazers_count}
          </span>
          <span className="inline-flex items-center gap-1">
            <GitFork size={14} />
            {repo.forks_count}
          </span>
          {repo.updated_at ? <span>Updated {formatDate(repo.updated_at)}</span> : null}
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#4285F4] hover:text-[#4285F4] dark:border-zinc-600 dark:text-zinc-200"
          >
            <Github size={15} />
            Code
          </a>
          {repo.homepage ? (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4285F4] to-[#34A853] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );

  return (
    <motion.div
      className="space-y-10"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45 }}
    >
      <section className="google-surface relative overflow-hidden rounded-[2rem] p-6 md:p-10">
        <div className="google-grid-bg absolute inset-0 opacity-60" />
        <div className="relative">
        <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-zinc-400">
          Real GitHub Data
        </p>
        <h1 className="mt-2 font-display text-4xl text-slate-900 dark:text-zinc-100 md:text-5xl">
          Projects synced from GitHub
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 dark:text-zinc-300">
          This page auto-loads repositories from{" "}
          <a
            className="font-semibold text-[#1456d8] underline underline-offset-4"
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
          >
            github.com/{GITHUB_USERNAME}
          </a>
          . Add a good description and topics in GitHub, and your portfolio updates here automatically.
        </p>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center gap-2 text-slate-800 dark:text-zinc-100">
          <Rocket size={18} className="text-[#EA4335]" />
          <h2 className="font-display text-2xl">Featured Projects</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {(featuredProjects.length ? featuredProjects : fallbackProjects).map(renderCard)}
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-display text-2xl text-slate-900 dark:text-zinc-100">
          All Recent Repositories
        </h2>

        {loading ? (
          <div className="portfolio-panel text-sm text-slate-600 dark:text-zinc-300">
            Loading GitHub repositories...
          </div>
        ) : null}

        {error ? (
          <div className="portfolio-panel text-sm text-red-600 dark:text-red-300">
            {error} Showing fallback projects above.
          </div>
        ) : null}

        {!loading && !error ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.length ? (
              otherProjects.map(renderCard)
            ) : (
              <div className="portfolio-panel text-sm text-slate-600 dark:text-zinc-300">
                No additional repositories found yet.
              </div>
            )}
          </div>
        ) : null}
      </section>
    </motion.div>
  );
}
