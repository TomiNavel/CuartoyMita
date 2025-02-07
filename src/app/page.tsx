import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";
import Contact from "@/app/contacto/Contact";
import Products from "@/app/menu/Products";
import Categories from "@/components/layout/Categories";
import DividerSharp from "@/components/layout/DividerSharp";
import PageWrapper from "@/components/layout/PageWrapper";

export default function Home() {
  return (
    <PageWrapper className="overflow-x-hidden">
      <Hero />
      <Categories pt="xl" />
      <About />
      <DividerSharp />
      <Products />
      <Contact />
    </PageWrapper>
  );
}
