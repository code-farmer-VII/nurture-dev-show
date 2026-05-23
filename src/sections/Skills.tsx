import { motion } from "framer-motion";
import { SKILL_GROUPS } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">Skills</div>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold">Tools I reach for</h2>
          <p className="mt-3 text-muted-foreground">A pragmatic toolbox honed across dozens of production projects.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((g, gi) => (
            <motion.div
              key={g.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-all hover:-translate-y-1"
            >
              <h3 className="font-display text-xl font-bold mb-5">{g.category}</h3>
              <div className="space-y-4">
                {g.skills.map(s => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
