/**
 * Все основные данные сайта в одном месте.
 * Меняйте телефон, адрес или режим работы только здесь.
 */
export const site = {
  name: "Bal-bala балабақшасы",
  shortName: "Bal-bala",
  address: "Алматы қаласы, Айгерім-2 ықшамауданы, Түймебаева көшесі, 39",
  phone: "+7 702 425 40 79",
  phoneHref: "tel:+77024254079",
  hours: "07:30–18:00",
  slogan: "Бақытты балалық шаққа бірге қадам басайық!",
  description:
    "Bal-bala — 2 жастан 6 жасқа дейінгі балаларға арналған қазақ тіліндегі балабақша. Алматы, Айгерім-2 ықшамауданы, Түймебаева көшесі, 39.",
  /** Возможные имена файла логотипа в папке public — используется первый найденный. */
  logoCandidates: ["/logo.png", "/logo.svg", "/logo.webp", "/logo.jpg", "/logo.jpeg"],
  /**
   * Фото для первого экрана. Если ни одного файла нет — берётся первое фото из галереи (public/images/image1.jpg …).
   */
  heroCandidates: ["/images/hero.jpg", "/images/hero.jpeg", "/images/hero.png", "/images/hero.webp"],
};

/** Ссылка на карту по адресу (открывается в новой вкладке). */
export const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Алматы, Айгерім-2, Түймебаева көшесі, 39",
)}`;

