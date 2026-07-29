import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Smartphone,
  Clock,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
  Globe,
  Layers,
  HelpCircle,
} from "lucide-react";

interface ServicesSectionProps {
  id?: string;
  className?: string;
}

const PHONE_NUMBER = "918754774022";

const createWhatsAppUrl = (packageName: string) => {
  const text = `Hi Johnson, I'd like to discuss a project regarding "${packageName}". Could you provide more details?`;
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
};

const webPackages = [
  {
    id: "basic-landing",
    name: "Basic Landing Site",
    price: "₹12,000 – ₹25,000",
    badge: null,
    timeline: "1 - 2 Weeks",
    description: "Ideal for personal branding, simple portfolios, and high-conversion product landing pages.",
    deliverables: [
      "5 Custom Designed Pages",
      "Fully Responsive Mobile UI",
      "Contact Form Integration",
      "Basic SEO Setup & Meta Tags",
      "Fast Loading & Web Vitals Optimization",
    ],
  },
  {
    id: "business-cms",
    name: "Business + CMS / Blog",
    price: "₹25,000 – ₹60,000",
    badge: "Popular Choice",
    timeline: "2 - 4 Weeks",
    description: "Complete corporate web presences with full content editing, blogging capabilities, and growth tools.",
    deliverables: [
      "10 Dynamic Content Pages",
      "Dynamic Blog & Article Engine",
      "Admin CMS Control Panel",
      "On-Page SEO & Social Sharing",
      "Analytics & Lead Tracking Setup",
    ],
  },
  {
    id: "ecommerce-site",
    name: "E-Commerce Website",
    price: "₹60,000 – ₹2,00,000+",
    badge: null,
    timeline: "4 - 6 Weeks",
    description: "Robust online store ready for processing sales, managing inventory, and customer workflows.",
    deliverables: [
      "Interactive Product Catalog & Filters",
      "Cart & Secure Checkout Flow",
      "Payment Gateway Integration (Razorpay/Stripe)",
      "Admin Inventory & Order Dashboard",
      "Customer Account & Order Tracking",
    ],
  },
  {
    id: "custom-web-app",
    name: "Custom Web App / Portal",
    price: "₹80,000 – ₹5,00,000+",
    badge: "Enterprise Scale",
    timeline: "6 - 12 Weeks",
    description: "Complex SaaS products, internal tools, multi-role client portals, and bespoke web applications.",
    deliverables: [
      "Authentication & Role-Based Access Control",
      "Custom Multi-Tier Admin Dashboards",
      "Bespoke Workflows & Automation",
      "RESTful / GraphQL API Integrations",
      "Scalable Database Architecture",
    ],
  },
];

const mobilePackages = [
  {
    id: "basic-mobile",
    name: "Basic Application",
    price: "₹50,000 – ₹1,20,000",
    badge: null,
    timeline: "3 - 4 Weeks",
    description: "Sleek mobile app MVP designed for utility, quick user testing, and key feature demonstrations.",
    deliverables: [
      "4–5 Static & Dynamic Screens",
      "Clean Mobile UI/UX Design",
      "Basic Form Inputs & Validation",
      "Cross-Platform Android & iOS Build",
      "Local Storage & State Setup",
    ],
  },
  {
    id: "standard-mobile",
    name: "Standard Application",
    price: "₹1,50,000 – ₹4,00,000",
    badge: "Most Requested",
    timeline: "6 - 8 Weeks",
    description: "Production-ready mobile solution with cloud database, authentication, payments, and admin management.",
    deliverables: [
      "Secure User Authentication & Profiles",
      "In-App Payment Gateway Integration",
      "Cloud Backend & Admin Control Panel",
      "Custom RESTful APIs & Data Sync",
      "Push Notifications & User Alerts",
    ],
  },
  {
    id: "complex-mobile",
    name: "Complex Enterprise App",
    price: "₹4,00,000 – ₹10,00,000+",
    badge: "High Performance",
    timeline: "10 - 16 Weeks",
    description: "Feature-dense mobile ecosystems built for high user volume, complex business logic, and real-time operations.",
    deliverables: [
      "Real-Time Chat & Feature Synchronization",
      "Appointment & Service Booking Engine",
      "Full Mobile E-Commerce & Subscriptions",
      "Custom Microservice Backend Architecture",
      "App Store & Play Store Deployment Support",
    ],
  },
];

const hourlyPackages = [
  {
    id: "hourly-consulting",
    name: "Hourly Technical Consulting",
    price: "₹800 – ₹2,000 / hr",
    subtitle: "Flexible Hourly Assistance",
    badge: "On-Demand",
    timeline: "Flexible Schedule",
    description: "Targeted technical advisory, code reviews, bug fixes, and feature enhancement sessions on an hourly basis.",
    useCases: [
      "Bug fixes & critical troubleshooting",
      "Frontend & backend code reviews",
      "Small feature enhancements & UI polishes",
      "System architecture consultation & refactoring",
    ],
  },
  {
    id: "daily-sprint",
    name: "Dedicated Daily Sprint",
    price: "₹3,500 – ₹8,000 / day",
    subtitle: "8 Hours Focused Engineering",
    badge: "Maximum Speed",
    timeline: "Daily / Weekly Sprints",
    description: "Dedicated 8-hour intensive engineering sprints to rapidly ship features, prototype MVPs, or overhaul legacy code.",
    useCases: [
      "Rapid product MVP prototyping",
      "High-intensity sprint feature delivery",
      "Major codebase refactoring & performance tuning",
      "Emergency production debugging & optimization",
    ],
  },
];

const inclusions = [
  "100% Fully Responsive Design across mobile, tablet, and desktop",
  "2 Structured Rounds of Client Design & Code Revisions",
  "1 Month Free Post-Launch Bug Fix & Technical Support",
  "Full Source Code & Intellectual Property Handover",
];

const exclusions = [
  "Third-party hosting, domain registration, and SSL certificate fees",
  "Paid third-party API credits (e.g., OpenAI, Twilio, Google Maps)",
];

export default function ServicesSection({ id = "services", className = "" }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<"web" | "mobile" | "hourly">("web");

  return (
    <section id={id} className={`py-12 sm:py-16 ${className}`}>
      {/* Section Header */}
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-700 dark:text-cyan-300 backdrop-blur-md"
        >
          <Sparkles size={14} className="text-cyan-500 animate-pulse" />
          <span>Services & Investment</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl"
        >
          Services & Packages
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.14 }}
          className="mx-auto max-w-2xl text-base text-slate-600 dark:text-zinc-300 sm:text-lg leading-relaxed"
        >
          Transparent, value-driven engagement models crafted for startups, growing businesses, and enterprises. Select a service tier below to review deliverables.
        </motion.p>

        {/* Tab Controls */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="pt-4 flex justify-center"
        >
          <div className="inline-flex p-1.5 rounded-full border border-slate-200 bg-white/80 dark:border-white/10 dark:bg-zinc-950/80 shadow-md backdrop-blur-xl gap-1 max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab("web")}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === "web"
                  ? "bg-slate-900 text-white dark:bg-gradient-to-r dark:from-cyan-400 dark:to-teal-400 dark:text-zinc-950 shadow-md scale-[1.02]"
                  : "text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
            >
              <Globe size={16} />
              <span>Web Development</span>
            </button>

            <button
              onClick={() => setActiveTab("mobile")}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === "mobile"
                  ? "bg-slate-900 text-white dark:bg-gradient-to-r dark:from-cyan-400 dark:to-teal-400 dark:text-zinc-950 shadow-md scale-[1.02]"
                  : "text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
            >
              <Smartphone size={16} />
              <span>Mobile App Development</span>
            </button>

            <button
              onClick={() => setActiveTab("hourly")}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === "hourly"
                  ? "bg-slate-900 text-white dark:bg-gradient-to-r dark:from-cyan-400 dark:to-teal-400 dark:text-zinc-950 shadow-md scale-[1.02]"
                  : "text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
            >
              <Zap size={16} />
              <span>Hourly & Custom Engagement</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Tab Panels */}
      <div className="mt-10 mx-auto max-w-7xl">
        <AnimatePresence mode="wait">
          {/* TAB 1: WEB DEVELOPMENT */}
          {activeTab === "web" && (
            <motion.div
              key="tab-web"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            >
              {webPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="group relative flex flex-col justify-between rounded-[1.8rem] border border-slate-200/90 bg-white/80 p-6 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-zinc-950/75 backdrop-blur-xl"
                >
                  {pkg.badge && (
                    <div className="absolute -top-3 right-5">
                      <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 px-3 py-1 text-[11px] font-bold text-slate-950 shadow-sm uppercase tracking-wider">
                        <Sparkles size={11} />
                        {pkg.badge}
                      </span>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                        {pkg.name}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
                        {pkg.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 dark:border-white/10">
                      <div className="text-2xl font-extrabold bg-gradient-to-r from-slate-900 via-cyan-700 to-teal-600 dark:from-white dark:via-cyan-300 dark:to-teal-300 bg-clip-text text-transparent">
                        {pkg.price}
                      </div>
                      <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-zinc-400 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-full border border-slate-200/60 dark:border-white/10">
                        <Clock size={13} className="text-cyan-500" />
                        <span>Timeline: {pkg.timeline}</span>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                        Deliverables:
                      </p>
                      <ul className="space-y-2 text-xs text-slate-700 dark:text-zinc-300">
                        {pkg.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="text-cyan-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/10">
                    <a
                      href={createWhatsAppUrl(pkg.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 dark:border-cyan-400/30 bg-slate-900 dark:bg-cyan-400/10 px-4 py-2.5 text-xs font-bold text-white dark:text-cyan-200 transition-all hover:bg-slate-800 dark:hover:bg-cyan-400/20 hover:scale-[1.02] shadow-sm"
                    >
                      <MessageCircle size={15} className="text-emerald-400" />
                      <span>Get a Custom Quote</span>
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* TAB 2: MOBILE APP DEVELOPMENT */}
          {activeTab === "mobile" && (
            <motion.div
              key="tab-mobile"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 grid-cols-1 md:grid-cols-3"
            >
              {mobilePackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="group relative flex flex-col justify-between rounded-[1.8rem] border border-slate-200/90 bg-white/80 p-6 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-zinc-950/75 backdrop-blur-xl"
                >
                  {pkg.badge && (
                    <div className="absolute -top-3 right-5">
                      <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 px-3 py-1 text-[11px] font-bold text-slate-950 shadow-sm uppercase tracking-wider">
                        <Sparkles size={11} />
                        {pkg.badge}
                      </span>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                        {pkg.name}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
                        {pkg.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 dark:border-white/10">
                      <div className="text-2xl font-extrabold bg-gradient-to-r from-slate-900 via-cyan-700 to-teal-600 dark:from-white dark:via-cyan-300 dark:to-teal-300 bg-clip-text text-transparent">
                        {pkg.price}
                      </div>
                      <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-zinc-400 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-full border border-slate-200/60 dark:border-white/10">
                        <Clock size={13} className="text-cyan-500" />
                        <span>Timeline: {pkg.timeline}</span>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                        Deliverables:
                      </p>
                      <ul className="space-y-2 text-xs text-slate-700 dark:text-zinc-300">
                        {pkg.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="text-cyan-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/10">
                    <a
                      href={createWhatsAppUrl(pkg.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 dark:border-cyan-400/30 bg-slate-900 dark:bg-cyan-400/10 px-4 py-2.5 text-xs font-bold text-white dark:text-cyan-200 transition-all hover:bg-slate-800 dark:hover:bg-cyan-400/20 hover:scale-[1.02] shadow-sm"
                    >
                      <MessageCircle size={15} className="text-emerald-400" />
                      <span>Discuss Project</span>
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* TAB 3: HOURLY & CUSTOM ENGAGEMENT */}
          {activeTab === "hourly" && (
            <motion.div
              key="tab-hourly"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 grid-cols-1 md:grid-cols-2"
            >
              {hourlyPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="group relative flex flex-col justify-between rounded-[1.8rem] border border-slate-200/90 bg-white/80 p-7 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-zinc-950/75 backdrop-blur-xl"
                >
                  {pkg.badge && (
                    <div className="absolute -top-3 right-6">
                      <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 px-3 py-1 text-[11px] font-bold text-slate-950 shadow-sm uppercase tracking-wider">
                        <Zap size={12} />
                        {pkg.badge}
                      </span>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                        {pkg.name}
                      </h3>
                      <p className="mt-1 text-xs font-semibold text-cyan-600 dark:text-cyan-300">
                        {pkg.subtitle}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
                        {pkg.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 dark:border-white/10">
                      <div className="text-3xl font-extrabold bg-gradient-to-r from-slate-900 via-cyan-700 to-teal-600 dark:from-white dark:via-cyan-300 dark:to-teal-300 bg-clip-text text-transparent">
                        {pkg.price}
                      </div>
                      <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-zinc-400 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-full border border-slate-200/60 dark:border-white/10">
                        <Clock size={13} className="text-cyan-500" />
                        <span>Schedule: {pkg.timeline}</span>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                        Ideal For & Use Cases:
                      </p>
                      <ul className="space-y-2 text-xs text-slate-700 dark:text-zinc-300">
                        {pkg.useCases.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="text-cyan-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/10">
                    <a
                      href={createWhatsAppUrl(pkg.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 dark:border-cyan-400/30 bg-slate-900 dark:bg-cyan-400/10 px-5 py-3 text-xs font-bold text-white dark:text-cyan-200 transition-all hover:bg-slate-800 dark:hover:bg-cyan-400/20 hover:scale-[1.02] shadow-sm"
                    >
                      <MessageCircle size={16} className="text-emerald-400" />
                      <span>Book Consultation / Sprint</span>
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Standard Inclusions & Scope Notes Block */}
      <div className="mt-14 mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-slate-200/80 bg-white/70 p-6 sm:p-8 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/70">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Column 1: Included in All Fixed Projects */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-slate-900 dark:text-white">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="text-lg font-bold">Included in All Fixed Projects</h4>
              </div>

              <ul className="space-y-3 pt-1 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                {inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Exclusions & Additional Notes */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-slate-900 dark:text-white">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
                  <AlertCircle size={20} />
                </div>
                <h4 className="text-lg font-bold">Exclusions & Extra Services</h4>
              </div>

              <ul className="space-y-3 pt-1 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                {exclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <AlertCircle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 p-3 rounded-xl bg-slate-100/80 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 text-xs text-slate-600 dark:text-zinc-400">
                💡 Need custom API integration or ongoing monthly retainer support? Mention your custom requirements when reaching out.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Call-To-Action Banner */}
      <div className="mt-10 mx-auto max-w-7xl text-center">
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-slate-900 via-slate-900 to-[#07162c] dark:from-[#050c1e] dark:via-[#09152b] dark:to-[#040916] p-8 sm:p-10 shadow-2xl text-white">
          <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 -bottom-10 h-44 w-44 rounded-full bg-teal-400/15 blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-2 max-w-2xl">
              <h3 className="text-2xl font-bold sm:text-3xl text-white">
                Have a Unique Scope or Custom Idea?
              </h3>
              <p className="text-sm text-slate-300">
                Reach out directly on WhatsApp to receive a custom quote tailored to your exact tech stack, feature requirements, and timeline.
              </p>
            </div>

            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("Hi Johnson, I have a custom project query and would like to get a quote.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-300 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition-all hover:scale-105 hover:shadow-cyan-400/25 shrink-0"
            >
              <MessageCircle size={18} className="fill-slate-950" />
              <span>Discuss Project on WhatsApp</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
