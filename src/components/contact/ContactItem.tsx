
import { motion } from "framer-motion";
import React from "react";

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const ContactItem = ({ icon, label, value, href }: ContactItemProps) => (
  <motion.div 
    className="flex items-start"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="mt-1 mr-4">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      {href ? (
        <a
          href={href}
          className="text-lg text-gray-800 hover:text-primary transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="text-lg text-gray-800">{value}</p>
      )}
    </div>
  </motion.div>
);

export default ContactItem;
