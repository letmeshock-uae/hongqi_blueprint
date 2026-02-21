import type { Metadata, Viewport } from "next";
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
        {children}
      </body>
    </html>
  );
}
