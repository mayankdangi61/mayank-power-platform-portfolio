"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
export default function ProjectCard({title,eyebrow,description,bullets,stack,featured=false}:{title:string;eyebrow:string;description:string;bullets:string[];stack:string[];featured?:boolean}) {
  return <motion.article whileHover={{y:-6,scale:1.005}} transition={{type:"spring",stiffness:260,damping:20}}
    className={`insane-card group min-w-0 rounded-3xl p-5 sm:p-7 ${featured?"md:col-span-2":""}`}>
    <div className="flex items-start justify-between gap-3">
      <div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-cyan-400 sm:text-xs">{eyebrow}</p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">{title}</h3></div>
      <ArrowUpRight size={19} className="shrink-0 text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"/>
    </div>
    <p className="mt-4 text-[15px] leading-7 text-slate-300">{description}</p>
    <ul className="mt-5 grid gap-2 text-[13px] leading-6 text-slate-400 md:grid-cols-2">
      {bullets.map(b=><li key={b} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"/><span>{b}</span></li>)}
    </ul>
    <div className="mt-5 flex flex-wrap gap-2">{stack.map(s=><span key={s} className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 text-[10px] text-slate-300 sm:text-xs">{s}</span>)}</div>
  </motion.article>;
}