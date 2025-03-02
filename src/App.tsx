
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronUp } from "lucide-react";
import Home from "./pages/Home";
import About from "./pages/About";
import Bio from "./pages/Bio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

// Using an image from the public folder instead of a local import
const profileImageUrl = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&h=200";

// Scroll to top component
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// Route change animation wrapper
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
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    <Router>
      <motion.div
        className="min-h-screen bg-gradient-to-br from-white to-blue-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-2' : 'bg-transparent py-4'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <motion.img
                  src={profileImageUrl}
                  alt="Profile"
                  className="h-10 w-10 rounded-full border-2 border-white shadow-md"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.span 
                  className="ml-3 font-medium text-gray-800 hidden sm:block"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Johnson T
                </motion.span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Me</NavLink>
                <NavLink to="/bio">Bio Data</NavLink>
                <NavLink to="/resume">Resume</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <motion.button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm text-gray-700 hover:text-primary focus:outline-none"
                  whileTap={{ scale: 0.95 }}
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="md:hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="glass-card m-4 rounded-2xl space-y-1">
                  <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
                  <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>About Me</MobileNavLink>
                  <MobileNavLink to="/bio" onClick={() => setIsMenuOpen(false)}>Bio Data</MobileNavLink>
                  <MobileNavLink to="/resume" onClick={() => setIsMenuOpen(false)}>Resume</MobileNavLink>
                  <MobileNavLink to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</MobileNavLink>
                  <MobileNavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-28">
          <AnimatedRoutes />
        </main>

        <ScrollToTop />
      </motion.div>
    </Router>
  );
}

// Desktop Nav Link with animations
const NavLink = ({ children, to }: { children: React.ReactNode; to: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link to={to}>
      <motion.span
        className={`nav-link ${isActive ? 'text-primary after:w-full' : ''}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.span>
    </Link>
  );
};

// Mobile Nav Link with animations
const MobileNavLink = ({ children, to, onClick }: { children: React.ReactNode; to: string; onClick: () => void }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link to={to} onClick={onClick}>
      <motion.div
        className={`block px-4 py-3 rounded-xl ${
          isActive 
            ? 'bg-primary/10 text-primary' 
            : 'text-gray-700 hover:bg-gray-50'
        }`}
        whileHover={{ x: 5 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.div>
    </Link>
  );
};
