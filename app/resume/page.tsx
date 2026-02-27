import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-10 px-6 py-16 md:px-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.18em] text-foreground/70">Resume</p>
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">Gil Benedict Chiu</h1>
        <p className="max-w-3xl text-base leading-7 text-foreground/80 md:text-lg">
          Highly motivated Computer Science graduate with hands-on full-stack engineering experience in SaaS, API
          integrations, and production-focused backend systems.
        </p>
        <div className="flex flex-wrap gap-3 text-sm text-foreground/80">
          <span className="rounded-full border border-foreground/20 px-4 py-2">chiu.gilbenedictv@gmail.com</span>
          <span className="rounded-full border border-foreground/20 px-4 py-2">Mandurriao, Iloilo City, Philippines</span>
        </div>
        <a
          href="/Gil Benedict Chiu-Resume.pdf"
          download="Gil Benedict Chiu-Resume.pdf"
          className="inline-flex w-fit rounded-full border border-foreground/20 px-5 py-2 text-sm font-medium transition hover:bg-foreground/5"
        >
          Download Resume
        </a>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Profile Summary</h2>
        <p className="max-w-4xl leading-7 text-foreground/80">
          I build and ship full-stack web systems with a backend-first approach, focusing on scalable API design,
          operational reliability, and clean architecture. I have delivered client-facing products that combine
          commerce flows, payment integrations, workflow automation, and responsive frontend implementation.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Work Experience</h2>
        <article className="rounded-2xl border border-foreground/15 p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-xl font-medium">Accounting Operations Platform (US Client)</h3>
            <p className="text-sm text-foreground/70">Full-Stack Engineer</p>
          </div>
          <ul className="mt-4 space-y-2 leading-7 text-foreground/80">
            <li>
              Architected and delivered a full-stack operational platform combining commerce synchronization, accounting
              workflows, billing lifecycle handling, and internal messaging in one cohesive system.
            </li>
            <li>
              Implemented normalized PostgreSQL domain models for products, variants, media, inventory, and finance
              entities with transactional integrity, foreign keys, and scoped multi-tenant access control.
            </li>
            <li>
              Built webhook-secure integrations and long-running sync orchestration with status broadcasting to the UI,
              enabling reliable reconciliation of external updates into internal relational data.
            </li>
            <li>
              Developed diff-based API write contracts for high-complexity product/variant edits to reduce accidental
              overwrites and keep integration-side mutations deterministic.
            </li>
            <li>
              Added media ingestion pipelines (upload sanitization, processing, and metadata persistence) and designed
              inventory consistency safeguards using database-level logic.
            </li>
          </ul>
        </article>

        <article className="rounded-2xl border border-foreground/15 p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-xl font-medium">Garage Operations SaaS (UAE Client)</h3>
            <p className="text-sm text-foreground/70">Full-Stack Engineer</p>
          </div>
          <ul className="mt-4 space-y-2 leading-7 text-foreground/80">
            <li>
              Built an end-to-end SaaS workflow for garage businesses to onboard, manage bookings/appointments/
              inspections, and operate customer communication flows through a dedicated business app plus admin console.
            </li>
            <li>
              Implemented a TypeScript Express API with JWT auth, route guards, validation pipelines, and rate-limited
              auth surfaces, backed by Supabase Postgres and Storage.
            </li>
            <li>
              Designed staged registration and verification-oriented account onboarding patterns to protect account
              creation flow quality while maintaining smooth user conversion.
            </li>
            <li>
              Added resilient client behavior with cache TTL strategies, mutation-triggered invalidation, and retry
              backoff to improve reliability under unstable network conditions.
            </li>
            <li>
              Converted pre-designed Figma flows into production-ready, responsive UI behavior aligned to the original
              product intent and business workflow requirements.
            </li>
          </ul>
        </article>

        <article className="rounded-2xl border border-foreground/15 p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-xl font-medium">Queue & Skip-Pass Commerce Backend (UK Client)</h3>
            <p className="text-sm text-foreground/70">Backend Engineer</p>
          </div>
          <ul className="mt-4 space-y-2 leading-7 text-foreground/80">
            <li>
              Engineered backend services for queue commerce, business onboarding, skip-pass lifecycle management,
              discovery, messaging, and review workflows.
            </li>
            <li>
              Implemented Stripe Connect/Checkout flows for connected account onboarding, pass purchasing, and payment
              state handling with metadata consistency across transactions.
            </li>
            <li>
              Designed webhook-driven status updates and notification insertion paths to keep customer/business state
              synchronized after payment and account events.
            </li>
            <li>
              Enforced ownership-aware authorization and business-level constraints (including conflict-safe uniqueness)
              to prevent cross-tenant data leakage and duplicate pass configurations.
            </li>
            <li>
              Structured feature-scoped API modules with shared auth/database utilities to maintain delivery speed while
              keeping backend contracts clear and maintainable.
            </li>
          </ul>
        </article>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Technical Proficiency</h2>
        <div className="flex flex-wrap gap-2 text-sm text-foreground/85">
          {[
            "JavaScript",
            "Node.js",
            "Express",
            "React",
            "SQL",
            "PostgreSQL",
            "Supabase",
            "SQLite",
            "API Integrations",
            "Git",
            "Figma",
          ].map((skill) => (
            <span key={skill} className="rounded-full border border-foreground/20 px-3 py-1.5">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Education</h2>
        <ul className="space-y-2 text-foreground/80">
          <li>Central Philippine University — Bachelor of Science in Computer Science (2019–2023)</li>
          <li>Senior High School (2017–2019)</li>
          <li>Junior High School (2012–2017)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Certificates</h2>
        <ul className="space-y-2 text-foreground/80">
          <li>Machine Learning and its Applications</li>
          <li>Full Stack Developer and its Online Applications</li>
          <li>DICT Coding Workshop with StackTrek</li>
        </ul>
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
