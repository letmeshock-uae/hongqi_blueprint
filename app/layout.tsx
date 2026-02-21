import type { Metadata, Viewport } from "next";
import { GlassNavbar } from "@/components/shared/glass-navbar";
import { ActionDock } from "@/components/shared/action-dock";
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
        <footer className="border-t border-glass-stroke px-6 py-12 md:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <p className="text-sm font-bold tracking-tight text-foreground">
                HONGQI
              </p>
              <p className="mt-1 text-xs text-muted">
                Premium Automotive Experience
              </p>
            </div>
            <p className="text-xs text-muted">
              &copy; {new Date().getFullYear()} Hongqi. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
