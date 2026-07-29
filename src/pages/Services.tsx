import React from "react";
import { motion } from "framer-motion";
import useSeo from "@/hooks/useSeo";
import { getServicesSchema, getBreadcrumbSchema } from "@/lib/seo";
import ServicesSection from "@/components/services/ServicesSection";

export default function Services() {
  useSeo({
    title: "Services & Pricing - Johnson T | Web & Mobile Development",
    description:
      "Explore web development, mobile application, and technical consulting packages by Johnson T. Fixed-price tiers and hourly rates with transparent deliverables.",
    keywords:
      "services and pricing, web development rates, mobile app development cost, freelance React developer, India full stack software engineer pricing, Johnson T services",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        getServicesSchema(),
        getBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]),
      ],
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      <ServicesSection />
    </motion.div>
  );
}
