import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/cn";

/** Аккуратная заглушка, пока фото не добавлены в public/images */
export function PhotoPlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-grape-soft via-cream to-sun-soft text-grape/40",
        className,
      )}
      role="img"
      aria-label="Фотосурет жақында қосылады"
    >
      <ImageIcon className="h-10 w-10" strokeWidth={1.5} />
    </div>
  );
}
