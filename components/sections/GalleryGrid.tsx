"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import type { GalleryImage } from "@/lib/content";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Flower, Star } from "@/components/ui/Decor";
import { cn } from "@/lib/cn";

/** Сколько фото показывать до нажатия «Барлық фотосуреттер» */
const INITIAL_COUNT = 12;

/**
 * Editorial-раскладка «рядами»: ряды по 2 и по 3 фото чередуются, поэтому снимки получаются
 * то крупнее, то мельче. Внутри ряда ширина каждого фото пропорциональна его пропорциям,
 * а высота у всех одинаковая — фото показываются ЦЕЛИКОМ, без обрезки (головы и лица не режутся).
 * На телефоне в ряду из трёх первое фото занимает всю ширину, два других — строкой ниже.
 */
const ROW_PATTERN = [2, 3];
/** Максимальная высота ряда — чтобы два вертикальных фото не растягивались на весь экран */
const MAX_ROW_HEIGHT = "32rem";

/** У фото разные «фирменные» скругления — живо, но аккуратно */
const RADII = [
  "rounded-[28px] rounded-tr-[72px]",
  "rounded-[28px]",
  "rounded-[28px] rounded-bl-[72px]",
  "rounded-[28px] rounded-tl-[72px]",
  "rounded-[28px] rounded-br-[72px]",
];

const tileClass = "relative min-w-0 overflow-hidden";

/** Пропорции заглушек, пока фото не добавлены */
const PLACEHOLDER_ASPECTS = [1.5, 0.8, 1, 1.33, 0.75];

type Row<T> = { items: { item: T; index: number }[]; sum: number };

function chunkRows<T extends { aspect?: number }>(list: T[]): Row<T>[] {
  const rows: Row<T>[] = [];
  let i = 0;
  let r = 0;
  while (i < list.length) {
    const size = ROW_PATTERN[r % ROW_PATTERN.length];
    const items = list.slice(i, i + size).map((item, k) => ({ item, index: i + k }));
    rows.push({ items, sum: items.reduce((acc, { item }) => acc + (item.aspect ?? 4 / 3), 0) });
    i += size;
    r += 1;
  }
  return rows;
}

function RowDecor({ row }: { row: number }) {
  if (row % 2 === 0) {
    return <Star className="pointer-events-none absolute -top-3 -left-2 z-10 h-6 w-6 text-sun sm:-left-4 sm:h-8 sm:w-8" />;
  }
  return <Flower className="animate-float pointer-events-none absolute -right-2 -bottom-3 z-10 h-8 w-8 text-rose/70 sm:-right-4 sm:h-10 sm:w-10" />;
}

/** Один ряд: justified-раскладка на flex (flex-grow = пропорции фото) */
function GalleryRow<T extends { aspect?: number }>({
  row,
  rowIndex,
  children,
}: {
  row: Row<T>;
  rowIndex: number;
  children: (entry: { item: T; index: number }, style: React.CSSProperties, className: string) => React.ReactNode;
}) {
  return (
    <div
      className="relative mx-auto flex w-full flex-wrap justify-center gap-3 sm:flex-nowrap sm:gap-4 lg:gap-5"
      style={{ maxWidth: `calc(${row.sum.toFixed(3)} * ${MAX_ROW_HEIGHT})` }}
    >
      <RowDecor row={rowIndex} />
      {row.items.map((entry, k) => {
        const aspect = entry.item.aspect ?? 4 / 3;
        const style: React.CSSProperties = { flexGrow: aspect, flexBasis: 0, aspectRatio: aspect };
        // Телефон: в ряду из трёх первое фото — на всю ширину
        const mobileFull = row.items.length === 3 && k === 0 ? "max-sm:basis-full!" : "";
        const radius = RADII[entry.index % RADII.length];
        return children(entry, style, cn(tileClass, radius, mobileFull));
      })}
    </div>
  );
}

export function GalleryGrid({ items }: { items: GalleryImage[] }) {
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const visible = showAll ? items : items.slice(0, INITIAL_COUNT);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  // Пока фото нет — аккуратные заглушки той же раскладки
  if (items.length === 0) {
    const placeholders = PLACEHOLDER_ASPECTS.map((aspect) => ({ aspect }));
    return (
      <div className="mt-12 flex flex-col gap-3 sm:mt-16 sm:gap-4 lg:gap-5">
        {chunkRows(placeholders).map((row, r) => (
          <GalleryRow key={r} row={row} rowIndex={r}>
            {({ index }, style, className) => (
              <div key={index} className={className} style={style}>
                <PhotoPlaceholder />
              </div>
            )}
          </GalleryRow>
        ))}
      </div>
    );
  }

  const current = active !== null ? items[active] : null;

  return (
    <>
      <div className="mt-12 flex flex-col gap-3 sm:mt-16 sm:gap-4 lg:gap-5">
        {chunkRows(visible).map((row, r) => (
          <GalleryRow key={r} row={row} rowIndex={r}>
            {({ item, index }, style, className) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Фотосуретті ашу: ${item.alt}`}
                style={style}
                className={cn(
                  className,
                  "group cursor-zoom-in bg-shell shadow-card transition-shadow duration-300 hover:shadow-card-hover focus-visible:ring-4 focus-visible:ring-grape/40 focus-visible:outline-none",
                )}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 bg-grape/0 transition-colors duration-500 group-hover:bg-grape/10" />
                <span className="absolute right-4 bottom-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/90 text-grape opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <Expand className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            )}
          </GalleryRow>
        ))}
      </div>

      {items.length > INITIAL_COUNT && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="group inline-flex h-14 items-center gap-2 rounded-full bg-white px-8 font-bold text-grape ring-1 ring-grape/15 transition-all duration-300 hover:-translate-y-0.5 hover:ring-grape/40"
          >
            {showAll ? "Жасыру" : `Барлық фотосуреттер (${items.length})`}
            <ChevronDown className={cn("h-5 w-5 transition-transform duration-300", showAll && "rotate-180")} />
          </button>
        </div>
      )}

      {/* Просмотр фото целиком (object-contain — без обрезки) */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Фотосуретті қарау"
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
          className="fixed inset-0 z-[60] flex animate-[fade-in_0.25s_ease-out] items-center justify-center bg-[#1e1430]/90 p-4 backdrop-blur-sm sm:p-12"
        >
          <div className="relative h-full w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image key={current.src} src={current.src} alt={current.alt} fill sizes="100vw" className="rounded-[20px] object-contain" />
          </div>

          <button
            type="button"
            onClick={close}
            aria-label="Жабу"
            className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-grape transition hover:bg-grape-soft"
          >
            <X className="h-6 w-6" />
          </button>

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Алдыңғы фото"
                className="absolute top-1/2 left-3 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-grape transition hover:bg-white sm:left-6"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Келесі фото"
                className="absolute top-1/2 right-3 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-grape transition hover:bg-white sm:right-6"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white">
                {active! + 1} / {items.length}
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
}
