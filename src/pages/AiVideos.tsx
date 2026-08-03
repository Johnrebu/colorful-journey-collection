import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Youtube, ExternalLink, Play, Sparkles, Video, Film, Tv, CheckCircle2, ArrowUpRight } from "lucide-react";
import useSeo from "@/hooks/useSeo";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { youtubeChannels, aiVideoWorks, AiVideoItem } from "@/data/youtubeData";

const categories = ["All", "AI Animation", "Educational AI", "AI Shorts", "Conceptual Visuals"] as const;

export default function AiVideos() {
  useSeo({
    title: "AI Video Works & Official YouTube Channels - Johnson T",
    description: "Explore AI video creations, automated video productions, digital animations, and official YouTube channels (@jenishajeni-l9i & @johnElonSon) by Johnson T.",
    keywords: "AI video creation, YouTube channel, jenishajeni, johnElonSon, generative AI videos, automated content production, AI animation, Johnson T",
  });

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeVideo, setActiveVideo] = useState<AiVideoItem | null>(null);

  const filteredVideos = selectedCategory === "All"
    ? aiVideoWorks
    : aiVideoWorks.filter((v) => v.category === selectedCategory);

  return (
    <div className="space-y-10 pb-16">
      {/* Header Banner */}
      <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-red-950/80 via-zinc-900 to-indigo-950/80 p-8 text-white shadow-2xl border border-white/10 md:p-12">
        <div className="google-grid-bg absolute inset-0 opacity-20" />
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-semibold text-red-400 backdrop-blur-md">
            <Youtube size={16} className="text-red-500" />
            Official YouTube Channels & AI Media Portfolio
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl text-white">
            AI Video Production & Visual Creations
          </h1>
          <p className="text-lg text-zinc-300 leading-relaxed">
            Welcome to my official video gallery. Every video work displayed here is crafted using state-of-the-art Generative AI, automated editing pipelines, synthetic voices, and cinematic storyboarding.
          </p>
        </div>
      </section>

      {/* Official YouTube Channels Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Tv className="text-red-500" size={24} />
              Official YouTube Channels
            </h2>
            <p className="text-sm text-slate-600 dark:text-zinc-400">
              Subscribe and watch full AI video productions on YouTube
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {youtubeChannels.map((channel) => (
            <Card
              key={channel.id}
              className="group relative overflow-hidden border-slate-200 bg-white/80 transition duration-300 hover:border-red-500/50 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/80"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-md group-hover:scale-105 transition-transform">
                      <Youtube size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        {channel.name}
                        <CheckCircle2 size={16} className="text-blue-500" />
                      </h3>
                      <p className="text-xs font-mono font-semibold text-red-600 dark:text-red-400">
                        {channel.handle}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-red-500/30 text-red-600 dark:text-red-400 bg-red-500/5">
                    {channel.badge}
                  </Badge>
                </div>

                <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                  {channel.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {channel.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600 dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 shadow-md active:scale-98"
                  >
                    <Youtube size={18} />
                    Visit Channel & Subscribe
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Video Portfolio Gallery */}
      <section className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Film className="text-indigo-500" size={24} />
              AI Video Creations & Showcase
            </h2>
            <p className="text-sm text-slate-600 dark:text-zinc-400">
              Browse AI video projects, shorts, animations, and automated media
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                  selectedCategory === cat
                    ? "bg-red-600 text-white shadow-md"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group overflow-hidden border-slate-200 bg-white/80 transition duration-300 hover:border-red-500/40 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/80">
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    <Badge className="absolute top-3 left-3 bg-red-600 text-white font-semibold shadow-sm">
                      {video.category}
                    </Badge>

                    {video.featured && (
                      <Badge className="absolute top-3 right-3 bg-amber-500 text-slate-950 font-bold flex items-center gap-1 shadow-sm">
                        <Sparkles size={12} /> Featured AI Work
                      </Badge>
                    )}

                    <a
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600/90 text-white shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-600">
                        <Play size={26} className="ml-1 fill-white" />
                      </div>
                    </a>
                  </div>

                  <CardContent className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400 font-mono">
                      <span>Channel: <strong className="text-red-600 dark:text-red-400 font-semibold">{video.channelHandle}</strong></span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {video.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-zinc-300 line-clamp-2 leading-relaxed">
                      {video.description}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-zinc-800">
                      <div className="flex flex-wrap gap-1.5">
                        {video.tags.map((tag) => (
                          <span key={tag} className="text-[10px] bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 px-2 py-0.5 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={video.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 hover:text-red-700 dark:text-red-400"
                      >
                        Watch on YouTube
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
