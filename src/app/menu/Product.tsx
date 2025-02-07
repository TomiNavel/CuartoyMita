import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
  imgSrc: StaticImageData | string;
};

export default function Product({
  title,
  imgSrc,
  description,
}: Props) {
  return (
    <section className="gap-8 lg:gap-16 lg:flex lg:items-center">
      <div className="lg:w-1/2 ">
        <h2 className="mb-3 text-2xl font-semibold capitalize text-neutral-200 ">
          {title}
        </h2>
        <p className="mb-5">{description}</p>
      </div>

      <div className="mt-4 lg:w-1/2 lg:mt-0">
        <Image
          className="object-cover w-full h-64 rounded-lg md:h-96"
          width={764}
          height={955}
          src={imgSrc}
          loading="lazy"
          alt={title}
        />
      </div>
    </section>
  );
}
