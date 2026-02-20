import PageWrapper from "@/components/layout/PageWrapper";
import Products from "@/app/menu/Products";
import Menu from "@/app/menu/Menu";

export const metadata = {
  title: "Menú - Cuarto y Mita",
  description: "Descubre nuestra selección de cafés artesanales, infusiones, embutidos y quesos curados. El sabor de la tradición en Oviedo.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return (
    <PageWrapper className="bg-neutral-900">
      <Products pb="xl" />
      <Menu pt="xl" pb="xl" />
    </PageWrapper>
  );
}

