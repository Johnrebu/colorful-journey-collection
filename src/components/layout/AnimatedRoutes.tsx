import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages
import Home from "../../pages/Home";
import About from "../../pages/About";
import Bio from "../../pages/Bio";
import Resume from "../../pages/Resume";
import Projects from "../../pages/Projects";
import Contact from "../../pages/Contact";
import Wikipedia from "../../pages/Wikipedia";
import NotFound from "../../pages/NotFound";

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wikipedia" element={<Wikipedia />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
