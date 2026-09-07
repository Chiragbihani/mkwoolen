import { createFileRoute } from "@tanstack/react-router";
import woolFibre from "@/assets/wool-fibre.jpg";
import { PageHero, Section, SectionHeading, ClosingCta, Note } from "@/components/site/ui";

const TITLE = "About M. K. Woollen | Wool Yarn Manufacturer in Bikaner";
const DESCRIPTION =
  "M. K. Woollen is a woollen yarn manufacturer in Bikaner, Rajasthan, producing grey and undyed wool yarn for India's carpet and textile industry.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const customers = [
  "Carpet manufacturers",
  "Carpet exporters",
  "Hand-knotted carpet businesses",
  "Hand-tufted carpet manufacturers",
  "Machine-made carpet manufacturers",
  "Textile businesses",
  "International sourcing partners",
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Woollen Yarn Manufacturer from Bikaner"
        intro="M. K. Woollen manufactures grey and undyed woollen yarn for carpet and textile businesses, working primarily with wool sourced from New Zealand."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Our Story" title="Wool Processing and Yarn Manufacturing" />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                M. K. Woollen was established in Bikaner, Rajasthan, with a focus on wool processing
                and yarn manufacturing for the carpet and textile industry.
              </p>
              <p>
                Our work is centred on a single, focused output: dependable grey and undyed woollen
                yarn that carpet manufacturers can dye and process according to their own
                requirements.
              </p>
            </div>
            <Note>[INSERT COMPANY HISTORY / FOUNDING YEAR / FOUNDER STORY]</Note>
          </div>
          <img
            src={woolFibre}
            alt="Undyed wool fibre prepared for spinning into carpet yarn"
            width={1200}
            height={900}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeading
          eyebrow="Our Location"
          title="Manufacturing from Bikaner, Rajasthan"
          intro="Bikaner is a long-standing centre of wool trading and textile activity in Rajasthan. Our facility is located in the Karni Agro Industrial Area, with access to raw material supply channels and road connectivity to India's major carpet manufacturing clusters."
        />
      </Section>

      <Section>
        <SectionHeading eyebrow="Our Philosophy" title="Three Principles" />
        <div className="mt-12 grid gap-px border-t border-border sm:grid-cols-3">
          {[
            {
              title: "Quality",
              body: "Careful raw-material selection and controlled processing at every stage.",
            },
            {
              title: "Consistency",
              body: "Yarn that behaves dependably from batch to batch for downstream production.",
            },
            {
              title: "Long-Term Relationships",
              body: "We work with buyers who value reliable, repeatable supply over one-off orders.",
            },
          ].map((p) => (
            <div key={p.title} className="border-b border-border py-8 pr-8">
              <h3 className="font-display text-xl text-foreground">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Our Customers"
          title="Who We Supply"
          intro="We work with businesses across the carpet and textile manufacturing chain."
        />
        <ul className="mt-10 flex flex-wrap gap-3">
          {customers.map((c) => (
            <li
              key={c}
              className="border border-input px-4 py-2.5 text-sm font-medium text-foreground"
            >
              {c}
            </li>
          ))}
        </ul>
      </Section>

      <ClosingCta
        title="Work With a Focused Yarn Manufacturer"
        body="Share your application and specification requirements, and our team will respond with what we can supply."
      />
    </>
  );
}
