import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X, Code2 } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300",
      scrolled ? "py-3" : "py-5"
    )}>
      <div className={cn(
        "mx-auto max-w-6xl px-4 sm:px-6 transition-all",
        scrolled && "px-2 sm:px-3"
      )}>
        <nav className={cn(
          "flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all",
          scrolled ? "glass shadow-lg" : "bg-transparent"
        )}>
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid place-items-center size-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
              <Code2 className="size-4" />
            </span>
            <span>alex<span className="text-primary">.dev</span></span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {LINKS.map(l => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                  activeProps={{ className: "!text-foreground" }}
                  activeOptions={{ exact: true }}
                >
                  {l.label}
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={toggle}
              className="size-9 grid place-items-center rounded-lg border border-border hover:bg-secondary transition-colors"
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <Link to="/contact" className="hidden sm:inline-flex h-9 items-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
              Hire me
            </Link>
            <button
              aria-label="Menu"
              onClick={() => setOpen(o => !o)}
              className="md:hidden size-9 grid place-items-center rounded-lg border border-border"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-2 animate-fade-in">
            {LINKS.map(l => (
              <Link key={l.to} to={l.to} className="block px-4 py-3 rounded-lg hover:bg-secondary text-sm font-medium">
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
