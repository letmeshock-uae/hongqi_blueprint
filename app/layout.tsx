import type { Metadata, Viewport } from "next";
import { GlassNavbar } from "@/components/shared/glass-navbar";
import { ActionDock } from "@/components/shared/action-dock";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hongqi | Premium Model Experience",
  description:
    "Explore Hongqi's prestigious lineup. Configure your dream vehicle, explore specifications, and book a test drive.",
  keywords: ["Hongqi", "luxury cars", "H9", "E-HS9", "test drive", "UAE"],
  openGraph: {
    title: "Hongqi | Premium Model Experience",
    description:
      "Explore Hongqi's prestigious lineup. Configure your dream vehicle and book a test drive.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <GlassNavbar />
        <main className="min-h-screen pt-16">{children}</main>
        <ActionDock />
        <footer className="border-t border-glass-stroke bg-surface px-6 py-16 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 border-b border-glass-stroke pb-12">
              <div className="lg:col-span-2">
                <span className="text-2xl font-bold tracking-tight text-foreground">
                  HONGQI
                </span>
                <p className="mt-4 max-w-xs text-sm text-muted">
                  Новый стандарт роскоши. Оцените слияние исторического мастерства и передовых инноваций.
                </p>
                <div className="mt-6 flex gap-4">
                  <a href="#" aria-label="VK" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-muted transition-colors hover:bg-white/10 hover:text-foreground">
                    <span className="font-bold">VK</span>
                  </a>
                  <a href="#" aria-label="Telegram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-muted transition-colors hover:bg-white/10 hover:text-foreground">
                    <span className="font-bold">TG</span>
                  </a>
                  <a href="#" aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-muted transition-colors hover:bg-white/10 hover:text-foreground">
                    <span className="font-bold">YT</span>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground">Модели</h4>
                <ul className="mt-4 flex flex-col gap-3 text-sm text-muted">
                  <li><Link href="/models/h9" className="hover:text-primary transition-colors">H9</Link></li>
                  <li><Link href="/models/e-hs9" className="hover:text-primary transition-colors">E-HS9</Link></li>
                  <li><Link href="/models" className="hover:text-primary transition-colors">Все модели</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground">Покупка</h4>
                <ul className="mt-4 flex flex-col gap-3 text-sm text-muted">
                  <li><Link href="/available" className="hover:text-primary transition-colors">В наличии</Link></li>
                  <li><Link href="/test-drive" className="hover:text-primary transition-colors">Тест-драйв</Link></li>
                  <li><Link href="/dealers" className="hover:text-primary transition-colors">Найти дилера</Link></li>
                  <li><Link href="/configure" className="hover:text-primary transition-colors">Конфигуратор</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground">О бренде</h4>
                <ul className="mt-4 flex flex-col gap-3 text-sm text-muted">
                  <li><Link href="/about" className="hover:text-primary transition-colors">История Hongqi</Link></li>
                  <li><Link href="/news" className="hover:text-primary transition-colors">Новости</Link></li>
                  <li><Link href="/contacts" className="hover:text-primary transition-colors">Контакты</Link></li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-muted md:flex-row">
              <p>&copy; {new Date().getFullYear()} Hongqi. Все права защищены.</p>
              <div className="flex gap-6">
                <Link href="/privacy" className="hover:text-foreground transition-colors">Политика конфиденциальности</Link>
                <Link href="/terms" className="hover:text-foreground transition-colors">Пользовательское соглашение</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
