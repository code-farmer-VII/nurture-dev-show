import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">Journey</div>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold">Experience timeline</h2>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-3 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
          {EXPERIENCE.map((e, i) => {
            const right = i % 2 === 1;
            return (
              <motion.div
                key={e.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative mb-10 pl-10 sm:pl-0 sm:w-1/2 ${right ? "sm:ml-auto sm:pl-10" : "sm:pr-10"}`}
              >
                <span
                  className={`absolute top-3 size-3 rounded-full bg-primary glow-primary
                    left-2 sm:left-auto
                    ${right ? "sm:left-[-7px]" : "sm:right-[-7px]"}`}
                />
                <div className="rounded-2xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                  <div className="text-xs text-primary font-semibold">{e.period}</div>
                  <h3 className="mt-1 font-display text-lg font-bold">{e.role}</h3>
                  <div className="text-sm text-muted-foreground">{e.company}</div>
                  <p className="mt-3 text-sm text-muted-foreground">{e.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
