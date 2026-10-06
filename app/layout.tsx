import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { site } from "@/lib/site";
import { findPublicFile } from "@/lib/files";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Logo } from "@/components/layout/Logo";
import "./globals.css";

// Мягкий округлый шрифт с поддержкой казахских букв (cyrillic-ext: ә, ғ, қ, ң, ө, ұ, ү, һ, і)
const nunito = Nunito({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — Алматы, Айгерім-2`,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    locale: "kk_KZ",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFDF4",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const logoSrc = findPublicFile(site.logoCandidates);

  return (
    <html lang="kk" className={nunito.variable}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:font-bold focus:text-grape focus:shadow-card"
        >
          Негізгі мазмұнға өту
        </a>
        <Header logo={<Logo src={logoSrc} className="h-12 lg:h-10" priority />} />
        <main id="main" className="overflow-x-clip">{children}</main>
        <Footer logo={<Logo src={logoSrc} className="h-14" />} />
      </body>
    </html>
  );
}
