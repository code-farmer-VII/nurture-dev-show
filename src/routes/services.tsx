import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES, PROCESS, FAQS } from "@/lib/portfolio-data";
import { ParticleBg } from "@/components/ParticleBg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Alex Carter" },
      { name: "description", content: "Full stack, frontend, backend, mobile, UI/UX, and architecture services." },
      { property: "og:title", content: "Services — Alex Carter" },
      { property: "og:description", content: "Engineering services for ambitious teams." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const WHY = [
  "Problem-solving mindset",
  "Clean, tested code",
  "Scalable architecture",
  "Responsive communication",
  "Fast, predictable delivery",
  "Modern tech, pragmatic choices",
];

function ServicesPage() {
  return (
    <>
      <section className="relative pt-36 pb-16">
        <ParticleBg />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">Services</div>
          <h1 className="mt-2 font-display text-5xl sm:text-6xl font-bold">Engineering services that <span className="text-gradient">ship</span></h1>
          <p className="mt-4 text-muted-foreground">From idea to launch — and the long tail of iteration after.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = (Icons as any)[s.icon] ?? Icons.Sparkles;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
                className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:-translate-y-1 transition-all"
              >
                <div className="size-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center text-primary-foreground">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="size-3.5 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm font-semibold text-primary">{s.price}</span>
                  <Link to="/contact" className="inline-flex items-center gap-1 text-sm font-semibold group-hover:text-primary transition-colors">
                    Inquire <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-sm font-semibold text-primary uppercase tracking-wider">Process</div>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold">How we'll work together</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <div className="font-display text-3xl font-bold text-primary/70">{p.step}</div>
                <div className="mt-2 font-semibold">{p.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{p.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm font-semibold text-primary uppercase tracking-wider">Why me</div>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold">A senior partner, not a code monkey.</h2>
            <p className="mt-4 text-muted-foreground">I bring strong opinions and clear communication. You ship faster, with fewer surprises.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {WHY.map(w => (
              <div key={w} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                <CheckCircle2 className="size-5 text-primary shrink-0" />
                <span className="text-sm font-medium">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center">
            <div className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</div>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold">Common questions</h2>
          </div>
          <Accordion type="single" collapsible className="mt-10">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-card to-secondary p-10 text-center">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 size-72 bg-primary/30 blur-3xl rounded-full" />
            <div className="relative">
              <h2 className="font-display text-3xl sm:text-4xl font-bold">Ready to start?</h2>
              <p className="mt-3 text-muted-foreground">Free 30-min discovery call. No commitment.</p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 glow-primary">
                Book a call <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
