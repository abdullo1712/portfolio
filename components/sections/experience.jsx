"use client";

import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    companyUrl: "https://example.com",
    period: "2022 — Present",
    description:
      "Leading frontend development for enterprise SaaS products. Architecting scalable solutions and mentoring junior developers.",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "StartupX",
    companyUrl: "https://example.com",
    period: "2020 — 2022",
    description:
      "Built and maintained multiple client-facing applications. Implemented complex animations and improved performance metrics by 40%.",
    technologies: ["Vue.js", "Nuxt.js", "Tailwind CSS", "Firebase"],
  },
  {
    id: 3,
    role: "Web Developer",
    company: "Digital Agency",
    companyUrl: "https://example.com",
    period: "2019 — 2020",
    description:
      "Developed responsive websites and interactive web applications for various clients across different industries.",
    technologies: ["JavaScript", "React", "SASS", "WordPress"],
  },
  {
    id: 4,
    role: "Junior Developer",
    company: "CodeLab",
    companyUrl: "https://example.com",
    period: "2018 — 2019",
    description:
      "Started my professional journey building landing pages and small web applications. Learned best practices and agile methodologies.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-medium uppercase tracking-widest mb-4">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey has been an exciting adventure of continuous
            learning and growth.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass rounded-2xl p-6 hover:glow-sm transition-all duration-300"
                  >
                    {/* Period badge */}
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                      {exp.period}
                    </span>

                    {/* Role & Company */}
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {exp.role}
                    </h3>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:text-accent transition-colors mb-4 group"
                    >
                      <Briefcase size={16} />
                      {exp.company}
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
