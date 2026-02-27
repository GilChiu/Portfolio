"use client";

import { motion } from "framer-motion";
import { EarthCanvas } from "@/components/earth-canvas";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground select-none">
      <EarthCanvas />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 py-16 md:px-10">
        <section className="grid min-h-[70vh] items-center gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/70">
              Gil Benedict Chiu • Full Stack & SaaS Developer
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Building production-grade SaaS applications for real-world performance.
            </h1>
            <p className="max-w-xl text-base leading-7 text-foreground/80 md:text-lg">
              I take a backend-first approach focused on clean architecture, scalability, and long-term maintainability, while delivering responsive and accurate frontend implementations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-90"
              >
                View Projects
              </a>
              <a
                href="/resume"
                className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition hover:bg-foreground/5"
              >
                Resume
              </a>
              <a
                href="/contact"
                className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition hover:bg-foreground/5"
              >
                Contact Me
              </a>
              <a
                href="https://github.com/GilChiu"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition hover:bg-foreground/5"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative h-72 rounded-3xl border border-foreground/15 bg-gradient-to-br from-foreground/5 to-transparent p-6 md:h-96"
          >
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <p className="max-w-[78%] text-center text-sm font-medium uppercase tracking-[0.18em] text-foreground/45">
                Full-Stack Engineer • Backend-Focused
              </p>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-6 top-6 rounded-2xl border border-foreground/15 bg-background/80 px-4 py-3 text-sm backdrop-blur"
            >
              Backend-First • APIs • SaaS Architecture
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute bottom-8 right-8 rounded-2xl border border-foreground/15 bg-background/80 px-4 py-3 text-sm backdrop-blur"
            >
              Node.js • Express • PostgreSQL • React
            </motion.div>
          </motion.div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold">About</h2>
            <p className="max-w-4xl text-foreground/80 leading-7">
              I specialize in backend engineering, web development, and scalable SaaS platform architecture using Node.js, Express, PostgreSQL, and React. I design APIs, services, and data models for production reliability, and build custom web apps, internal tools, dashboards, and API-driven platforms with structured workflows, permissions, and multi-role business logic.
            </p>
            <p className="max-w-4xl text-foreground/80 leading-7">
              My workflow often starts with translating Figma designs into responsive, functional interfaces while maintaining frontend performance. By owning both frontend and backend, I deliver cohesive systems that are efficient, scalable, and maintainable over time.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">Education</h2>
          <p className="text-foreground/80 leading-7">
            Central Philippine University — Bachelor of Computer Science (BCompSc), 2019–2023
          </p>
        </section>

        <section id="projects" className="space-y-6 pb-14">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold">Featured Projects</h2>
            <p className="text-foreground/80">A selection of projects focused on production-ready implementation and scalable architecture.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
