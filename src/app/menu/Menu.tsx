"use client";

import TabsProduct from "@/app/menu/TabsProduct";
import MenuItem from "@/app/menu/MenuItem";
import { paddingBot, paddingTop } from "@/utils/props";
import clsx from "clsx";
import React from "react";
import useMenuTabsStore from "@/app/menu/useMenuTabsStore";
import menu from "@/app/menu/menuData";

type Props = {
  pb?: "md" | "xl";
  pt?: "md" | "xl";
};

export default function Menu({ pb = "md", pt = "md" }: Props) {
  const { tab, setTab } = useMenuTabsStore();

  return (
    <section
      id="Menu"
      className={clsx(
        "bg-light-ivory relative",
        paddingTop[pt],
        paddingBot[pb]
      )}
    >
      <div id="menu" className="absolute -top-20"></div>
      <div className="container container--xs">
        <div className="mx-auto">
          <h2 className="relative mb-4 text-4xl font-bold text-center font-brush text-neutral-900">
            <span className="relative z-10">Algunos productos</span>
          </h2>
        </div>

        <TabsProduct tab={tab} setTab={setTab} />

        {tab == 0 &&
          menu.cafes?.map(({ id, title, description }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
            />
          ))}
        {tab == 1 &&
          menu.infusiones.map(({ id, title, description }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
            />
          ))}
           {tab == 2 &&
          menu.embutidos?.map(({ id, title, description }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
            />
          ))}
        {tab == 3 &&
          menu.quesos.map(({ id, title, description }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
            />
          ))}
      </div>
    </section>
  );
}
