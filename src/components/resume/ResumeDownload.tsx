import React from "react";
import { motion } from "framer-motion";
import { Download, Printer, Sparkles, CheckCircle2 } from "lucide-react";
import GlassCard from "../GlassCard";

interface ResumeDownloadProps {
  downloadTextColor: string;
  onDownload: () => Promise<void>;
  isDownloading: boolean;
  onPrint?: () => void;
}

const ResumeDownload: React.FC<ResumeDownloadProps> = ({
  downloadTextColor,
  onDownload,
  isDownloading,
  onPrint,
}) => {
  const handlePrint = () => {
    if (onPrint) {
      onPrint();
    } else {
      window.print();
    }
  };

  return (
    <motion.div
      className="mt-12 mb-8"
      data-html2canvas-ignore="true"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <GlassCard>
        <div className="text-center space-y-4 py-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-cyan-300">
            <Sparkles size={14} />
            Professional & ATS-Friendly Format
          </div>

          <h3 className="text-2xl md:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
            Download or Print Professional Resume
          </h3>

          <p
            className={`max-w-2xl mx-auto text-sm md:text-base leading-relaxed ${downloadTextColor}`}
          >
            Includes professional photo, verified work experience, quantified achievements, and <strong>active clickable links</strong> to LinkedIn, GitHub, and live projects.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-600 dark:text-zinc-300 pt-1">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-500" />
              Clickable Hyperlinks
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-500" />
              High-Res Photo Included
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-500" />
              ATS Keyword Optimized
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <motion.button
              onClick={onDownload}
              disabled={isDownloading}
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#4285F4] hover:bg-[#3367D6] text-white rounded-full font-bold shadow-lg shadow-blue-500/25 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={18} />
              {isDownloading ? "Generating PDF with Links..." : "Download PDF"}
            </motion.button>

            <motion.button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-zinc-700 rounded-full font-bold shadow-sm transition-all"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Printer size={18} className="text-slate-600 dark:text-zinc-300" />
              Print / Save as PDF (Vector)
            </motion.button>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default ResumeDownload;
