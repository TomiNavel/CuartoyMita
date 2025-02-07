"use client";

import Image1 from "@/public/products/cafesIntro.webp";
import Image2 from "@/public/products/infIntro.webp";
import Image3 from "@/public/products/embutidosIntro.webp";
import Image4 from "@/public/products/quesosIntro.webp";
import clsx from "clsx";
import { paddingBot, paddingTop } from "@/utils/props";
import ScrollAnimated from "./ScrollAnimated";
import CategoryTile from "../ui/CategoryTile";
import Link from "next/link";
import useMenuTabsStore from "../../app/menu/useMenuTabsStore";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type Props = {
  pb?: "md" | "xl";
  pt?: "md" | "xl";
};

export default function Categories({ pb = "md", pt = "md" }: Props) {
  const { setTab } = useMenuTabsStore();
  const isMobile = useMediaQuery(`(max-width: 1280px)`);

  return (
    <section
      id="Categories"
      className={clsx("bg-neutral-100", paddingTop[pt], paddingBot[pb])}
    >
      <ScrollAnimated className={clsx(!isMobile && "container container--sm")}>
        <div className="grid gap-2 sm:gap-6 md:gap-2 lg:gap-6 bento">
          <CategoryTile
            tabId={0}
            title={"Cafés"}
            imgSrc={Image1}
            width={384}
            height={384}
          />
          <CategoryTile
            tabId={1}
            span={2}
            title={"Infusiones"}
            imgSrc={Image2}
            width={384}
            height={682}
          />
          <CategoryTile
            tabId={2}
            title={"Embutidos"}
            imgSrc={Image3}
            width={384}
            height={256}
          />
          <CategoryTile
            tabId={3}
            title={"Quesos"}
            imgSrc={Image4}
            width={384}
            height={256}
          />
          <div className="relative w-full h-full bg-primary-500 text-neutral-100">
            <div className="flex flex-col justify-center h-full mx-auto text-base font-medium sm:text-lg w-fit sm:mx-0 sm:px-4 lg:px-8 xl:px-16 sm:gap-2 md:gap-0 xl:gap-2 xl:text-2xl">
              <Link href={"/menu#menu"} className="hover:underline w-fit">
                <span onClick={() => setTab(0)}>Cafés</span>
              </Link>
              <Link href={"/menu#menu"} className="hover:underline w-fit">
                <span onClick={() => setTab(1)}>Infusiones</span>
              </Link>
              <Link href={"/menu#menu"} className="hover:underline w-fit">
                <span onClick={() => setTab(2)}>Embutidos</span>
              </Link>
              <Link href={"/menu#menu"} className="hover:underline w-fit">
                <span onClick={() => setTab(3)}>Quesos</span>
              </Link>
            </div>
          </div>
        </div>
      </ScrollAnimated>
    </section>
  );
}
