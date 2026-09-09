import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Film, Play, Volume2, VolumeX, Sparkles } from "lucide-react";

// Detect mobile once at module level
const getIsMobile = () =>
  typeof window !== "undefined" &&
  (window.innerWidth < 768 ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ));

interface PortraitVideoShowcaseProps {
  /** Section heading text */
  heading?: string;
  /** Highlighted gradient text in heading */
  headingAccent?: string;
  /** Description paragraph */
  description?: string;
  /** Badge label text */
  badgeLabel?: string;
  /** Video source path */
  videoSrc?: string;
}

export default function PortraitVideoShowcase({
  heading = "From Educator to",
  headingAccent = "Full-Stack Engineer",
  description = "A cinematic AI visualization of my transformation from science teaching to software engineering — powered entirely by generative AI.",
  badgeLabel = "My Life Transformation",
  videoSrc = "/videos/johnson-ai-presentation.mp4",
}: PortraitVideoShowcaseProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const hasAttemptedPlay = useRef(false);
  const hasStartedLoad = useRef(false);
  const isMobile = useRef(getIsMobile());

  const attemptPlay = async () => {
    const video = videoRef.current;
    if (!video) return false;
    try {
      video.muted = true;
      await video.play();
      return true;
    } catch {
      return false;
    }
  };

  // Start loading the video (called lazily)
  const startVideoLoad = () => {
    const video = videoRef.current;
    if (!video || hasStartedLoad.current) return;
    hasStartedLoad.current = true;

    if (isMobile.current) {
      video.preload = "metadata";
    } else {
      video.preload = "auto";
    }
    video.load();
  };

  // Native event listeners for accurate state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlaying = () => {
      setIsPlaying(true);
      setShowOverlay(false);
      setIsLoading(false);
    };
    const onPause = () => setIsPlaying(false);
    const onWaiting = () => setIsLoading(true);
    const onCanPlay = () => setIsLoading(false);

    video.addEventListener("playing", onPlaying);
    video.addEventListener("pause", onPause);
    video.addEventListener("waiting", onWaiting);
    video.addEventListener("canplay", onCanPlay);
    return () => {
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("waiting", onWaiting);
      video.removeEventListener("canplay", onCanPlay);
    };
  }, []);

  // IntersectionObserver: lazy-load video when section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startVideoLoad();
          if (videoRef.current && !isMobile.current) {
            attemptPlay();
          }
        } else if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // On mount (desktop only): try autoplay once data is ready
  useEffect(() => {
    if (isMobile.current) return;

    const video = videoRef.current;
    if (!video) return;

    const tryAutoplay = async () => {
      if (hasAttemptedPlay.current) return;
      hasAttemptedPlay.current = true;
      await attemptPlay();
    };

    if (video.readyState >= 2) {
      tryAutoplay();
    } else {
      video.addEventListener("loadeddata", tryAutoplay, { once: true });
      video.addEventListener("canplay", tryAutoplay, { once: true });
    }
    return () => {
      video.removeEventListener("loadeddata", tryAutoplay);
      video.removeEventListener("canplay", tryAutoplay);
    };
  }, []);

  // Unlock mobile playback on first touch/click
  useEffect(() => {
    if (!isMobile.current) return;

    const unlock = () => {
      startVideoLoad();
      document.removeEventListener("touchstart", unlock);
      document.removeEventListener("click", unlock);
    };
    document.addEventListener("touchstart", unlock, { once: true, passive: true });
    document.addEventListener("click", unlock, { once: true });
    return () => {
      document.removeEventListener("touchstart", unlock);
      document.removeEventListener("click", unlock);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (!video) return;

    setIsLoading(true);
    startVideoLoad();

    if (video.readyState >= 3) {
      video.muted = true;
      video.play().then(() => {
        setIsPlaying(true);
        setShowOverlay(false);
        setIsLoading(false);
      }).catch(() => {
        setIsLoading(false);
      });
    } else {
      video.preload = "auto";
      video.load();

      const onReady = () => {
        video.muted = true;
        video.play().then(() => {
          setIsPlaying(true);
          setShowOverlay(false);
          setIsLoading(false);
        }).catch(() => {
          setIsLoading(false);
        });
        video.removeEventListener("canplay", onReady);
      };
      video.addEventListener("canplay", onReady, { once: true });

      // Timeout fallback
      setTimeout(() => {
        setIsLoading(false);
      }, 15000);
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/90 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 shadow-[0_30px_80px_rgba(0,0,0,0.3)] dark:border-white/10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Ambient glows — hidden on mobile for GPU performance */}
      <div className="hidden md:block absolute -left-20 -top-20 h-80 w-80 rounded-full bg-purple-600/15 blur-[100px]" />
      <div className="hidden md:block absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-[80px]" />
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-indigo-500/8 blur-[120px]" />

      {/* Two-column layout: text left, portrait video right */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-0">
        {/* Left content column */}
        <div className="flex flex-col justify-between px-6 pt-6 pb-4 sm:px-8 sm:pt-8 lg:px-10 lg:py-10">
          {/* Header */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-purple-300 backdrop-blur-md"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Film size={14} className="text-purple-400" />
              </motion.span>
              {badgeLabel}
            </motion.div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              {heading}{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                {headingAccent}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300/80 max-w-lg leading-relaxed font-medium">
              {description}
            </p>

            {/* Mute toggle */}
            <button
              onClick={toggleMute}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-bold text-white/80 backdrop-blur-md transition hover:bg-white/10 hover:border-white/25 hover:text-white active:scale-95 w-fit"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              {isMuted ? "Unmute" : "Mute"}
            </button>
          </div>

          {/* Bottom info tags */}
          <div className="flex flex-wrap items-center gap-3 pt-6 lg:pt-0">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1.5 text-[11px] font-bold text-cyan-300">
              <Sparkles size={12} />
              100% AI Generated
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1.5 text-[11px] font-bold text-purple-300">
              <Film size={12} />
              Life Transformation
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold text-slate-400">
              9:16 Portrait
            </span>
          </div>
        </div>

        {/* Right portrait video column */}
        <div className="relative px-4 pb-6 pt-2 sm:px-6 lg:px-0 lg:py-6 lg:pr-6 flex justify-center lg:justify-end">
          <div className="relative w-[280px] sm:w-[300px] lg:w-[320px]">
            {/* Glowing border frame */}
            <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-b from-purple-500/40 via-cyan-500/20 to-purple-500/40 blur-[1px]" />

            {/* 9:16 aspect ratio container */}
            <div className="relative aspect-[9/16] w-full rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-purple-900/40 bg-zinc-950">
              <video
                ref={videoRef}
                src={videoSrc}
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay={!isMobile.current}
                muted
                loop
                playsInline
                preload={isMobile.current ? "none" : "metadata"}
                {...({ "webkit-playsinline": "true" } as any)}
              />

              {/* Play overlay — fallback when autoplay fails */}
              {showOverlay && (
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950/60 backdrop-blur-sm z-20 cursor-pointer"
                  onClick={handlePlayClick}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {isLoading ? (
                    <>
                      <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-600/80 to-indigo-600/80 text-white shadow-2xl shadow-purple-600/40">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                          className="h-7 w-7 rounded-full border-white/30 border-t-white"
                          style={{ borderWidth: "3px", borderStyle: "solid", borderColor: "rgba(255,255,255,0.3)", borderTopColor: "white" }}
                        />
                      </div>
                      <p className="mt-3 text-xs font-bold text-white/80 uppercase tracking-widest">
                        Loading...
                      </p>
                    </>
                  ) : (
                    <>
                      <motion.div
                        animate={{
                          scale: [1, 1.08, 1],
                          boxShadow: [
                            "0 0 0 0 rgba(168,85,247,0.4)",
                            "0 0 0 20px rgba(168,85,247,0)",
                            "0 0 0 0 rgba(168,85,247,0)",
                          ],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-2xl shadow-purple-600/40"
                      >
                        <Play size={28} className="ml-1 fill-white" />
                      </motion.div>
                      <p className="mt-3 text-xs font-bold text-white/80 uppercase tracking-widest">
                        Tap to Play
                      </p>
                    </>
                  )}
                </motion.div>
              )}

              {/* Cinematic vignette */}
              <div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.35)_100%)]" />

              {/* Bottom gradient fade */}
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none z-10" />

              {/* Subtle phone-style notch at top */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-1.5 rounded-full bg-white/15 z-20" />
            </div>

            {/* Reflection effect below video */}
            <div className="absolute -bottom-4 left-4 right-4 h-8 rounded-b-3xl bg-gradient-to-b from-purple-500/10 to-transparent blur-md" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
