
import { motion } from "framer-motion";
import React from "react";

interface ContactSuccessMessageProps {
  onSendAnother: () => void;
}

const ContactSuccessMessage = ({ onSendAnother }: ContactSuccessMessageProps) => {
  return (
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
        onClick={onSendAnother}
        className="mt-6 px-5 py-2 bg-primary text-white rounded-full text-sm"
      >
        Send Another Message
      </button>
    </motion.div>
  );
};

export default ContactSuccessMessage;
