import { accentClasses, stats } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Pencil, Rainbow, Star, Sun, Wave } from "@/components/ui/Decor";
import { cn } from "@/lib/cn";

/**
 * «Біздің балабақша» — один большой bento-блок с крупными цифрами.
 * desktop (12 колонок):
 *   [ заголовок ×5 ][ 2–6 жас ×4, 2 ряда ][ 4 топ ×3 ]
 *   [ Қазақша ×5   ][        …           ][ 4–5 рет ×3 ]
 *   [ 07:30–18:00 — широкая полоса на всю ширину        ]
 */
export function Stats() {
  const [age, groups, language, meals, hours] = stats;

  return (
    <section aria-labelledby="stats-title" className="relative bg-cream py-16 sm:py-20">
      <Wave className="pointer-events-none absolute bottom-full left-0 text-cream" />

      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-grape-soft/80 via-white to-sun-soft p-3 ring-1 ring-grape/10 sm:rounded-[56px] sm:p-5">
            <ul className="relative grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12">
              {/* Заголовок как часть композиции */}
              <li className="relative col-span-2 px-3 pt-5 pb-3 sm:px-6 sm:pt-8 lg:col-span-5 lg:pb-6">
                <Rainbow className="absolute top-4 right-2 w-20 opacity-80 sm:right-6 sm:w-24" />
                <SectionHeading id="stats-title" eyebrow="Негізгі мәліметтер" tone="sun" title="Біздің балабақша" />
              </li>

              {/* Главная цифра — фиолетовая «капля» */}
              <li className="group relative col-span-2 flex min-h-64 flex-col justify-between overflow-hidden rounded-[32px] rounded-tr-[96px] bg-grape p-6 text-white shadow-soft sm:p-7 lg:col-span-4 lg:row-span-2">
                <Sun className="animate-spin-slow absolute -top-8 -right-8 h-36 w-36 text-sun/90" />
                <Star className="absolute bottom-8 right-8 h-6 w-6 text-white/30" />
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                  <age.icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <span className="mt-10 block">
                  <span className="block text-7xl leading-[0.9] font-black tracking-[-0.04em] sm:text-6xl lg:text-[4rem]">{age.value}</span>
                  <span className="mt-3 block text-lg font-bold text-white/80">{age.label}</span>
                </span>
              </li>

              <StatTile fact={groups} className="lg:col-span-3" shape="rounded-[32px] rounded-bl-[72px]" />
              <StatTile fact={language} className="lg:col-span-5" shape="rounded-[32px] rounded-tl-[72px]" />
              <StatTile fact={meals} className="col-span-2 bg-sun-soft! lg:col-span-3" shape="rounded-[32px] rounded-br-[72px]" />

              {/* Режим работы — широкая «таблетка» */}
              <li className="relative col-span-2 flex flex-wrap items-center gap-x-6 gap-y-3 overflow-hidden rounded-[32px] bg-white p-6 shadow-card sm:rounded-full sm:px-10 sm:py-7 lg:col-span-12">
                <span className={cn("flex h-14 w-14 items-center justify-center rounded-full", accentClasses[hours.accent].soft, accentClasses[hours.accent].icon)}>
                  <hours.icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <span className="text-lg font-bold text-muted">{hours.label}</span>
                <span className="text-4xl leading-none font-black tracking-tight text-ink sm:ml-auto sm:text-4xl">{hours.value}</span>
                <Pencil className="pointer-events-none absolute right-6 -bottom-1 hidden w-24 -rotate-6 text-rose md:block lg:right-auto lg:left-1/2" />
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StatTile({ fact, className, shape }: { fact: (typeof stats)[number]; className?: string; shape: string }) {
  const { value, label, icon: Icon, accent } = fact;
  return (
    <li
      className={cn(
        "flex flex-col justify-between gap-6 bg-white p-4 shadow-card transition-transform duration-300 hover:-translate-y-1 sm:p-7",
        shape,
        className,
      )}
    >
      <span className={cn("flex h-12 w-12 items-center justify-center rounded-[14px_18px_14px_18px]", accentClasses[accent].soft, accentClasses[accent].icon)}>
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <span className="block">
        <span className="block text-[1.6rem] leading-none font-black tracking-[-0.03em] text-ink min-[400px]:text-3xl sm:text-4xl">
          {value}
        </span>
        <span className="mt-2 block text-sm font-bold text-muted sm:text-base">{label}</span>
      </span>
    </li>
  );
}
