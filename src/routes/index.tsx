import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroMill from "@/assets/hero-mill.jpg";
import woolFibre from "@/assets/wool-fibre.jpg";
import yarnCones from "@/assets/yarn-cones.jpg";
import carding from "@/assets/carding.jpg";
import {
  Section,
  SectionHeading,
  CtaLink,
  ImagePlaceholder,
  ClosingCta,
  Note,
} from "@/components/site/ui";
import { processSteps, products, stats, whatsappHref } from "@/lib/site";

const TITLE = "Woolen Yarn Manufacturer in India | M. K. Woolen";
const DESCRIPTION =
  "M. K. Woolen is a Bikaner-based woolen yarn manufacturer supplying grey and undyed wool yarn for carpet manufacturers, exporters and textile businesses across India.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const trust = [
  { title: "New Zealand Wool", body: "Quality wool sourced primarily from New Zealand." },
  {
    title: "Grey / Undyed Yarn",
    body: "Yarn supplied in an undyed form for downstream processing and dyeing.",
  },
  { title: "B2B Supply", body: "Built for carpet manufacturers, exporters and industrial buyers." },
  {
    title: "Pan-India Reach",
    body: "Supplying customers in major carpet and textile manufacturing hubs.",
  },
];

const why = [
  {
    title: "Consistent Manufacturing",
    body: "A focus on producing yarn with dependable characteristics from batch to batch.",
  },
  { title: "New Zealand Wool", body: "We primarily work with wool sourced from New Zealand." },
  {
    title: "Grey & Undyed Yarn",
    body: "Our yarn is supplied without final dyeing, allowing customers flexibility for their own downstream processes.",
  },
  {
    title: "B2B Focus",
    body: "We understand the requirements of carpet manufacturers, exporters and industrial buyers.",
  },
  {
    title: "Flexible Requirements",
    body: "Where technically feasible, production can be aligned with customer-specific yarn requirements.",
  },
  {
    title: "Reliable Supply",
    body: "Built around long-term relationships and dependable order fulfilment.",
  },
];

const qualityChecklist = [
  "Raw material selection",
  "Fibre preparation",
  "Spinning consistency",
  "Yarn appearance",
  "Batch-level quality checks",
  "Packaging and handling",
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[88vh] items-end overflow-hidden bg-ink">
        <img
          src={heroMill}
          alt="Spinning frames in a woolen yarn mill with cream-coloured wool yarn on bobbins"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/25"
        />
        <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-24">
          <div className="reveal max-w-3xl">
            <p className="eyebrow text-cream/60">
              Bikaner, Rajasthan, India — B2B Wool Yarn Manufacturing
            </p>
            <h1 className="mt-5 text-4xl leading-[1.08] text-cream sm:text-5xl lg:text-[3.75rem]">
              Premium Woolen Carpet Yarn Manufacturer in Bikaner, India
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/75 lg:text-lg">
              M. K. Woolen manufactures grey and undyed woolen yarn for carpet manufacturers,
              exporters and textile businesses across India, with a primary focus on quality wool
              sourced from New Zealand.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <CtaLink to="/sample-request" variant="onDark" analytics="sample-click">
                Request a Yarn Sample
              </CtaLink>
              <CtaLink to="/products" variant="ghost">
                Explore Our Yarn
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-px px-5 py-0 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {trust.map((item) => (
            <div key={item.title} className="border-border py-8 sm:border-r sm:last:border-r-0 sm:pr-8 lg:py-10">
              <h2 className="font-display text-lg text-foreground">{item.title}</h2>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="About M. K. Woolen"
              title="Built Around Wool. Focused on Consistency."
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Based in Bikaner, Rajasthan, M. K. Woolen is a woolen yarn manufacturing company
                focused on supplying reliable grey and undyed yarn to India's carpet manufacturing
                industry.
              </p>
              <p>
                Our primary raw material is New Zealand wool, selected and processed to produce yarn
                suited to the requirements of professional carpet manufacturers and textile
                businesses.
              </p>
              <p>
                From sourcing and processing to spinning and final packing, our focus is on
                delivering consistent yarn quality and dependable B2B supply.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-transform hover:translate-x-1"
            >
              Learn More About M. K. Woolen <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <img
            src={woolFibre}
            alt="Close-up of undyed natural wool fibre used to manufacture woolen carpet yarn"
            width={1200}
            height={900}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </Section>

      {/* WHY */}
      <Section tone="cream">
        <SectionHeading
          eyebrow="Why M. K. Woolen"
          title="Why Carpet Manufacturers Choose a Reliable Yarn Partner"
        />
        <div className="mt-14 grid gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {why.map((item, i) => (
            <div key={item.title} className="border-b border-border bg-secondary py-8 pr-8 lg:py-10">
              <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-display text-xl text-foreground">{item.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* PRODUCTS */}
      <Section>
        <SectionHeading
          eyebrow="Products"
          title="Grey & Undyed Woolen Yarn"
          intro="Our core offering is grey/undyed woolen yarn manufactured for carpet and textile applications."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article key={p.title} className="flex flex-col border-t-2 border-ink pt-6">
              <h3 className="font-display text-xl text-foreground">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Available specifications: [TO BE UPDATED]
              </p>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <CtaLink to="/products" variant="outline">
            View Product Details
          </CtaLink>
        </div>
      </Section>

      {/* HUBS */}
      <Section tone="dark">
        <SectionHeading
          eyebrow="Markets We Supply"
          title="Serving India's Major Carpet Manufacturing Hubs"
          onDark
        />
        <div className="mt-14 grid gap-px lg:grid-cols-2">
          {[
            {
              city: "Bhadohi",
              sub: "For Hand-Knotted & Hand-Tufted Carpet Manufacturing",
              body: "We supply woolen yarn to manufacturers and businesses in Bhadohi, one of India's major carpet manufacturing centres. Our grey/undyed yarn provides a flexible base for downstream dyeing and carpet production.",
              cta: "For Bhadohi Buyers",
            },
            {
              city: "Panipat",
              sub: "For Machine-Made & Industrial Carpet Manufacturing",
              body: "We supply yarn to businesses in Panipat and other industrial textile markets, supporting manufacturers that require dependable yarn supply for production.",
              cta: "For Panipat Buyers",
            },
          ].map((hub) => (
            <div key={hub.city} className="border border-cream/15 p-9 lg:p-12">
              <h3 className="font-display text-3xl text-cream">{hub.city}</h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-cream/50">
                {hub.sub}
              </p>
              <p className="mt-6 text-sm leading-relaxed text-cream/70">{hub.body}</p>
              <Link
                to="/sample-request"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cream transition-transform hover:translate-x-1"
              >
                {hub.cta} <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Manufacturing" title="From Wool to Yarn" />
            <img
              src={carding}
              alt="Carding machine aligning wool fibre into a uniform web before spinning"
              width={1200}
              height={900}
              loading="lazy"
              className="mt-8 w-full object-cover"
            />
            <div className="mt-8">
              <CtaLink to="/manufacturing" variant="outline">
                View Manufacturing Process
              </CtaLink>
            </div>
          </div>
          <ol className="border-t border-border">
            {processSteps.map((step, i) => (
              <li key={step.title} className="flex gap-6 border-b border-border py-6">
                <span className="eyebrow pt-1">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-lg text-foreground">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {step.body.replace(" [CONFIRM PROCESS]", "")}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* QUALITY */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Quality" title="Quality That Starts With the Fibre" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              For professional carpet manufacturers, yarn consistency matters. M. K. Woolen focuses
              on careful raw-material selection and controlled manufacturing to deliver dependable
              grey/undyed woolen yarn for downstream carpet production.
            </p>
            <div className="mt-10 border border-border p-6">
              <h3 className="eyebrow">Quality Certifications</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                [ADD CERTIFICATIONS HERE, IF APPLICABLE]
              </p>
            </div>
          </div>
          <ul className="grid gap-px self-start border-t border-border">
            {qualityChecklist.map((item) => (
              <li
                key={item}
                className="border-b border-border py-5 text-base font-medium text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* FACTORY */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Infrastructure"
          title="Inside M. K. Woolen"
          intro="Photography from our Bikaner facility. Placeholders below are reserved for actual company photographs."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <img
            src={yarnCones}
            alt="Pallets of grey undyed woolen carpet yarn packed in a warehouse"
            width={1200}
            height={900}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
          {[
            "Factory exterior",
            "Raw wool storage",
            "Carding",
            "Spinning",
            "Yarn hanks",
            "Packing",
            "Warehouse",
            "Loading / dispatch",
          ].map((label) => (
            <ImagePlaceholder key={label} label={`Photo: ${label}`} />
          ))}
        </div>
        <div className="mt-14 grid gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-b border-border py-8">
              <p className="font-display text-3xl text-foreground">{s.value}</p>
              <p className="mt-2 eyebrow">{s.label}</p>
            </div>
          ))}
        </div>
        <Note>
          All figures above are placeholders. They will be published only after confirmation from M.
          K. Woolen.
        </Note>
      </Section>

      {/* SAMPLE CTA */}
      <Section tone="cream">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading
              eyebrow="B2B Enquiry"
              title="Looking for a Reliable Wool Yarn Supplier?"
              intro="Tell us your yarn requirement and our team will get back to you with the relevant product and specification details."
            />
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <CtaLink to="/sample-request" analytics="sample-click">
              Request a Sample
            </CtaLink>
            <CtaLink href={whatsappHref} variant="outline" analytics="whatsapp-click">
              Send an Enquiry
            </CtaLink>
          </div>
        </div>
      </Section>

      <ClosingCta
        title="Let's Talk About Your Yarn Requirement"
        body="Whether you manufacture hand-knotted carpets in Bhadohi, machine-made carpets in Panipat, or operate in another textile market, talk to our team about your wool yarn requirements."
      />
    </>
  );
}
