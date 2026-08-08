"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Mail, Linkedin, Sparkles } from "lucide-react";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import AutomationGame from "@/components/AutomationGame";
import AnimeToggle from "@/components/AnimeToggle";
import AnimeSignature from "@/components/AnimeSignature";

const publicSkills=["Power Apps","Model-Driven Apps","Canvas Apps","Dataverse","Power Automate","Power Pages","Power BI","JavaScript","Power Fx","SharePoint","Microsoft 365","AI-assisted automation"];

export default function Home(){
  useEffect(()=>{const t=setTimeout(()=>document.getElementById("loader")?.classList.add("hide"),1800);return()=>clearTimeout(t)},[]);
  return <main>
    <div id="loader" className="loader">
      <div className="text-center px-4">
        <div className="text-2xl font-semibold tracking-[-.03em] sm:text-3xl">Initializing Mayank // Powerverse</div>
        <div className="loader-line mx-auto"><i/></div>
        <div className="mt-3 font-mono text-[10px] uppercase tracking-[.18em] text-slate-600">NDA-safe public build</div>
      </div>
    </div>
    <div className="grain"/>
    <Nav/>
    <AnimeToggle/>

    <section className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-4 pb-10 pt-28 sm:px-6 md:px-10">
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[.22em] text-cyan-300">
        <Sparkles size={14}/> Power Platform Developer
      </motion.div>
      <motion.h1 initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{duration:.95,delay:.08}} className="mega max-w-[1200px]">
        MAYANK<br/><span className="text-gradient">DANGI</span>
      </motion.h1>
      <div className="mt-8 grid gap-8 border-t border-white/10 pt-6 md:grid-cols-[1fr_.9fr] md:items-end">
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.35,duration:.8}} className="max-w-2xl text-lg leading-8 text-slate-300">
          I build low-code systems, automation and data experiences that turn business complexity into something people can actually use.
        </motion.p>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.45,duration:.8}} className="md:text-right">
          <a href="#world" className="inline-flex items-center gap-2 text-sm font-bold text-white">ENTER THE POWERVERSE <ArrowDownRight size={17}/></a>
        </motion.div>
      </div>
    </section>

    <section id="world" className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6 md:px-10 md:py-32">
      <Reveal>
        <div className="kicker">01 // capability world</div>
        <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-.05em] text-white sm:text-6xl md:text-7xl">A visual map of what I work with.</h2>
      </Reveal>
      <Reveal className="mt-12">
        <div className="orbit rounded-[2rem]">
          <div className="core">DATAVERSE<br/>CORE</div>
          <div className="satellite left-[5%] top-[10%] sm:left-[10%]">POWER APPS</div>
          <div className="satellite right-[4%] top-[14%] sm:right-[10%] [animation-delay:.6s]">AUTOMATE</div>
          <div className="satellite left-[4%] bottom-[15%] sm:left-[10%] [animation-delay:1.2s]">POWER PAGES</div>
          <div className="satellite right-[5%] bottom-[13%] sm:right-[10%] [animation-delay:1.8s]">POWER BI</div>
          <div className="satellite left-1/2 top-[5%] -translate-x-1/2 [animation-delay:2.4s]">AI AUTOMATION</div>
          <div className="satellite left-1/2 bottom-[5%] -translate-x-1/2 [animation-delay:3s]">JAVASCRIPT</div>
          <div className="absolute inset-x-5 bottom-5 text-center text-[10px] uppercase tracking-[.18em] text-slate-600">Conceptual visualization only — no client architecture exposed.</div>
        </div>
      </Reveal>
    </section>

    <section id="work" className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6 md:px-10 md:py-32">
      <Reveal>
        <div className="kicker">02 // selected work</div>
        <h2 className="mt-4 max-w-5xl text-4xl font-semibold tracking-[-.05em] text-white sm:text-6xl md:text-7xl">Real capability. Public-safe detail.</h2>
      </Reveal>

      <div className="mt-12">
        {[
          ["01","Enterprise Process Automation","Built and contributed to enterprise low-code solutions using Model-Driven and Canvas Apps, Dataverse, workflow automation and reporting.","Power Apps · Dataverse · Power Automate · JavaScript"],
          ["02","AI-assisted Document Processing","Implemented automation that extracts structured information from invoices and routes it into downstream business processes.","Power Automate · AI extraction · Dataverse"],
          ["03","Asset & Task Management","Developed a low-code management solution with relational data, workflow automation, dashboards and intelligent interaction.","Power Apps · Dataverse · Power BI · Copilot"]
        ].map(([n,t,d,s])=><Reveal key={n}>
          <article className="case grid gap-5 md:grid-cols-[100px_1fr_1fr_auto] md:items-center">
            <div className="text-xs text-slate-600">{n}</div>
            <h3 className="case-title text-2xl font-semibold tracking-[-.03em] text-white sm:text-3xl">{t}</h3>
            <p className="max-w-xl text-sm leading-7 text-slate-400">{d}</p>
            <div className="flex items-center gap-2 text-xs text-cyan-300">{s}<ArrowUpRight size={14}/></div>
          </article>
        </Reveal>)}
      </div>

      <Reveal className="mt-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <div className="kicker">Fictional demo // workflow motion</div>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-.04em] text-white sm:text-4xl">Watch a record move through a generic process.</h3>
            <p className="mt-4 max-w-xl leading-7 text-slate-400">This animation demonstrates process-orchestration thinking without exposing any confidential client logic.</p>
          </div>
          <div className="overflow-x-auto pb-2">
            <div className="workflow-track">
              {["Request","Review","Approve","Order","Receive","Invoice","Complete"].map(s=><div key={s} className="stage">{s}</div>)}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-24">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div className="mock-invoice">
            <div className="scan"/>
            <div className="text-xs font-bold uppercase tracking-[.2em] text-slate-500">Demo Invoice</div>
            <div className="mt-7 text-3xl font-black">INVOICE #DEMO-2049</div>
            <div className="mt-7 grid grid-cols-2 gap-4 text-sm">
              <div><b>Vendor</b><br/>Northstar Supplies</div>
              <div><b>Date</b><br/>08 Aug 2026</div>
              <div><b>Amount</b><br/>₹48,750</div>
              <div><b>Reference</b><br/>PO-DEMO-888</div>
            </div>
            <div className="mt-8 text-[10px] uppercase tracking-[.18em] text-slate-500">Synthetic sample — not a real client document</div>
          </div>
          <div>
            <div className="kicker">Fictional demo // AI document processing</div>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-.04em] text-white sm:text-4xl">From document to structured data.</h3>
            <div className="codebox mt-6 text-xs leading-7">
              <div>scan.document()</div>
              <div className="text-cyan-300">✓ vendor extracted</div>
              <div className="text-cyan-300">✓ invoice number extracted</div>
              <div className="text-cyan-300">✓ amount extracted</div>
              <div className="text-cyan-300">✓ reference extracted</div>
              <div className="mt-2 text-violet-300">Dataverse.create(record)</div>
              <div className="text-emerald-300">SUCCESS</div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>

    <section className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6 md:px-10 md:py-32">
      <Reveal>
        <div className="kicker">03 // stack</div>
        <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-.05em] text-white sm:text-6xl md:text-7xl">Built around Microsoft. Extended with code.</h2>
      </Reveal>
      <div className="mt-10 flex flex-wrap gap-3">
        {publicSkills.map((s,i)=><Reveal key={s} delay={i*.025}><span className="inline-flex rounded-full border border-white/10 bg-white/[.025] px-4 py-2 text-sm text-slate-300">{s}</span></Reveal>)}
      </div>
    </section>

    <section id="play" className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6 md:px-10 md:py-32">
      <Reveal>
        <div className="kicker">04 // because portfolios can be fun</div>
        <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-.05em] text-white sm:text-6xl md:text-7xl">A tiny game. Zero business value. Maximum vibes.</h2>
      </Reveal>
      <Reveal className="mt-12"><AutomationGame/></Reveal>
      <Reveal className="mt-8"><p className="editorial text-2xl text-slate-400 sm:text-3xl">“Power level calculation is highly questionable.”</p></Reveal>
    </section>
	<AnimeSignature/>

    <section id="contact" className="mx-auto max-w-[1400px] px-4 pb-16 pt-24 sm:px-6 md:px-10 md:pt-32">
      <Reveal>
        <div className="soft-line pt-8">
          <div className="kicker">05 // contact</div>
          <h2 className="mt-5 max-w-6xl text-5xl font-semibold tracking-[-.06em] text-white sm:text-7xl md:text-[8rem] md:leading-[.9]">LET&apos;S BUILD<br/><span className="text-gradient">SOMETHING USEFUL.</span></h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">Open to Power Platform Developer and Consultant opportunities across India and relocation.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:mayankdangii61@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black"><Mail size={17}/> Email me</a>
            <a href="https://www.linkedin.com/in/mayank-dangi-737101295" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white"><Linkedin size={17}/> LinkedIn</a>
          </div>
        </div>
      </Reveal>
      <footer className="mt-16 flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-slate-600 sm:flex-row sm:justify-between">
        <span>© 2026 Mayank Dangi</span>
        <span>Next.js · Motion · A little anime energy ⚡</span>
      </footer>
    </section>
  </main>
}
