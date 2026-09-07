import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { CtaLink, PageHero, Section, SectionHeading } from "@/components/site/ui";
import { mailHref, site, telHref, whatsappHref } from "@/lib/site";

const TITLE = "Contact M. K. Woollen | Woollen Yarn Manufacturer";
const DESCRIPTION =
  "Contact M. K. Woollen in Bikaner, Rajasthan for grey and undyed woollen yarn requirements, samples and carpet manufacturing enquiries.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's discuss your yarn requirement"
        intro="Speak with M. K. Woollen about carpet yarn, sample requests, specifications and supply requirements."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <SectionHeading
              eyebrow="Reach Us Directly"
              title="A straightforward conversation"
              intro="Call, email or send a WhatsApp message and tell us what you are manufacturing."
            />
            <div className="mt-10 space-y-6">
              <ContactLink
                icon={<Phone size={19} />}
                label="Call"
                value={`+91 ${site.phones[0]}`}
                href={telHref}
              />
              <ContactLink
                icon={<Mail size={19} />}
                label="Email"
                value={site.email}
                href={mailHref}
              />
              <ContactLink
                icon={<MapPin size={19} />}
                label="Visit or write to us"
                value={site.address}
              />
            </div>
            <CtaLink href={whatsappHref} variant="solid">
              Message on WhatsApp
            </CtaLink>
          </div>

          <div className="border border-border bg-secondary p-6 sm:p-9">
            <p className="eyebrow">Send an enquiry</p>
            <h2 className="mt-3 font-display text-3xl text-foreground">Tell us what you need</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              For a sample request, include your application, approximate quantity and delivery
              location.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Carpet yarn enquiries",
                "Sample requests",
                "Custom specifications",
                "Supply and dispatch questions",
              ].map((item) => (
                <div
                  key={item}
                  className="border-t border-border py-3 text-sm font-medium text-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink to="/sample-request">Request a Sample</CtaLink>
              <CtaLink href={mailHref} variant="outline">
                Email Us
              </CtaLink>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeading
          eyebrow="Our Location"
          title="Manufacturing from Bikaner, Rajasthan"
          intro="M. K. Woollen is based in the Karni Agro Industrial Area, Bikaner, with road access to India's major carpet manufacturing clusters."
        />
        <div className="mt-10 border border-border bg-background p-6 sm:p-8">
          <p className="text-sm font-semibold text-foreground">M. K. Woollen</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            {site.address}
          </p>
          <p className="mt-5 text-sm text-muted-foreground">
            For visiting arrangements, please call ahead.
          </p>
        </div>
      </Section>
    </>
  );
}

function ContactLink({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-secondary text-accent">
        {icon}
      </span>
      <span>
        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {label}
        </span>
        <span className="mt-1 block max-w-sm text-sm leading-relaxed text-foreground">{value}</span>
      </span>
    </>
  );
  return href ? (
    <a href={href} className="flex items-start gap-4 hover:text-accent">
      {content}
    </a>
  ) : (
    <div className="flex items-start gap-4">{content}</div>
  );
}
