import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-card via-card to-secondary p-10 sm:p-16 text-center">
          <div className="absolute -top-20 -left-20 size-72 bg-primary/30 blur-3xl rounded-full" />
          <div className="absolute -bottom-20 -right-20 size-72 bg-primary-glow/30 blur-3xl rounded-full" />
          <div className="relative">
            <h2 className="font-display text-4xl sm:text-5xl font-bold">Have a project in mind?</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              I'm currently taking on new freelance and contract work. Let's build something users will love.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity glow-primary">
              Start a project <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
