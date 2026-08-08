"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Boxes, Code2, Database, Globe2, Linkedin, Mail, Sparkles, Workflow, BarChart3 } from "lucide-react";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";

const stages=["PR","RFQ","Quotation","PO","ASN","GRN","Invoice","Payment"];
const skillGroups=[
  {icon:Boxes,title:"Power Apps",items:["Model-Driven Apps","Canvas Apps","Power Fx","Business Rules","BPF"]},
  {icon:Workflow,title:"Automation",items:["Power Automate","Approvals","Cloud Flows","RPA Exposure","AI Processing"]},
  {icon:Database,title:"Data",items:["Dataverse","Relational Modeling","Lookups","Security Roles","MySQL"]},
  {icon:Code2,title:"Extensibility",items:["JavaScript","Ribbon Commands","Form Scripting","REST APIs","HTML/CSS"]},
  {icon:Globe2,title:"Microsoft Ecosystem",items:["Power Pages","SharePoint","Microsoft 365","Teams","Copilot Studio"]},
  {icon:BarChart3,title:"Analytics",items:["Power BI","Microsoft Fabric","KPI Reporting","Dashboards","ER Modeling"]},
];

export default function Home(){
  const glow=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const timer=setTimeout(()=>document.getElementById("loader")?.classList.add("hide"),1850);
    const move=(e:MouseEvent)=>{if(glow.current){glow.current.style.left=e.clientX+"px";glow.current.style.top=e.clientY+"px"}};
    addEventListener("mousemove",move); return()=>{clearTimeout(timer);removeEventListener("mousemove",move)};
  },[]);
  return <main className="min-h-screen overflow-x-hidden">
    <div id="loader" className="loader"><div className="text-center">
      <div className="text-xl font-semibold text-white sm:text-2xl">Initializing Power Platform Environment…</div>
      <div className="loader-bar mx-auto"><i/></div><div className="mt-3 font-mono text-xs text-slate-600">loading solution layers</div>
    </div></div>
    <div ref={glow} className="cursor-glow"/>
    <div className="grid-bg pointer-events-none fixed inset-0 -z-10 opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent_95%)]"/>
    <Nav/>

    <section className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-9 px-4 pb-16 pt-28 sm:px-6 md:px-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-12">
      <div>
        <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-2 text-xs text-cyan-100 sm:text-sm">
          <Sparkles size={14}/> Microsoft Power Platform Developer
        </motion.div>
        <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.85,delay:.08}}
          className="max-w-5xl text-[2.6rem] font-semibold leading-[.99] tracking-[-.055em] text-white sm:text-5xl md:text-6xl lg:text-[5.5rem]">
          I turn enterprise chaos into <span className="text-gradient">systems that move.</span>
        </motion.h1>
        <motion.p initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.18}}
          className="mt-6 max-w-2xl text-[15px] leading-7 text-slate-300 sm:text-lg sm:leading-8">
          Power Apps. Dataverse. Power Automate. JavaScript. Power Pages. Analytics. AI-assisted document processing. Built with an engineering mindset.
        </motion.p>
        <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.28}} className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
          <a href="#system" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-extrabold text-slate-950">Enter the system <ArrowRight size={17}/></a>
          <a href="#projects" className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[.04] px-5 py-3 text-sm font-semibold text-white">View case studies</a>
        </motion.div>
      </div>

      <motion.div initial={{opacity:0,scale:.96,y:16}} animate={{opacity:1,scale:1,y:0}} transition={{duration:.95,delay:.18}}
        className="insane-card rounded-[1.7rem] p-4 sm:p-6">
        <div className="flex flex-wrap justify-between gap-2 text-[10px] uppercase tracking-[.13em] text-slate-600 sm:text-xs"><span>solution://enterprise-p2p</span><span className="text-emerald-400">● live</span></div>
        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-3">
          {[["50+","Dataverse tables"],["6","BPF stages"],["AI","Invoice extraction"],["E2E","P2P lifecycle"]].map(([a,b])=><div key={b} className="rounded-2xl border border-white/10 bg-white/[.025] p-4">
            <div className="text-xl font-semibold text-white sm:text-2xl">{a}</div><div className="mt-1 text-[11px] text-slate-500 sm:text-xs">{b}</div>
          </div>)}
        </div>
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[.02] p-4">
          <div className="flex items-center gap-2 text-sm font-semibold"><Bot size={16} className="text-cyan-400"/> Automation chain</div>
          <div className="mt-4 grid grid-cols-4 gap-2 sm:flex sm:flex-wrap">
            {stages.map(s=><span key={s} className="flow-pulse flex min-h-9 items-center justify-center rounded-lg border border-white/10 px-2 text-center text-[10px] text-slate-400 sm:text-xs">{s}</span>)}
          </div>
        </div>
      </motion.div>
    </section>

    <section id="system" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-10 md:py-24">
      <Reveal><div className="text-xs font-bold uppercase tracking-[.23em] text-cyan-400">Interactive architecture</div>
      <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-.04em] text-white sm:text-4xl md:text-5xl">A living map of the platform.</h2></Reveal>

      <Reveal className="mt-10">
        <div className="insane-card relative min-h-[520px] rounded-[1.8rem] p-5 sm:min-h-[470px] sm:p-7">
          <div className="absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-cyan-400/30 bg-cyan-400/[.08] text-center text-sm font-black shadow-[0_0_70px_rgba(34,211,238,.14)] sm:h-40 sm:w-40">
            DATAVERSE<br/>CORE
          </div>
          {[
            ["Power Apps","Canvas + Model Driven","left-3 top-8 sm:left-[8%] sm:top-[12%]","float-a"],
            ["Power Automate","approvals + orchestration","right-3 top-12 sm:right-[8%] sm:top-[15%]","float-b"],
            ["Power Pages","vendor onboarding","left-3 bottom-10 sm:left-[8%] sm:bottom-[13%]","float-b"],
            ["Power BI","KPI visibility","right-3 bottom-10 sm:right-[8%] sm:bottom-[13%]","float-a"],
            ["AI Processing","invoice extraction","left-1/2 top-5 -translate-x-1/2 sm:top-8","float-a"],
          ].map(([t,s,pos,anim])=><div key={t} className={`absolute ${pos} ${anim} max-w-[145px] rounded-2xl border border-white/10 bg-[#080e18]/95 p-3 text-xs shadow-xl sm:max-w-none sm:p-4`}>
            <div className="font-semibold text-white">{t}</div><div className="mt-1 text-[10px] text-slate-600 sm:text-xs">{s}</div>
          </div>)}
        </div>
      </Reveal>
    </section>

    <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-10 md:py-24">
      <Reveal><div className="text-xs font-bold uppercase tracking-[.23em] text-cyan-400">Case studies</div>
      <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-.04em] text-white sm:text-4xl md:text-5xl">Projects presented like products.</h2></Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <ProjectCard featured eyebrow="Flagship enterprise solution" title="Procure-to-Pay Command Center"
          description="End-to-end procurement architecture built on Microsoft Power Platform, spanning procurement, logistics, finance and vendor operations."
          bullets={["Demand → PR → RFQ → Quotation → PO → ASN → GRN → Invoice → Payment","50+ Dataverse tables across enterprise modules","Cross-table BPF and stage automation","JavaScript form logic and command customizations","Power Automate approvals and orchestration","AI-assisted invoice extraction","Power Pages vendor onboarding","SharePoint and Power BI integration"]}
          stack={["Model-Driven Apps","Canvas Apps","Dataverse","Power Automate","JavaScript","Power Pages","Power BI","AI"]}/>
        <div className="insane-card relative rounded-3xl p-5 sm:p-7">
          <div className="scan-line"/><div className="text-[10px] font-bold uppercase tracking-[.2em] text-cyan-400 sm:text-xs">Live logic</div>
          <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">Automation Terminal</h3>
          <pre className="mt-5 overflow-x-auto rounded-2xl border border-white/10 bg-black/30 p-4 text-[11px] leading-7 text-slate-400 sm:text-xs"><code>{`if (invoice.received) {
  AI.extract(invoice);
  Dataverse.create(record);
  Flow.route("approval");
}`}</code></pre>
        </div>
        <ProjectCard eyebrow="Productivity system" title="Asset Flow Next"
          description="Low-code task and asset management application with workflow automation, operational reporting and Copilot-assisted interaction."
          bullets={["Power Apps task and asset interface","Relational Dataverse model","Notifications and approvals","Power BI KPI visibility","Copilot-assisted interaction"]}
          stack={["Power Apps","Dataverse","Power Automate","Power BI","Copilot"]}/>
      </div>
    </section>

    <section id="skills" className="border-y border-white/5 bg-white/[.012]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-10 md:py-24">
        <Reveal><div className="text-xs font-bold uppercase tracking-[.23em] text-cyan-400">Capabilities</div>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] text-white sm:text-4xl md:text-5xl">Power Platform, data and automation.</h2></Reveal>
        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g,i)=>{const Icon=g.icon;return <Reveal key={g.title} delay={i*.04}><div className="insane-card h-full rounded-3xl p-5 sm:p-6">
            <Icon className="text-cyan-400" size={21}/><h3 className="mt-4 text-lg font-semibold text-white">{g.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">{g.items.map(x=><span key={x} className="rounded-full border border-white/10 bg-white/[.035] px-3 py-1.5 text-[11px] text-slate-300">{x}</span>)}</div>
          </div></Reveal>})}
        </div>
      </div>
    </section>

    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-10 md:py-24">
      <Reveal><div className="insane-card rounded-[1.8rem] border-cyan-400/15 bg-gradient-to-br from-cyan-400/[.08] to-violet-500/[.08] p-6 sm:p-10 md:p-14">
        <div className="text-xs font-bold uppercase tracking-[.23em] text-cyan-300">Final call</div>
        <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-.045em] text-white sm:text-4xl md:text-6xl">Need someone who can build beyond forms and flows?</h2>
        <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-300 sm:text-lg">Let’s build systems people actually enjoy using.</p>
        <div className="mt-7 grid gap-3 sm:flex">
          <a href="mailto:mayankdangii61@gmail.com" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-slate-950"><Mail size={17}/> Email me</a>
          <a target="_blank" href="https://www.linkedin.com/in/mayank-dangi-737101295" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[.04] px-5 py-3 text-sm font-semibold text-white"><Linkedin size={17}/> LinkedIn</a>
        </div>
      </div></Reveal>
    </section>
  </main>
}