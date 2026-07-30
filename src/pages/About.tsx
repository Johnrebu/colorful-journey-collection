import { motion } from "framer-motion";
import useSeo from "@/hooks/useSeo";
import AboutHero from "@/components/about/AboutHero";
import ScienceOfCode from "@/components/about/ScienceOfCode";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutStrengths from "@/components/about/AboutStrengths";
import SkillMatrix from "@/components/about/SkillMatrix";
import AboutStats from "@/components/about/AboutStats";

export default function About() {
  useSeo({
    title: "About - Johnson | Science Educator Turned Developer",
    description:
      "Discover Johnson's journey from 9+ years of teaching Chemistry to building modern, human-centered web applications. Synthesizing scientific rigor with full-stack engineering.",
    keywords:
      "about, bio, background, career, science educator, full-stack developer, React, TypeScript, Python, journey, chemistry educator",
  });

  return (
    <motion.div
      className="space-y-12 pb-8"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* 1. Interactive Hero Section with Lens Switcher & Parallax Profile */}
      <AboutHero />

      {/* 2. Science of Code: Chemistry & Code Synthesis Sandbox */}
      <ScienceOfCode />

      {/* 3. Core Superpowers & Mindset */}
      <AboutStrengths />

      {/* 4. Interactive Evolution Timeline */}
      <AboutTimeline />

      {/* 5. Interactive Skill Arsenal Matrix */}
      <SkillMatrix />

      {/* 6. Impact Statistics & Call-to-Action */}
      <AboutStats />
    </motion.div>
  );
}
