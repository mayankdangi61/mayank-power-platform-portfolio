"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X } from "lucide-react";

export default function AnimeToggle(){
  const [on,setOn]=useState(false);

  return <>
    <button
      onClick={()=>setOn(!on)}
      className={`fixed bottom-4 right-4 z-[70] rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[.12em] backdrop-blur-xl transition ${
        on
          ? "border-fuchsia-300/40 bg-fuchsia-400/15 text-fuchsia-100 shadow-[0_0_35px_rgba(217,70,239,.25)]"
          : "border-white/10 bg-black/70 text-slate-300 hover:text-white"
      }`}
    >
      {on ? "ANIME MODE // ACTIVE ⚡" : "unlock anime mode"}
    </button>

    <AnimatePresence>
      {on && <>
        <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          className="pointer-events-none fixed inset-0 z-[61] overflow-hidden"
        >
          <div className="anime-vignette"/>
          <div className="manga-speed-lines"/>
          <div className="ink-scratch ink-a"/>
          <div className="ink-scratch ink-b"/>

          <motion.div
            initial={{x:"-120%",skewX:-15}}
            animate={{x:"120%"}}
            transition={{duration:1.2,repeat:Infinity,repeatDelay:2.3}}
            className="absolute top-[22%] h-[2px] w-[65vw] bg-gradient-to-r from-transparent via-cyan-200/80 to-transparent"
          />

          <motion.div
            initial={{scale:1.7,opacity:0,rotate:-8}}
            animate={{scale:1,opacity:.08,rotate:-4}}
            exit={{scale:.8,opacity:0}}
            transition={{duration:.55,ease:[.2,1,.2,1]}}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[16vw] font-black italic tracking-[-.08em] text-white"
          >
            LIMIT BREAK
          </motion.div>

          <div className="absolute left-4 top-24 max-w-[240px] rotate-[-3deg] border-l-4 border-white/80 bg-black/55 px-4 py-3 font-serif text-sm italic text-white/80 backdrop-blur sm:left-8 sm:text-base">
            “Keep moving forward.”
          </div>

          <div className="absolute bottom-24 left-4 rounded-xl border border-cyan-200/20 bg-black/65 px-4 py-3 font-mono text-[10px] uppercase tracking-[.14em] text-cyan-100/75 backdrop-blur sm:left-8">
            GRIMOIRE STATUS<br/>
            <span className="text-white">POWER PLATFORM // SYNCED</span><br/>
            MANA: ∞ (probably a bug)
          </div>
        </motion.div>

        <motion.button
          initial={{opacity:0,scale:.9}}
          animate={{opacity:1,scale:1}}
          exit={{opacity:0,scale:.9}}
          onClick={()=>setOn(false)}
          className="fixed right-4 top-24 z-[75] rounded-full border border-white/10 bg-black/70 p-3 text-white backdrop-blur"
          aria-label="Disable anime mode"
        >
          <X size={16}/>
        </motion.button>
      </>}
    </AnimatePresence>
  </>
}
