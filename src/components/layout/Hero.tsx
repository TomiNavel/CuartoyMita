"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import intro from "@/public/intro.jpg";
import Link from "next/link";

import Image from "next/image";
import { useAnimation, motion } from "framer-motion";
import Animated from "./Animated";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import clsx from "clsx";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const animationControls = useAnimation();
  const isMobile = useMediaQuery(`(max-width: 768px)`);

  useEffect(() => {
    if (loaded) {
      animationControls.start("visible");
    }
  }, [loaded, animationControls]);

  const animationVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <section
      id="Hero"
      className="relative w-full h-screen bg-right bg-no-repeat bg-cover bg-neutral-900"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))`,
      }}
    >
      <div
        className={clsx(
          "absolute top-0 left-0 z-10 w-full h-full",
          isMobile
            ? "bg-gradient-to-r from-neutral-900 to-neutral-900/40"
            : "bg-gradient-to-r from-neutral-900"
        )}
      ></div>
      <motion.div
        initial={"hidden"}
        animate={animationControls}
        variants={animationVariants}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        <Image
          className="absolute top-0 left-0 object-cover w-full transition z-1"
          src={intro}
          fill
          onLoad={() => setLoaded(true)}
          priority
          placeholder="blur"
          alt="Bar Tienda"
        />
      </motion.div>
      <div className="container z-10 w-full h-full mx-auto">
        <div className="grid w-full h-full max-w-full mx-auto md:grid-cols-2">
          <div className="z-10 flex flex-col self-center justify-between h-full max-w-xs py-8 sm:max-w-sm md:max-w-xl">
            <div></div>
            <div>
              <Animated
                type="spring"
                delay={1.0}
                duration={0.8}
                variant={"top-sm"}
              >
                <Image src="/LogoWeb.svg" alt="Logo" width={150} height={150} />
              </Animated>
              <Animated
                as="h1"
                delay={0.4}
                variant={"top-sm"}
                className="mb-4 heading-first text-neutral-200"
              >
                Saborea el Arte
                <br />
                <span className="text-primary-500">de la Tradicion</span>
              </Animated>
              <Animated as="p" delay={0.6} variant="top-sm">
                Disfruta de una experiencia gastronómica única con nuestros
                cafés artesanales, dulces caseros, embutidos selectos, quesos
                curados y una cuidada selección de vinos. Cada sorbo y bocado
                reflejan la pasión por los ingredientes frescos y el cariño de
                las recetas tradicionales.
              </Animated>
              <Animated delay={0.9} className="flex flex-row gap-8 mt-8">
                <Link href="/menu#menu">
                  <Button variant="primary">Productos</Button>
                </Link>
              </Animated>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
