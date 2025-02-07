import React from "react";
import CardTestimonial from "@/app/cuartoymita/CardTestimonial";

const testimonials = [
  {
    id: 0,
    name: "Ainara Robles",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "Venimos de vacaciones unos días a Oviedo desde Badajoz, preocupados por los desayunos que no contratamos en el hotel y a sabiendas de que en pocos lugares se desayuna como en Extremadura. Bien, este sitio ha estado muy por encima de las expectativas. La comida es excelente, el lugar es muy agradable. Pero aún más por  encima de todo eso, la atención, la amabilidad y el cariño con el que nos han atendido Marta y María nos ha hecho repetir desayuno tras desayuno. Encantados ",
  },
  {
    id: 1,
    name: "Angeles Fernández",
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "Voy a menudo a desayunar a esta cafetería . Es un lugar pequeñín pero muy acogedor . Tienen un café muy bueno , así como los pinchos y los dulces que tienen , bollería y bizcochos caseros . El de limón está de muerte . Tienen tienda : venden pan y algo de charcutería . Creo que conservas también. El trato es magnífico.",
  },
  {
    id: 2,
    name: "Eduardo Santos",
    avatarUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "Probablemente la mejor variedad de quesos en Asturias. Gran selección de quesos, vinos y cervezas. Es un lugar para pasar un buen rato y disfrutar con la familia, con los amigos o solo con el perro.",
  },
];

export const Testimonials = () => {
  return (
    <section id="Testimonials" className="bg-light-ivory py-section">
      <div className="container container--sm">
        <h2 className="mb-8 text-2xl font-semibold text-center capitalize font-brush lg:mb-12 text-neutral-800 lg:text-3xl">
          Algunas Opiniones
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map(({ id, content, name, avatarUrl }) => {
            return (
              <CardTestimonial
                key={id}
                content={content}
                name={name}
                avatarUrl={avatarUrl}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
