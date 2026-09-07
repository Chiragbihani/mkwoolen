import { Link } from "@tanstack/react-router";
import { nav, site, whatsappHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8 lg:py-20">
        <div className="lg:col-span-2 lg:pr-12">
          <p className="font-display text-2xl">M. K. Woollen</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
            Woollen yarn manufacturing from Bikaner, Rajasthan, India. Grey and undyed wool yarn for
            carpet manufacturers, exporters and textile businesses.
          </p>
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/45">
            {site.tagline}
          </p>
        </div>

        <div>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/45">
            Navigate
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-cream/80 transition-colors hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/sample-request" className="text-cream/80 transition-colors hover:text-cream">
                Request Sample
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/45">
            Contact
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-cream/80">
            <li>
              {site.phones.map((p, i) => (
                <span key={p}>
                  {i > 0 && <span className="text-cream/40"> / </span>}
                  <a href={`tel:+91${p}`} className="hover:text-cream">
                    +91 {p}
                  </a>
                </span>
              ))}
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-cream">
                {site.email}
              </a>
            </li>
            <li>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-cream">
                WhatsApp Enquiry
              </a>
            </li>
            <li className="pt-1 leading-relaxed text-cream/60">{site.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/12">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 M. K. Woollen. All Rights Reserved.</p>
          <p>Bikaner, Rajasthan, India</p>
        </div>
      </div>
    </footer>
  );
}
