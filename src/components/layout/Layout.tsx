
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeProvider";
import Header from "./Header";
import AnimatedRoutes from "./AnimatedRoutes";
import ScrollToTop from "./ScrollToTop";
import ChatWidget from "../chat/ChatWidget";
import { Toaster } from "sonner";

// Update the profile image URL
const profileImageUrl = "https://i.postimg.cc/dQ741Z2x/Firefly-20250216210550.png";

const Layout = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const darkMode = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-dark-100' : 'bg-gradient-to-br from-white to-blue-50'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Toaster position="top-right" richColors closeButton />
      
      <Header 
        profileImageUrl={profileImageUrl}
        scrolled={scrolled}
        darkMode={darkMode}
        toggleDarkMode={toggleTheme}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-28">
        <AnimatedRoutes />
      </main>

      <ScrollToTop />
      <ChatWidget />
    </motion.div>
  );
};

export default Layout;
