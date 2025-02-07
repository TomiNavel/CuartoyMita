"use client";

import React from "react";
import SocialLink from "@/app/contacto/SocialLink";
import Link from "next/link";
import ScrollAnimated from "@/components/layout/ScrollAnimated";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  const isMobile = useMediaQuery(`(max-width: 768px)`);

  const address = ["Matemático Pedrayes 5", "33004 Oviedo", "Asturias"];
  const phone = "984 08 51 59";
  const email = "info@cuartoymita.com";

  const MapEmbed = (
    <iframe
      className="w-full"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.6697158616157!2d-5.858322358877987!3d43.363018871237664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd368cfd4c45dadb%3A0x7154e97c264cc0be!2sCuarto%20y%20Mit%C3%A1!5e0!3m2!1ses!2ses!4v1738758212771!5m2!1ses!2ses"
      width="800"
      height="600"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );

  return (
    <section id="Contact" className="bg-neutral-900 py-section">
      <ScrollAnimated className="container container--sm">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6">
            <h2 className="text-center lg:text-left text-neutral-100 heading-second">
              <span className="text-primary-500">Contacta</span> <br /> para más información
            </h2>

            {/* Dirección */}
            <address className="flex flex-col items-center mt-6 space-y-8 lg:items-start lg:mt-8">
            <ContactInfo icon={<MapPinIcon className="w-6 h-6 text-primary-500" />}>
              {address.map((line, index) => (
                <span key={index} className="truncate w-72 text-neutral-400">
                  {line}
                </span>
              ))}
            </ContactInfo>

              {/* Teléfono */}
              <ContactInfo icon={<PhoneIcon className="w-5 h-5 text-primary-500" />}>
                <Link className="truncate text-neutral-400" href={`tel:${phone}`}>
                  {phone}
                </Link>
              </ContactInfo>

              {/* Email */}
              <ContactInfo icon={<EnvelopeIcon className="w-5 h-5 text-primary-500" />}>
                <Link className="truncate w-fit text-neutral-400" href={`mailto:${email}`}>
                  {email}
                </Link>
              </ContactInfo>
            </address>

            {/* Redes sociales */}
            <section className="mt-6 ">
              <p className="mb-2 text-center lg:text-left text-neutral-300">Síguenos</p>
              <div className="flex items-center justify-center gap-2 lg:justify-start">
                <SocialLink variant="facebook" url="https://facebook.com/" />
                <SocialLink variant="instagram" url="https://instagram.com/" />
                <SocialLink variant="twitter" url="https://twitter.com/" />
              </div>
            </section>
          </div>

          {/* Mapa */}
          <div className="mt-8 lg:w-1/2 lg:mx-6">{MapEmbed}</div>
        </div>
      </ScrollAnimated>
    </section>
  );
}

function ContactInfo({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex items-start">{icon}</div>
      <div className="flex flex-col gap-1 text-left">{children}</div>
    </div>
  );
}




