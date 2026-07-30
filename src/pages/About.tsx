import { motion } from "framer-motion";
import useSeo from "@/hooks/useSeo";
import AboutHero from "@/components/about/AboutHero";
import CurrentRoleImpact from "@/components/CurrentRoleImpact";
import ScienceOfCode from "@/components/about/ScienceOfCode";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutStrengths from "@/components/about/AboutStrengths";
import SkillMatrix from "@/components/about/SkillMatrix";
import AboutStats from "@/components/about/AboutStats";

export default function About() {
  useSeo({
    title: "About - Johnson | Full-Stack Developer & AI Specialist",
    description:
      "Discover Johnson's journey at Aionion Capital: Full-Stack Engineering, AI Video Creation, System Automation, Graphic Design, and Live Event Operations.",
    keywords:
      "about, Aionion Capital, full-stack developer, AI video creator, automation specialist, graphic designer, event coordinator, content creator, React, TypeScript, Python",
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

      {/* 2. Current Role & Measured Impact at Aionion Capital (4 Pillars) */}
      <CurrentRoleImpact />

      {/* 3. Science of Code: Chemistry & Code Synthesis Sandbox */}
      <ScienceOfCode />

      {/* 4. Core Superpowers & Mindset */}
      <AboutStrengths />

      {/* 5. Interactive Evolution Timeline */}
      <AboutTimeline />

      {/* 6. Interactive Skill Arsenal Matrix */}
      <SkillMatrix />

      {/* 7. Impact Statistics & Call-to-Action */}
      <AboutStats />
    </motion.div>
  );
}
