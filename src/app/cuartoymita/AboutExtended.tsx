import Image from "next/image";
import calidad from "@/public/cuartoymita/calidad.webp";
import encuentro from "@/public/cuartoymita/encuentro.webp";

export default function AboutExtended() {
  return (
    <>
      <section id="AboutExtended" className="bg-light-ivory py-section">
        <div className="container container--xs">
          <div className="grid gap-4 md:grid-cols-2">
            <Image
              className="self-end w-full h-fit justify-self-end rounded-custom--lg"
              width={384}
              height={256}
              src={calidad}
              loading="lazy"
              alt=""
            />

            <div className="p-8 bg-white lg:p-16 rounded-custom--lg">
              <h2 className="mb-4 heading-second text-neutral-900">
                Calidad
              </h2>
              <div className="space-y-4 text-neutral-600 ">
                <p>
                Nuestro compromiso es con la calidad y la tradición. 
                 Seleccionamos granos de café cuidadosamente tostados y elaboramos 
                 cada bebida con el equilibrio perfecto entre técnica y pasión. 
                 Acompañamos nuestro café con una selección de repostería artesanal y 
                 opciones gastronómicas diseñadas para disfrutar en cualquier momento del día.
                </p>
              </div>
            </div>

            <div className="p-8 bg-white lg:p-16 rounded-custom--lg">
              <h2 className="mb-4 heading-second text-neutral-900">
                Encuentro
              </h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                CuartoyMita no es solo café. Es un punto de encuentro, un refugio en la rutina 
                diaria, un lugar donde las conversaciones fluyen y cada visita se convierte 
                en un momento especial.
                Te invitamos a descubrir la esencia del buen café y a hacer de CuartoyMita 
                tu rincón favorito.
                </p>
              </div>
            </div>
            <Image
              className="self-start w-full h-fit justify-self-start rounded-custom--lg"
              width={384}
              height={256}
              src={encuentro}
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
