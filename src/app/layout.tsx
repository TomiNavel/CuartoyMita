import Header from "@/components/layout/Header";
import "../styles/main.scss";
import Footer from "@/components/layout/Footer";
import CookiesBanner from "../components/CookiesBanner";
import { Analytics } from "@vercel/analytics/next"

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
