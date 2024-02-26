import { SEO } from "@/helpers/const/seo";
import { COLORS } from "@/theme/colors";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: "./SF-Pro-Text-Regular.otf",
  variable: "--sf-pro",
  display: "swap",
});

export const metadata: Metadata = SEO

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta
          key='apple-mobile-web-app-status-bar-style'
          name='apple-mobile-web-app-status-bar-style'
          content={COLORS.brand}
        />
        <meta
          key='msapplication-navbutton-color'
          name='msapplication-navbutton-color'
          content={COLORS.brand}
        />
         <meta key='msapplication-TileColor' name='msapplication-TileColor' content={COLORS.brand} />
         <meta key='theme-color' name='theme-color' content={COLORS.brand} />
      </head>
      <body className={myFont.variable}>
        {children}
      </body>
    </html>
  );
}
