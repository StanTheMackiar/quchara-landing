import { SITE_URL } from "@/helpers/env";
import { COLORS } from "@/theme/colors";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: "./SF-Pro-Text-Regular.otf",
  variable: "--sf-pro",
  display: "swap",
});

const TITLE = 'Quchara - Almuerzos a tiempo'
const DESCRIPTION = "Programa tus almuerzos de la semana y recíbelos a una hora exacta."
const IMAGE_URL = 'https://firebasestorage.googleapis.com/v0/b/quchara-ed80e.appspot.com/o/Quchara%2Ficon_orange.png?alt=media&token=2f30d087-4b86-42b9-8b95-73f843d764e5'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  category: 'Restaurante',
  keywords: ['Quchara', 'Comida', 'Puntualidad', 'Restaurante', 'Bebida', 'Domicilio', 'Puntualidad', 'Cuchara', 'Almuerzo'],
  twitter: {
    title: TITLE,
    card: 'summary_large_image',
    site: TITLE,
  },
  robots: "index, follow",
  authors: {
    name: 'Quchara S.A.S.'
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    url: SITE_URL,
    siteName: TITLE,
    locale: 'es_ES',
    images: [
      {
        url: IMAGE_URL,
        width: 512,
        height: 512,
        alt: 'Logo Quchara'
      }
    ]
  },
};

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
