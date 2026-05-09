"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Zap, Heart } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Palette,
    title: "Design Focused",
    description: "Creating pixel-perfect interfaces with attention to every detail.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and delivering lightning-fast experiences.",
  },
  {
    icon: Heart,
    title: "Accessibility",
    description: "Building inclusive products that everyone can use and enjoy.",
  },
];

export function About() {
  return (
    <section id="about" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-1/3 h-[500px] bg-gradient-to-r from-primary/5 to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-72 h-72 border border-primary/30 rounded-2xl"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-72 h-72 border border-accent/30 rounded-2xl"
                animate={{ rotate: [0, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />

              {/* Main card */}
              <div className="relative glass rounded-2xl p-8 h-full flex flex-col justify-center">
                <div className="text-8xl font-bold text-gradient mb-4">5+</div>
                <p className="text-xl text-muted-foreground">
                  Years of crafting digital experiences
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary/50 rounded-xl">
                    <div className="text-2xl font-bold text-foreground">50+</div>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-xl">
                    <div className="text-2xl font-bold text-foreground">30+</div>
                    <p className="text-sm text-muted-foreground">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-primary text-sm font-medium uppercase tracking-widest mb-4"
            >
              About Me
            </motion.span>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Passionate about creating{" "}
              <span className="text-gradient">exceptional</span> web experiences
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {"I'm a frontend developer based in San Francisco, specializing in building exceptional digital experiences. With a strong foundation in modern web technologies and a keen eye for design, I transform ideas into elegant, functional applications."}
            </p>

            <p className="text-muted-foreground leading-relaxed mb-10">
              {"When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community."}
            </p>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
