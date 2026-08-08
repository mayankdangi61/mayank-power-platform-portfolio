"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Bot,
  Boxes,
  Database,
  ExternalLink,
  Github,
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
  {
    icon: Boxes,
    title: "Power Apps",
    items: ["Model-Driven Apps", "Canvas Apps", "Power Fx", "Business Rules", "BPF"],
  },
  {
    icon: Workflow,
    title: "Automation",
    items: ["Power Automate", "Approvals", "Cloud Flows", "RPA Exposure", "AI Processing"],
  },
  {
    icon: Database,
    title: "Data",
    items: ["Dataverse", "Relational Modeling", "Lookups", "Security Roles", "MySQL"],
  },
  {
    icon: Code2,
    title: "Extensibility",
    items: ["JavaScript", "Ribbon Commands", "Form Scripting", "REST APIs", "HTML/CSS"],
  },
  {
    icon: Globe2,
    title: "Microsoft Ecosystem",
    items: ["Power Pages", "SharePoint", "Microsoft 365", "Teams", "Copilot Studio"],
  },
  {
    icon: BarChart3,
    title: "Analytics",
    items: ["Power BI", "Microsoft Fabric", "KPI Reporting", "Dashboards", "ER Modeling"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <div className="noise" />
      <Nav />

      <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 md:px-10">
        <div className="absolute inset-0 -z-10 bg-grid bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,white,transparent_85%)]" />

        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-200"
            >
              <Sparkles size={15} />
              Microsoft Power Platform Developer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8, delay: .08 }}
              className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-[-.04em] text-white sm:text-6xl lg:text-7xl"
            >
              I build enterprise systems that turn
              <span className="text-gradient"> business complexity into flow.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8, delay: .18 }}
              className="mt-7 max-w-2xl text-lg leading-8 text-slate-300"
            >
              I&apos;m Mayank Dangi, a Power Platform Developer focused on
              Model-Driven Apps, Canvas Apps, Dataverse, Power Automate,
              JavaScript, Power Pages, analytics and AI-assisted business automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8, delay: .28 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-2xl bg-sky-400 px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.03]"
              >
                View enterprise work <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[.04] px-5 py-3 font-semibold text-white transition hover:bg-white/[.08]"
              >
                Let&apos;s connect
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: .94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .9, delay: .2 }}
            className="glass relative rounded-[2rem] p-5 shadow-glow md:p-7"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>solution://enterprise-p2p</span>
                <span>LIVE ARCHITECTURE</span>
              </div>
              <div className="mt-7 grid grid-cols-2 gap-3">
                {[
                  ["50+", "Dataverse tables"],
                  ["6", "BPF stages"],
                  ["AI", "Invoice extraction"],
                  ["E2E", "P2P workflow"],
                ].map(([a, b]) => (
                  <div key={b} className="rounded-2xl border border-white/10 bg-white/[.035] p-4">
                    <div className="text-2xl font-semibold text-white">{a}</div>
                    <div className="mt-1 text-xs text-slate-500">{b}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[.025] p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                  <Bot size={16} className="text-sky-400" /> Automation chain
                </div>
                <div className="mt-5 flex items-center gap-2 overflow-hidden text-xs text-slate-400">
                  {["PR", "RFQ", "PO", "ASN", "GRN", "Invoice", "Payment"].map((s, i) => (
                    <div key={s} className="flex items-center gap-2">
                      <span className="rounded-lg border border-white/10 px-2.5 py-1.5">{s}</span>
                      {i < 6 && <ArrowRight size={13} className="shrink-0 text-slate-600" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
          aria-label="Scroll down"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ArrowDown />
          </motion.div>
        </a>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[.24em] text-sky-400">Profile</p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_.7fr]">
            <h2 className="text-4xl font-semibold tracking-[-.03em] text-white md:text-5xl">
              Building low-code solutions with engineering discipline.
            </h2>
            <p className="leading-8 text-slate-300">
              My work spans application design, automation, relational data modeling,
              form customization, business process orchestration, client requirements,
              UAT and deployment support. I focus on solutions that are maintainable,
              clear to users and aligned with real enterprise workflows.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [50, "+", "Dataverse tables in enterprise solution"],
            [2, "", "Power Platform app patterns: Canvas + Model-Driven"],
            [1, "", "Microsoft associate certification"],
            [100, "%", "Focus on business-first automation"],
          ].map(([value, suffix, label], i) => (
            <Reveal key={label as string} delay={i * .06}>
              <div className="glass rounded-3xl p-6">
                <div className="text-3xl font-semibold text-white">
                  <AnimatedCounter value={value as number} suffix={suffix as string} />
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="experience" className="border-y border-white/5 bg-white/[.015]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[.24em] text-sky-400">Experience</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-.03em] text-white md:text-5xl">
              Enterprise delivery experience.
            </h2>
          </Reveal>

          <div className="mt-12 space-y-5">
            {[
              {
                role: "Consultant",
                company: "HOSHŌ DIGITAL",
                period: "Mar 2026 — Present",
                text:
                  "Designing and delivering Power Platform solutions across procurement, operations, finance and vendor management using Power Apps, Power Automate, Dataverse, Power Pages, JavaScript, SharePoint and Power BI.",
              },
              {
                role: "Jr. Consultant — Intern",
                company: "HOSHŌ DIGITAL",
                period: "Dec 2025 — Mar 2026",
                text:
                  "Built low-code applications, Dataverse data models, workflow automation and operational dashboards while working in enterprise Microsoft 365 and Agile environments.",
              },
            ].map((item, i) => (
              <Reveal key={item.role} delay={i * .08}>
                <div className="glass grid gap-5 rounded-3xl p-6 md:grid-cols-[.65fr_1.35fr] md:p-8">
                  <div>
                    <p className="text-sm text-sky-400">{item.period}</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">{item.role}</h3>
                    <p className="mt-1 text-sm text-slate-500">{item.company}</p>
                  </div>
                  <p className="leading-8 text-slate-300">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[.24em] text-sky-400">Selected work</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-.03em] text-white md:text-5xl">
            Projects built around real business processes.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
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
            stack={[
              "Model-Driven Apps",
              "Canvas Apps",
              "Dataverse",
              "Power Automate",
              "Power Pages",
              "JavaScript",
              "Power BI",
              "SharePoint",
              "AI",
            ]}
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
            stack={["Power Apps", "Dataverse", "Power Automate", "Power BI", "Copilot"]}
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
            stack={["Power Automate", "AI", "Dataverse", "Document Processing"]}
          />
        </div>
      </section>

      <section id="skills" className="border-y border-white/5 bg-white/[.015]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[.24em] text-sky-400">Capabilities</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-.03em] text-white md:text-5xl">
              Power Platform, data and automation.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g, i) => {
              const Icon = g.icon;
              return (
                <Reveal key={g.title} delay={i * .05}>
                  <div className="glass h-full rounded-3xl p-6">
                    <Icon className="text-sky-400" />
                    <h3 className="mt-5 text-lg font-semibold text-white">{g.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {g.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[.035] px-3 py-1.5 text-xs text-slate-300"
                        >
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

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <Reveal>
          <div className="glass overflow-hidden rounded-[2rem] p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-[1fr_.7fr] md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[.24em] text-sky-400">Certification</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-.03em] text-white md:text-4xl">
                  Microsoft Certified: Fabric Analytics Engineer Associate
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                  Earned June 2026. Complements Power Platform delivery with analytics,
                  reporting and data-platform understanding.
                </p>
              </div>
              <div className="md:text-right">
                <span className="inline-flex rounded-full border border-indigo-400/20 bg-indigo-400/10 px-4 py-2 text-sm text-indigo-200">
                  Microsoft Certified
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-16 pt-12 md:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-sky-400/15 bg-sky-400/[.07] p-8 md:p-14">
            <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-indigo-500/20 blur-3xl" />
            <p className="text-sm font-semibold uppercase tracking-[.24em] text-sky-300">Contact</p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-.04em] text-white md:text-6xl">
              Building something on Microsoft Power Platform?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              I&apos;m open to Power Platform Developer and Consultant opportunities across India and relocation.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:mayankdangii61@gmail.com"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-slate-950"
              >
                <Mail size={18} /> Email me
              </a>
              <a
                href="https://www.linkedin.com/in/mayank-dangi-737101295"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[.04] px-5 py-3 font-semibold text-white"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </Reveal>

        <footer className="flex flex-col gap-4 py-10 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Mayank Dangi. Built with Next.js + Framer Motion.</span>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/mayank-dangi-737101295" target="_blank" className="hover:text-white">
              <Linkedin size={17} />
            </a>
            <a href="mailto:mayankdangii61@gmail.com" className="hover:text-white">
              <Mail size={17} />
            </a>
          </div>
        </footer>
      </section>
    </main>
  );
}
