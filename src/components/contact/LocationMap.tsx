
import { motion } from "framer-motion";
import React from "react";
import GlassCard from "../GlassCard";

const LocationMap = () => {
  return (
    <motion.div 
      className="mt-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <GlassCard>
        <div className="relative w-full h-64 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62206.04005409677!2d80.05357752334246!3d12.922221016227608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b79de7f381b%3A0xffbb2dd48afe3f1b!2sTambaram%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1654603355944!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Johnson's Location"
            className="absolute inset-0"
          ></iframe>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default LocationMap;
