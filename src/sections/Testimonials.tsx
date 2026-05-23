import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/portfolio-data";

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  const t = TESTIMONIALS[i];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <div className="text-sm font-semibold text-primary uppercase tracking-wider">Kind words</div>
        <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold">Trusted by founders & teams</h2>

        <div className="relative mt-12 min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-3xl p-8 sm:p-10"
            >
              <div className="flex justify-center gap-0.5 text-primary">
                {Array.from({ length: t.rating }).map((_, n) => <Star key={n} className="size-4 fill-current" />)}
              </div>
              <p className="mt-5 text-lg sm:text-xl leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <img src={t.avatar} alt={t.name} loading="lazy" className="size-12 rounded-full object-cover border-2 border-primary/40" />
                <div className="text-left">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.title}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {TESTIMONIALS.map((_, n) => (
            <button
              key={n}
              onClick={() => setI(n)}
              aria-label={`Testimonial ${n + 1}`}
              className={`h-1.5 rounded-full transition-all ${n === i ? "w-8 bg-primary" : "w-2 bg-muted"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
