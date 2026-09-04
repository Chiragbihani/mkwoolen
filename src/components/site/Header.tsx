import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur border-b border-border"
          : "bg-background border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <Link to="/" className="group flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-display text-xl tracking-tight text-foreground">M. K. Woolen</span>
          <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Woolen Yarn Manufacturer
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-accent"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/sample-request"
            className="inline-flex items-center rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
          >
            Request Sample
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border text-foreground xl:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background xl:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3.5 text-base font-medium text-ink-soft"
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/sample-request"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Request Sample
            </Link>
            <a
              href={`tel:+91${site.phones[0]}`}
              className="mt-2 mb-3 inline-flex items-center justify-center rounded-sm border border-input px-5 py-3 text-sm font-semibold text-foreground"
            >
              Call +91 {site.phones[0]}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
