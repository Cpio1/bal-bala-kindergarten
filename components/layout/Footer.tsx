import type { ReactNode } from "react";
import { MapPin, Phone } from "lucide-react";
import { navItems } from "@/lib/content";
import { site } from "@/lib/site";
import { Kid, Star, Wave } from "@/components/ui/Decor";

export function Footer({ logo }: { logo: ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-white">
      <Wave className="pointer-events-none absolute bottom-full left-0 -scale-x-100 text-white" />

      <div className="container-x grid gap-10 pt-10 pb-12 sm:pt-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.3fr] lg:gap-12">
        <div>
          <a
            href="#home"
            className="inline-flex items-center gap-3 rounded-2xl focus-visible:ring-2 focus-visible:ring-grape/40 focus-visible:outline-none"
          >
            {logo}
            <span className="text-xl leading-tight font-black text-ink">{site.name}</span>
          </a>
          <p className="mt-4 max-w-xs text-lg leading-relaxed text-muted">{site.slogan}</p>
          <div className="mt-6 flex items-end gap-1.5" aria-hidden="true">
            <Kid className="h-9 w-6 text-grape/40" />
            <Kid className="h-7 w-5 text-rose/45" />
            <Kid className="h-8 w-5 text-mint-bright/55" />
            <Star className="mb-5 ml-1 h-4 w-4 text-sun" />
          </div>
        </div>

        <nav aria-label="Төменгі мәзір">
          <p className="font-black text-ink">Бөлімдер</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 md:grid-cols-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md font-semibold text-muted transition-colors hover:text-grape focus-visible:ring-2 focus-visible:ring-grape/40 focus-visible:outline-none"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-2 lg:col-span-1">
          <p className="font-black text-ink">Байланыс</p>
          <ul className="mt-4 flex flex-col gap-3 text-muted">
            <li>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-3 rounded-md font-extrabold text-ink transition-colors hover:text-grape focus-visible:ring-2 focus-visible:ring-grape/40 focus-visible:outline-none"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-grape-soft text-grape">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </span>
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-soft text-rose">
                <MapPin className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="pt-1.5">{site.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x">
        <p className="border-t border-grape/10 py-5 text-center text-sm text-muted">
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
