
import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionTitle from "../SectionTitle";
import GlassCard from "../GlassCard";

interface CertificationsProps {
  certifications: string[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <motion.section
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { 
            when: "beforeChildren",
            staggerChildren: 0.2
          }
        }
      }}
      initial="hidden"
      animate="visible"
      className="mb-16"
    >
      <SectionTitle icon={<Award size={24} />}>Certifications</SectionTitle>
      <motion.div
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.5 }
          }
        }}
      >
        <GlassCard>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index} 
                className="flex items-center p-3 bg-white/50 rounded-lg border border-gray-100 shadow-sm"
                whileHover={{ 
                  scale: 1.03,
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  transition: { duration: 0.2 }
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <div className="p-2 rounded-full bg-primary/10 mr-3">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <span className={`font-montserrat md:text-lg ${index % 2 === 0 ? "text-portfolioBlue" : "text-portfolioPurple"}`}>
                  {cert}
                </span>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </motion.section>
  );
};

export default Certifications;
