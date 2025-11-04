
import React from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

interface DesktopNavProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DesktopNav = ({ darkMode, toggleDarkMode }: DesktopNavProps) => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About Me</NavLink>
      <NavLink to="/wikipedia">Wikipedia</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      
      {/* Dark mode toggle */}
      <motion.button
        onClick={toggleDarkMode}
        className="p-2 rounded-full bg-white/80 dark:bg-dark-300/80 backdrop-blur-sm shadow-sm text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary focus:outline-none"
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </motion.button>
    </div>
  );
};

export default DesktopNav;
