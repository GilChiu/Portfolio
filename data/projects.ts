export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Accounting Operations Platform",
    description: "Built a startup-grade full-stack accounting and commerce operations platform for a US client.",
    tags: ["React", "Express", "PostgreSQL"],
  },
  {
    slug: "project-two",
    title: "Garage Operations SaaS",
    description: "Built a full-stack garage booking and operations platform for a UAE client.",
    tags: ["TypeScript", "Express", "Supabase"],
  },
  {
    slug: "project-three",
    title: "Queue & Skip-Pass Backend",
    description: "Built a payment-integrated queue and skip-pass backend platform for a UK client.",
    tags: ["Supabase", "Stripe", "Deno"],
  },
];