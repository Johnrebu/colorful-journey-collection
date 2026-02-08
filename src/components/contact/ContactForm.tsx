
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import emailjs from 'emailjs-com';
import ContactSuccessMessage from "./ContactSuccessMessage";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

interface ContactFormProps {
  className?: string;
}

// Define the validation schema using Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }).max(50),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = ({ className }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const isDark = className?.includes('dark-theme');
  
  // Initialize EmailJS once
  useEffect(() => {
    emailjs.init("ogQh6AcgQUAdLCNuG");
  }, []);
  
  // Initialize the form with react-hook-form and zod resolver
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Structured parameters according to EmailJS template expectations
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        phone: values.phone || 'Not provided',
        message: values.message,
        to_name: "Johnson T",
        reply_to: values.email,
      };
      
      // Updated EmailJS configuration with correct values
      const result = await emailjs.send(
        'service_gedo5ah', 
        'template_nap8wvp',
        templateParams,
        'ogQh6AcgQUAdLCNuG'
      );
      
      console.log('Email successfully sent!', result.text);
      toast.success("Message sent successfully!");
      setIsSubmitting(false);
      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error("Failed to send message. Please try again.");
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <ContactSuccessMessage onSendAnother={() => setSubmitted(false)} />
    );
  }

  const inputClasses = isDark 
    ? "w-full bg-transparent border-b border-gray-500 py-3 text-white placeholder:text-gray-400 focus:border-white focus:outline-none transition-colors"
    : "w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent bg-white shadow-sm";

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className={`space-y-6 ${className}`}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input 
                  placeholder="Name" 
                  className={inputClasses}
                  {...field} 
                />
              </FormControl>
              <FormMessage className={isDark ? "text-red-400" : ""} />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className={inputClasses}
                  {...field} 
                />
              </FormControl>
              <FormMessage className={isDark ? "text-red-400" : ""} />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input 
                  type="tel" 
                  placeholder="Phone number" 
                  className={inputClasses}
                  {...field} 
                />
              </FormControl>
              <FormMessage className={isDark ? "text-red-400" : ""} />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <textarea 
                  placeholder="Message" 
                  rows={3}
                  className={`${inputClasses} resize-none`}
                  {...field} 
                />
              </FormControl>
              <FormMessage className={isDark ? "text-red-400" : ""} />
            </FormItem>
          )}
        />
        
        <motion.button
          type="submit"
          className={`py-3 px-8 rounded-full font-medium flex items-center justify-center transition-all ${
            isDark 
              ? "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1e2a4a]" 
              : "w-full bg-gradient-to-r from-primary to-portfolioPurple text-white shadow-md"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </motion.button>
      </form>
    </Form>
  );
};

export default ContactForm;
