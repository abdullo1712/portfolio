"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 75 },
    ],
  },
  {
    title: "Animation & 3D",
    skills: [
      { name: "Framer Motion", level: 90 },
      { name: "GSAP", level: 85 },
      { name: "Three.js", level: 70 },
      { name: "CSS Animations", level: 95 },
      { name: "Lottie", level: 80 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Figma", level: 85 },
      { name: "Webpack/Vite", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "REST APIs", level: 88 },
    ],
  },
];

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Three.js",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "Vercel",
  "Figma",
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-medium uppercase tracking-widest mb-4">
            Skills & Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Technologies I work with
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Constantly learning and adapting to new technologies to deliver the best
            solutions for every project.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-6 pr-6"
            >
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`${tech}-${index}`}
                  className="flex-shrink-0 px-6 py-3 rounded-full border border-border bg-secondary/30 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                >
                  {tech}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
