import { site } from "@/lib/site";
import { defaultImageAlt, imageOverrides, type GalleryImage } from "@/lib/content";
import { findPublicFile, imageAspect, listNumberedImages } from "@/lib/files";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Advantages } from "@/components/sections/Advantages";
import { Stats } from "@/components/sections/Stats";
import { Gallery } from "@/components/sections/Gallery";
import { Documents } from "@/components/sections/Documents";
import { Contacts } from "@/components/sections/Contacts";

/**
 * Фото галереи собираются из public/images автоматически (image1.jpg, image2.jpg, …).
 * Чтобы добавить фото — просто положите новый файл с следующим номером и пересоберите сайт.
 */
export default function Home() {
  const allImages: GalleryImage[] = listNumberedImages().map((src, i) => {
    const file = src.split("/").pop() ?? "";
    return { src, alt: defaultImageAlt(i + 1), aspect: imageAspect(src), ...imageOverrides[file] };
  });

  // Фото для «bal-bala1 туралы» (image11.*) показывается только там и в галерею не попадает
  const isAboutPhoto = (img: GalleryImage) => /\/image11\.[a-z]+$/i.test(img.src);
  const aboutPhoto = allImages.find(isAboutPhoto);
  const gallery = allImages.filter((img) => !isAboutPhoto(img));

  const heroSrc = findPublicFile(site.heroCandidates);
  const hero: GalleryImage | null = heroSrc
    ? { src: heroSrc, alt: `${site.name}ндағы балалар` }
    : (gallery[0] ?? null);
  // Если image11 нет — следующее фото после обложки, чтобы снимки не повторялись
  const aboutImage = aboutPhoto ?? (heroSrc ? gallery[0] : gallery[1]) ?? hero;

  return (
    <>
      <Hero image={hero} />
      <About image={aboutImage} />
      <Advantages />
      <Stats />
      <Gallery items={gallery} />
      <Documents />
      <Contacts />
    </>
  );
}
