import { TECH_MARQUEE } from "@/lib/portfolio-data";

export function TechMarquee() {
  const items = [...TECH_MARQUEE, ...TECH_MARQUEE];
  return (
    <section className="py-16 border-y border-border overflow-hidden">
      <div className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">Tech I love</div>
      <div className="relative [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee flex gap-12 whitespace-nowrap">
          {items.map((t, i) => (
            <div key={i} className="font-display text-3xl sm:text-4xl font-bold text-muted-foreground/60 hover:text-primary transition-colors">
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
