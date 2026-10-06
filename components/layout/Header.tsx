"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/content";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Header({ logo }: { logo: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  // Тень у шапки после начала прокрутки
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Подсветка пункта меню текущей секции
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Мобильное меню: блокируем прокрутку и закрываем по Escape
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* «Парящая» шапка-таблетка; без тёмной полосы сверху */}
      <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
        <div
          className={cn(
            "mx-auto flex h-16 max-w-[76rem] items-center justify-between gap-4 rounded-full pr-2 pl-3 ring-1 transition-all duration-300 sm:pl-4",
            scrolled || open
              ? "bg-white/85 shadow-[0_14px_40px_-22px_rgb(96_30_130/0.45)] ring-grape/10 backdrop-blur-md"
              : "bg-white/60 ring-grape/5 backdrop-blur-sm",
          )}
        >
          <a href="#home" className="flex shrink-0 items-center gap-3 rounded-2xl focus-visible:ring-2 focus-visible:ring-grape/40 focus-visible:outline-none" onClick={() => setOpen(false)}>
            {logo}
            <span className="text-lg leading-tight font-extrabold tracking-tight text-ink">
              bal-bala1
              <span className="block text-sm font-bold text-grape">балабақшасы</span>
            </span>
          </a>
  
          <nav className="hidden lg:block" aria-label="Негізгі мәзір">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-[15px] font-bold transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-grape/40 focus-visible:outline-none",
                      active === item.href ? "bg-grape-soft text-grape-deep" : "text-ink/75 hover:bg-grape-soft/70 hover:text-grape-deep",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
  
          {/* На lg (1024–1279px) кнопка скрыта: шесть пунктов меню иначе не помещаются, «Байланыс» есть в меню */}
          <div className="flex items-center gap-2">
            <a
              href="#contacts"
              className="hidden h-12 items-center rounded-full bg-grape px-6 text-[15px] font-bold text-white transition-all duration-300 shadow-[0_10px_24px_-12px_rgb(165_38_213/0.7)] hover:-translate-y-0.5 hover:bg-grape-deep focus-visible:ring-4 focus-visible:ring-grape/30 focus-visible:outline-none sm:inline-flex lg:hidden xl:inline-flex"
            >
              Байланысу
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Мәзірді жабу" : "Мәзірді ашу"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-grape-soft text-grape-deep transition-colors hover:bg-grape-soft/70 lg:hidden"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Затемнение под мобильным меню */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={cn(
          "fixed inset-0 z-40 bg-ink/20 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      />

      {/* Мобильное меню — вне <header>: backdrop-blur шапки иначе ограничил бы fixed-панель её высотой */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-3 top-[5.25rem] bottom-3 z-40 overflow-y-auto rounded-[32px] bg-white shadow-soft ring-1 ring-grape/10 transition-all duration-300 sm:inset-x-5 lg:hidden",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0",
        )}
      >
        <nav className="flex min-h-full flex-col px-4 pt-4 pb-6" aria-label="Мобильді мәзір">
          <ul className="flex flex-col gap-1">
            {navItems.map((item, i) => (
              <li
                key={item.href}
                className={cn("transition-all duration-300", open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0")}
                style={{ transitionDelay: open ? `${60 + i * 40}ms` : "0ms" }}
              >
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-2xl px-5 py-4 text-xl font-bold transition-colors",
                    active === item.href ? "bg-grape-soft text-grape-deep" : "text-ink hover:bg-grape-soft/70",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contacts"
            onClick={() => setOpen(false)}
            className="mt-auto flex h-14 items-center justify-center rounded-full bg-grape text-lg font-bold text-white"
          >
            Байланысу
          </a>
          <p className="mt-4 text-center text-sm text-muted">
            {site.phone} · {site.hours}
          </p>
        </nav>
      </div>
    </>
  );
}
