import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

interface HeaderProps {
  profileImageUrl: string;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ profileImageUrl, darkMode, toggleDarkMode }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-3 py-3 sm:px-6">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-white/50 bg-white/80 px-3 py-2 backdrop-blur-xl shadow-[0_8px_28px_rgba(15,22,35,0.15)] dark:border-white/10 dark:bg-zinc-950/75">
        <a href="/" className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border border-slate-300 dark:border-zinc-600">
            <AvatarImage src={profileImageUrl} alt="Johnson profile" className="object-cover" />
            <AvatarFallback>JT</AvatarFallback>
          </Avatar>
          <span className="hidden text-sm font-semibold tracking-wide text-slate-800 dark:text-zinc-100 sm:inline-block">
            JOHNSON T
          </span>
        </a>

        <DesktopNav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <div className="flex items-center gap-2 md:hidden">
          <motion.button
            onClick={toggleDarkMode}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100"
            whileTap={{ scale: 0.95 }}
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </motion.button>
          <motion.button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100"
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
      </div>

      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
