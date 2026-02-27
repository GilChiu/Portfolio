"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="flex h-full flex-col rounded-2xl border border-foreground/15 bg-background/80 p-5 backdrop-blur"
    >
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm leading-6 text-foreground/80">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-foreground/15 px-3 py-1 text-xs text-foreground/80">
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={`/projects/${project.slug}`}
        className="mt-auto pt-5 inline-flex text-sm font-medium underline underline-offset-4"
      >
        View Case Study
      </Link>
    </motion.article>
  );
}