
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface ContactSuccessMessageProps {
  onSendAnother: () => void;
}

const ContactSuccessMessage = ({ onSendAnother }: ContactSuccessMessageProps) => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <motion.div 
      className="text-center py-10"
      role="status"
      aria-live="polite"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#34A853]/15">
        <svg className="h-8 w-8 text-[#34A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <h4
        ref={headingRef}
        tabIndex={-1}
        className="mb-2 font-display text-xl font-semibold text-slate-900 outline-none dark:text-white"
      >
        Message Sent
      </h4>
      <p className="text-sm text-slate-600 dark:text-zinc-300">Thank you for reaching out. I'll get back to you shortly.</p>
      <div aria-hidden="true" className="mx-auto mt-4 flex w-fit gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#4285F4]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#EA4335]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FBBC05]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34A853]" />
      </div>
      <button 
        onClick={onSendAnother}
        className="mt-6 rounded-full bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] px-5 py-2 text-sm font-medium text-white shadow-md"
      >
        Send Another Message
      </button>
    </motion.div>
  );
};

export default ContactSuccessMessage;
