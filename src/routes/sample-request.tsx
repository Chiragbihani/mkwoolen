import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CtaLink, PageHero, Section, SectionHeading } from "@/components/site/ui";
import { site } from "@/lib/site";

const TITLE = "Request a Yarn Sample | M. K. Woollen";
const DESCRIPTION =
  "Request a grey or undyed woollen yarn sample from M. K. Woollen for your carpet or textile manufacturing requirement.";

export const Route = createFileRoute("/sample-request")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/sample-request" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/sample-request" }],
  }),
  component: SampleRequest,
});

function SampleRequest() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Sample Request"
        title="Start with the right yarn for your application"
        intro="Share a few details about your carpet or textile requirement. Our team will review the request and get back to you about a suitable sample."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-24">
          <div>
            <SectionHeading
              eyebrow="What to Share"
              title="A useful sample starts with your specification"
              intro="The more context you can provide, the better we can match the yarn to your production process."
            />
            <dl className="mt-10 border-t border-border">
              {[
                ["Application", "Hand-knotted, hand-tufted or machine-made carpet"],
                ["Yarn details", "Count, ply, twist, colour state or blend, if known"],
                ["Volume", "Approximate monthly or order quantity"],
                ["Delivery", "City and country for sample dispatch"],
              ].map(([term, detail]) => (
                <div
                  key={term}
                  className="grid gap-1 border-b border-border py-4 sm:grid-cols-[7rem_1fr] sm:gap-4"
                >
                  <dt className="text-sm font-semibold text-foreground">{term}</dt>
                  <dd className="text-sm leading-relaxed text-muted-foreground">{detail}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              Prefer a direct conversation? Call {site.phones[0]} or email {site.email}.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="border border-border bg-secondary p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Company" name="company" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Application" name="application" required />
              <Field label="Location" name="location" required />
              <Field
                label="Requirement details"
                name="details"
                as="textarea"
                className="sm:col-span-2"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground transition-colors hover:bg-accent"
            >
              Request Sample
            </button>
            {submitted && (
              <p
                role="status"
                className="mt-4 border-l-2 border-accent bg-background px-4 py-3 text-sm leading-relaxed text-muted-foreground"
              >
                Thank you. Your request is ready for our team. Please also email {site.email} so we
                can respond directly.
              </p>
            )}
          </form>
        </div>
      </Section>

      <Section tone="cream">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow">Need to discuss first?</p>
            <h2 className="mt-3 font-display text-3xl text-foreground">
              Talk through your requirement
            </h2>
          </div>
          <CtaLink to="/contact" variant="outline">
            Contact Our Team
          </CtaLink>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  as = "input",
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea";
  className?: string;
}) {
  const classes =
    "mt-2 w-full border border-input bg-background px-3.5 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:ring-1 focus:ring-accent";
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-semibold text-foreground">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </span>
      {as === "textarea" ? (
        <textarea name={name} rows={5} className={classes} />
      ) : (
        <input name={name} type={type} required={required} className={classes} />
      )}
    </label>
  );
}
