import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  tone = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "cream" | "dark" | "muted";
  id?: string;
}) {
  const tones = {
    default: "bg-background text-foreground",
    cream: "bg-secondary text-foreground",
    muted: "bg-muted text-foreground",
    dark: "bg-ink text-cream",
  } as const;
  return (
    <section id={id} className={`${tones[tone]} py-20 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  onDark = false,
  as: As = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  onDark?: boolean;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`eyebrow ${onDark ? "text-cream/50" : ""}`}>{eyebrow}</p>
      )}
      <As
        className={`mt-4 text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem] ${
          onDark ? "text-cream" : "text-foreground"
        }`}
      >
        {title}
      </As>
      {intro && (
        <p
          className={`mt-5 text-base leading-relaxed ${
            onDark ? "text-cream/70" : "text-muted-foreground"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

export function CtaLink({
  to,
  href,
  children,
  variant = "solid",
  analytics,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "onDark" | "ghost";
  analytics?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-sm px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5";
  const variants = {
    solid: "bg-primary text-primary-foreground hover:bg-accent",
    outline: "border border-input text-foreground hover:border-accent hover:text-accent",
    onDark: "bg-cream text-ink hover:bg-beige",
    ghost: "border border-cream/30 text-cream hover:bg-cream/10",
  } as const;
  const cls = `${base} ${variants[variant]}`;

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        data-analytics={analytics}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={cls}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} data-analytics={analytics} className={cls}>
      {children}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="fibre-texture bg-ink py-20 text-cream lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal max-w-3xl">
          <p className="eyebrow text-cream/50">{eyebrow}</p>
          <h1 className="mt-4 text-4xl leading-[1.1] sm:text-5xl lg:text-[3.25rem]">{title}</h1>
          {intro && <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/70">{intro}</p>}
        </div>
      </div>
    </section>
  );
}

export function ImagePlaceholder({ label, ratio = "aspect-[4/3]" }: { label: string; ratio?: string }) {
  return (
    <div
      className={`fibre-texture flex ${ratio} items-center justify-center border border-dashed border-input bg-muted p-6 text-center`}
    >
      <span className="eyebrow">{label}</span>
    </div>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <p className="mt-8 border-l-2 border-accent bg-secondary px-5 py-4 text-sm leading-relaxed text-muted-foreground">
      {children}
    </p>
  );
}

export function ClosingCta({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <section className="fibre-texture bg-ink py-20 text-cream lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">{title}</h2>
          <p className="mt-5 text-base leading-relaxed text-cream/70">{body}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <CtaLink to="/sample-request" variant="onDark" analytics="sample-click">
              Request a Sample
            </CtaLink>
            <CtaLink to="/contact" variant="ghost">
              Discuss Your Requirement
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
