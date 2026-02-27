import Link from "next/link";

export default function ProjectThreePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-10 px-6 py-16 md:px-10">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.18em] text-foreground/70">Case Study • Backend Systems Engineering</p>
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
          Queue & Skip-Pass Commerce Backend for a UK Client
        </h1>
        <p className="max-w-4xl text-base leading-7 text-foreground/80 md:text-lg">
          I built the backend architecture for a queueing and skip-pass commerce platform designed for local venues and
          their customers. The system supports business onboarding, skip-pass sales, queue updates, messaging, and
          reviews with payment flows powered by connected accounts.
        </p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-foreground/15 bg-foreground/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-foreground/60">Role</p>
          <p className="mt-2 text-lg font-medium">Backend Engineer</p>
        </div>
        <div className="rounded-2xl border border-foreground/15 bg-foreground/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-foreground/60">Region</p>
          <p className="mt-2 text-lg font-medium">United Kingdom</p>
        </div>
        <div className="rounded-2xl border border-foreground/15 bg-foreground/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-foreground/60">Core Focus</p>
          <p className="mt-2 text-lg font-medium">Payments + Queue Ops</p>
        </div>
        <div className="rounded-2xl border border-foreground/15 bg-foreground/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-foreground/60">Runtime Model</p>
          <p className="mt-2 text-lg font-medium">Edge Functions + API</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Product Story</h2>
        <p className="max-w-4xl leading-7 text-foreground/80">
          The platform was built to help venues monetize faster service through skip-passes while still managing queue
          communication and customer trust. I focused on backend contracts that could support mobile-first checkout,
          payout onboarding, purchase confirmations, and post-transaction engagement from one cohesive API surface.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Stack & Technical Direction</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-foreground/15 p-5">
            <h3 className="text-lg font-medium">Primary Backend</h3>
            <p className="mt-2 leading-7 text-foreground/80">
              Supabase Edge Functions (Deno) backed by Supabase Postgres, with shared auth and response utilities. This
              enabled low-latency, per-feature deployability and tight integration with auth, storage, and database
              access.
            </p>
          </article>
          <article className="rounded-2xl border border-foreground/15 p-5">
            <h3 className="text-lg font-medium">Payment & Legacy Support</h3>
            <p className="mt-2 leading-7 text-foreground/80">
              Stripe Connect/Checkout for onboarding and pass payments, plus a legacy Express API retained for
              compatibility and operational scripts during transition phases.
            </p>
          </article>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Architecture Highlights</h2>
        <ul className="grid gap-3 text-foreground/85 md:grid-cols-2">
          <li className="rounded-xl border border-foreground/15 p-4">Feature-scoped serverless endpoints with shared auth/database helpers</li>
          <li className="rounded-xl border border-foreground/15 p-4">Stripe Connect onboarding/login/status and checkout orchestration</li>
          <li className="rounded-xl border border-foreground/15 p-4">Webhook-driven transaction state updates and notification inserts</li>
          <li className="rounded-xl border border-foreground/15 p-4">Ownership-aware authorization for business/customer resources</li>
          <li className="rounded-xl border border-foreground/15 p-4">Review integrity rules tied to completed transactions</li>
          <li className="rounded-xl border border-foreground/15 p-4">Soft-deactivation patterns and unique constraints for safer lifecycle control</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Problems Encountered & Solutions</h2>
        <div className="space-y-4 text-foreground/80">
          <p className="leading-7">
            Token-context ambiguity between gateway keys and user identity tokens initially caused inconsistent request
            validation. I solved this with strict role-token parsing and normalized auth handling across endpoints.
          </p>
          <p className="leading-7">
            Duplicate pass-type creation under concurrent requests was mitigated using database uniqueness constraints
            plus conflict-aware API responses.
          </p>
          <p className="leading-7">
            Keeping payment status and local transaction state aligned required a robust webhook path. I implemented
            signature-verified webhook processing and synchronized account/payment states with clear update flows.
          </p>
          <p className="leading-7">
            Review quality needed stronger trust controls, so I enforced eligibility rules: review creation is allowed
            only for users with completed, owned transactions.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Key Takeaways</h2>
        <ul className="space-y-3 text-foreground/80">
          <li className="leading-7">Per-feature serverless design works well when shared utilities keep contracts and auth behavior consistent.</li>
          <li className="leading-7">Payment platforms are most reliable when webhook-driven state machines are treated as first-class architecture.</li>
          <li className="leading-7">Database constraints and ownership checks are essential for multi-tenant correctness under real-world concurrency.</li>
          <li className="leading-7">Clear conflict responses improve developer and user experience more than generic failure handling.</li>
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