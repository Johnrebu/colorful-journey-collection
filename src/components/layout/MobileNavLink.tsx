import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

interface MobileNavLinkProps {
  children: React.ReactNode;
  to: string;
  onClick: () => void;
}

const MobileNavLink = ({ children, to, onClick }: MobileNavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} onClick={onClick}>
      <motion.div
        className={`mb-1 block rounded-2xl px-4 py-3 text-sm font-medium transition ${
          isActive
            ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
            : "text-slate-700 hover:bg-slate-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
        }`}
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.div>
    </Link>
  );
};

export default MobileNavLink;
