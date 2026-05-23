import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github } from "lucide-react";
import { PROJECTS } from "@/lib/portfolio-data";

export function FeaturedProjects() {
  const featured = PROJECTS.slice(0, 6);
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-primary uppercase tracking-wider">Work</div>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold">Featured projects</h2>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
            See all <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:-translate-y-1 transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden bg-secondary">
                <img src={p.image} alt={p.title} loading="lazy" width={1280} height={800}
                  className="size-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-bold">{p.title}</h3>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-primary/30 text-primary">{p.category}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 4).map(t => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-secondary text-muted-foreground">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3 text-sm">
                  <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-semibold text-primary hover:gap-2 transition-all">
                    Live demo <ArrowUpRight className="size-3.5" />
                  </a>
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
                    <Github className="size-3.5" /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
