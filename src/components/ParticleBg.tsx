export function ParticleBg() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="absolute -top-32 -left-32 size-[420px] rounded-full bg-primary/30 blur-3xl animate-blob" />
      <div className="absolute top-40 -right-32 size-[380px] rounded-full bg-accent/30 blur-3xl animate-blob [animation-delay:4s]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 size-[500px] rounded-full bg-primary-glow/20 blur-3xl animate-blob [animation-delay:8s]" />
    </div>
  );
}
