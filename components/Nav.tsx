"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const links=[["World","#world"],["Work","#work"],["Play","#play"],["Contact","#contact"]];
export default function Nav(){
  const [open,setOpen]=useState(false);
  return <motion.header initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="fixed inset-x-0 top-0 z-50 px-3 sm:px-4">
    <div className="mx-auto mt-3 max-w-6xl rounded-2xl border border-white/10 bg-black/55 backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 py-3">
        <a href="#" className="font-black tracking-[-.04em] text-white">MD<span className="text-cyan-300">.</span></a>
        <nav className="hidden gap-7 text-sm text-slate-300 md:flex">
          {links.map(([l,h])=><a key={h} href={h} className="transition hover:text-white">{l}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href="/Mayank_Dangi_Resume.pdf" target="_blank" className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-extrabold text-black sm:text-sm">
            <Download size={14}/> Resume
          </a>
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[.04] md:hidden" onClick={()=>setOpen(!open)}>
            {open?<X size={18}/>:<Menu size={18}/>}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && <motion.nav initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden border-t border-white/10 md:hidden">
          <div className="grid p-3">{links.map(([l,h])=><a key={h} href={h} onClick={()=>setOpen(false)} className="rounded-xl px-3 py-3 text-sm text-slate-300 hover:bg-white/[.05]">{l}</a>)}</div>
        </motion.nav>}
      </AnimatePresence>
    </div>
  </motion.header>
}
