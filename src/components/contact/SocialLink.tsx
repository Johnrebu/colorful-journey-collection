
import { motion } from "framer-motion";
import React from "react";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  color: string;
}

const SocialLink = ({ href, icon, label, color }: SocialLinkProps) => (
  <motion.a
    href={href}
    className={`p-3 rounded-full ${color} text-white shadow-md`}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, y: -5 }}
    whileTap={{ scale: 0.95 }}
    title={label}
  >
    {icon}
  </motion.a>
);

export default SocialLink;
