import { ArrowRight } from "lucide-react";
import { accentClasses, heroBadges, type GalleryImage } from "@/lib/content";
import { site } from "@/lib/site";
import { Balloon, Block, Cloud, Flower, Pencil, Rainbow, Squiggle, Star, Sun } from "@/components/ui/Decor";
import { ShapedPhoto } from "@/components/ui/ShapedPhoto";
import { cn } from "@/lib/cn";

/** Позиции «парящих» карточек вокруг фото на планшете и desktop */
const badgePositions = [
  "top-10 -left-4 -rotate-3 lg:top-16 lg:-left-12",
  "top-24 -right-4 rotate-3 lg:top-28 lg:-right-14",
  "bottom-24 -left-6 rotate-2 lg:bottom-28 lg:-left-16",
  "-bottom-5 right-8 -rotate-2 lg:right-16",
];
const badgeDelays = ["0s", "1.5s", "0.8s", "2.2s"];

/**
 * Первый экран: крупный заголовок по центру, под ним — большое фото в органической форме,
 * которое «выходит» в следующую секцию. Вокруг — карточки с короткой информацией и немного декора.
 */
export function Hero({ image }: { image: GalleryImage | null }) {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative z-10 pt-6 sm:pt-12 lg:pt-16">
      {/* Фон: мягкие пятна и облака */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -right-24 h-[26rem] w-[26rem] rounded-full bg-grape-soft blur-3xl" />
        <div className="absolute top-40 -left-40 h-[22rem] w-[22rem] rounded-full bg-sun-soft blur-3xl" />
        <div className="absolute top-[55%] right-[-6rem] h-72 w-72 rounded-full bg-rose-soft/70 blur-3xl" />
        <Cloud className="animate-float-slow absolute top-24 left-[4%] hidden w-28 text-grape-soft md:block" />
        <Cloud className="animate-float absolute top-10 right-[8%] w-20 text-sun-soft sm:w-24" />
        <Rainbow className="absolute top-[34%] left-[6%] hidden w-24 opacity-70 lg:block" />
        <Star className="animate-float absolute top-[30%] right-[12%] hidden h-5 w-5 text-rose/50 md:block" />
      </div>

      <div className="container-x relative text-center">
        <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-grape shadow-card ring-1 ring-grape/10">
          <Sun className="h-4 w-4 text-sun" />
          {site.name}
        </p>

        <h1
          id="hero-title"
          className="mx-auto mt-6 max-w-5xl text-[2.75rem] leading-[0.98] font-black tracking-[-0.035em] text-balance text-ink min-[400px]:text-5xl sm:text-7xl lg:text-[6.25rem]"
        >
          Балдай{" "}
          <span className="relative inline-block text-grape">
            тәтті
            <Squiggle className="absolute -bottom-2 left-0 h-3 w-full text-sun sm:-bottom-3 sm:h-4" />
          </span>{" "}
          балалық шақ
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-pretty text-muted sm:text-xl">
          Bal-bala балабақшасында әр балаға мейірім, қамқорлық және жан-жақты даму үшін жайлы орта қалыптастырамыз.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 min-[420px]:flex-row">
          <a
            href="#contacts"
            className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-grape px-8 text-lg font-extrabold text-white shadow-[0_14px_30px_-14px_rgb(165_38_213/0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-grape-deep focus-visible:ring-4 focus-visible:ring-grape/30 focus-visible:outline-none"
          >
            Байланысу
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href="#about"
            className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-lg font-extrabold text-ink ring-1 ring-ink/10 transition-all duration-300 hover:-translate-y-0.5 hover:text-grape hover:ring-grape/40 focus-visible:ring-4 focus-visible:ring-grape/30 focus-visible:outline-none"
          >
            Біз туралы
          </a>
        </div>
      </div>

      {/* Фото-сцена: выходит за нижний край секции */}
      <div className="container-x relative mt-14 -mb-20 sm:mt-16 sm:-mb-28">
        <div className="relative mx-auto max-w-5xl">
          {/* Цветная «тень»-форма за фото */}
          <div className="shape-hero absolute inset-0 translate-x-1.5 translate-y-4 rotate-1 bg-grape-soft sm:translate-x-6 sm:rotate-2 sm:translate-y-6" aria-hidden="true" />

          <Sun className="animate-spin-slow absolute -top-10 right-2 z-20 h-20 w-20 text-sun sm:-top-14 sm:right-10 sm:h-28 sm:w-28" />
          <Balloon className="animate-sway absolute -top-16 left-2 z-20 hidden w-10 text-rose sm:block lg:-left-6 lg:w-12" />
          <Pencil className="absolute -bottom-2 -left-2 z-20 hidden w-28 -rotate-[20deg] text-mint-bright md:block lg:-left-10" />
          <Flower className="animate-float absolute top-1/2 -right-3 z-20 hidden h-9 w-9 text-grape/70 lg:-right-8 lg:block" />
          <span className="absolute bottom-10 left-1/2 z-20 hidden md:block">
            <Block letter="Ә" className="h-12 rotate-6 bg-sun text-ink" />
          </span>

          <ShapedPhoto
            image={image}
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="shape-hero relative z-10 aspect-[5/4] shadow-soft ring-[8px] ring-white sm:aspect-[16/10] sm:ring-[12px]"
          />

          {/* Парящие карточки — планшет и desktop */}
          {heroBadges.map(({ value, label, icon: Icon, accent }, i) => (
            <div
              key={value}
              className={cn("absolute z-30 hidden sm:block", badgePositions[i])}
            >
              <div
                className="animate-float flex items-center gap-3 rounded-[22px] bg-white/95 py-3 pr-5 pl-3 text-left shadow-card-hover ring-1 ring-ink/5 backdrop-blur"
                style={{ animationDelay: badgeDelays[i] }}
              >
                <span className={cn("flex h-11 w-11 items-center justify-center rounded-[14px_18px_14px_18px]", accentClasses[accent].soft, accentClasses[accent].icon)}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="leading-tight">
                  <span className="block text-lg font-black text-ink">{value}</span>
                  <span className="block text-sm font-semibold text-muted">{label}</span>
                </span>
              </div>
            </div>
          ))}

          {/* Те же карточки на телефоне — 2×2, «наплывают» на фото */}
          <ul className="relative z-30 -mt-10 grid grid-cols-2 gap-2.5 px-2 sm:hidden">
            {heroBadges.map(({ value, label, icon: Icon, accent }, i) => (
              <li
                key={value}
                className={cn(
                  "flex items-center gap-2.5 rounded-[20px] bg-white p-2.5 shadow-card-hover ring-1 ring-ink/5",
                  i % 2 === 0 ? "-rotate-2" : "rotate-2 translate-y-2",
                )}
              >
                <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px_16px_12px_16px]", accentClasses[accent].soft, accentClasses[accent].icon)}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 text-left leading-tight">
                  <span className="block text-base font-black text-ink">{value}</span>
                  <span className="block text-xs font-semibold text-muted">{label}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
