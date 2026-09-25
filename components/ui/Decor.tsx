import { cn } from "@/lib/cn";

/**
 * Минималистичные 2D-элементы в цветах логотипа: солнце, облако, звёздочка, радуга,
 * шарик, карандаш, цветок, кубик, детская фигурка и волна-переход между секциями.
 * Цвет задаётся через text-* (currentColor). Все фигуры скрыты от скринридеров.
 */
type DecorProps = { className?: string };

export function Sun({ className }: DecorProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none">
      <circle cx="32" cy="32" r="13" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="4" strokeLinecap="round">
        {Array.from({ length: 8 }, (_, i) => (
          <line key={i} x1="32" y1="5" x2="32" y2="11" transform={`rotate(${i * 45} 32 32)`} />
        ))}
      </g>
    </svg>
  );
}

export function Star({ className }: DecorProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 0c.7 5.6 3.4 8.3 12 12-8.6 3.7-11.3 6.4-12 12-.7-5.6-3.4-8.3-12-12 8.6-3.7 11.3-6.4 12-12z"
      />
    </svg>
  );
}

export function Cloud({ className }: DecorProps) {
  return (
    <svg viewBox="0 0 120 64" className={className} aria-hidden="true">
      <g fill="currentColor">
        <circle cx="38" cy="38" r="20" />
        <circle cx="64" cy="28" r="26" />
        <circle cx="90" cy="40" r="18" />
        <rect x="18" y="38" width="90" height="22" rx="11" />
      </g>
    </svg>
  );
}

export function Rainbow({ className }: DecorProps) {
  return (
    <svg viewBox="0 0 120 64" className={className} aria-hidden="true" fill="none" strokeLinecap="round" strokeWidth="10">
      <path d="M10 60a50 50 0 0 1 100 0" stroke="var(--color-rose)" />
      <path d="M24 60a36 36 0 0 1 72 0" stroke="var(--color-sun)" />
      <path d="M38 60a22 22 0 0 1 44 0" stroke="var(--color-mint-bright)" />
    </svg>
  );
}

export function Balloon({ className }: DecorProps) {
  return (
    <svg viewBox="0 0 40 84" className={className} aria-hidden="true">
      <ellipse cx="20" cy="20" rx="16" ry="19" fill="currentColor" />
      <ellipse cx="14" cy="13" rx="4" ry="6" fill="white" opacity="0.35" />
      <path d="M16.5 38h7L20 43z" fill="currentColor" />
      <path
        d="M20 43c-5 8 5 13 0 21s4 11 0 18"
        stroke="var(--color-ink)"
        strokeOpacity="0.25"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

export function Pencil({ className }: DecorProps) {
  return (
    <svg viewBox="0 0 100 24" className={className} aria-hidden="true">
      <rect x="16" y="4" width="68" height="16" rx="3" fill="currentColor" />
      <rect x="16" y="10" width="68" height="4" fill="white" opacity="0.25" />
      <path d="M16 4 1 12l15 8z" fill="var(--color-sun-soft)" />
      <path d="M1 12l5.5-2.9v5.8z" fill="var(--color-ink)" />
      <rect x="82" y="4" width="15" height="16" rx="4" fill="var(--color-rose-soft)" />
    </svg>
  );
}

export function Flower({ className }: DecorProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <g fill="currentColor">
        {Array.from({ length: 5 }, (_, i) => (
          <circle key={i} cx="20" cy="10" r="7.5" transform={`rotate(${i * 72} 20 20)`} />
        ))}
      </g>
      <circle cx="20" cy="20" r="5.5" fill="var(--color-sun)" />
    </svg>
  );
}

/** Абстрактная детская фигурка: голова-круг и тело-треугольник */
export function Kid({ className }: DecorProps) {
  return (
    <svg viewBox="0 0 40 60" className={className} aria-hidden="true">
      <circle cx="20" cy="11" r="9" fill="currentColor" />
      <path
        d="M20 25 33 53H7z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path d="M8 34 20 29l12 5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/** Иллюстрация: здание детского сада с флажком, окнами и кубиками */
export function KindergartenScene({ className }: DecorProps) {
  return (
    <svg viewBox="0 0 400 320" className={className} aria-hidden="true">
      <ellipse cx="200" cy="296" rx="180" ry="20" fill="white" opacity="0.15" />
      {/* Флажок */}
      <path d="M200 64V22" stroke="white" strokeWidth="5" strokeLinecap="round" />
      <path d="M202 22h34l-9 11 9 11h-34z" fill="var(--color-sun)" />
      {/* Здание */}
      <rect x="92" y="140" width="216" height="152" rx="22" fill="white" />
      <path d="M76 150 200 66l124 84z" fill="var(--color-rose)" stroke="var(--color-rose)" strokeWidth="18" strokeLinejoin="round" />
      <circle cx="200" cy="120" r="18" fill="var(--color-sun)" />
      <circle cx="200" cy="120" r="8" fill="white" opacity="0.6" />
      {/* Окна */}
      <rect x="116" y="168" width="54" height="46" rx="14" fill="var(--color-mint-soft)" />
      <path d="M143 168v46M116 191h54" stroke="var(--color-mint-bright)" strokeWidth="4" />
      <rect x="230" y="168" width="54" height="46" rx="14" fill="var(--color-sun-soft)" />
      <path d="M257 168v46M230 191h54" stroke="var(--color-sun)" strokeWidth="4" />
      {/* Дверь-арка */}
      <path d="M176 292v-48a24 24 0 0 1 48 0v48z" fill="var(--color-grape-soft)" />
      <circle cx="214" cy="264" r="3.5" fill="var(--color-grape)" />
      {/* Кубики у входа */}
      <rect x="34" y="250" width="44" height="44" rx="10" fill="var(--color-sun)" />
      <rect x="54" y="214" width="36" height="36" rx="9" fill="var(--color-mint-bright)" transform="rotate(-10 72 232)" />
      <rect x="326" y="256" width="38" height="38" rx="9" fill="var(--color-grape-soft)" transform="rotate(8 345 275)" />
    </svg>
  );
}

/** Детский кубик с буквой */
export function Block({ className, letter = "Б" }: DecorProps & { letter?: string }) {
  return (
    <span
      className={cn(
        "inline-flex aspect-square items-center justify-center rounded-2xl text-lg font-black text-white shadow-card",
        className,
      )}
      aria-hidden="true"
    >
      {letter}
    </span>
  );
}

/** Волнистая линия-«каракуля» */
export function Squiggle({ className }: DecorProps) {
  return (
    <svg viewBox="0 0 120 20" preserveAspectRatio="none" className={className} aria-hidden="true" fill="none">
      <path
        d="M3 10c9-9 18-9 27 0s18 9 27 0 18-9 27 0 18 9 27 0"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Мягкая волна-переход. Ставится у края секции; цвет — через text-* (цвет соседней секции).
 * flip — волна «смотрит» вниз (для нижнего края).
 */
export function Wave({ className, flip }: DecorProps & { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className={cn("block h-10 w-full sm:h-16 lg:h-20", flip && "rotate-180", className)}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M0 52C160 20 320 8 520 30s380 58 580 40 260-42 340-50v118H0z"
      />
    </svg>
  );
}
