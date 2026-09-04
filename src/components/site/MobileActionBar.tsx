import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { site, whatsappHref } from "@/lib/site";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-border bg-background/98 backdrop-blur lg:hidden">
      <a
        href={`tel:+91${site.phones[0]}`}
        data-analytics="phone-click"
        className="flex flex-col items-center gap-1 py-3 text-[11px] font-semibold uppercase tracking-wider text-ink-soft"
      >
        <Phone size={18} aria-hidden="true" />
        Call
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        data-analytics="whatsapp-click"
        className="flex flex-col items-center gap-1 border-x border-border py-3 text-[11px] font-semibold uppercase tracking-wider text-ink-soft"
      >
        <MessageCircle size={18} aria-hidden="true" />
        WhatsApp
      </a>
      <Link
        to="/sample-request"
        data-analytics="sample-click"
        className="flex flex-col items-center gap-1 bg-primary py-3 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground"
      >
        <FileText size={18} aria-hidden="true" />
        Sample
      </Link>
    </div>
  );
}
