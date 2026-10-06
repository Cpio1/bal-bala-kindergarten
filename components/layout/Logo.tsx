import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoProps = {
  /** Путь к логотипу в public, либо null — тогда показывается аккуратный текстовый знак */
  src: string | null;
  className?: string;
  priority?: boolean;
};

/**
 * Логотип bal-bala1. Высота задаётся через className (например "h-12"),
 * ширина — автоматически, поэтому пропорции не искажаются и логотип не обрезается.
 */
export function Logo({ src, className = "h-12", priority }: LogoProps) {
  if (!src) {
    return (
      <span
        className={cn(
          "relative inline-flex aspect-square items-center justify-center rounded-2xl bg-grape text-xl font-black text-white",
          className,
        )}
        aria-hidden="true"
      >
        B
        <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-sun ring-2 ring-cream" />
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt="bal-bala1 логотипі"
      width={0}
      height={0}
      sizes="240px"
      priority={priority}
      className={cn("w-auto object-contain", className)}
    />
  );
}
