import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Code2,
  Video,
  Palette,
  Radio,
  Zap,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Clock,
  Users,
  Sparkles,
  Layers,
  Calendar,
} from "lucide-react";

export interface RolePillar {
  id: string;
  number: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  accentBg: string;
  focus: string;
  metrics: {
    emoji: string;
    title: string;
    detail: string;
    badge: string;
  }[];
}

const roleTitles = [
  "Full Stack Developer",
  "AI Video Creator",
  "Automation Specialist",
  "Graphic Designer",
  "Event Coordinator",
  "Content Creator",
];

const pillars: RolePillar[] = [
  {
    id: "engineering",
    number: "Pillar 1",
    title: "Full-Stack Engineering & System Automation",
    icon: <Code2 size={20} />,
    color: "#4285F4",
    accentBg: "border-blue-500/30 bg-blue-500/5 text-blue-600 dark:text-blue-400",
    focus:
      "Building and maintaining scalable backend infrastructure, core API architectures, and automated data workflows for Aionion Capital's digital ecosystem.",
    metrics: [
      {
        emoji: "⚡",
        title: "API & System Performance",
        detail: "Maintained sub-300ms response times on core backend API routes.",
        badge: "<300ms Response Time",
      },
      {
        emoji: "🔄",
        title: "Uptime & Reliability",
        detail: "Sustained ≥ 99.5% system uptime across production services.",
        badge: "≥ 99.5% System Uptime",
      },
      {
        emoji: "🤖",
        title: "Workflow Automation",
        detail: "Automated lead capture and CRM synchronization protocols with 100% data accuracy within 24 hours post-event.",
        badge: "100% CRM Sync Accuracy",
      },
      {
        emoji: "🛡️",
        title: "Code Quality",
        detail: "Maintained ≥ 80% test coverage with zero critical security vulnerabilities.",
        badge: "≥ 80% Test Coverage",
      },
    ],
  },
  {
    id: "ai-video",
    number: "Pillar 2",
    title: "AI Video Creation & Digital Content Strategy",
    icon: <Video size={20} />,
    color: "#EA4335",
    accentBg: "border-red-500/30 bg-red-500/5 text-red-600 dark:text-red-400",
    focus:
      "End-to-end production of AI-driven educational videos, creative visual scripting, and social media content for multi-platform channel growth.",
    metrics: [
      {
        emoji: "🎥",
        title: "Video Production",
        detail: "Scripted, edited, and published 4+ AI-focused educational videos per month.",
        badge: "4+ AI Videos / Mo",
      },
      {
        emoji: "📈",
        title: "Audience Growth",
        detail: "Maintained ≥ 40% average watch time and achieved +10% MoM subscriber growth.",
        badge: "≥ 40% Watch Time • +10% MoM Growth",
      },
      {
        emoji: "✂️",
        title: "Multi-Format Content",
        detail: "Produced short-form assets (YouTube Shorts, Instagram Reels) and optimized video metadata (titles, tags, descriptions) for maximum reach.",
        badge: "Multi-Format Metadata SEO",
      },
    ],
  },
  {
    id: "graphic-design",
    number: "Pillar 3",
    title: "Graphic Design & Creative Branding",
    icon: <Palette size={20} />,
    color: "#FBBC05",
    accentBg: "border-amber-500/30 bg-amber-500/5 text-amber-600 dark:text-amber-400",
    focus:
      "Designing promotional digital creatives, high-CTR YouTube thumbnails, event announcements, and marketing campaign visual assets.",
    metrics: [
      {
        emoji: "🎨",
        title: "Asset Delivery",
        detail: "Delivered 100% of digital campaign creatives minimum 5 days prior to launch, resulting in zero campaign delays.",
        badge: "100% Delivery (5 Days Ahead)",
      },
      {
        emoji: "🖼️",
        title: "Visual Assets",
        detail: "Created reusable branding templates, custom visual designs, and promotional banners for corporate and event initiatives.",
        badge: "Reusable Brand Templates",
      },
    ],
  },
  {
    id: "event-ops",
    number: "Pillar 4",
    title: "Event Coordination & Digital Operations",
    icon: <Radio size={20} />,
    color: "#34A853",
    accentBg: "border-emerald-500/30 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400",
    focus:
      "Managing end-to-end event production, AV technology, registration portals, vendor logistics, and live run-of-show orchestration.",
    metrics: [
      {
        emoji: "📡",
        title: "Live Tech Reliability",
        detail: "Maintained ≥ 99% AV and live-streaming uptime during sessions with zero unplanned tech failures.",
        badge: "≥ 99% AV & Live Uptime",
      },
      {
        emoji: "⏱️",
        title: "Production Readiness",
        detail: "Completed stage, AV, lighting, and tech setup dry-runs 2 hours before every live event.",
        badge: "2-Hour Pre-Event Dry-Run",
      },
      {
        emoji: "🤝",
        title: "Vendor & SOP Management",
        detail: "Managed production vendors with ≥ 95% escalation-free delivery and maintained strict production SOP compliance (≥ 90%).",
        badge: "≥ 95% Escalation-Free Delivery",
      },
    ],
  },
];

export default function CurrentRoleImpact() {
  const [activePillarId, setActivePillarId] = useState<string>("all");

  const displayedPillars =
    activePillarId === "all" ? pillars : pillars.filter((p) => p.id === activePillarId);

  return (
    <section className="portfolio-panel relative overflow-hidden rounded-[2.5rem] p-6 md:p-10 shadow-xl">
      {/* Background Accent Mesh */}
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-gradient-to-br from-[#4285F4]/10 via-[#FBBC05]/10 to-[#34A853]/10 blur-3xl pointer-events-none" />

      {/* Main Header */}
      <div className="relative z-10 space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/90 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/90 dark:text-zinc-200">
              <Building2 size={14} className="text-[#4285F4]" />
              Current Role & Measured Impact
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-slate-900 dark:text-zinc-100 md:text-4xl">
              Aionion Capital
            </h2>
            <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-zinc-400 flex items-center gap-2">
              <Calendar size={14} className="text-[#EA4335]" />
              2026 – Present • Operational & Engineering Excellence
            </p>
          </div>

          {/* Interactive Pillar Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 p-1 dark:border-zinc-800 dark:bg-zinc-900/80">
            <button
              onClick={() => setActivePillarId("all")}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                activePillarId === "all"
                  ? "bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900"
                  : "text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              All 4 Pillars
            </button>
            {pillars.map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePillarId(p.id)}
                className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                  activePillarId === p.id
                    ? "bg-white text-slate-900 shadow-md dark:bg-zinc-800 dark:text-white"
                    : "text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white"
                }`}
              >
                <span style={{ color: p.color }}>{p.icon}</span>
                <span className="hidden sm:inline">{p.number}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skill Badges Header Wrap */}
        <div className="space-y-2 pt-1">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
            Multidisciplinary Responsibilities:
          </p>
          <div className="flex flex-wrap gap-2">
            {roleTitles.map((title) => (
              <span
                key={title}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/90 bg-white px-3.5 py-1 text-xs font-bold text-slate-800 shadow-sm transition hover:border-slate-300 dark:border-zinc-700/90 dark:bg-zinc-900 dark:text-zinc-100"
              >
                <span className="h-2 w-2 rounded-full bg-[#4285F4]" />
                {title}
              </span>
            ))}
          </div>
        </div>

        {/* Pillars Grid */}
        <motion.div layout className="grid gap-6 md:grid-cols-2 pt-2">
          <AnimatePresence mode="popLayout">
            {displayedPillars.map((pillar) => (
              <motion.article
                layout
                key={pillar.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900/90 hover:shadow-md"
              >
                {/* Top Pillar Accent Line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl"
                  style={{ backgroundColor: pillar.color }}
                />

                <div className="space-y-4">
                  {/* Pillar Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-md"
                        style={{ backgroundColor: pillar.color }}
                      >
                        {pillar.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                          {pillar.number}
                        </span>
                        <h3 className="font-display text-lg font-bold text-slate-900 dark:text-zinc-100">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Focus Description */}
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-zinc-300">
                    {pillar.focus}
                  </p>

                  {/* Metrics & Performance Standards */}
                  <div className="space-y-2.5 pt-2">
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                      Measured Impact & Performance Standards:
                    </p>

                    <div className="space-y-2">
                      {pillar.metrics.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="rounded-xl border border-slate-100 bg-slate-50/80 p-3 dark:border-zinc-800/80 dark:bg-zinc-800/50"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-1.5">
                            <span className="text-xs font-bold text-slate-800 dark:text-zinc-200 flex items-center gap-1.5">
                              <span>{m.emoji}</span>
                              {m.title}
                            </span>
                            <span
                              className="rounded-md px-2 py-0.5 text-[10px] font-extrabold text-white shadow-sm"
                              style={{ backgroundColor: pillar.color }}
                            >
                              {m.badge}
                            </span>
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
                            {m.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
