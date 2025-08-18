
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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormProps {
  className?: string;
}

// Define the validation schema using Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }).max(50),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = ({ className }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
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

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className={`space-y-5 ${className}`}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Your name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent bg-white shadow-sm"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">Email</FormLabel>
              <FormControl>
                <Input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent bg-white shadow-sm"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Your message..." 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent bg-white shadow-sm resize-y min-h-[120px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
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
    </Form>
  );
};

export default ContactForm;
