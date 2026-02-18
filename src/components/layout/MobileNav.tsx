import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import MobileNavLink from "./MobileNavLink";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22 }}
        >
          <div className="mt-3 rounded-3xl border border-white/40 bg-white/85 p-3 shadow-[0_10px_30px_rgba(14,25,40,0.16)] backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/90">
            <MobileNavLink to="/" onClick={onClose}>Home</MobileNavLink>
            <MobileNavLink to="/about" onClick={onClose}>About</MobileNavLink>
            <MobileNavLink to="/projects" onClick={onClose}>Projects</MobileNavLink>
            <MobileNavLink to="/resume" onClick={onClose}>Resume</MobileNavLink>
            <MobileNavLink to="/contact" onClick={onClose}>Contact</MobileNavLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
