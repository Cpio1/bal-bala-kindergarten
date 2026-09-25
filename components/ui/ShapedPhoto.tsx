import Image from "next/image";
import type { GalleryImage } from "@/lib/content";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { cn } from "@/lib/cn";

type ShapedPhotoProps = {
  image: GalleryImage | null;
  /** Форма и размер: например "shape-hero aspect-[4/3]" */
  className?: string;
  sizes: string;
  priority?: boolean;
};

/**
 * Фото внутри органической формы (арка, «капля» и т.п.) без обрезки лиц.
 * Само фото показывается целиком (object-contain), а свободное место внутри формы
 * заполняет размытая копия того же снимка — так форма всегда красивая при любых пропорциях.
 */
export function ShapedPhoto({ image, className, sizes, priority }: ShapedPhotoProps) {
  return (
    <div className={cn("group relative isolate overflow-hidden bg-shell", className)}>
      {image ? (
        <>
          <Image
            src={image.src}
            alt=""
            fill
            sizes="200px"
            className="scale-125 object-cover opacity-70 blur-2xl"
            aria-hidden="true"
          />
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            style={{ objectPosition: image.position ?? "50% 30%" }}
          />
        </>
      ) : (
        <PhotoPlaceholder />
      )}
    </div>
  );
}
