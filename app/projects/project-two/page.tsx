import Link from "next/link";

export default function ProjectTwoPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-10 px-6 py-16 md:px-10">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.18em] text-foreground/70">Case Study • SaaS Platform Engineering</p>
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
          Garage SaaS Platform for a UAE Client
        </h1>
        <p className="max-w-4xl text-base leading-7 text-foreground/80 md:text-lg">
          I built a full-stack garage operations platform where service providers can onboard, manage bookings,
          appointments, and inspections, while customers can discover garages and schedule repair work. The product
          also includes support workflows such as chats and dispute handling for day-to-day operations.
        </p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-foreground/15 bg-foreground/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-foreground/60">Role</p>
          <p className="mt-2 text-lg font-medium">Full-Stack Engineer</p>
        </div>
        <div className="rounded-2xl border border-foreground/15 bg-foreground/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-foreground/60">Audience</p>
          <p className="mt-2 text-lg font-medium">Garage Teams + Admin Ops</p>
        </div>
        <div className="rounded-2xl border border-foreground/15 bg-foreground/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-foreground/60">Architecture</p>
          <p className="mt-2 text-lg font-medium">API + Dual SPA</p>
        </div>
        <div className="rounded-2xl border border-foreground/15 bg-foreground/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-foreground/60">Region</p>
          <p className="mt-2 text-lg font-medium">United Arab Emirates</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Product Story</h2>
        <p className="max-w-4xl leading-7 text-foreground/80">
          Independent garages often need one system to handle incoming work, customer communications, inspections, and
          internal operations. I designed this SaaS platform to reduce operational friction by connecting onboarding,
          scheduling, and support workflows into a single, practical product experience.
        </p>
        <p className="max-w-4xl leading-7 text-foreground/80">
          The full product interface was pre-designed in Figma, and I translated it into production code as an exact,
          responsive replica while preserving the original visual system and interaction intent.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Stack & Technical Direction</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-foreground/15 p-5">
            <h3 className="text-lg font-medium">Frontend Delivery</h3>
            <p className="mt-2 leading-7 text-foreground/80">
              Two React SPAs: a garage-facing client and an admin console. React Router + Suspense were used for
              route-level lazy loading, with auth/registration contexts and a custom cache + retry layer for network
              resilience.
            </p>
          </article>
          <article className="rounded-2xl border border-foreground/15 p-5">
            <h3 className="text-lg font-medium">Backend & Data</h3>
            <p className="mt-2 leading-7 text-foreground/80">
              TypeScript + Express API on Render, backed by Supabase Postgres + Storage. JWT-based auth, scoped
              middleware guards, rate limiting for auth routes, and clean `/api/*` contracts for feature modules.
            </p>
          </article>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Architecture Highlights</h2>
        <ul className="grid gap-3 text-foreground/85 md:grid-cols-2">
          <li className="rounded-xl border border-foreground/15 p-4">Thin routes with controller/model/service layering</li>
          <li className="rounded-xl border border-foreground/15 p-4">JWT access/refresh flow with auth guard and user-context injection</li>
          <li className="rounded-xl border border-foreground/15 p-4">Supabase-backed relational schema with UUID primary keys</li>
          <li className="rounded-xl border border-foreground/15 p-4">Readable business IDs for bookings and appointments</li>
          <li className="rounded-xl border border-foreground/15 p-4">Upload pipeline to Supabase Storage with UUID-prefixed filenames</li>
          <li className="rounded-xl border border-foreground/15 p-4">Client caching + retry with TTL and mutation-driven invalidation</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Complex Features Built</h2>
        <div className="space-y-4 text-foreground/80">
          <p className="leading-7">
            Implemented multi-step registration with OTP-gated account activation to ensure only verified users proceed
            into garage profile creation.
          </p>
          <p className="leading-7">
            Delivered bookings, appointments, and inspections modules with filterable/paginated queries, workflow-aware
            status updates, and dashboard-level aggregations.
          </p>
          <p className="leading-7">
            Added resilient API consumption on the client using exponential backoff, cache TTL policies, and targeted
            cache invalidation to maintain responsiveness under inconsistent network conditions.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Reliability, Security & Scale</h2>
        <p className="max-w-4xl leading-7 text-foreground/80">
          I hardened authentication with lockout controls, refresh handling, and scoped JWT verification. Query
          patterns were optimized with pagination and indexed filters for status/date/search-heavy workflows. The
          stateless API topology and Docker-ready setup provide a practical path for horizontal scaling.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Engineering Outcome</h2>
        <p className="max-w-4xl leading-7 text-foreground/80">
          The platform delivered a cohesive garage-operations product where onboarding, service scheduling, inspections,
          and support workflows run through one connected system. It balanced fast delivery with solid architecture,
          maintainable contracts, and production-oriented reliability.
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