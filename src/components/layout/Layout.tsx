import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeProvider";
import Header from "./Header";
import AnimatedRoutes from "./AnimatedRoutes";
import ScrollToTop from "./ScrollToTop";
import ChatWidget from "../chat/ChatWidget";
import { Toaster } from "sonner";

const profileImageUrl = "/profile-photo.jpg";

const Layout = () => {
  const { theme, toggleTheme } = useTheme();
  const darkMode = theme === "dark";

  return (
    <motion.div
      className={`min-h-[100dvh] overflow-x-hidden transition-colors duration-300 ${
        darkMode ? "dark bg-[#0f1523] text-white" : "bg-[#eef3fb] text-slate-900"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55 }}
    >
      <Toaster position="top-right" richColors closeButton />

      <Header profileImageUrl={profileImageUrl} darkMode={darkMode} toggleDarkMode={toggleTheme} />

      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-28 sm:px-6 lg:px-8">
        <AnimatedRoutes />
      </main>

      <ScrollToTop />
      <ChatWidget />
    </motion.div>
  );
};

export default Layout;
