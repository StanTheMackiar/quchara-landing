import { Metadata } from "next";
import { SITE_URL } from "../env";

const SEO_TITLE = 'Quchara - Almuerzos a tiempo'
const SEO_DESCRIPTION = "Programa tus almuerzos y recíbelos a una hora exacta. Si llegamos tarde, te pagamos."
const SEO_IMAGE_URL = 'https://firebasestorage.googleapis.com/v0/b/quchara-ed80e.appspot.com/o/Quchara%2Ficon_orange.png?alt=media&token=2f30d087-4b86-42b9-8b95-73f843d764e5'

const SEO: Metadata = {
  title: SEO_TITLE,
  metadataBase: new URL('https://quchara.com'),
  alternates: {
    canonical: '/',
  },
  description: SEO_DESCRIPTION,
  category: 'Restaurante',
  keywords: ['Quchara', 'Comida', 'Puntualidad', 'Restaurante', 'Bebida', 'Domicilio', 'Puntualidad', 'Cuchara', 'Almuerzo'],
  twitter: {
    title: SEO_TITLE,
    card: 'summary_large_image',
    site: SEO_TITLE,
    images: SEO_IMAGE_URL,
  },
  robots: "index, follow",
  authors: {
    name: 'Quchara S.A.S.'
  },
  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    type: 'website',
    url: SITE_URL,
    siteName: SEO_TITLE,
    locale: 'es_ES',
    images: [
      {
        url: SEO_IMAGE_URL,
        width: 512,
        height: 512,
        alt: 'Logo Quchara'
      }
    ]
  },
};



export { SEO, SEO_DESCRIPTION, SEO_IMAGE_URL, SEO_TITLE };

