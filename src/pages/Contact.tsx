
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import GlassCard from "../components/GlassCard";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SectionTitle icon={<Mail size={28} />}>Contact Me</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
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

        {/* Contact Form */}
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
            
            {submitted ? (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-medium text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600">Thank you for reaching out. I'll get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-5 py-2 bg-primary text-white rounded-full text-sm"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent bg-white/80 shadow-sm"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent bg-white/80 shadow-sm"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent bg-white/80 shadow-sm"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-primary to-portfolioPurple text-white rounded-lg shadow-md font-medium flex items-center justify-center"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" /> Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </GlassCard>
        </motion.div>
      </div>
      
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
    </motion.div>
  );
}

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
