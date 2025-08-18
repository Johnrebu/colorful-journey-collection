
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import React from "react";
import GlassCard from "../GlassCard";
import ContactForm from "./ContactForm";

const ContactFormCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <GlassCard className="h-full">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-portfolioLightPink flex items-center justify-center mr-3">
            <Send className="w-5 h-5 text-portfolioPink" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Send a Message</h3>
        </div>
        
        <ContactForm />
      </GlassCard>
    </motion.div>
  );
};

export default ContactFormCard;
