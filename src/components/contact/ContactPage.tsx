
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Facebook, Twitter, Youtube } from "lucide-react";
import useSeo from "@/hooks/useSeo";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  // Set up SEO meta tags for contact page
  useSeo({
    title: "Contact - Johnson | Get In Touch",
    description: "Contact Johnson for project inquiries, collaboration opportunities, or just to say hello. Available for freelance work and full-time opportunities.",
    keywords: "contact, email, phone, get in touch, collaboration, freelance, hire",
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[80vh] flex items-center justify-center py-8"
    >
      <div className="w-full max-w-5xl mx-auto bg-[#1e2a4a] rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side - Contact Info */}
          <div className="p-8 lg:p-12 flex flex-col">
            <motion.h1 
              className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-wide"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              CONTACT
            </motion.h1>
            
            <motion.p 
              className="text-gray-300 text-sm leading-relaxed mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Feel free to reach out! I'm always open to discussing new projects, 
              creative ideas, or opportunities to be part of your vision. Let's create 
              something amazing together.
            </motion.p>
            
            {/* Contact Details */}
            <div className="space-y-6 mb-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-white font-semibold mb-1">Address</h3>
                <p className="text-gray-400 text-sm">
                  Tambaram, Chennai<br />
                  Tamil Nadu, India - 600045
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-white font-semibold mb-1">Phone</h3>
                <a 
                  href="tel:+918754774022" 
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Ph: +91 875-477-4022
                </a>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <a 
                  href="mailto:johnchemist91@gmail.com" 
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  johnchemist91@gmail.com
                </a>
              </motion.div>
            </div>
            
            {/* Social Icons */}
            <motion.div 
              className="flex flex-col gap-3 mt-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex gap-3">
                <a 
                  href="https://www.linkedin.com/in/johnsonelon/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="https://github.com/Johnrebu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="https://x.com/JohnsonJoh31080" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Right Side - Contact Form */}
          <motion.div 
            className="bg-[#2a3a5e] p-8 lg:p-12"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8 tracking-wide">
              GET IN TOUCH
            </h2>
            
            <ContactForm className="dark-theme" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
