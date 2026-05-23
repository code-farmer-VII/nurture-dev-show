import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ROLES, SITE } from "@/lib/portfolio-data";
import { ParticleBg } from "@/components/ParticleBg";
import profile from "@/assets/profile.jpg";

function useTypewriter(words: string[], speed = 80, pause = 1400) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i % words.length];
    const t = setTimeout(() => {
      if (!del) {
        if (text.length < w.length) setText(w.slice(0, text.length + 1));
        else setTimeout(() => setDel(true), pause);
      } else {
        if (text.length > 0) setText(w.slice(0, text.length - 1));
        else { setDel(false); setI(i + 1); }
      }
    }, del ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);
  return text;
}

export function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section className="relative min-h-[100svh] flex items-center pt-28 pb-20">
      <ParticleBg />
      <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Available for freelance & full-time
          </div>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Hi, I'm <span className="text-gradient">{SITE.name.split(" ")[0]}</span>.<br />
            <span className="text-foreground/90">I build </span>
            <span className="text-primary">{typed}</span>
            <span className="inline-block w-1 h-[0.9em] bg-primary align-[-0.1em] ml-1 animate-pulse" />
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">{SITE.bio}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projects" className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-all glow-primary">
              View Projects <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a href="/cv.pdf" className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-5 py-3 text-sm font-semibold hover:bg-secondary transition-colors">
              <Download className="size-4" /> Download CV
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold hover:bg-secondary transition-colors">
              <Mail className="size-4" /> Contact Me
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="relative justify-self-center lg:justify-self-end"
        >
          <div className="relative size-[280px] sm:size-[360px] lg:size-[420px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-primary-glow to-accent blur-2xl opacity-60 animate-pulse" />
            <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-primary to-primary-glow p-[3px]">
              <div className="size-full rounded-full overflow-hidden bg-background">
                <img src={profile} alt={`${SITE.name} portrait`} width={420} height={420} className="size-full object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-3 -left-3 glass rounded-2xl px-4 py-3 shadow-xl">
              <div className="text-xs text-muted-foreground">Currently</div>
              <div className="text-sm font-semibold">Building something cool</div>
            </div>
            <div className="absolute -top-3 -right-3 glass rounded-2xl px-4 py-3 shadow-xl">
              <div className="text-xs text-muted-foreground">Experience</div>
              <div className="text-sm font-semibold">5+ years</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
