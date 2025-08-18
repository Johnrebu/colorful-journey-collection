
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageSquare } from "lucide-react";
import React from "react";
import GlassCard from "../GlassCard";
import ContactItem from "./ContactItem";
import SocialLink from "./SocialLink";

const ContactInfoCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <GlassCard className="h-full">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-portfolioLightBlue flex items-center justify-center mr-3">
            <MessageSquare className="w-5 h-5 text-portfolioBlue" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Get in Touch</h3>
        </div>
        
        <div className="space-y-6">
          <ContactItem 
            icon={<Mail className="w-5 h-5 text-portfolioBlue" />}
            label="Email"
            value="johnchemist91@gmail.com"
            href="mailto:johnchemist91@gmail.com"
          />
          
          <ContactItem 
            icon={<Phone className="w-5 h-5 text-portfolioPurple" />}
            label="Phone"
            value="+91 8754774022"
            href="tel:+918754774022"
          />
          
          <ContactItem 
            icon={<MapPin className="w-5 h-5 text-portfolioPink" />}
            label="Location"
            value="Tambaram, Chennai"
          />
        </div>

        <div className="mt-10">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Social Media</h4>
          <div className="flex space-x-4">
            <SocialLink 
              href="https://github.com/Johnrebu"
              icon={<Github className="w-5 h-5" />}
              label="GitHub"
              color="bg-gray-800"
            />
            
            <SocialLink 
              href="https://www.linkedin.com/in/johnsonelon/"
              icon={<Linkedin className="w-5 h-5" />}
              label="LinkedIn"
              color="bg-[#0077B5]"
            />
            
            <SocialLink 
              href="https://x.com/JohnsonJoh31080"
              icon={<Twitter className="w-5 h-5" />}
              label="Twitter"
              color="bg-[#1DA1F2]"
            />
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default ContactInfoCard;
