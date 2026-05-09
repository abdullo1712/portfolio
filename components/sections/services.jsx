"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Palette,
  Zap,
  LineChart,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building fast, scalable, and maintainable web applications using modern frameworks and best practices.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Creating seamless experiences across all devices with mobile-first approach and fluid layouts.",
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description:
      "Translating designs into pixel-perfect, interactive interfaces with smooth animations.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Optimizing load times, Core Web Vitals, and overall application performance.",
  },
  {
    icon: LineChart,
    title: "Analytics Integration",
    description:
      "Implementing tracking solutions to measure and improve user engagement metrics.",
  },
  {
    icon: Shield,
    title: "Web Accessibility",
    description:
      "Ensuring your applications are accessible to all users following WCAG guidelines.",
  },
];

export function Services() {
  return (
    <section className="py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-background to-secondary/5 pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-medium uppercase tracking-widest mb-4">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Services I Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive frontend development services to bring your digital vision
            to life.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass rounded-2xl p-8 hover:glow-sm transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon size={28} className="text-primary group-hover:text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Decorative line */}
              <div className="mt-6 h-0.5 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
