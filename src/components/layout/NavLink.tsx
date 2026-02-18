import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

interface NavLinkProps {
  children: React.ReactNode;
  to: string;
}

const NavLink = ({ children, to }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to}>
      <motion.span
        className={`nav-link-modern ${isActive ? "nav-link-modern-active" : ""}`}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.span>
    </Link>
  );
};

export default NavLink;
