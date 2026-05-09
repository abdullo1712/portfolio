"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    quote:
      "Alex transformed our vision into reality. The attention to detail and commitment to quality was exceptional. Our website now truly represents our brand.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager at InnovateCo",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    quote:
      "Working with Alex was a game-changer for our product. The frontend performance improvements and beautiful UI have significantly increased user engagement.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder of DesignHub",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    quote:
      "Incredible work ethic and technical expertise. Alex delivered our complex dashboard ahead of schedule with stunning animations and perfect accessibility.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "CTO at CloudSync",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    quote:
      "The best frontend developer I've worked with. Alex's code is clean, well-documented, and maintainable. A true professional in every sense.",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-20 bg-primary/30" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-medium uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            What clients say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {"Don't just take my word for it — hear from some of the amazing people I've had the pleasure to work with."}
          </p>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-8 md:p-12 text-center"
              >
                {/* Quote icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-8">
                  <Quote className="text-primary" size={28} />
                </div>

                {/* Quote text */}
                <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8">
                  {`"${testimonials[current].quote}"`}
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/30">
                    <Image
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">
                      {testimonials[current].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrent(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === current
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
