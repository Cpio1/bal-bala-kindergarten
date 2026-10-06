import type { GalleryImage } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Balloon, Cloud, Wave } from "@/components/ui/Decor";
import { GalleryGrid } from "./GalleryGrid";

/** items — фото из public/images (собираются на сервере в app/page.tsx) */
export function Gallery({ items }: { items: GalleryImage[] }) {
  return (
    <section id="gallery" aria-labelledby="gallery-title" className="relative bg-white py-24 sm:py-32">
      <Wave className="pointer-events-none absolute bottom-full left-0 -scale-x-100 text-white" />
      <Balloon className="animate-sway pointer-events-none absolute top-16 left-[5%] hidden w-10 text-grape/60 md:block" />
      <Cloud className="animate-float-slow pointer-events-none absolute top-24 right-[5%] hidden w-28 text-mint-soft md:block" />

      <div className="container-x">
        <Reveal>
          <SectionHeading
            id="gallery-title"
            align="center"
            eyebrow="Фотосуреттер"
            tone="mint"
            title="Біздің балабақша"
            description="bal-bala1 балабақшасындағы жарқын сәттер"
          />
        </Reveal>

        <Reveal delay={100}>
          <GalleryGrid items={items} />
        </Reveal>
      </div>
    </section>
  );
}
