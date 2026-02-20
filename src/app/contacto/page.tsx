import Contact from "@/app/contacto/Contact";
import PageWrapper from "@/components/layout/PageWrapper";

export const metadata = {
  title: "Contacto - Cuarto y Mita",
  description: "Encuéntranos en Matemático Pedrayes 5, Oviedo. Llámanos o escríbenos para más información sobre Cuarto y Mita.",
  alternates: { canonical: "/contacto" },
};

export default function ContactPage() {
  return (
    <PageWrapper className="bg-light-ivory">
      <Contact />
    </PageWrapper>
  );
}
