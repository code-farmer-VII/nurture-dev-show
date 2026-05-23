import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { STATS, SITE } from "@/lib/portfolio-data";

function useCount(target: number, run: boolean, dur = 1400) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0; const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setV(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, dur]);
  return v;
}

function StatCard({ label, value, delay }: { label: string; value: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setSeen(true), { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const n = useCount(value, seen);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
    >
      <div className="font-display text-4xl font-bold text-gradient">{n}+</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">About</div>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold">A senior engineer who cares about the craft.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            I'm {SITE.name}, a full-stack developer with 5+ years building products that ship. I specialize in modern
            React/Next.js frontends, Node and NestJS backends, and React Native mobile apps. I love clean architecture,
            careful naming, fast feedback loops, and shipping work I'm proud of.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Computer Science, B.Sc. — University of Tech. I've worked with startups, agencies, and product teams
            across fintech, healthtech, e-commerce, and SaaS.
          </p>
          <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-5">
            <div className="text-sm font-semibold text-primary">Mission</div>
            <p className="mt-1 text-sm">Build software that's fast, accessible, and feels great — for users and for the team maintaining it.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 content-center">
          {STATS.map((s, i) => <StatCard key={s.label} {...s} delay={i * 0.08} />)}
        </div>
      </div>
    </section>
  );
}
