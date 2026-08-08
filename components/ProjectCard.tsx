"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({
  title, eyebrow, description, bullets, stack, featured = false,
}: {
  title: string; eyebrow: string; description: string; bullets: string[]; stack: string[]; featured?: boolean;
}) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`glass group min-w-0 rounded-2xl p-5 sm:rounded-3xl sm:p-6 md:p-8 ${featured ? "md:col-span-2" : ""}`}
    >
      <div className="flex min-w-0 items-start justify-between gap-3 sm:gap-4">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-sky-400 sm:text-xs sm:tracking-[.2em]">{eyebrow}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">{title}</h3>
        </div>
        <ArrowUpRight size={19} className="mt-1 shrink-0 text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-300" />
      </div>

      <p className="mt-4 max-w-3xl text-[15px] leading-7 text-slate-300 sm:text-base">{description}</p>

      <ul className="mt-4 grid gap-2 text-[13px] leading-6 text-slate-400 sm:mt-5 sm:text-sm md:grid-cols-2">
        {bullets.map((b) => (
          <li key={b} className="flex min-w-0 gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
            <span className="min-w-0">{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2">
        {stack.map((s) => (
          <span key={s} className="rounded-full border border-white/10 bg-white/[.04] px-2.5 py-1.5 text-[10px] text-slate-300 sm:px-3 sm:py-1 sm:text-xs">{s}</span>
        ))}
      </div>
    </motion.article>
  );
}
