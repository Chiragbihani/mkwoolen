import { createFileRoute } from "@tanstack/react-router";
import yarnCones from "@/assets/yarn-cones.jpg";
import { PageHero, Section, SectionHeading, CtaLink, Note } from "@/components/site/ui";
import { products, specTable, whatsappHref } from "@/lib/site";

const TITLE = "Grey & Undyed Wool Carpet Yarn | M. K. Woolen Products";
const DESCRIPTION =
  "Grey and undyed woolen carpet yarn manufactured in Bikaner for hand-knotted, hand-tufted and machine-made carpet production. Request current specifications.";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/products" },
      { property: "og:type", content: "product" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Grey & Undyed Woolen Yarn"
        intro="Our core offering is grey/undyed woolen yarn manufactured for carpet and textile applications, produced primarily from New Zealand wool."
      />

      <Section>
        <div className="grid gap-8 sm:grid-cols-2">
          {products.map((p) => (
            <article key={p.title} className="border-t-2 border-ink pt-6">
              <h2 className="font-display text-2xl text-foreground">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Available specifications: [TO BE UPDATED]
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Technical Data" title="Yarn Specification" />
            <div className="mt-8 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <caption className="sr-only">
                  M. K. Woolen grey and undyed woolen yarn specifications
                </caption>
                <thead>
                  <tr className="border-b-2 border-ink">
                    <th scope="col" className="py-3 pr-6 eyebrow">
                      Specification
                    </th>
                    <th scope="col" className="py-3 eyebrow">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {specTable.map(([k, v]) => (
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
            <Note>
              Product specifications can vary according to customer requirements. Please contact us
              for current specifications and availability.
            </Note>
          </div>
          <div>
            <img
              src={yarnCones}
              alt="Grey undyed woolen carpet yarn packed and ready for dispatch"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full object-cover"
            />
            <div className="mt-8 flex flex-col gap-3">
              <CtaLink to="/sample-request" analytics="product-enquiry">
                Enquire About This Yarn
              </CtaLink>
              <CtaLink href={whatsappHref} variant="outline" analytics="whatsapp-click">
                Discuss on WhatsApp
              </CtaLink>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading
          eyebrow="International Enquiries"
          title="Supplying Overseas Buyers"
          intro="We welcome enquiries from international carpet manufacturers, exporters, sourcing companies and distributors. Share your specification and delivery market and our team will respond with what we can supply."
          onDark
        />
        <div className="mt-9">
          <CtaLink to="/sample-request" variant="onDark">
            Request a Sample
          </CtaLink>
        </div>
      </Section>
    </>
  );
}
