import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: "./SF-Pro-Text-Regular.otf",
  variable: "--sf-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quchara - Almuerzos a tiempo",
  description: "Programa tus almuerzos de la semana y recíbelos a una hora exacta.",
  category: 'Restaurante',
  keywords: ['Quchara', 'Comida', 'Restaurante', 'Bebida', 'Domicilio', 'Puntualidad', 'Cuchara', 'Almuerzo'],
  robots: "index, follow",
  authors: {
    name: 'Quchara S.A.S.'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={myFont.variable}>
        {children}
      </body>
    </html>
  );
}
