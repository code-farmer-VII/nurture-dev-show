import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, X, CheckCircle2 } from "lucide-react";
import { PROJECTS, PROJECT_CATEGORIES, type Project } from "@/lib/portfolio-data";
import { ParticleBg } from "@/components/ParticleBg";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — Alex Carter" },
      { name: "description", content: "Selected work — full stack, frontend, mobile, and design projects." },
      { property: "og:title", content: "Projects — Alex Carter" },
      { property: "og:description", content: "Selected work across web, mobile, and design." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

function ProjectsPage() {
  const [cat, setCat] = useState<(typeof PROJECT_CATEGORIES)[number]>("All");
  const [open, setOpen] = useState<Project | null>(null);

  const filtered = useMemo(
    () => cat === "All" ? PROJECTS : PROJECTS.filter(p => p.category === cat),
    [cat]
  );

  return (
    <>
      <section className="relative pt-36 pb-16">
        <ParticleBg />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">Portfolio</div>
          <h1 className="mt-2 font-display text-5xl sm:text-6xl font-bold">Selected <span className="text-gradient">projects</span></h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">A curated set of work across web, mobile, and design — from realtime SaaS to consumer apps.</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {PROJECT_CATEGORIES.map(c => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                  cat === c ? "bg-primary text-primary-foreground border-primary glow-primary"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >{c}</button>
            ))}
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.article
                  layout
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: (i % 3) * 0.05 }}
                  onClick={() => setOpen(p)}
                  className="group cursor-pointer rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:-translate-y-1 transition-all"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-secondary relative">
                    <img src={p.image} alt={p.title} loading="lazy" width={1280} height={800}
                      className="size-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-background/80 backdrop-blur border border-border">
                      {p.status}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display text-lg font-bold">{p.title}</h3>
                      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-primary/30 text-primary">{p.category}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tech.map(t => <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-secondary text-muted-foreground">{t}</span>)}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[70] bg-background/80 backdrop-blur-md grid place-items-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-3xl my-8 rounded-3xl border border-border bg-card overflow-hidden"
            >
              <button onClick={() => setOpen(null)} aria-label="Close"
                className="absolute top-4 right-4 z-10 size-9 grid place-items-center rounded-lg bg-background/80 backdrop-blur border border-border hover:bg-secondary">
                <X className="size-4" />
              </button>
              <div className="aspect-[16/9] bg-secondary overflow-hidden">
                <img src={open.image} alt={open.title} className="size-full object-cover" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-primary/30 text-primary">{open.category}</span>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-border">{open.status}</span>
                </div>
                <h2 className="mt-3 font-display text-3xl font-bold">{open.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{open.long}</p>

                <h3 className="mt-6 font-semibold">Key features</h3>
                <ul className="mt-2 grid sm:grid-cols-2 gap-2 text-sm">
                  {open.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="size-4 text-primary shrink-0" /> {f}
                    </li>
                  ))}
                </ul>

                <h3 className="mt-6 font-semibold">Stack</h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {open.tech.map(t => <span key={t} className="text-xs px-2 py-1 rounded-md bg-secondary">{t}</span>)}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={open.demo} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
                    Live demo <ArrowUpRight className="size-4" />
                  </a>
                  <a href={open.github} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold hover:bg-secondary">
                    <Github className="size-4" /> Source code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
