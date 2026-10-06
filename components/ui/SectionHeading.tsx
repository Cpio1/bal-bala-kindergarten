import { Squiggle } from "@/components/ui/Decor";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
  className?: string;
  /** Цвет метки-«таблетки» */
  tone?: "grape" | "rose" | "mint" | "sun";
};

const tones = {
  grape: "bg-grape-soft text-grape",
  rose: "bg-rose-soft text-rose",
  mint: "bg-mint-soft text-mint",
  sun: "bg-sun-soft text-sun-deep",
};

/** Заголовок секции. Без CSS uppercase — казахские буквы отображаются как написаны. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
  className,
  tone = "grape",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className={cn("inline-flex -rotate-2 items-center gap-2 rounded-full px-4 py-1.5 text-sm font-extrabold", tones[tone])}>
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="mt-5 text-[2.5rem] leading-[1.02] font-black tracking-[-0.03em] text-balance text-ink sm:text-5xl lg:text-[3.5rem]"
      >
        {title}
      </h2>
      <Squiggle className={cn("mt-4 h-3 w-24 text-sun", align === "center" && "mx-auto")} />
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-pretty text-muted sm:text-xl">{description}</p>
      )}
    </div>
  );
}
