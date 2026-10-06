import { accentClasses, advantages } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Cloud, Flower, Kid, Star, Wave } from "@/components/ui/Decor";
import { cn } from "@/lib/cn";

/**
 * Bento-композиция: две широкие «главные» карточки (первая и последняя) и четыре компактные.
 * desktop: [ A A B C ] / [ D E F F ]; телефон и планшет: A — на всю ширину, затем пары, F — на всю ширину.
 * У компактных карточек разные скругления углов — живо, но в едином стиле.
 */
const shapes = [
  "bg-grape-soft/70 rounded-[40px] rounded-br-[110px]",
  "bg-white rounded-[32px] rounded-tr-[80px]",
  "bg-white rounded-[32px] rounded-bl-[80px]",
  "bg-white rounded-[32px] rounded-tl-[80px]",
  "bg-white rounded-[32px] rounded-br-[80px]",
  "bg-mint-soft/70 rounded-[40px] rounded-tl-[110px]",
];

export function Advantages() {
  return (
    <section id="advantages" aria-labelledby="advantages-title" className="relative bg-mist py-24 sm:py-32">
      <Wave className="pointer-events-none absolute bottom-full left-0 text-mist" />
      <Cloud className="animate-float-slow pointer-events-none absolute top-10 right-[6%] hidden w-28 text-white md:block" />
      <Star className="pointer-events-none absolute top-24 left-[8%] h-5 w-5 text-sun" />

      <div className="container-x">
        <Reveal>
          <SectionHeading id="advantages-title" align="center" eyebrow="Артықшылықтар" tone="grape" title="Неліктен bal-bala1?" />
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-5 lg:grid-cols-4">
          {advantages.map(({ title, text, icon: Icon, accent }, i) => {
            const featured = i === 0 || i === advantages.length - 1;

            return (
              <Reveal as="li" key={title} delay={(i % 3) * 90} className={featured ? "col-span-2" : "col-span-1"}>
                <div
                  className={cn(
                    "group relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover",
                    shapes[i],
                    !featured && "shadow-card ring-1 ring-ink/5",
                    featured ? "p-7 sm:p-10" : "p-5 sm:p-7",
                  )}
                >
                  {/* Декор в широких карточках */}
                  {i === 0 && (
                    <div className="pointer-events-none absolute right-5 bottom-4 flex items-end gap-1.5 opacity-90 sm:right-10 sm:bottom-6" aria-hidden="true">
                      <Kid className="h-12 w-8 text-grape/35 sm:h-16 sm:w-11" />
                      <Kid className="h-9 w-6 text-rose/40 sm:h-12 sm:w-8" />
                      <Kid className="h-11 w-7 text-mint-bright/50 sm:h-14 sm:w-10" />
                    </div>
                  )}
                  {featured && i !== 0 && (
                    <>
                      <Cloud className="pointer-events-none absolute -right-4 bottom-4 w-28 text-white sm:w-36" />
                      <Flower className="pointer-events-none absolute top-6 right-8 h-8 w-8 text-rose/60" />
                    </>
                  )}

                  <span
                    className={cn(
                      "relative flex items-center justify-center rounded-[16px_22px_16px_22px] transition-transform duration-300 group-hover:-rotate-6",
                      featured ? "h-16 w-16 bg-white shadow-card" : "h-12 w-12 sm:h-14 sm:w-14",
                      !featured && accentClasses[accent].soft,
                      accentClasses[accent].icon,
                    )}
                  >
                    <Icon className={featured ? "h-8 w-8" : "h-6 w-6 sm:h-7 sm:w-7"} strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <h3
                    className={cn(
                      "relative font-black tracking-tight text-ink",
                      featured ? "mt-8 text-2xl sm:text-[1.75rem]" : "mt-5 text-lg leading-snug sm:text-xl",
                    )}
                  >
                    {title}
                  </h3>
                  <p
                    className={cn(
                      "relative leading-relaxed text-muted",
                      featured ? "mt-3 max-w-md pr-16 text-base sm:pr-24 sm:text-lg" : "mt-2 text-sm sm:text-base",
                    )}
                  >
                    {text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
