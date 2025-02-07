import AboutExtended from "@/app/cuartoymita/AboutExtended";
import PageWrapper from "@/components/layout/PageWrapper";
import { Testimonials } from "@/app/cuartoymita/Testimonials";

export default function AboutPage() {
  return (
    <PageWrapper className="bg-light-ivory">
      <AboutExtended />
      <Testimonials />
    </PageWrapper>
  );
}
