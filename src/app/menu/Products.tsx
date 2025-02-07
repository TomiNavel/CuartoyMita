"use client";
import React from "react";
import Product from "@/app/menu/Product";
import Cafes from "@/public/products/cafes.webp";
import Infusiones from "@/public/products/infusiones.webp";
import Embutidos from "@/public/products/embutidos.webp";
import Quesos from "@/public/products/quesos.webp";
import ScrollAnimated from "@/components/layout/ScrollAnimated";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { paddingBot, paddingTop } from "@/utils/props";
import clsx from "clsx";

const products = [
  {
    id: 1,
    imgScr: Cafes,
    title: "Cafés",
    description: "Disfruta del aroma y la intensidad de nuestros cafés, preparados con granos seleccionados para ofrecerte el mejor sabor en cada sorbo.",
  },
  { 
    id: 2,
    imgScr: Infusiones,
    title: "Infusiones",
    description:
      "Sumérgete en un momento de calma con nuestra selección de infusiones, combinando hierbas y especias para una experiencia reconfortante.",
  },
  {
    id: 3,
    imgScr: Embutidos,
    title: "Embutidos",
    description:
      "El auténtico sabor de nuestra tierra en una selección de embutidos curados con paciencia y tradición, perfectos para compartir.",
  },
  {
    id: 4,
    imgScr: Quesos,
    title: "Quesos",
    description: "Descubre una cuidada variedad de quesos artesanos, desde los más suaves hasta los más intensos, ideales para los amantes del buen sabor.",
  },
];

type Props = {
  pb?: "md" | "xl";
  pt?: "md" | "xl";
};

export default function Products({ pb = "md", pt = "md" }: Props) {
  return (
    <section
      id="Products"
      className={clsx("bg-neutral-900 featured-section", paddingTop[pt], paddingBot[pb])}
    >
      <ScrollAnimated className="container container--sm">
        <div className="mx-auto">
          <section className="mt-8 space-y-8 lg:mt-12">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              navigation={true}
              modules={[Navigation]}
            >
              {products.map(({ id, imgScr, title, description }) => {
                return (
                  <SwiperSlide key={id}>
                    <Product
                      imgSrc={imgScr}
                      title={title}
                      description={description}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </section>
        </div>
      </ScrollAnimated>
    </section>
  );
}
