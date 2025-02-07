import Image from "next/image";
import Image1 from "@/public/about/about1.webp";
import Image2 from "@/public/about/about2.webp";
import Button from "@/components/ui/Button";
import Link from "next/link";
import ScrollAnimated from "./ScrollAnimated";

export default function About() {
  return (
    <>
      <section id="About" className="bg-light-ivory py-section">
        <ScrollAnimated variant="left" className="container container--sm">
          <div className="flex flex-col items-center gap-16 md:grid md:grid-cols-2">
            <ScrollAnimated
              variant="right"
              className="font-light text-neutral-800 sm:text-lg"
            >
              <h2 className="relative mb-4 heading-second text-neutral-900">
                <span className="relative z-10">Sobre Nosotros</span>
              </h2>

              <p className="mb-2 text-lg font-bold">
                Compromiso de Calidad y Tradición.
              </p>
              <p className="text-base">
              Cada producto que ofrecemos refleja nuestro esfuerzo por mantener la excelencia 
              en cada detalle. Desde la selección de ingredientes hasta la atención personalizada, 
              trabajamos para brindarte una experiencia acogedora donde el buen gusto y la 
              autenticidad van de la mano.
              </p>
              <div className="flex flex-row gap-4 mt-6">
                <Link href="/cuartoymita">
                  <Button variant="primary">Ampliar</Button>
                </Link>
              </div>
            </ScrollAnimated>
            <div className="grid grid-cols-2 gap-4">
              <div className="w-full mb-8 rounded-lg">
                <Image
                  className="relative z-10 object-cover w-full h-full rounded-custom"
                  width={284}
                  height={434}
                  src={ Image1 }
                  alt="Chef working on a dish"
                />
              </div>
              <div className="relative w-full mt-4 rounded-lg lg:mt-10">
                <Image
                  className="relative z-10 object-cover w-full h-full rounded-custom"
                  width={284}
                  height={434}
                  src={ Image2 }
                  alt=""
                />
              </div>
            </div>
          </div>
        </ScrollAnimated>
      </section>
    </>
  );
}
