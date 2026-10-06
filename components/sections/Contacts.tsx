import { Clock, MapPin, Phone } from "lucide-react";
import { mapLinkUrl, site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { Balloon, Cloud, Flower, KindergartenScene, Kid, Rainbow, Star, Sun, Wave } from "@/components/ui/Decor";

const rows = [
  { label: "Мекенжай", value: site.address, href: mapLinkUrl, external: true, icon: MapPin },
  { label: "Телефон", value: site.phone, href: site.phoneHref, icon: Phone },
  { label: "Жұмыс уақыты", value: site.hours, icon: Clock },
];

export function Contacts() {
  return (
    <section id="contacts" aria-labelledby="contacts-title" className="relative bg-cream py-16 sm:py-20">
      <Wave className="pointer-events-none absolute bottom-full left-0 text-cream" />

      <div className="container-x">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[40px] rounded-tr-[110px] bg-grape px-5 py-10 text-white shadow-soft sm:rounded-[64px] sm:rounded-tr-[160px] sm:px-10 sm:py-12 lg:px-12 lg:py-12">
            {/* Мягкие пятна и декор внутри блока */}
            <div className="pointer-events-none absolute -top-24 -left-24 -z-10 h-72 w-72 rounded-full bg-rose/40 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-16 -bottom-32 -z-10 h-80 w-80 rounded-full bg-sun/25 blur-3xl" aria-hidden="true" />
            <Sun className="animate-spin-slow pointer-events-none absolute -top-6 right-10 h-20 w-20 text-sun sm:right-24 sm:h-24 sm:w-24" />
            <Cloud className="animate-float-slow pointer-events-none absolute bottom-6 left-[42%] hidden w-24 text-white/15 lg:block" />
            <Star className="pointer-events-none absolute top-1/2 left-6 h-4 w-4 text-white/40" />

            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
              <div>
                <p className="inline-flex -rotate-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-extrabold">Байланыс</p>
                <h2
                  id="contacts-title"
                  className="mt-5 text-[2.5rem] leading-[1.02] font-black tracking-[-0.03em] text-balance sm:text-[2.75rem] lg:text-[2.75rem]"
                >
                  Бізбен байланысыңыз
                </h2>

                <address className="mt-8 not-italic">
                  <ul className="flex flex-col gap-2">
                    {rows.map(({ label, value, href, external, icon: Icon }) => {
                      const content = (
                        <>
                          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px_18px_14px_18px] bg-white/15 text-sun">
                            <Icon className="h-6 w-6" aria-hidden="true" />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-semibold text-white/70">{label}</span>
                            <span className="mt-0.5 block text-lg leading-snug font-bold">{value}</span>
                          </span>
                        </>
                      );
                      const rowClass = "flex items-center gap-4 rounded-3xl p-2.5 sm:p-3";
                      return (
                        <li key={label}>
                          {href ? (
                            <a
                              href={href}
                              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                              className={`${rowClass} transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none`}
                            >
                              {content}
                            </a>
                          ) : (
                            <div className={rowClass}>{content}</div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </address>

                <a
                  href={site.phoneHref}
                  className="group mt-8 inline-flex h-16 w-full items-center justify-center gap-3 rounded-full bg-sun px-10 text-xl sm:h-14 sm:px-8 sm:text-lg font-black text-ink shadow-[0_16px_34px_-16px_rgb(255_214_51/0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:ring-4 focus-visible:ring-white/60 focus-visible:outline-none sm:w-auto"
                >
                  <Phone className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" aria-hidden="true" />
                  Қоңырау шалу
                </a>
              </div>

              {/* Декоративная композиция: детский сад, радуга, облака, шарики */}
              <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden="true">
                <div className="shape-soft relative aspect-[5/4] overflow-hidden bg-white/10 ring-1 ring-white/15">
                  <Rainbow className="absolute top-[12%] left-[8%] w-[28%] opacity-90" />
                  <Cloud className="animate-float-slow absolute top-[10%] right-[10%] w-[24%] text-white/90" />
                  <Cloud className="animate-float absolute top-[30%] left-[36%] w-[14%] text-white/40" />
                  <KindergartenScene className="absolute inset-x-[8%] bottom-[4%] w-[84%]" />
                  <div className="absolute bottom-[7%] left-[30%] flex items-end gap-1">
                    <Kid className="h-10 w-7 text-sun sm:h-12 sm:w-8" />
                    <Kid className="h-8 w-5 text-mint-bright sm:h-9 sm:w-6" />
                  </div>
                  <Kid className="absolute right-[26%] bottom-[7%] h-10 w-7 text-white sm:h-11 sm:w-7" />
                </div>
                <Balloon className="animate-sway absolute -top-6 right-6 w-9 text-rose sm:w-11" />
                <Balloon className="animate-sway absolute -top-2 right-16 w-7 text-sun [animation-delay:1.2s] sm:right-20 sm:w-8" />
                <Flower className="animate-float absolute -bottom-3 -left-2 h-10 w-10 text-sun" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
