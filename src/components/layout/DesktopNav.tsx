import React from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import NavLink from "./NavLink";

interface DesktopNavProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DesktopNav = ({ darkMode, toggleDarkMode }: DesktopNavProps) => {
  return (
    <div className="hidden items-center gap-1 md:flex">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/bio">Bio</NavLink>
      <NavLink to="/wikipedia">Wiki</NavLink>
      <NavLink to="/ai-videos">AI Videos</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/chennai-services">Chennai</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/contact">Contact</NavLink>

      <motion.button
        onClick={toggleDarkMode}
        className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-slate-500 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-400"
        whileTap={{ scale: 0.95 }}
        whileHover={{ y: -1 }}
      >
        {darkMode ? <Sun size={17} /> : <Moon size={17} />}
      </motion.button>
    </div>
  );
};

export default DesktopNav;
