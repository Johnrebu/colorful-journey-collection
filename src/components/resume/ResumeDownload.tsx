
import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import GlassCard from "../GlassCard";

interface ResumeDownloadProps {
  downloadTextColor: string;
  handleDownloadResume: () => void;
}

const ResumeDownload: React.FC<ResumeDownloadProps> = ({ 
  downloadTextColor, 
  handleDownloadResume 
}) => {
  return (
    <motion.div 
      className="mt-16 mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <GlassCard>
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-800 mb-4">Ready to Download My Resume?</h3>
          <p className={`mb-6 max-w-2xl mx-auto font-lato md:text-lg ${downloadTextColor}`}>
            Get a complete copy of my resume in PDF format for your records.
          </p>
          <motion.button
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-montserrat shadow-md"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" 
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 10 
            }}
          >
            <Download size={18} />
            Download PDF
          </motion.button>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default ResumeDownload;
