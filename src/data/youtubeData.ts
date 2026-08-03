export interface YoutubeChannel {
  id: string;
  name: string;
  handle: string;
  url: string;
  description: string;
  badge: string;
  subscribers?: string;
  tags: string[];
}

export interface AiVideoItem {
  id: string;
  title: string;
  description: string;
  youtubeId?: string; // e.g. for embeds if available
  youtubeUrl: string;
  channelHandle: string;
  category: "AI Animation" | "Educational AI" | "AI Shorts" | "Conceptual Visuals";
  thumbnail: string;
  duration?: string;
  publishedDate?: string;
  tags: string[];
  featured?: boolean;
}

export const youtubeChannels: YoutubeChannel[] = [
  {
    id: "jenishajeni",
    name: "Jenisha Jeni",
    handle: "@jenishajeni-l9i",
    url: "https://www.youtube.com/@jenishajeni-l9i",
    description: "Official channel presenting creative AI video stories, digital animations, and visual media concepts.",
    badge: "AI Creative & Storytelling",
    tags: ["AI Storytelling", "Animation", "Visual Art", "Digital Content"],
  },
  {
    id: "johnelonson",
    name: "John Elon Son",
    handle: "@johnElonSon",
    url: "https://www.youtube.com/@johnElonSon",
    description: "Official channel focusing on tech innovations, AI video production, automated media creations, and future tech concepts.",
    badge: "AI Tech & Innovation",
    tags: ["Tech Innovations", "AI Video Production", "Automation", "Future Tech"],
  },
];

export const aiVideoWorks: AiVideoItem[] = [
  {
    id: "v1",
    title: "AI Storytelling & Character Animation Series",
    description: "Generative AI video workflow combining synthetic voiceovers, hyper-realistic keyframes, and motion synthesis.",
    youtubeUrl: "https://www.youtube.com/@jenishajeni-l9i",
    channelHandle: "@jenishajeni-l9i",
    category: "AI Animation",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    tags: ["Character Motion", "Generative Video", "AI Voice"],
    featured: true,
  },
  {
    id: "v2",
    title: "Futuristic AI Tech & Automation Breakdown",
    description: "Comprehensive automated video production featuring high-definition AI avatars, dynamic scriptwriting, and visual effects.",
    youtubeUrl: "https://www.youtube.com/@johnElonSon",
    channelHandle: "@johnElonSon",
    category: "Educational AI",
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    tags: ["AI Avatars", "Tech Showcase", "Automation"],
    featured: true,
  },
  {
    id: "v3",
    title: "Short-Form AI Reel: Cinematic Visual Synthesizer",
    description: "High-impact short-form AI video optimized for maximum viewer engagement and algorithmic growth across platforms.",
    youtubeUrl: "https://www.youtube.com/@jenishajeni-l9i",
    channelHandle: "@jenishajeni-l9i",
    category: "AI Shorts",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
    tags: ["Shorts", "Cinematic AI", "Reels"],
    featured: true,
  },
  {
    id: "v4",
    title: "Next-Gen AI Concept & Digital Media Production",
    description: "Exploring multi-modal AI video tools, image-to-video pipelines, and audio synchronizations.",
    youtubeUrl: "https://www.youtube.com/@johnElonSon",
    channelHandle: "@johnElonSon",
    category: "Conceptual Visuals",
    thumbnail: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop",
    tags: ["Multi-modal AI", "Image-to-Video", "Sound Design"],
    featured: false,
  },
];
