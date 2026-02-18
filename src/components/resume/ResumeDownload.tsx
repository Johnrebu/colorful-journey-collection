import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import GlassCard from "../GlassCard";

interface ResumeDownloadProps {
  downloadTextColor: string;
  onDownload: () => Promise<void>;
  isDownloading: boolean;
}

const ResumeDownload: React.FC<ResumeDownloadProps> = ({
  downloadTextColor,
  onDownload,
  isDownloading,
}) => {
  return (
    <motion.div
      className="mt-16 mb-8"
      data-html2canvas-ignore="true"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <GlassCard>
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-800 dark:text-white mb-4">
            Ready to Download My Resume?
          </h3>
          <p
            className={`mb-6 max-w-2xl mx-auto font-lato md:text-lg ${downloadTextColor}`}
          >
            Get a complete copy of my resume in PDF format for your records.
          </p>
          <motion.button
            onClick={onDownload}
            disabled={isDownloading}
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-montserrat shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <Download size={18} />
            {isDownloading ? "Generating PDF..." : "Download PDF"}
          </motion.button>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default ResumeDownload;
