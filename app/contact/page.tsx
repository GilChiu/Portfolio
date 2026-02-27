"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  const email = "chiu.gilbenedictv@gmail.com";
  const upworkUrl = "https://www.upwork.com/freelancers/~01a399060b59286ad5";
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
  const gmailAccountChooserUrl = `https://accounts.google.com/AccountChooser?continue=${encodeURIComponent(gmailComposeUrl)}`;

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <motion.main
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-20 md:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
          className="space-y-3"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/70">Contact</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">Let&apos;s work together</h1>
          <p className="text-base leading-7 text-foreground/80 md:text-lg">
            Reach me directly through Gmail or view my Upwork profile.
          </p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="overflow-hidden rounded-3xl border border-foreground/15 bg-foreground/[0.03] backdrop-blur"
        >
          <div className="space-y-3 border-b border-foreground/10 p-6 md:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-foreground/60">Upwork Profile</p>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">Gil Benedict C.</h2>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-background">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
                  <path d="M9.55 18.2 4.8 13.45l1.4-1.4 3.35 3.35 8.2-8.2 1.4 1.4z" />
                </svg>
              </span>
            </div>

            <p className="text-xl text-foreground/80">Iloilo, Philippines — UTC +8</p>

            <div className="inline-flex items-center gap-2 rounded-full bg-foreground/10 px-4 py-1.5 text-sm font-medium text-foreground/80">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-foreground/70" />
              Rising Talent
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 p-6 text-center md:p-8">
            <div>
              <p className="text-4xl font-semibold text-foreground">$20K+</p>
              <p className="mt-1 text-lg text-foreground/70">Total earnings</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-foreground">5,302</p>
              <p className="mt-1 text-lg text-foreground/70">Total hours</p>
            </div>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/"
            className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition hover:bg-foreground/5"
          >
            Back to Home
          </Link>

          <a
            href={gmailAccountChooserUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-90"
          >
            Send with Gmail
          </a>

          <a
            href={upworkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition hover:bg-foreground/5"
          >
            View Upwork Profile
          </a>
        </motion.div>
      </motion.main>
    </div>
  );
}
