import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
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

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }).max(50),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  // Honeypot – hidden from humans, must remain empty.
  website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = ({ className }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const isDark = className?.includes("dark-theme");
  const isGoogle = className?.includes("google-theme");
  const mountedAt = useRef(Date.now());

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: values.name,
          email: values.email,
          phone: values.phone || "",
          message: values.message,
          website: values.website ?? "",
          elapsedMs: Date.now() - mountedAt.current,
        },
      });

      if (error) throw error;

      toast.success("Message sent successfully!");
      setIsSubmitting(false);
      setSubmitted(true);
      form.reset();
      mountedAt.current = Date.now();
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send message. Please try again.");
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return <ContactSuccessMessage onSendAnother={() => setSubmitted(false)} />;
  }

  const darkInputClasses =
    "w-full bg-transparent border-b border-gray-500 py-3 text-white placeholder:text-gray-400 focus:border-white focus:outline-none transition-colors";

  const lightInputClasses =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20";

  const googleInputClasses =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm transition focus:border-[#4285F4] focus:ring-2 focus:ring-[#4285F4]/25";

  const inputClasses = isDark
    ? darkInputClasses
    : isGoogle
      ? googleInputClasses
      : lightInputClasses;

  const messageClassName = isDark ? "text-red-400" : "text-red-500";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-5 ${className}`}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input placeholder="Full name" className={inputClasses} {...field} />
              </FormControl>
              <FormMessage className={messageClassName} />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input type="email" placeholder="Email address" className={inputClasses} {...field} />
              </FormControl>
              <FormMessage className={messageClassName} />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input type="tel" placeholder="Phone number (optional)" className={inputClasses} {...field} />
              </FormControl>
              <FormMessage className={messageClassName} />
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
                  placeholder="Tell me about your project, timeline, and goals"
                  rows={4}
                  className={`${inputClasses} resize-none`}
                  {...field}
                />
              </FormControl>
              <FormMessage className={messageClassName} />
            </FormItem>
          )}
        />

        <motion.button
          type="submit"
          className={`flex items-center justify-center rounded-full px-8 py-3 font-medium transition-all ${
            isDark
              ? "border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#1e2a4a]"
              : isGoogle
                ? "w-full bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] text-white shadow-[0_12px_25px_rgba(66,133,244,0.28)] hover:shadow-[0_16px_28px_rgba(52,168,83,0.25)]"
                : "w-full bg-gradient-to-r from-primary to-portfolioPurple text-white shadow-md"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg className="-ml-1 mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
