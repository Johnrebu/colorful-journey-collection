import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import useSeo from "@/hooks/useSeo";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  useSeo({
    title: "Contact - Johnson | Get In Touch",
    description:
      "Contact Johnson for project inquiries, collaboration opportunities, or just to say hello. Available for freelance work and full-time opportunities.",
    keywords: "contact, email, phone, get in touch, collaboration, freelance, hire",
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[80vh] py-10"
    >
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/45 bg-white/75 p-3 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/65 md:p-4">
        <div className="pointer-events-none absolute -left-12 -top-14 h-44 w-44 rounded-full bg-[#4285F4]/30 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-10 h-40 w-40 rounded-full bg-[#34A853]/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 left-1/3 h-44 w-44 rounded-full bg-[#FBBC05]/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 right-6 h-36 w-36 rounded-full bg-[#EA4335]/25 blur-3xl" />

        <div className="relative grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1.1fr]">
          <section className="rounded-[1.6rem] bg-[#111827] p-8 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] lg:p-10">
            <motion.h1
              className="font-display text-4xl leading-tight md:text-5xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Let&apos;s Build
              <span className="mt-2 block bg-gradient-to-r from-[#4285F4] via-[#34A853] to-[#EA4335] bg-clip-text text-transparent">
                Something Useful
              </span>
            </motion.h1>

            <motion.p
              className="mt-5 max-w-md text-sm leading-relaxed text-zinc-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              I&apos;m open to full-stack engineering roles, freelance builds, and product collaborations. Share your goal, timeline, and scope and I&apos;ll respond with a practical next step.
            </motion.p>

            <div className="mt-10 space-y-6 text-sm">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="font-semibold text-white">Address</h3>
                <p className="mt-1 text-zinc-400">
                  Tambaram, Chennai
                  <br />
                  Tamil Nadu, India - 600045
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="font-semibold text-white">Phone</h3>
                <a href="tel:+918754774022" className="mt-1 inline-block text-zinc-400 transition-colors hover:text-white">
                  +91 875-477-4022
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="font-semibold text-white">Email</h3>
                <a
                  href="mailto:johnchemist91@gmail.com"
                  className="mt-1 inline-block text-zinc-400 transition-colors hover:text-white"
                >
                  johnchemist91@gmail.com
                </a>
              </motion.div>
            </div>

            <motion.div
              className="mt-10 flex gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="https://www.linkedin.com/in/johnsonelon/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-[#4285F4] hover:bg-[#4285F4]/20"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/Johnrebu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-[#34A853] hover:bg-[#34A853]/20"
              >
                <Github size={18} />
              </a>
              <a
                href="https://x.com/JohnsonJoh31080"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-[#EA4335] hover:bg-[#EA4335]/20"
              >
                <Twitter size={18} />
              </a>
            </motion.div>
          </section>

          <motion.section
            className="relative rounded-[1.6rem] border border-slate-200 bg-white p-8 shadow-[0_20px_45px_rgba(15,23,42,0.08)] dark:border-zinc-700 dark:bg-zinc-900 lg:p-10"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="mb-7 flex items-center justify-between">
              <h2 className="font-display text-2xl text-slate-900 dark:text-white md:text-3xl">Contact Form</h2>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#4285F4]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#EA4335]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FBBC05]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#34A853]" />
              </div>
            </div>

            <div className="google-form-modal rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-zinc-700 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800 md:p-6">
              <ContactForm className="google-theme" />
            </div>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
}
