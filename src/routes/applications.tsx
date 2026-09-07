import { createFileRoute } from "@tanstack/react-router";
import yarnCones from "@/assets/yarn-cones.jpg";
import woolFibre from "@/assets/wool-fibre.jpg";
import { PageHero, Section, ImagePlaceholder, ClosingCta } from "@/components/site/ui";

const TITLE = "Carpet Yarn Applications & Industries | M. K. Woollen";
const DESCRIPTION =
  "Woollen yarn for hand-knotted, hand-tufted and machine-made carpet manufacturing, supplied to carpet hubs including Bhadohi, Panipat, Agra, Ludhiana and Srinagar.";

export const Route = createFileRoute("/applications")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/applications" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/applications" }],
  }),
  component: Applications,
});

const applications = [
  {
    title: "Hand-Knotted Carpets",
    body: "For manufacturers and exporters producing hand-knotted rugs and carpets, where yarn is dyed and prepared downstream before knotting.",
    image: woolFibre,
    alt: "Undyed wool yarn suited to hand-knotted carpet production",
  },
  {
    title: "Hand-Tufted Carpets",
    body: "For businesses producing hand-tufted carpets and rugs that require dependable, repeatable yarn supply.",
    placeholder: "Photo: Hand-tufted carpet production",
  },
  {
    title: "Machine-Made Carpets",
    body: "For industrial manufacturers producing machine-made carpets, subject to the required specifications.",
    image: yarnCones,
    alt: "Packed grey wool yarn supplied for machine-made carpet production",
  },
  {
    title: "Custom Carpet Applications",
    body: "For other carpet and textile requirements, subject to specification and technical feasibility.",
    placeholder: "Photo: Custom application",
  },
];

const hubs = ["Bhadohi", "Panipat", "Agra", "Ludhiana", "Delhi", "Srinagar"];

function Applications() {
  return (
    <>
      <PageHero
        eyebrow="Applications / Industries"
        title="Yarn Made for Carpet Manufacturing"
        intro="Our grey and undyed woollen yarn is supplied into traditional hand-made carpet production as well as industrial, machine-made manufacturing."
      />

      <Section>
        <div className="space-y-16 lg:space-y-24">
          {applications.map((a, i) => (
            <article
              key={a.title}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {a.image ? (
                <img
                  src={a.image}
                  alt={a.alt ?? a.title}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              ) : (
                <ImagePlaceholder label={a.placeholder ?? a.title} />
              )}
              <div>
                <h2 className="font-display text-3xl text-foreground">{a.title}</h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                  {a.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="cream">
        <h2 className="font-display text-3xl text-foreground">Carpet Manufacturing Clusters</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          We supply carpet and textile businesses across India's major manufacturing clusters.
        </p>
        <ul className="mt-9 flex flex-wrap gap-3">
          {hubs.map((h) => (
            <li key={h} className="border border-input px-5 py-2.5 text-sm font-medium text-foreground">
              {h}
            </li>
          ))}
        </ul>
      </Section>

      <ClosingCta
        title="Discuss Your Requirement"
        body="Tell us the carpet application you manufacture for and our team will advise on suitable yarn and available specifications."
      />
    </>
  );
}
