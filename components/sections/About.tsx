import { aboutFacts, accentClasses, type GalleryImage } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShapedPhoto } from "@/components/ui/ShapedPhoto";
import { Cloud, Flower, Rainbow, Star, Wave } from "@/components/ui/Decor";
import { cn } from "@/lib/cn";

/**
 * «Біз туралы»: слева фото в форме арки, справа текст и характеристики
 * разного размера (крупная «капля» + «таблетки»), а не одинаковая сетка.
 */
export function About({ image }: { image: GalleryImage | null }) {
  const [main, ...pills] = aboutFacts;
  const MainIcon = main.icon;

  return (
    <section id="about" aria-labelledby="about-title" className="relative bg-white pt-36 pb-24 sm:pt-48 sm:pb-32">
      <Wave className="pointer-events-none absolute bottom-full left-0 text-white" />
      <div className="container-x grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-[24rem] lg:max-w-[26rem]">
          <Rainbow className="absolute -top-8 -left-4 z-10 w-28 sm:-left-10 sm:w-36" />
          <Cloud className="animate-float-slow absolute top-1/3 -right-2 z-10 w-24 text-white drop-shadow-[0_8px_16px_rgb(96_30_130/0.15)] sm:-right-10 sm:w-28" />
          <Flower className="animate-float absolute -bottom-4 left-6 z-10 h-10 w-10 text-rose" />

          {/* Смещённая цветная арка позади фото */}
          <div className="shape-arch absolute inset-0 -translate-x-4 translate-y-4 bg-sun-soft sm:-translate-x-6 sm:translate-y-6" aria-hidden="true" />
          <ShapedPhoto
            image={image}
            sizes="(min-width: 1024px) 416px, 384px"
            className="shape-arch relative shadow-soft"
            // Форма ровно по пропорциям фото — без пустого места снизу
            style={{ aspectRatio: image?.aspect ?? 4 / 5 }}
          />
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading id="about-title" eyebrow="Біз туралы" tone="rose" title="bal-bala1 туралы" />
          <p className="mt-6 text-lg leading-relaxed text-pretty text-muted sm:text-xl">
            bal-bala1 балабақшасы — 2 жастан 6 жасқа дейінгі балаларға арналған қазақ тіліндегі балабақша. Біз балалардың
            қауіпсіз, жайлы және қызықты ортада өсіп, жаңа білім алып, достарымен бірге дамуына жағдай жасаймыз.
          </p>

          <ul className="mt-10 grid grid-cols-[0.9fr_1.1fr] gap-3 sm:gap-4">
            {/* Крупный элемент — мягкая «капля» */}
            <li className="shape-soft relative row-span-3 flex flex-col justify-between overflow-hidden bg-grape-soft p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
              <Star className="absolute top-4 right-4 h-5 w-5 text-grape/30" />
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-grape shadow-card">
                <MainIcon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="mt-8 block">
                <span className="block text-4xl leading-none font-black tracking-tight text-grape sm:text-[2.75rem]">
                  {main.value}
                </span>
                <span className="mt-2 block text-[15px] font-bold text-ink/70">{main.label}</span>
              </span>
            </li>

            {/* Остальные — «таблетки» разного цвета со сдвигом */}
            {pills.map(({ value, label, icon: Icon, accent }, i) => (
              <li
                key={label}
                className={cn(
                  "flex items-center gap-3 rounded-full py-2.5 pr-4 pl-2.5 transition-transform duration-300 hover:-translate-y-1 sm:pr-6",
                  accentClasses[accent].soft,
                  i === 1 && "sm:-ml-6",
                )}
              >
                <span
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-card",
                    accentClasses[accent].icon,
                  )}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 leading-tight">
                  <span className="block text-lg font-black text-ink sm:text-xl">{value}</span>
                  <span className="block text-xs font-semibold text-muted sm:text-sm">{label}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
