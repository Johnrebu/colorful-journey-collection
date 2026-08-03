import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import {
  Youtube,
  ExternalLink,
  Play,
  Sparkles,
  Film,
  Tv,
  CheckCircle2,
  ArrowUpRight,
  Wand2,
  Zap,
  Eye,
  Bot,
  Clapperboard,
  Layers,
  ArrowRight,
  Building,
} from "lucide-react";
import { Link } from "react-router-dom";
import useSeo from "@/hooks/useSeo";
import { Badge } from "@/components/ui/badge";
import { youtubeChannels, aiVideoWorks, AiVideoItem } from "@/data/youtubeData";

const categories = ["All", "Corporate AI", "AI Animation", "Educational AI", "AI Shorts", "Conceptual Visuals"] as const;

const categoryIcons: Record<string, React.ReactNode> = {
  "All": <Layers size={14} />,
  "Corporate AI": <Building size={14} />,
  "AI Animation": <Wand2 size={14} />,
  "Educational AI": <Bot size={14} />,
  "AI Shorts": <Zap size={14} />,
  "Conceptual Visuals": <Eye size={14} />,
};

const toolStack = [
  "Runway Gen-3", "Kling AI", "Pika", "Sora", "ElevenLabs",
  "Midjourney", "Stable Diffusion", "HeyGen", "D-ID", "Synthesia",
  "CapCut AI", "Adobe Premiere", "DaVinci Resolve",
];

const stats = [
  { value: "3", label: "YouTube Channels", icon: Tv },
  { value: "AI", label: "Powered Videos", icon: Bot },
  { value: "4+", label: "Videos / Month", icon: Clapperboard },
  { value: "100%", label: "AI Generated", icon: Sparkles },
];

// Floating particle component for the hero
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0
              ? "rgba(239, 68, 68, 0.4)"
              : i % 3 === 1
              ? "rgba(168, 85, 247, 0.3)"
              : "rgba(99, 102, 241, 0.3)",
          }}
          animate={{
            y: [0, -30 - Math.random() * 40, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Animated counter
function AnimatedNumber({ target }: { target: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="tabular-nums"
    >
      {target}
    </motion.span>
  );
}

export default function AiVideos() {
  useSeo({
    title: "AI Video Works & Official YouTube Channels - Johnson T",
    description: "Explore AI video creations, automated video productions, digital animations, and official YouTube channels (@jenishajeni-l9i & @johnElonSon) by Johnson T.",
    keywords: "AI video creation, YouTube channel, jenishajeni, johnElonSon, generative AI videos, automated content production, AI animation, Johnson T",
  });

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  const filteredVideos = selectedCategory === "All"
    ? aiVideoWorks
    : aiVideoWorks.filter((v) => v.category === selectedCategory);

  return (
    <div className="space-y-14 pb-20">
      {/* ══════════════════════════════════════════════════════════════
          IMMERSIVE HERO BANNER
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden rounded-[2rem] min-h-[420px] flex items-center">
        {/* Multi-layer gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-zinc-950 to-indigo-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(239,68,68,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.12),transparent_60%)]" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Floating particles */}
        <FloatingParticles />

        {/* Glowing orbs */}
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-red-600/10 blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-indigo-600/10 blur-[80px]" />

        {/* Content */}
        <div className="relative z-10 p-8 md:p-14 max-w-4xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-red-400 backdrop-blur-md"
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Clapperboard size={15} className="text-red-500" />
            </motion.span>
            AI Video Production Studio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-black tracking-tight leading-[1.1] md:text-6xl lg:text-7xl"
          >
            <span className="text-white">Crafting the Future</span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              with AI Video
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl text-base text-zinc-300/90 leading-relaxed md:text-lg"
          >
            Every frame you see is born from Generative AI — synthetic voices, dynamic avatars,
            cinematic storyboarding, and automated editing pipelines. Welcome to my AI video universe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3 pt-2"
          >
            <a
              href="#channels"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red-600/25 transition hover:bg-red-500 hover:-translate-y-0.5 active:scale-95"
            >
              <Youtube size={18} />
              Explore Channels
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/10 hover:border-white/25 hover:-translate-y-0.5"
            >
              <Film size={18} />
              Browse Gallery
            </a>
          </motion.div>
        </div>

        {/* Decorative play button */}
        <div className="hidden lg:flex absolute right-16 top-1/2 -translate-y-1/2">
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              boxShadow: [
                "0 0 0 0 rgba(239,68,68,0.3)",
                "0 0 0 20px rgba(239,68,68,0)",
                "0 0 0 0 rgba(239,68,68,0)",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-700 text-white shadow-2xl shadow-red-600/30"
          >
            <Play size={44} className="ml-2 fill-white" />
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          LIVE STATS TICKER
          ══════════════════════════════════════════════════════════════ */}
      <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 p-5 backdrop-blur-sm transition hover:border-red-500/30"
            >
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-red-500/5 blur-2xl transition group-hover:bg-red-500/10" />
              <div className="relative space-y-2">
                <Icon size={20} className="text-red-400" />
                <div className="text-3xl font-black text-white">
                  <AnimatedNumber target={stat.value} />
                </div>
                <div className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* ══════════════════════════════════════════════════════════════
          OFFICIAL YOUTUBE CHANNELS — GLASSMORPHIC CARDS
          ══════════════════════════════════════════════════════════════ */}
      <section id="channels" className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-2"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-red-400">
            <Tv size={13} />
            Official Channels
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white md:text-4xl">
            My YouTube Channels
          </h2>
          <p className="text-sm text-slate-600 dark:text-zinc-400 max-w-xl">
            Subscribe to my official channels where I publish all AI-generated video creations
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Company Channel — Full Width Featured Card */}
          {youtubeChannels.filter(c => c.isCompany).map((channel, i) => (
            <motion.div
              key={channel.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/40 via-zinc-950 to-indigo-950/30 p-[1px] transition hover:border-blue-500/40"
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/15 via-transparent to-indigo-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative rounded-2xl bg-zinc-950/85 backdrop-blur-xl p-6 md:p-8 space-y-5">
                {/* Glow orbs */}
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-600/8 blur-[60px] transition-all duration-500 group-hover:bg-blue-600/15 group-hover:scale-125" />
                <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-indigo-600/6 blur-[40px]" />

                <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-600/30"
                    >
                      <Building size={28} />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
                        {channel.name}
                        <CheckCircle2 size={18} className="text-blue-400" />
                      </h3>
                      <p className="text-xs font-mono font-bold text-blue-400 mt-0.5">
                        {channel.handle}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 text-[10px] font-bold">
                      {channel.badge}
                    </Badge>
                    <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 text-[10px] font-bold flex items-center gap-1">
                      <Sparkles size={10} /> AI Videos by Johnson T
                    </Badge>
                  </div>
                </div>

                <p className="text-sm text-zinc-300/90 leading-relaxed relative max-w-3xl">
                  {channel.description}
                </p>

                <div className="flex flex-wrap gap-2 relative">
                  {channel.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-blue-500/5 border border-blue-500/10 px-3 py-1.5 text-[11px] font-medium text-blue-300/70 transition hover:bg-blue-500/10 hover:text-blue-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="relative pt-2 flex flex-wrap gap-3">
                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:from-blue-500 hover:to-indigo-600 hover:-translate-y-0.5 active:scale-[0.98]"
                  >
                    <Youtube size={18} />
                    Visit Official Channel
                    <ArrowUpRight size={15} />
                  </a>
                  <a
                    href="https://www.youtube.com/@aionionofficial/shorts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-blue-500/20 bg-blue-500/5 px-5 py-3 text-sm font-bold text-blue-300 backdrop-blur-md transition hover:bg-blue-500/10 hover:-translate-y-0.5 active:scale-[0.98]"
                  >
                    <Zap size={16} />
                    Watch Shorts
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Personal Channels — 2-column grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {youtubeChannels.filter(c => !c.isCompany).map((channel, i) => (
              <motion.div
                key={channel.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.45 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/90 via-zinc-900/70 to-zinc-950/90 p-[1px] transition hover:border-red-500/30"
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative rounded-2xl bg-zinc-950/80 backdrop-blur-xl p-6 md:p-7 space-y-5">
                  {/* Glow orb */}
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-600/8 blur-3xl transition-all duration-500 group-hover:bg-red-600/15 group-hover:scale-125" />

                  <div className="relative flex items-start justify-between gap-3">
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-700 text-white shadow-lg shadow-red-600/30"
                      >
                        <Youtube size={26} />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                          {channel.name}
                          <CheckCircle2 size={16} className="text-blue-400" />
                        </h3>
                        <p className="text-xs font-mono font-bold text-red-400 mt-0.5">
                          {channel.handle}
                        </p>
                      </div>
                    </div>
                    <Badge className="bg-red-500/10 text-red-400 border-red-500/20 text-[10px] font-bold shrink-0">
                      {channel.badge}
                    </Badge>
                  </div>

                  <p className="text-sm text-zinc-300/90 leading-relaxed relative">
                    {channel.description}
                  </p>

                  <div className="flex flex-wrap gap-2 relative">
                    {channel.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-white/5 border border-white/5 px-3 py-1.5 text-[11px] font-medium text-zinc-400 transition hover:bg-white/10 hover:text-zinc-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="relative pt-2">
                    <a
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition hover:from-red-500 hover:to-red-600 hover:-translate-y-0.5 active:scale-[0.98]"
                    >
                      <Youtube size={18} />
                      Visit Channel & Subscribe
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          AI TOOLS USED — SCROLLING TICKER
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/60 py-5">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950 z-10 pointer-events-none" />
        <div className="flex items-center gap-3 px-6 mb-3">
          <Wand2 size={15} className="text-purple-400" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-purple-400">
            AI Tools & Platforms Used
          </span>
        </div>
        <motion.div
          className="flex gap-4 px-6"
          animate={{ x: [0, -800] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[...toolStack, ...toolStack].map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              className="shrink-0 rounded-full border border-purple-500/15 bg-purple-500/5 px-4 py-2 text-xs font-semibold text-purple-300/80 whitespace-nowrap"
            >
              {tool}
            </span>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          VIDEO GALLERY — CINEMATIC GRID
          ══════════════════════════════════════════════════════════════ */}
      <section id="gallery" className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-400">
              <Film size={13} />
              Portfolio
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white md:text-4xl">
              AI Video Creations
            </h2>
            <p className="text-sm text-slate-600 dark:text-zinc-400 max-w-lg">
              Browse my AI-generated video projects — from character animations to educational content
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-red-600 to-indigo-600 text-white shadow-lg shadow-red-600/20"
                    : "border border-white/10 bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white dark:border-zinc-800"
                }`}
              >
                {categoryIcons[cat]}
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video, i) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onMouseEnter={() => setHoveredVideo(video.id)}
                onMouseLeave={() => setHoveredVideo(null)}
              >
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/60 transition-all duration-500 hover:border-red-500/30 hover:shadow-2xl hover:shadow-red-600/5">
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video w-full overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                    />

                    {/* Cinematic gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/40 to-transparent" />

                    {/* Category badge */}
                    <motion.div
                      initial={false}
                      animate={{ x: hoveredVideo === video.id ? 0 : -4, opacity: hoveredVideo === video.id ? 1 : 0.85 }}
                      className="absolute top-4 left-4"
                    >
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-950/70 backdrop-blur-md border border-white/10 px-3 py-1.5 text-[11px] font-bold text-white">
                        {categoryIcons[video.category]}
                        {video.category}
                      </span>
                    </motion.div>

                    {/* Featured badge */}
                    {video.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center gap-1 rounded-lg bg-amber-500/90 px-2.5 py-1.5 text-[10px] font-black text-zinc-950 uppercase tracking-wider shadow-lg shadow-amber-500/30">
                          <Sparkles size={11} /> Featured
                        </span>
                      </div>
                    )}

                    {/* Center play button */}
                    <a
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <motion.div
                        initial={false}
                        animate={{
                          scale: hoveredVideo === video.id ? 1.15 : 1,
                          opacity: hoveredVideo === video.id ? 1 : 0.8,
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600/90 text-white shadow-2xl shadow-red-600/40 backdrop-blur-sm transition-colors group-hover:bg-red-600"
                      >
                        <Play size={28} className="ml-1 fill-white" />
                      </motion.div>
                    </a>

                    {/* Bottom info overlay */}
                    <div className="absolute bottom-0 inset-x-0 p-4 pb-0">
                      <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-red-400">
                        <Youtube size={13} />
                        {video.channelHandle}
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-lg font-extrabold text-white line-clamp-1 group-hover:text-red-400 transition-colors duration-300">
                      {video.title}
                    </h3>

                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                      {video.description}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-white/5">
                      <div className="flex flex-wrap gap-1.5">
                        {video.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] rounded-md bg-white/5 border border-white/5 px-2 py-1 text-zinc-500 font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={video.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 transition hover:text-red-300 shrink-0"
                      >
                        Watch
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CTA FOOTER — SUBSCRIBE & EXPLORE
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-red-950/60 via-zinc-950 to-indigo-950/60 p-8 md:p-12">
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-red-600/8 blur-[100px]" />
        <div className="absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-indigo-600/8 blur-[80px]" />

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-red-400">
              <Sparkles size={13} />
              More AI Content Coming
            </div>
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">
              Subscribe for New AI Creations
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              New AI-generated videos drop regularly. Subscribe to stay updated with the latest generative video experiments, tutorials, and visual stories.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://www.youtube.com/@aionionofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition hover:from-blue-500 hover:to-indigo-600 hover:-translate-y-0.5 active:scale-95"
            >
              <Building size={18} />
              @aionionofficial
            </a>
            <a
              href="https://www.youtube.com/@jenishajeni-l9i"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red-600/25 transition hover:bg-red-500 hover:-translate-y-0.5 active:scale-95"
            >
              <Youtube size={18} />
              @jenishajeni-l9i
            </a>
            <a
              href="https://www.youtube.com/@johnElonSon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/10 hover:-translate-y-0.5 active:scale-95"
            >
              <Youtube size={18} />
              @johnElonSon
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
