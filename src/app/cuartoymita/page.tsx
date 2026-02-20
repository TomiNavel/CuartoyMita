import AboutExtended from "@/app/cuartoymita/AboutExtended";
import PageWrapper from "@/components/layout/PageWrapper";
import { Testimonials } from "@/app/cuartoymita/Testimonials";

export const metadata = {
  title: "Nuestra Historia - Cuarto y Mita",
  description: "Conoce la historia y los valores de Cuarto y Mita, un café con pasión por los ingredientes frescos y las recetas tradicionales.",
  alternates: { canonical: "/cuartoymita" },
};

export default function AboutPage() {
  return (
    <PageWrapper className="bg-light-ivory">
      <AboutExtended />
      <Testimonials />
    </PageWrapper>
  );
}
