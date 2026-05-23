import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Send, Mail, Twitter } from "lucide-react";
import { SITE } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl font-bold">{SITE.name}</div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">{SITE.bio}</p>
          <div className="mt-5 flex gap-2">
            {[
              { href: SITE.socials.github, icon: Github, label: "GitHub" },
              { href: SITE.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: SITE.socials.telegram, icon: Send, label: "Telegram" },
              { href: SITE.socials.twitter, icon: Twitter, label: "Twitter" },
              { href: `mailto:${SITE.email}`, icon: Mail, label: "Email" },
            ].map(s => (
              <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer"
                className="size-10 grid place-items-center rounded-lg border border-border hover:bg-secondary hover:text-primary transition-colors">
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/projects" className="hover:text-foreground">Projects</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Get in touch</h4>
          <p className="text-sm text-muted-foreground">{SITE.email}</p>
          <p className="text-sm text-muted-foreground">{SITE.location}</p>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" /> Available for work
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE.name}. Crafted with care.
      </div>
    </footer>
  );
}
