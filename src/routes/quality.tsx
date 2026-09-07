import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, ClosingCta, Note } from "@/components/site/ui";

const TITLE = "Quality & Manufacturing Capabilities | M. K. Woollen";
const DESCRIPTION =
  "Raw material selection, controlled manufacturing and batch-level quality checks behind M. K. Woollen's grey and undyed wool carpet yarn from Bikaner, India.";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/quality" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/quality" }],
  }),
  component: Quality,
});

const tests = [
  "Raw-material selection",
  "Fibre preparation",
  "Washing / scouring",
  "Carding consistency",
  "Spinning consistency",
  "Yarn count and ply",
  "Batch-level yarn inspection",
  "Packaging and handling",
];

const infrastructure = [
  ["Machinery", "[MACHINERY DETAILS]"],
  ["Spindles", "[NUMBER OF SPINDLES]"],
  ["Production Capacity", "[ANNUAL PRODUCTION CAPACITY]"],
  ["Factory Area", "[FACTORY AREA]"],
  ["Warehouse Capacity", "[WAREHOUSE CAPACITY]"],
];

function Quality() {
  return (
    <>
      <PageHero
        eyebrow="Quality & Capabilities"
        title="Quality That Starts With the Fibre"
        intro="For professional carpet manufacturers, yarn consistency matters. Our focus is careful raw-material selection and controlled manufacturing."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Raw Material" title="Selected Wool Sources" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              We work with wool from New Zealand, Turkey greasy, Spain greasy, European greasy,
              Jordan, Jodi, Eader, Spain Matrex, Saudi, Seredian, Egypt greasy, Tunisia, Algeria
              Backwash and Algeria Tanrey. The suitable source or blend is selected against each
              customer's yarn requirement.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Manufacturing" title="A Controlled Process" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              From fibre preparation through carding, spinning and winding, our process is organised
              around producing yarn that behaves dependably from batch to batch.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeading
          eyebrow="Quality Checks"
          title="Checks Across the Production Run"
          intro="Quality is checked from raw-material selection through processing, inspection and final handling."
        />
        <ul className="mt-10 grid gap-px border-t border-border sm:grid-cols-2">
          {tests.map((t) => (
            <li key={t} className="border-b border-border py-5 text-sm font-medium text-foreground">
              {t}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading eyebrow="Infrastructure" title="Facility & Capacity" />
        <div className="mt-10 overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">M. K. Woollen infrastructure details</caption>
            <thead>
              <tr className="border-b-2 border-ink">
                <th scope="col" className="py-3 pr-6 eyebrow">
                  Item
                </th>
                <th scope="col" className="py-3 eyebrow">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {infrastructure.map(([k, v]) => (
                <tr key={k} className="border-b border-border">
                  <th scope="row" className="py-4 pr-6 font-semibold text-foreground">
                    {k}
                  </th>
                  <td className="py-4 text-muted-foreground">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Note>Only confirmed figures will be published here.</Note>
      </Section>

      <ClosingCta
        title="Need Specific Technical Data?"
        body="Tell us the specification you are working to and our team will confirm what we can supply and what testing data is available."
      />
    </>
  );
}
