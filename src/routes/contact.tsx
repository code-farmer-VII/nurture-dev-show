import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { z } from "zod";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Loader2 } from "lucide-react";
import { ParticleBg } from "@/components/ParticleBg";
import { SITE } from "@/lib/portfolio-data";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Alex Carter" },
      { name: "description", content: "Get in touch to start a project, ask a question, or just say hi." },
      { property: "og:title", content: "Contact — Alex Carter" },
      { property: "og:description", content: "Start a project or say hi." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Invalid email").max(120),
  subject: z.string().trim().min(2, "Subject required").max(120),
  service: z.string().min(1, "Pick a service"),
  message: z.string().trim().min(10, "Message is too short").max(2000),
});

const SERVICES = ["Full Stack", "Frontend", "Backend", "Mobile App", "UI/UX", "Other"];

function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) fieldErrors[issue.path[0] as string] = issue.message;
      setErrors(fieldErrors);
      toast.error("Please fix the highlighted fields");
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise(r => setTimeout(r, 900));
    setLoading(false);
    toast.success("Message sent! I'll reply within 24 hours.");
    (e.target as HTMLFormElement).reset();
  };

  const field = "w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all";

  return (
    <>
      <section className="relative pt-36 pb-12">
        <ParticleBg />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">Contact</div>
          <h1 className="mt-2 font-display text-5xl sm:text-6xl font-bold">Let's build something <span className="text-gradient">great</span></h1>
          <p className="mt-4 text-muted-foreground">Tell me about your project — I read every message.</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-5 gap-8">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-4"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block mb-1.5">Full name</label>
                <input name="name" placeholder="Jane Doe" className={field} maxLength={80} />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5">Email</label>
                <input name="email" type="email" placeholder="jane@example.com" className={field} maxLength={120} />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block mb-1.5">Subject</label>
                <input name="subject" placeholder="Project inquiry" className={field} maxLength={120} />
                {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject}</p>}
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5">Service</label>
                <select name="service" defaultValue="" className={field}>
                  <option value="" disabled>Pick a service…</option>
                  {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.service && <p className="text-xs text-destructive mt-1">{errors.service}</p>}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium block mb-1.5">Message</label>
              <textarea name="message" rows={6} placeholder="Tell me a bit about your project, timeline, and budget…" className={field} maxLength={2000} />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>
            <button
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-60 glow-primary transition-opacity"
            >
              {loading ? <><Loader2 className="size-4 animate-spin" /> Sending…</> : <><Send className="size-4" /> Send message</>}
            </button>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-bold">Reach out</h3>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-center gap-3"><Mail className="size-4 text-primary" /> <span>{SITE.email}</span></div>
                <div className="flex items-center gap-3"><Phone className="size-4 text-primary" /> <span>{SITE.phone}</span></div>
                <div className="flex items-center gap-3"><MapPin className="size-4 text-primary" /> <span>{SITE.location}</span></div>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
                <span className="size-1.5 rounded-full bg-primary animate-pulse" /> Available for new projects
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-bold">Find me online</h3>
              <div className="mt-4 grid grid-cols-4 gap-2">
                {[
                  { href: SITE.socials.github, icon: Github, label: "GitHub" },
                  { href: SITE.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
                  { href: SITE.socials.twitter, icon: Twitter, label: "Twitter" },
                  { href: `mailto:${SITE.email}`, icon: Mail, label: "Email" },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                    className="aspect-square grid place-items-center rounded-xl border border-border hover:bg-secondary hover:text-primary transition-colors">
                    <s.icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-2 overflow-hidden">
              <iframe
                title="Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-74.05%2C40.69%2C-73.95%2C40.78&layer=mapnik"
                className="w-full h-56 rounded-xl border-0 grayscale contrast-125"
                loading="lazy"
              />
            </div>
          </motion.aside>
        </div>
      </section>
    </>
  );
}
