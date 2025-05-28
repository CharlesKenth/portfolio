"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const skills = [
  "React/Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Git",
];

export function AboutSection() {
  return (
    <section className="w-full py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-center">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center">
            I'm a passionate Full Stack Developer with expertise in building modern web applications.
            I love creating efficient, scalable, and user-friendly solutions that solve real-world problems.
          </p>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-center mb-8">Skills & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-4 text-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    {skill}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 