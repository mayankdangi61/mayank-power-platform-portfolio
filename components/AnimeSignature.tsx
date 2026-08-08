"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const panels = [
  {
    no:"I",
    tag:"DARK FANTASY",
    title:"STRUGGLE → BUILD → EVOLVE",
    text:"A monochrome manga panel language inspired by perseverance: rough ink, heavy contrast and motion under pressure.",
    cls:"manga-panel-dark"
  },
  {
    no:"II",
    tag:"ADVENTURE",
    title:"KEEP SAILING.",
    text:"A lighter high-seas energy for curiosity, exploration and building things outside the obvious path.",
    cls:"manga-panel-sea"
  },
  {
    no:"III",
    tag:"GRIMOIRE SYSTEM",
    title:"AUTOMATION IS MY MAGIC SYSTEM.",
    text:"Flows become spells. Dataverse becomes the grimoire. JavaScript becomes the part where things get dangerous.",
    cls:"manga-panel-magic"
  }
];

export default function AnimeSignature(){
  return <section className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6 md:px-10 md:py-32">
    <Reveal>
      <div className="kicker">05 // personality layer</div>
      <h2 className="mt-4 max-w-5xl text-4xl font-semibold tracking-[-.05em] text-white sm:text-6xl md:text-7xl">
        Serious developer.<br/><span className="editorial text-slate-400">Not a serious person all the time.</span>
      </h2>
    </Reveal>

    <div className="mt-12 grid gap-4 lg:grid-cols-3">
      {panels.map((p,i)=><Reveal key={p.no} delay={i*.07}>
        <motion.article
          whileHover={{y:-8,rotate:i===1?1:-1}}
          transition={{type:"spring",stiffness:240,damping:20}}
          className={`manga-panel ${p.cls}`}
        >
          <div className="manga-number">{p.no}</div>
          <div className="relative z-10">
            <div className="text-[10px] font-black uppercase tracking-[.24em] text-white/55">{p.tag}</div>
            <h3 className="mt-4 text-3xl font-black leading-[.9] tracking-[-.05em] text-white">{p.title}</h3>
            <p className="mt-5 text-sm leading-7 text-white/65">{p.text}</p>
          </div>
          <div className="manga-halftone"/>
        </motion.article>
      </Reveal>)}
    </div>

    <Reveal className="mt-10">
      <div className="manga-strip">
        <span>DEV ARC</span>
        <strong>LEARN</strong><b>→</b><strong>BUILD</strong><b>→</b><strong>BREAK</strong><b>→</b><strong>DEBUG</strong><b>→</b><strong>LEVEL UP</strong>
        <span>TO BE CONTINUED...</span>
      </div>
    </Reveal>
  </section>
}
