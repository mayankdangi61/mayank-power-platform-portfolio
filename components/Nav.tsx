"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .7 }}
      className="fixed inset-x-0 top-0 z-40 px-3 sm:px-4"
    >
      <div className="mx-auto mt-3 max-w-6xl rounded-2xl border border-white/10 bg-slate-950/80 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between px-4 py-3">
          <a href="#" className="text-base font-semibold tracking-tight text-white">
            MD<span className="text-sky-400">.</span>
          </a>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            {links.map(([label, href]) => (
              <a key={href} href={href} className="transition hover:text-white">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/Mayank_Dangi_Resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-950 transition hover:scale-[1.03] sm:text-sm"
            >
              <Download size={14} />
              <span className="hidden xs:inline sm:inline">Resume</span>
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[.04] text-white md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/10 md:hidden"
            >
              <div className="grid gap-1 p-3">
                {links.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-sm text-slate-300 transition hover:bg-white/[.05] hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
