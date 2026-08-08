"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export default function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .7 }}
      className="fixed inset-x-0 top-0 z-40"
    >
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 shadow-2xl backdrop-blur-xl">
        <a href="#" className="font-semibold tracking-tight">
          MD<span className="text-sky-400">.</span>
        </a>

        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <a
          href="/Mayank_Dangi_Resume.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.03]"
        >
          <Download size={15} /> Resume
        </a>
      </div>
    </motion.header>
  );
}
