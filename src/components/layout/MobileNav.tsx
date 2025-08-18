
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
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
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="glass-card m-4 rounded-2xl space-y-1">
            <MobileNavLink to="/" onClick={onClose}>Home</MobileNavLink>
            <MobileNavLink to="/about" onClick={onClose}>About Me</MobileNavLink>
            <MobileNavLink to="/bio" onClick={onClose}>Bio Data</MobileNavLink>
            <MobileNavLink to="/wikipedia" onClick={onClose}>Wikipedia</MobileNavLink>
            <MobileNavLink to="/resume" onClick={onClose}>Resume</MobileNavLink>
            <MobileNavLink to="/projects" onClick={onClose}>Projects</MobileNavLink>
            <MobileNavLink to="/contact" onClick={onClose}>Contact</MobileNavLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
