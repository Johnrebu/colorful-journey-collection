import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Code,
  Smartphone,
  Rocket,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  IndianRupee,
  Users,
} from "lucide-react";
import useSeo from "@/hooks/useSeo";

const PHONE_NUMBER = "918754774022";
const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
  "Hi Johnson, I found your Chennai services page and I'd like to discuss a project."
)}`;

const localServices = [
  {
    icon: Code,
    title: "React & TypeScript Web Apps",
    description:
      "High-performance business websites, portals, and dashboards built with React, TypeScript, and Tailwind CSS — the same stack used in my production client work.",
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    description:
      "Cross-platform mobile apps for Chennai startups and SMEs, from MVP to enterprise, with transparent fixed-price tiers.",
  },
  {
    icon: Rocket,
    title: "WordPress & CMS Sites",
    description:
      "Fast, editable business sites and blogs with on-page SEO baked in — ideal for local businesses that want to update content themselves.",
  },
];

const whyLocal = [
  {
    icon: MapPin,
    title: "Based in Tambaram, Chennai",
    description:
      "Available for in-person meetings across Chennai — Tambaram, OMR, Guindy, Velachery, and the wider metro area.",
  },
  {
    icon: IndianRupee,
    title: "Transparent INR Pricing",
    description:
      "Fixed-price packages from ₹12,000 for landing sites to enterprise web apps — no hidden costs, clear deliverables.",
  },
  {
    icon: Clock,
    title: "Same Timezone, Fast Turnarounds",
    description:
      "No offshore lag. Quick iterations during Indian business hours with 1–2 week delivery on smaller builds.",
  },
  {
    icon: Users,
    title: "One Point of Contact",
    description:
      "You work directly with the developer building your product — no account managers, no hand-offs.",
  },
];

const areas = [
  "Tambaram",
  "OMR",
  "Guindy",
  "Velachery",
  "Adyar",
  "T. Nagar",
  "Anna Nagar",
  "Chromepet",
  "Porur",
  "Sholinganallur",
];

export default function ChennaiServices() {
  useSeo({
    title: "Freelance React Developer in Chennai | Johnson T",
    description:
      "Hire a freelance React developer in Chennai for websites, web apps, and mobile apps. Based in Tambaram — transparent INR pricing, fast local turnarounds, direct communication.",
    keywords:
      "freelance react developer chennai, web developer chennai, freelance web developer tambaram, react developer india, website development chennai, mobile app developer chennai, Johnson T",
    ogUrl: "https://colorful-journey-collection.lovable.app/chennai-services",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://colorful-journey-collection.lovable.app/chennai-services#business",
          name: "Johnson T — Freelance Web & Mobile Developer, Chennai",
          description:
            "Freelance React developer in Chennai offering website, web application, and mobile app development with transparent INR pricing.",
          url: "https://colorful-journey-collection.lovable.app/chennai-services",
          telephone: "+91-875-477-4022",
          email: "johnchemist91@gmail.com",
          priceRange: "₹12,000 – ₹10,00,000",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Tambaram, Chennai",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
          areaServed: [
            { "@type": "City", name: "Chennai" },
            { "@type": "State", name: "Tamil Nadu" },
          ],
          founder: {
            "@type": "Person",
            name: "Johnson T",
            jobTitle: "Full-Stack Software Engineer",
            sameAs: [
              "https://www.linkedin.com/in/johnsonelon/",
              "https://github.com/Johnrebu",
              "https://x.com/JohnsonJoh31080",
            ],
          },
        },
        {
          "@type": "Service",
          serviceType: "Web & Mobile Application Development",
          provider: {
            "@type": "Person",
            name: "Johnson T",
            url: "https://colorful-journey-collection.lovable.app/",
          },
          areaServed: { "@type": "City", name: "Chennai" },
          availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: "https://colorful-journey-collection.lovable.app/contact",
          },
        },
      ],
    },
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Chennai Services", url: "/chennai-services" },
    ],
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
      className="mx-auto max-w-5xl space-y-16 px-4 py-10"
    >
      {/* Hero */}
      <header className="space-y-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
          <MapPin size={14} aria-hidden /> Tambaram, Chennai, Tamil Nadu
        </span>
        <h1 className="font-playfair text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
          Freelance React Developer in Chennai
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-gray-300">
          I'm Johnson T — a full-stack software engineer based in Tambaram. I build
          fast, SEO-ready websites, web applications, and mobile apps for Chennai
          businesses, with fixed INR pricing and direct, no-middleman communication.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-gray-200"
          >
            Get a Free Quote <ArrowRight size={16} aria-hidden />
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-500 dark:border-zinc-600 dark:text-zinc-100 dark:hover:border-zinc-400"
          >
            <MessageCircle size={16} aria-hidden /> WhatsApp Me
          </a>
        </div>
      </header>

      {/* Services */}
      <section aria-labelledby="chennai-services-heading" className="space-y-8">
        <h2
          id="chennai-services-heading"
          className="text-center font-playfair text-3xl font-bold text-slate-900 dark:text-white"
        >
          What I Build for Chennai Businesses
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {localServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <service.icon className="mb-4 text-slate-700 dark:text-zinc-200" size={28} aria-hidden />
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-sm text-slate-600 dark:text-gray-300">
          Full package details and pricing on the{" "}
          <Link to="/services" className="font-semibold underline underline-offset-4">
            Services & Pricing page
          </Link>
          .
        </p>
      </section>

      {/* Why local */}
      <section aria-labelledby="why-local-heading" className="space-y-8">
        <h2
          id="why-local-heading"
          className="text-center font-playfair text-3xl font-bold text-slate-900 dark:text-white"
        >
          Why Hire a Local Chennai Developer?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {whyLocal.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <item.icon className="shrink-0 text-slate-700 dark:text-zinc-200" size={24} aria-hidden />
              <div>
                <h3 className="mb-1 font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Service areas */}
      <section aria-labelledby="areas-heading" className="space-y-6 text-center">
        <h2
          id="areas-heading"
          className="font-playfair text-3xl font-bold text-slate-900 dark:text-white"
        >
          Areas I Serve in Chennai
        </h2>
        <ul className="flex flex-wrap items-center justify-center gap-3">
          {areas.map((area) => (
            <li
              key={area}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
            >
              <CheckCircle2 size={14} aria-hidden /> {area}
            </li>
          ))}
        </ul>
        <p className="mx-auto max-w-2xl text-sm text-slate-600 dark:text-gray-300">
          Based in Tambaram and available for face-to-face meetings across the city —
          or fully remote for clients anywhere in India and abroad.
        </p>
      </section>

      {/* CTA */}
      <section className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="font-playfair text-3xl font-bold text-slate-900 dark:text-white">
          Ready to Start Your Project?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-600 dark:text-gray-300">
          Tell me about your idea and I'll get back with a clear scope, timeline, and
          fixed quote — usually within one business day.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-gray-200"
          >
            Contact Me <ArrowRight size={16} aria-hidden />
          </Link>
          <Link
            to="/projects"
            className="text-sm font-semibold text-slate-700 underline underline-offset-4 dark:text-zinc-200"
          >
            See my past work
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
