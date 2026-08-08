"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Bot,
  Boxes,
  Database,
  Linkedin,
  Mail,
  Workflow,
  Sparkles,
  Code2,
  BarChart3,
  Globe2,
} from "lucide-react";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import ProjectCard from "@/components/ProjectCard";

const skillGroups = [
  { icon: Boxes, title: "Power Apps", items: ["Model-Driven Apps", "Canvas Apps", "Power Fx", "Business Rules", "BPF"] },
  { icon: Workflow, title: "Automation", items: ["Power Automate", "Approvals", "Cloud Flows", "RPA Exposure", "AI Processing"] },
  { icon: Database, title: "Data", items: ["Dataverse", "Relational Modeling", "Lookups", "Security Roles", "MySQL"] },
  { icon: Code2, title: "Extensibility", items: ["JavaScript", "Ribbon Commands", "Form Scripting", "REST APIs", "HTML/CSS"] },
  { icon: Globe2, title: "Microsoft Ecosystem", items: ["Power Pages", "SharePoint", "Microsoft 365", "Teams", "Copilot Studio"] },
  { icon: BarChart3, title: "Analytics", items: ["Power BI", "Microsoft Fabric", "KPI Reporting", "Dashboards", "ER Modeling"] },
];

const stages = ["PR", "RFQ", "PO", "ASN", "GRN", "Invoice", "Payment"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <div className="noise" />
      <Nav />

      <section className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-4 pb-14 pt-28 sm:px-6 md:px-10 md:pt-32">
        <div className="absolute inset-0 -z-10 bg-grid bg-[size:38px_38px] opacity-60 [mask-image:linear-gradient(to_bottom,white,transparent_85%)] sm:bg-[size:48px_48px]" />

        <div className="grid w-full items-center gap-9 lg:grid-cols-[1.15fr_.85fr] lg:gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .6 }}
              className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3.5 py-2 text-xs text-sky-200 sm:text-sm"
            >
              <Sparkles size={14} className="shrink-0" />
              <span>Microsoft Power Platform Developer</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8, delay: .08 }}
              className="max-w-4xl text-[2.55rem] font-semibold leading-[1.02] tracking-[-.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              I build enterprise systems that turn
              <span className="text-gradient"> business complexity into flow.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8, delay: .18 }}
              className="mt-6 max-w-2xl text-[15px] leading-7 text-slate-300 sm:text-lg sm:leading-8"
            >
              I&apos;m Mayank Dangi, a Power Platform Developer focused on
              Model-Driven Apps, Canvas Apps, Dataverse, Power Automate,
              JavaScript, Power Pages, analytics and AI-assisted business automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8, delay: .28 }}
              className="mt-7 grid gap-3 sm:flex sm:flex-wrap"
            >
              <a
                href="#projects"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                View enterprise work <ArrowRight size={17} />
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[.04] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[.08]"
              >
                Let&apos;s connect
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: .96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: .9, delay: .2 }}
            className="glass relative w-full min-w-0 rounded-[1.6rem] p-3.5 shadow-glow sm:p-5 md:p-7"
          >
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-indigo-500/20 blur-3xl sm:h-40 sm:w-40" />

            <div className="min-w-0 rounded-[1.35rem] border border-white/10 bg-slate-950/80 p-4 sm:rounded-3xl sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] uppercase tracking-[.08em] text-slate-500 sm:text-xs">
                <span>solution://enterprise-p2p</span>
                <span>live architecture</span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-7 sm:gap-3">
                {[
                  ["50+", "Dataverse tables"],
                  ["6", "BPF stages"],
                  ["AI", "Invoice extraction"],
                  ["E2E", "P2P workflow"],
                ].map(([a, b]) => (
                  <div key={b} className="min-w-0 rounded-2xl border border-white/10 bg-white/[.035] p-3.5 sm:p-4">
                    <div className="text-xl font-semibold text-white sm:text-2xl">{a}</div>
                    <div className="mt-1 text-[11px] leading-4 text-slate-500 sm:text-xs">{b}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[.025] p-3.5 sm:mt-5 sm:p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                  <Bot size={16} className="text-sky-400" /> Automation chain
                </div>

                <div className="mt-4 grid grid-cols-4 gap-2 sm:flex sm:flex-wrap sm:items-center">
                  {stages.map((s, i) => (
                    <div key={s} className="contents sm:flex sm:items-center sm:gap-2">
                      <span className="flex min-h-9 items-center justify-center rounded-lg border border-white/10 px-2 py-1.5 text-center text-[10px] text-slate-400 sm:text-xs">
                        {s}
                      </span>
                      {i < stages.length - 1 && (
                        <ArrowRight size={13} className="hidden shrink-0 text-slate-600 sm:block" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <a
          href="#about"
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-slate-500 sm:block"
          aria-label="Scroll down"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ArrowDown />
          </motion.div>
        </a>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-10 md:py-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-sky-400 sm:text-sm">Profile</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_.7fr] lg:gap-10">
            <h2 className="text-3xl font-semibold tracking-[-.035em] text-white sm:text-4xl md:text-5xl">
              Building low-code solutions with engineering discipline.
            </h2>
            <p className="text-[15px] leading-7 text-slate-300 sm:text-base sm:leading-8">
              My work spans application design, automation, relational data modeling,
              form customization, business process orchestration, client requirements,
              UAT and deployment support. I focus on solutions that are maintainable,
              clear to users and aligned with real enterprise workflows.
            </p>
          </div>
        </Reveal>

        <div className="mt-9 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4">
          {[
            [50, "+", "Dataverse tables in enterprise solution"],
            [2, "", "Canvas + Model-Driven app patterns"],
            [1, "", "Microsoft associate certification"],
            [100, "%", "Business-first automation focus"],
          ].map(([value, suffix, label], i) => (
            <Reveal key={label as string} delay={i * .05}>
              <div className="glass h-full rounded-2xl p-4 sm:rounded-3xl sm:p-6">
                <div className="text-2xl font-semibold text-white sm:text-3xl">
                  <AnimatedCounter value={value as number} suffix={suffix as string} />
                </div>
                <p className="mt-2 text-[11px] leading-5 text-slate-400 sm:text-sm sm:leading-6">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="experience" className="border-y border-white/5 bg-white/[.015]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-10 md:py-24">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[.22em] text-sky-400 sm:text-sm">Experience</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] text-white sm:text-4xl md:text-5xl">
              Enterprise delivery experience.
            </h2>
          </Reveal>

          <div className="mt-9 space-y-4 sm:mt-12 sm:space-y-5">
            {[
              {
                role: "Consultant",
                company: "HOSHŌ DIGITAL",
                period: "Mar 2026 — Present",
                text: "Designing and delivering Power Platform solutions across procurement, operations, finance and vendor management using Power Apps, Power Automate, Dataverse, Power Pages, JavaScript, SharePoint and Power BI.",
              },
              {
                role: "Jr. Consultant — Intern",
                company: "HOSHŌ DIGITAL",
                period: "Dec 2025 — Mar 2026",
                text: "Built low-code applications, Dataverse data models, workflow automation and operational dashboards while working in enterprise Microsoft 365 and Agile environments.",
              },
            ].map((item, i) => (
              <Reveal key={item.role} delay={i * .08}>
                <div className="glass grid gap-4 rounded-2xl p-5 sm:rounded-3xl sm:p-6 md:grid-cols-[.65fr_1.35fr] md:gap-5 md:p-8">
                  <div>
                    <p className="text-xs text-sky-400 sm:text-sm">{item.period}</p>
                    <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">{item.role}</h3>
                    <p className="mt-1 text-xs text-slate-500 sm:text-sm">{item.company}</p>
                  </div>
                  <p className="text-[15px] leading-7 text-slate-300 sm:text-base sm:leading-8">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-10 md:py-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-sky-400 sm:text-sm">Selected work</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-.035em] text-white sm:text-4xl md:text-5xl">
            Projects built around real business processes.
          </h2>
        </Reveal>

        <div className="mt-9 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2">
          <ProjectCard
            featured
            eyebrow="Flagship enterprise solution"
            title="Procure-to-Pay Management Platform"
            description="An end-to-end Power Platform solution for procurement, logistics, inventory, vendor management and finance workflows."
            bullets={[
              "Demand Request → PR → RFQ → Quotation → PO → ASN → GRN → Invoice → Payment",
              "50+ Dataverse tables across core enterprise modules",
              "Multi-stage Business Process Flow across multiple tables",
              "JavaScript form scripting, lookup handling and stage automation",
              "Power Automate approvals and operational orchestration",
              "AI-assisted invoice data extraction into downstream records",
              "Power Pages vendor onboarding and SharePoint document processes",
              "Power BI visibility and Business Central integration planning",
            ]}
            stack={["Model-Driven Apps","Canvas Apps","Dataverse","Power Automate","Power Pages","JavaScript","Power BI","SharePoint","AI"]}
          />

          <ProjectCard
            eyebrow="Productivity system"
            title="Asset Flow Next"
            description="Low-code task and asset management application that centralizes allocation, operational workflows and reporting."
            bullets={[
              "Power Apps interface for task and asset operations",
              "Relational Dataverse model",
              "Power Automate notifications and approvals",
              "Power BI KPI dashboards",
              "Microsoft Copilot-assisted interaction",
            ]}
            stack={["Power Apps","Dataverse","Power Automate","Power BI","Copilot"]}
          />

          <ProjectCard
            eyebrow="Intelligent automation"
            title="AI Invoice Processing"
            description="Automated invoice handling flow that extracts structured information from invoice documents and feeds it into downstream application workflows."
            bullets={[
              "Document-to-data automation",
              "Reduced repetitive manual transcription",
              "Power Automate orchestration",
              "Designed for Dataverse-backed processes",
            ]}
            stack={["Power Automate","AI","Dataverse","Document Processing"]}
          />
        </div>
      </section>

      <section id="skills" className="border-y border-white/5 bg-white/[.015]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-10 md:py-24">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[.22em] text-sky-400 sm:text-sm">Capabilities</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] text-white sm:text-4xl md:text-5xl">
              Power Platform, data and automation.
            </h2>
          </Reveal>

          <div className="mt-9 grid gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g, i) => {
              const Icon = g.icon;
              return (
                <Reveal key={g.title} delay={i * .04}>
                  <div className="glass h-full rounded-2xl p-5 sm:rounded-3xl sm:p-6">
                    <Icon className="text-sky-400" size={21} />
                    <h3 className="mt-4 text-base font-semibold text-white sm:mt-5 sm:text-lg">{g.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                      {g.items.map((item) => (
                        <span key={item} className="rounded-full border border-white/10 bg-white/[.035] px-2.5 py-1.5 text-[11px] text-slate-300 sm:px-3 sm:text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-10 md:py-24">
        <Reveal>
          <div className="glass overflow-hidden rounded-[1.6rem] p-6 sm:rounded-[2rem] sm:p-8 md:p-12">
            <div className="grid gap-7 md:grid-cols-[1fr_.7fr] md:items-end md:gap-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.22em] text-sky-400 sm:text-sm">Certification</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-.03em] text-white sm:text-3xl md:text-4xl">
                  Microsoft Certified: Fabric Analytics Engineer Associate
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-slate-400 sm:text-base">
                  Earned June 2026. Complements Power Platform delivery with analytics,
                  reporting and data-platform understanding.
                </p>
              </div>
              <div className="md:text-right">
                <span className="inline-flex rounded-full border border-indigo-400/20 bg-indigo-400/10 px-4 py-2 text-xs text-indigo-200 sm:text-sm">
                  Microsoft Certified
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 pb-10 pt-4 sm:px-6 md:px-10 md:pb-16 md:pt-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.6rem] border border-sky-400/15 bg-sky-400/[.07] p-6 sm:rounded-[2rem] sm:p-8 md:p-14">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl sm:h-60 sm:w-60" />
            <p className="text-xs font-semibold uppercase tracking-[.22em] text-sky-300 sm:text-sm">Contact</p>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-.04em] text-white sm:text-4xl md:text-6xl">
              Building something on Microsoft Power Platform?
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-300 sm:text-lg sm:leading-8">
              I&apos;m open to Power Platform Developer and Consultant opportunities across India and relocation.
            </p>

            <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:mt-8">
              <a
                href="mailto:mayankdangii61@gmail.com"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950"
              >
                <Mail size={17} /> Email me
              </a>
              <a
                href="https://www.linkedin.com/in/mayank-dangi-737101295"
                target="_blank"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[.04] px-5 py-3 text-sm font-semibold text-white"
              >
                <Linkedin size={17} /> LinkedIn
              </a>
            </div>
          </div>
        </Reveal>

        <footer className="flex flex-col gap-4 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:py-10 sm:text-sm">
          <span>© 2026 Mayank Dangi. Built with Next.js + Framer Motion.</span>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/mayank-dangi-737101295" target="_blank" className="hover:text-white"><Linkedin size={17} /></a>
            <a href="mailto:mayankdangii61@gmail.com" className="hover:text-white"><Mail size={17} /></a>
          </div>
        </footer>
      </section>
    </main>
  );
}
