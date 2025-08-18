
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";

interface MobileNavLinkProps {
  children: React.ReactNode;
  to: string;
  onClick: () => void;
}

// Mobile Nav Link with animations
const MobileNavLink = ({ children, to, onClick }: MobileNavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link to={to} onClick={onClick}>
      <motion.div
        className={`block px-4 py-3 rounded-xl ${
          isActive 
            ? 'bg-primary/10 text-primary' 
            : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-300/50'
        }`}
        whileHover={{ x: 5 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.div>
    </Link>
  );
};

export default MobileNavLink;
