import { ArrowUpRight, FolderOpen } from "lucide-react";
import { documentsUrl } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Cloud, Flower, Star, Wave } from "@/components/ui/Decor";

/** «Құжаттар»: одна карточка со ссылкой на папку документов в Google Drive */
export function Documents() {
  return (
    <section id="documents" aria-labelledby="documents-title" className="relative bg-mist py-16 sm:py-20">
      <Wave className="pointer-events-none absolute bottom-full left-0 text-mist" />
      <Star className="pointer-events-none absolute top-24 right-[8%] h-5 w-5 text-sun" />

      <div className="container-x">
        <Reveal>
          <SectionHeading
            id="documents-title"
            align="center"
            eyebrow="Құжаттар"
            tone="rose"
            title="Құжаттар"
            description="Балабақшаға қатысты құжаттармен танысыңыз"
          />
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-12 max-w-3xl sm:mt-16">
          <div className="group relative overflow-hidden rounded-[32px] rounded-tr-[80px] bg-white p-6 shadow-card ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover sm:rounded-[40px] sm:rounded-tr-[110px] sm:p-8">
            <Cloud className="pointer-events-none absolute -right-6 -bottom-2 hidden w-36 text-grape-soft sm:block" />
            <Flower className="animate-float pointer-events-none absolute top-6 right-8 h-8 w-8 text-rose/60" />

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[16px_22px_16px_22px] bg-sun-soft text-sun-deep transition-transform duration-300 group-hover:-rotate-6 sm:h-16 sm:w-16">
                <FolderOpen className="h-8 w-8 sm:h-8 sm:w-8" strokeWidth={1.9} aria-hidden="true" />
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="pr-10 text-2xl font-black tracking-tight text-ink sm:pr-0 sm:text-2xl">Балабақша құжаттары</h3>
                <p className="mt-2 text-base leading-relaxed text-pretty text-muted sm:text-lg">
                  Қажетті құжаттарды Google Drive арқылы көре аласыз
                </p>

                <a
                  href={documentsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn mt-6 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-grape px-8 text-lg font-extrabold text-white shadow-[0_14px_30px_-14px_rgb(165_38_213/0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-grape-deep focus-visible:ring-4 focus-visible:ring-grape/30 focus-visible:outline-none sm:w-auto"
                >
                  Құжаттарды ашу
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
