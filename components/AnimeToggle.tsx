"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimeToggle(){
  const [on,setOn]=useState(false);
  return <>
    <button onClick={()=>setOn(!on)} className="fixed bottom-4 right-4 z-40 rounded-full border border-white/10 bg-black/65 px-4 py-2 text-xs font-bold text-slate-300 backdrop-blur-xl hover:text-white">
      {on?"ANIME MODE: ON ⚡":"anime mode?"}
    </button>
    <AnimatePresence>
      {on && <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
        <div className="speed-lines"/>
        <motion.div initial={{scale:2,opacity:0}} animate={{scale:1,opacity:.15}} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[18vw] font-black italic tracking-[-.08em] text-white">POWER UP</motion.div>
      </motion.div>}
  </>
}
