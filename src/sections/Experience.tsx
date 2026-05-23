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

        <div className="relative mt-14 pl-8 sm:pl-0">
          <div className="absolute left-3 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0" />
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative mb-10 sm:w-1/2 ${i % 2 ? "sm:ml-auto sm:pl-10" : "sm:pr-10"}`}
            >
              <div className="absolute left-[-25px] sm:left-auto sm:right-auto sm:top-2 sm:[--x:-6px]
                              sm:[inset-inline-start:auto]
                              top-2
                              before:absolute before:size-3 before:rounded-full before:bg-primary before:glow-primary before:left-0 sm:before:left-auto
                              sm:[&]:left-auto sm:[&]:right-[-7px]
                              "
              />
              <div className="absolute top-2 left-[-23px] sm:hidden size-3 rounded-full bg-primary glow-primary" />
              <div className={`hidden sm:block absolute top-2 size-3 rounded-full bg-primary glow-primary ${i % 2 ? "left-[-7px]" : "right-[-7px]"}`} />
              <div className="rounded-2xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                <div className="text-xs text-primary font-semibold">{e.period}</div>
                <h3 className="mt-1 font-display text-lg font-bold">{e.role}</h3>
                <div className="text-sm text-muted-foreground">{e.company}</div>
                <p className="mt-3 text-sm text-muted-foreground">{e.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
