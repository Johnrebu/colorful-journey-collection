import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import ParallaxProfilePhoto from "../ParallaxProfilePhoto";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

interface HeaderProps {
  profileImageUrl: string;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ profileImageUrl, darkMode, toggleDarkMode }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuId = "mobile-menu";

  // Escape closes the menu from anywhere and returns focus to the toggle.
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-3 py-3 sm:px-6">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-white/50 bg-white/80 px-3 py-2 backdrop-blur-xl shadow-[0_8px_28px_rgba(15,22,35,0.15)] dark:border-white/10 dark:bg-zinc-950/75">
        <a
          href="/"
          className="flex items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-slate-300 dark:border-zinc-600 shrink-0">
            <ParallaxProfilePhoto
              src={profileImageUrl}
              alt="Johnson profile"
              shape="circle"
              containerClassName="h-full w-full"
            />
          </div>
          <span className="hidden text-sm font-semibold tracking-wide text-slate-800 dark:text-zinc-100 sm:inline-block">
            JOHNSON T
          </span>
        </a>

        <DesktopNav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <div className="flex items-center gap-2 md:hidden">
          <motion.button
            onClick={toggleDarkMode}
            type="button"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:focus-visible:ring-offset-zinc-950"
            whileTap={{ scale: 0.95 }}
          >
            {darkMode ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
          </motion.button>
          <motion.button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            aria-haspopup="menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:focus-visible:ring-offset-zinc-950"
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </motion.button>
        </div>
      </div>

      <MobileNav
        id={menuId}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        triggerRef={menuButtonRef}
      />
    </header>
  );
};

export default Header;
