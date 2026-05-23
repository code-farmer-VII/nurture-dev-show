import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { FeaturedProjects } from "@/sections/FeaturedProjects";
import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
import { TechMarquee } from "@/sections/TechMarquee";
import { CTA } from "@/sections/CTA";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Alex Carter — Full Stack Developer Portfolio" },
      { name: "description", content: "Full Stack · MERN · Mobile · UI/UX. Crafting fast, accessible, scalable products." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <Skills />
      <FeaturedProjects />
      <Experience />
      <Testimonials />
      <CTA />
    </>
  );
}
