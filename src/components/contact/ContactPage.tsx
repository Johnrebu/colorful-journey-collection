
import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import SectionTitle from "../SectionTitle";
import ContactInfoCard from "./ContactInfoCard";
import ContactFormCard from "./ContactFormCard";
import LocationMap from "./LocationMap";

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SectionTitle icon={<Mail size={28} />}>Contact Me</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactInfoCard />
        <ContactFormCard />
      </div>
      
      <LocationMap />
    </motion.div>
  );
}
