
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";

interface NavLinkProps {
  children: React.ReactNode;
  to: string;
}

// Desktop Nav Link with animations
const NavLink = ({ children, to }: NavLinkProps) => {
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

export default NavLink;
