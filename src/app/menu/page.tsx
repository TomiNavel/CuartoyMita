import PageWrapper from "@/components/layout/PageWrapper";
import Products from "@/app/menu/Products";
import Menu from "@/app/menu/Menu";

export default function MenuPage() {
  return (
    <PageWrapper className="bg-neutral-900">
      <Products pb="xl" />
      <Menu pt="xl" pb="xl" />
    </PageWrapper>
  );
}

