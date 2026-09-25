import type { LucideIcon } from "lucide-react";
import {
  Apple,
  Baby,
  Clock,
  HeartHandshake,
  Home,
  Languages,
  Puzzle,
  Sparkles,
  Users,
  Utensils,
} from "lucide-react";

export const navItems = [
  { href: "#home", label: "Басты бет" },
  { href: "#about", label: "Біз туралы" },
  { href: "#advantages", label: "Артықшылықтар" },
  { href: "#gallery", label: "Фотосуреттер" },
  { href: "#contacts", label: "Байланыс" },
] as const;

/** Цветовые акценты из логотипа — используются для иконок и мелких деталей */
export type Accent = "grape" | "rose" | "sun" | "mint";

export const accentClasses: Record<Accent, { icon: string; soft: string }> = {
  grape: { icon: "text-grape", soft: "bg-grape-soft" },
  rose: { icon: "text-rose", soft: "bg-rose-soft" },
  sun: { icon: "text-sun-deep", soft: "bg-sun-soft" },
  mint: { icon: "text-mint", soft: "bg-mint-soft" },
};

type Fact = { value: string; label: string; icon: LucideIcon; accent: Accent };

export const aboutFacts: Fact[] = [
  { value: "2–6 жас", label: "Балалардың жасы", icon: Baby, accent: "grape" },
  { value: "4 топ", label: "Балалар топтары", icon: Users, accent: "rose" },
  { value: "Қазақ тілі", label: "Оқыту тілі", icon: Languages, accent: "mint" },
  { value: "4–5 рет", label: "Күнделікті тамақтану", icon: Utensils, accent: "sun" },
];

/** Порядок важен для bento-композиции в components/sections/Stats.tsx */
export const stats: Fact[] = [
  { value: "2–6 жас", label: "Балалардың жасы", icon: Baby, accent: "grape" },
  { value: "4 топ", label: "Топ саны", icon: Users, accent: "rose" },
  { value: "Қазақша", label: "Оқыту тілі", icon: Languages, accent: "mint" },
  { value: "4–5 рет", label: "Күнделікті тамақтану", icon: Utensils, accent: "sun" },
  { value: "07:30–18:00", label: "Жұмыс уақыты", icon: Clock, accent: "grape" },
];

/** «Парящие» карточки на первом экране */
export const heroBadges: Fact[] = [
  { value: "2–6 жас", label: "Балалардың жасы", icon: Baby, accent: "grape" },
  { value: "4 топ", label: "Балалар топтары", icon: Users, accent: "rose" },
  { value: "Қазақша", label: "Оқыту тілі", icon: Languages, accent: "mint" },
  { value: "4–5 рет", label: "Тамақтану", icon: Utensils, accent: "sun" },
];

export const advantages: { title: string; text: string; icon: LucideIcon; accent: Accent }[] = [
  {
    title: "Жеке көзқарас",
    text: "Әр баланың ерекшелігі мен қызығушылығына көңіл бөлеміз.",
    icon: Sparkles,
    accent: "grape",
  },
  {
    title: "Дамытушы сабақтар",
    text: "Балалардың ойлауын, сөйлеуін, шығармашылығын және қызығушылығын дамытуға көмектесеміз.",
    icon: Puzzle,
    accent: "rose",
  },
  {
    title: "Қазақ тіліндегі орта",
    text: "Балалардың қазақ тілінде еркін қарым-қатынас жасауына жағдай жасаймыз.",
    icon: Languages,
    accent: "mint",
  },
  {
    title: "Дұрыс тамақтану",
    text: "Балаларға күніне 4–5 рет құнарлы және пайдалы тағам ұсынылады.",
    icon: Apple,
    accent: "sun",
  },
  {
    title: "Қамқор тәрбиешілер",
    text: "Балаларға мейірімді және жылы қарым-қатынас жасаймыз.",
    icon: HeartHandshake,
    accent: "rose",
  },
  {
    title: "Жайлы орта",
    text: "Балалардың қауіпсіз әрі көңілді уақыт өткізуіне арналған жайлы орта.",
    icon: Home,
    accent: "grape",
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
  /** Пропорции (ширина / высота) — для галереи без обрезки */
  aspect?: number;
  /** object-position для фото в фигурных рамках, по умолчанию "50% 30%" — бережёт головы детей */
  position?: string;
};

/**
 * Необязательные подписи к фото галереи. Ключ — имя файла в public/images.
 * Если подписи нет, используется общий alt-текст.
 */
export const imageOverrides: Record<string, Partial<Omit<GalleryImage, "src">>> = {
  // "image1.jpg": { alt: "Балалар ойын бөлмесінде", position: "50% 20%" },
};

export const defaultImageAlt = (n: number) => `Bal-bala балабақшасындағы сәт, ${n}-фотосурет`;
