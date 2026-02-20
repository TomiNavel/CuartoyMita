import Header from "@/components/layout/Header";
import "../styles/main.scss";
import Footer from "@/components/layout/Footer";
import CookiesBanner from "../components/CookiesBanner";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Cuarto y Mita | Café en Oviedo",
  description: "Cafés artesanales, dulces caseros, embutidos selectos y quesos curados en el corazón de Oviedo. Saborea el arte de la tradición en Cuarto y Mita.",
  metadataBase: new URL("https://www.cuartoymita.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cuarto y Mita | Café en Oviedo",
    description: "Cafés artesanales, dulces caseros, embutidos selectos y quesos curados en el corazón de Oviedo. Saborea el arte de la tradición en Cuarto y Mita.",
    url: "https://www.cuartoymita.com",
    siteName: "Cuarto y Mita",
    images: [
      {
        url: "/intro.webp",
        width: 1200,
        height: 630,
        alt: "Cuarto y Mita - Café en Oviedo",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuarto y Mita | Café en Oviedo",
    description: "Cafés artesanales, dulces caseros, embutidos selectos y quesos curados en el corazón de Oviedo.",
    images: ["/intro.webp"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="overflow-x-hidden">
        <Header />
        {children}
        <Analytics />
        <CookiesBanner />
        <Footer />
      </body>
    </html>
  );
}
