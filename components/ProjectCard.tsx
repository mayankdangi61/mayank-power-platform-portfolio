"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({
  title,
  eyebrow,
  description,
  bullets,
  stack,
  featured = false,
}: {
  title: string;
  eyebrow: string;
  description: string;
  bullets: string[];
  stack: string[];
  featured?: boolean;
}) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`glass group rounded-3xl p-6 md:p-8 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-sky-400">
            {eyebrow}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
            {title}
          </h3>
        </div>
        <ArrowUpRight className="mt-1 text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-300" />
      </div>

      <p className="mt-4 max-w-3xl leading-7 text-slate-300">{description}</p>

      <ul className="mt-5 grid gap-2 text-sm leading-6 text-slate-400 md:grid-cols-2">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-xs text-slate-300"
          >
            {s}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
