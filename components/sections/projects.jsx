"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "FinanceFlow",
    description:
      "A modern banking dashboard with real-time analytics, transaction tracking, and beautiful data visualizations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Web App",
  },
  {
    id: 2,
    title: "ArtisanCraft",
    description:
      "E-commerce platform for handcrafted goods with smooth animations and seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["React", "Stripe", "Framer Motion", "Node.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "E-commerce",
  },
  {
    id: 3,
    title: "NeuralVision",
    description:
      "AI-powered image recognition app with stunning visual feedback and intuitive user interface.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["Next.js", "OpenAI", "Three.js", "TensorFlow"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "AI/ML",
  },
  {
    id: 4,
    title: "TravelMate",
    description:
      "Travel planning platform with interactive maps, itinerary builder, and local recommendations.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    tags: ["Vue.js", "Mapbox", "Firebase", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Web App",
  },
  {
    id: 5,
    title: "DevCollab",
    description:
      "Real-time collaborative coding platform with video chat and pair programming features.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    tags: ["React", "WebRTC", "Socket.io", "Monaco Editor"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "SaaS",
  },
  {
    id: 6,
    title: "HealthPulse",
    description:
      "Health tracking dashboard with fitness metrics, meal planning, and progress analytics.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    tags: ["Next.js", "D3.js", "PostgreSQL", "Prisma"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Web App",
  },
];

const categories = ["All", "Web App", "E-commerce", "SaaS", "AI/ML"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-1/3 h-[500px] bg-gradient-to-l from-accent/5 to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-medium uppercase tracking-widest mb-4">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {"Projects I've built"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating
            exceptional digital experiences.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative glass rounded-2xl overflow-hidden"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />

                  {/* Overlay links */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                    className="absolute inset-0 flex items-center justify-center gap-4 bg-background/80 backdrop-blur-sm"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-primary text-primary-foreground hover:glow transition-all"
                      aria-label="View live site"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-all"
                      aria-label="View source code"
                    >
                      <Github size={20} />
                    </a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-full font-medium hover:bg-secondary transition-all duration-300 group"
          >
            View All Projects
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
