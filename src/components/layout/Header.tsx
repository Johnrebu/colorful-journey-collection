
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

interface HeaderProps {
  profileImageUrl: string;
  scrolled: boolean;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ profileImageUrl, scrolled, darkMode, toggleDarkMode }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Avatar className="w-10 h-10 border-2 border-white shadow-md">
              <AvatarImage 
                src={profileImageUrl}
                alt="Profile"
                className="object-cover"
              />
              <AvatarFallback>JT</AvatarFallback>
            </Avatar>
            <motion.span 
              className="ml-3 font-medium text-gray-800 dark:text-white hidden sm:block"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Johnson T
            </motion.span>
          </div>

          {/* Desktop Navigation */}
          <DesktopNav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile dark mode toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-white/80 dark:bg-dark-300/80 backdrop-blur-sm shadow-sm text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary focus:outline-none"
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
            
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full bg-white/80 dark:bg-dark-300/80 backdrop-blur-sm shadow-sm text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary focus:outline-none"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>
  );
};

export default Header;
