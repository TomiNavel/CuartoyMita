import Header from "@/components/layout/Header";
import "../styles/main.scss";
import Footer from "@/components/layout/Footer";
import CookiesBanner from "../components/CookiesBanner";
import Script from "next/script";

export const metadata = {
  title: "Cuarto y Mita",
  description: "Cuarto y Mita",
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
    <html lang="en">
      <head>
        <Script
          src="https://stats.tominavel.com/umami.js"
          data-website-id="0785b251-7bf9-4338-bf60-8e1c1b9b1a32"
          strategy="afterInteractive"
        />
      </head>
      <body className="overflow-x-hidden">
        <Header />
        {children}
        <CookiesBanner />
        <Footer />
      </body>
    </html>
  );
}
