import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import useSeo from "@/hooks/useSeo";

const PHONE_NUMBER = "918754774022";
const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
  "Hi Johnson, I read your FAQ page and have a question about a project."
)}`;

const faqs = [
  {
    question: "How do I hire a React developer in Chennai?",
    answer:
      "Reach out through the contact form or WhatsApp with a short description of your project. I'll reply within one business day with questions, a clear scope, a fixed quote, and a timeline. Once we agree, work starts with a small milestone — no lengthy contracts for smaller builds.",
  },
  {
    question: "How much does a React developer in Chennai charge?",
    answer:
      "My packages are fixed-price and transparent: landing sites start at ₹12,000, business websites and dashboards range from ₹25,000–₹1,50,000, and larger web or mobile applications are scoped individually up to enterprise scale. You'll always know the total cost before work begins. Full details are on the Services & Pricing page.",
  },
  {
    question: "Can you build both websites and mobile apps?",
    answer:
      "Yes. I build React and TypeScript web applications, cross-platform mobile apps, and WordPress/CMS sites. Using a shared component approach means your web and mobile experiences stay consistent while keeping costs lower than hiring separate teams.",
  },
  {
    question: "How long does it take to build a website or app?",
    answer:
      "A landing page or small business site typically takes 1–2 weeks. A custom web application usually takes 4–8 weeks depending on features. Mobile apps are scoped per project. Because I'm based in Chennai, we work in the same timezone with quick daily iterations.",
  },
  {
    question: "Do you work with clients outside Chennai?",
    answer:
      "Absolutely. While I'm based in Tambaram, Chennai and available for in-person meetings across the city, I work fully remote with clients across India and internationally — with clear written communication and regular progress updates.",
  },
  {
    question: "Do you offer maintenance and support after launch?",
    answer:
      "Yes. Every project includes a post-launch support window, and ongoing maintenance plans are available for updates, security patches, content changes, and feature additions. You'll never be left without a developer who knows your codebase.",
  },
  {
    question: "Which areas of Chennai do you serve for in-person meetings?",
    answer:
      "I'm based in Tambaram and regularly meet clients in OMR, Guindy, Velachery, Adyar, T. Nagar, Anna Nagar, Chromepet, Porur, and Sholinganallur. Video calls are always an option if that's more convenient.",
  },
  {
    question: "What technologies do you use for React development?",
    answer:
      "My core stack is React 18 with TypeScript, Vite, and Tailwind CSS for the frontend, with Django or modern backend services for APIs. I focus on fast load times, SEO-ready markup, accessibility, and maintainable code that another developer could pick up easily.",
  },
  {
    question: "Can you redesign or fix my existing website?",
    answer:
      "Yes — I take on redesigns, performance fixes, and migrations of existing sites to React. I'll audit your current site first and recommend whether a rebuild or targeted improvements give you better value for money.",
  },
  {
    question: "How do we communicate during the project?",
    answer:
      "You work directly with me — no account managers or hand-offs. We use WhatsApp, email, or scheduled calls, with written milestone updates so you always know exactly where the project stands.",
  },
];

export default function ChennaiFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useSeo({
    title: "React Developer Chennai — FAQ | Johnson T",
    description:
      "Answers to common questions about hiring a freelance React developer in Chennai: pricing, timelines, services, areas served, and how projects work. Based in Tambaram.",
    keywords:
      "react developer chennai faq, hire react developer chennai, freelance react developer chennai cost, website developer chennai pricing, web developer tambaram, Johnson T",
    ogUrl: "https://colorful-journey-collection.lovable.app/chennai-faq",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://colorful-journey-collection.lovable.app/chennai-faq#faq",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Chennai Services", url: "/chennai-services" },
      { name: "FAQ", url: "/chennai-faq" },
    ],
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
      className="mx-auto max-w-3xl space-y-14 px-4 py-10"
    >
      {/* Hero */}
      <header className="space-y-5 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
          <MapPin size={14} aria-hidden /> Chennai, Tamil Nadu
        </span>
        <h1 className="font-playfair text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
          React Developer in Chennai — Frequently Asked Questions
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-gray-300">
          Everything you need to know about hiring me for your website, web app, or
          mobile app — pricing, timelines, process, and how we work together.
        </p>
      </header>

      {/* FAQ accordion */}
      <section aria-label="Frequently asked questions" className="space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-slate-900 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:text-white dark:hover:bg-zinc-800 dark:focus-visible:ring-zinc-500 sm:text-base"
              >
                {faq.question}
                <ChevronDown
                  size={18}
                  aria-hidden
                  className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-panel-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="font-playfair text-3xl font-bold text-slate-900 dark:text-white">
          Have a Question That's Not Listed?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-600 dark:text-gray-300">
          Ask me directly — I usually reply within one business day with a straight
          answer and, if you have a project in mind, a clear fixed quote.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-gray-200"
          >
            Contact Me <ArrowRight size={16} aria-hidden />
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-500 dark:border-zinc-600 dark:text-zinc-100 dark:hover:border-zinc-400"
          >
            <MessageCircle size={16} aria-hidden /> WhatsApp Me
          </a>
          <Link
            to="/chennai-services"
            className="text-sm font-semibold text-slate-700 underline underline-offset-4 dark:text-zinc-200"
          >
            View Chennai services
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
