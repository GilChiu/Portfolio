import Link from "next/link";

export default function ProjectOnePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-10 px-6 py-16 md:px-10">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.18em] text-foreground/70">Case Study • Full-Stack Engineering</p>
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
          Accounting Operations Platform for a US Startup
        </h1>
        <p className="max-w-4xl text-base leading-7 text-foreground/80 md:text-lg">
          I built a full-stack platform that unified product operations, accounting workflows, subscription billing, and
          internal communication into one system. The goal was to reduce tool fragmentation and give operations and
          finance teams a single, reliable workflow from catalog updates to financial visibility.
        </p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-foreground/15 bg-foreground/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-foreground/60">Role</p>
          <p className="mt-2 text-lg font-medium">Full-Stack Engineer</p>
        </div>
        <div className="rounded-2xl border border-foreground/15 bg-foreground/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-foreground/60">Domain</p>
          <p className="mt-2 text-lg font-medium">Commerce + Accounting</p>
        </div>
        <div className="rounded-2xl border border-foreground/15 bg-foreground/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-foreground/60">Architecture</p>
          <p className="mt-2 text-lg font-medium">Modular Monolith</p>
        </div>
        <div className="rounded-2xl border border-foreground/15 bg-foreground/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-foreground/60">Data Layer</p>
          <p className="mt-2 text-lg font-medium">PostgreSQL + ACID</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Product Story</h2>
        <p className="max-w-4xl leading-7 text-foreground/80">
          Teams were handling product synchronization, accounting records, billing status, and internal handoffs across
          separate tools. I designed the platform so these flows could operate under one company-scoped model, with
          transactional writes, explicit access control, and consistent identifiers across commerce and finance data.
        </p>
        <p className="max-w-4xl leading-7 text-foreground/80">
          On the frontend, users manage product and accounting workflows through structured forms and status-aware
          interfaces. On the backend, webhook-driven pipelines reconcile external changes into normalized relational
          tables while providing real-time sync feedback to users.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Stack & Technical Direction</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-foreground/15 p-5">
            <h3 className="text-lg font-medium">Frontend</h3>
            <p className="mt-2 leading-7 text-foreground/80">
              React + Vite with React Router, React Hook Form, Axios, MUI, and Socket.IO client for dense business UI,
              performant form workflows, and real-time operation updates.
            </p>
          </article>
          <article className="rounded-2xl border border-foreground/15 p-5">
            <h3 className="text-lg font-medium">Backend</h3>
            <p className="mt-2 leading-7 text-foreground/80">
              Node.js + Express with PostgreSQL, session-based auth, webhook endpoints, media ingestion via Multer +
              Sharp, and billing integration through Stripe.
            </p>
          </article>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Architecture Highlights</h2>
        <ul className="grid gap-3 text-foreground/85 md:grid-cols-2">
          <li className="rounded-xl border border-foreground/15 p-4">Modular monolith with clear route/service boundaries</li>
          <li className="rounded-xl border border-foreground/15 p-4">Company-scoped relational schema with strong FK and uniqueness constraints</li>
          <li className="rounded-xl border border-foreground/15 p-4">Webhook authenticity checks using signatures/HMAC and raw-body validation</li>
          <li className="rounded-xl border border-foreground/15 p-4">Diff-based product/variant updates for deterministic write paths</li>
          <li className="rounded-xl border border-foreground/15 p-4">Inventory availability enforced via database trigger logic</li>
          <li className="rounded-xl border border-foreground/15 p-4">Real-time sync status events delivered to UI via Socket channels</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Complex Work I Implemented</h2>
        <div className="space-y-4 text-foreground/80">
          <p className="leading-7">
            Built a bulk synchronization pipeline that ingests external product data, parses streamed result files,
            reconstructs entity relationships, computes internal/external diffs, and applies transactional updates to
            normalized tables.
          </p>
          <p className="leading-7">
            Implemented event-safe webhook reconciliation with idempotent upsert patterns and mutation-history controls
            to prevent echo loops and duplicate writes across asynchronous paths.
          </p>
          <p className="leading-7">
            Designed a media workflow that sanitizes uploads, performs staged external uploads, and persists canonical
            URLs and metadata for consistent product and variant rendering.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Engineering Outcomes</h2>
        <p className="max-w-4xl leading-7 text-foreground/80">
          The final system provided a cohesive operations and accounting workflow with reliable synchronization,
          database-level correctness guarantees, and a maintainable full-stack architecture that can evolve toward
          queue-backed processing as scale grows.
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link href="/" className="w-fit rounded-full border border-foreground/20 px-5 py-2 text-sm hover:bg-foreground/5">
          Back to Home
        </Link>
        <Link href="/contact" className="w-fit rounded-full bg-foreground px-5 py-2 text-sm text-background hover:opacity-90">
          Contact Me
        </Link>
      </div>
    </main>
  );
}