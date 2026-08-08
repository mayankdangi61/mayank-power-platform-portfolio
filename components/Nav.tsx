"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

const links=[["System","#system"],["Work","#projects"],["Stack","#skills"],["Contact","#contact"]];
export default function Nav(){
  const [open,setOpen]=useState(false);
  return <motion.header initial={{opacity:0,y:-18}} animate={{opacity:1,y:0}} transition={{duration:.7}}
    className="fixed inset-x-0 top-0 z-50 px-3 sm:px-4">
    <div className="mx-auto mt-3 max-w-6xl rounded-2xl border border-white/10 bg-[#050814]/80 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 py-3">
        <a href="#" className="font-black tracking-tight text-white">MD<span className="text-cyan-400">.</span></a>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          {links.map(([l,h])=><a key={h} href={h} className="transition hover:text-white">{l}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href="/Mayank_Dangi_Resume.pdf" target="_blank" className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-extrabold text-slate-950 sm:text-sm">
            <Download size={14}/> Resume
          </a>
          <button onClick={()=>setOpen(!open)} className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[.04] text-white md:hidden">
            {open?<X size={18}/>:<Menu size={18}/>}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && <motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden border-t border-white/10 md:hidden">
          <div className="grid p-3">{links.map(([l,h])=><a onClick={()=>setOpen(false)} key={h} href={h} className="rounded-xl px-3 py-3 text-sm text-slate-300 hover:bg-white/[.05]">{l}</a>)}</div>
        </motion.div>}
      </AnimatePresence>
    </div>
  </motion.header>
}