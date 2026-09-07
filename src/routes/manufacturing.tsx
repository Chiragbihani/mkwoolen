import { createFileRoute } from "@tanstack/react-router";
import carding from "@/assets/carding.jpg";
import heroMill from "@/assets/hero-mill.jpg";
import yarnCones from "@/assets/yarn-cones.jpg";
import woolFibre from "@/assets/wool-fibre.jpg";
import cardMachine from "@/assets/Card.jpeg";
import loadingDispatch from "@/assets/loading-dispatch.jpeg";
import rolls from "@/assets/rolls.jpeg";
import spinning from "@/assets/spinning.jpg";
import { PageHero, Section, ClosingCta, Note } from "@/components/site/ui";

const TITLE = "Wool to Yarn Manufacturing Process | M. K. Woollen";
const DESCRIPTION =
  "How M. K. Woollen turns New Zealand wool into grey and undyed carpet yarn: sourcing, scouring, carding, spinning, winding, inspection, packing and dispatch.";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/manufacturing" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/manufacturing" }],
  }),
  component: Manufacturing,
});

type Step = { title: string; body: string; image?: string; alt?: string; placeholder?: string };

const steps: Step[] = [
  {
    title: "Raw Wool",
    body: "Wool is received at our Bikaner facility, sourced primarily from New Zealand and held for selection.",
    image: woolFibre,
    alt: "Raw undyed wool fibre received for processing",
  },
  {
    title: "Preparation",
    body: "Raw wool is graded and prepared for processing according to the yarn being produced.",
    image: rolls,
    alt: "Wool rolls stored and prepared for yarn manufacturing",
  },
  {
    title: "Scouring",
    body: "Wool is cleaned to remove grease and impurities before fibre processing begins.",
    image: cardMachine,
    alt: "Wool processing machinery used to prepare fibre",
  },
  {
    title: "Carding",
    body: "Fibres are opened and aligned into a uniform web, the stage that sets much of the yarn's final character.",
    image: carding,
    alt: "Carding machine forming a uniform web of wool fibre",
  },
  {
    title: "Spinning",
    body: "Prepared fibre is drawn and twisted into woollen yarn at the required count and ply.",
    image: heroMill,
    alt: "Spinning frames converting wool fibre into yarn",
  },
  {
    title: "Winding",
    body: "Spun yarn is wound into the form required by the customer.",
    image: spinning,
    alt: "Woollen yarn wound onto bobbins in the spinning department",
  },
  {
    title: "Inspection",
    body: "Yarn is checked at batch level before it is released for packing.",
    image: yarnCones,
    alt: "Finished woollen yarn prepared for inspection and packing",
  },
  {
    title: "Packing",
    body: "Finished yarn is packed according to order and transport requirements.",
    image: yarnCones,
    alt: "Packed grey woollen yarn stacked on pallets",
  },
  {
    title: "Dispatch",
    body: "Consignments are loaded and dispatched to carpet and textile manufacturers.",
    image: loadingDispatch,
    alt: "Woollen yarn consignment being loaded for dispatch",
  },
];

function Manufacturing() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing Process"
        title="From Wool to Yarn"
        intro="A step-by-step view of how raw wool becomes grey and undyed carpet yarn at our Bikaner facility."
      />

      <Section>
        <ol className="space-y-16 lg:space-y-24">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <img
                src={step.image ?? carding}
                alt={step.alt ?? step.title}
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div>
                <span className="eyebrow">Step {String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-3 font-display text-3xl text-foreground">{step.title}</h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <Note>
          Steps are indicative of the manufacturing process. The exact process may vary according to the yarn being produced and customer requirements.
        </Note>
      </Section>

      <ClosingCta
        title="Talk to Our Team"
        body="If you need yarn produced to a particular count, ply or packing format, our team can tell you what is feasible."
      />
    </>
  );
}
