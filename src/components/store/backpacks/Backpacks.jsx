import Section from "@/components/Section";
import { Gradient } from "@/components/design/Services";
import { useState } from "react";
import Button from "@/components/Button";
import TagLine from "@/components/Tagline";

import dozo1 from "@/assets/dozo/dozo1.png";
import dozo2 from "@/assets/dozo/dozo2.png";
import dozo3 from "@/assets/dozo/dozo3.png";
import dozo4 from "@/assets/dozo/dozo4.png";
import dozo6 from "@/assets/dozo/dozo6.png";
import backpacks from "@/assets/backpacks.jpg";
import fannypacks from "@/assets/fannypacks.jpg";
import complements from "@/assets/complements.jpg";

const Backpacks = () => {
  const dozo = [
    {
      id: 1,
      title: "sour tangie patch sativa",
      price: "90.000",
      img: dozo1,
      priceOff: "$180.000",
    },
    {
      id: 2,
      title: "watermelon zkittlez sativa",
      price: "90.000",
      img: dozo2,
      priceOff: "$180.000",
    },
    {
      id: 3,
      title: "watermelon zkittlez sativa",
      price: "90.000",
      img: dozo3,
      priceOff: "$180.000",
    },
    {
      id: 4,
      title: "watermelon zkittlez sativa",
      price: "90.000",
      img: dozo4,
      priceOff: "$180.000",
    },
  ];

  return (
    <Section
      id="dozo"
      customPaddings="pt-8 md:pb-14"
      crossesOffset="lg:translate-y-[1.25rem]"
    >
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-center justify-center rounded-xl overflow-hidden md:min-h-[24rem] mx-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-2">
            {dozo.map(({ id, img, title, price, priceOff }) => (
              <div
                key={id}
                className=" bg-[#f4f4f4] rounded-2xl flex flex-col overflow-hidden relative group"
              >
                {/* Imagen con botón de Más información en hover */}
                <div className="relative">
                  <img
                    src={img}
                    alt="Producto"
                    className="w-full h-full object-cover  "
                  />

                  {/* Etiqueta de 30% de descuento */}
                  <div className="absolute top-2 left-2 bg-n-6 text-white text-xs font-bold px-2 py-1 rounded">
                    30% OFF
                  </div>

                  {/* Botón de Más información en hover */}
                  <div className="absolute inset-0 bg-n-6 bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="text-white bg-blue-500 px-4 py-2 rounded-md">
                      Más información
                    </button>
                  </div>
                </div>

                {/* Información del producto */}
                <div className=" bg-white h-full  text-[#6B6B6B]    ">
                  <div className="h6 mt-1 ">{title}</div>
                </div>
                <div className="bg-white font-bold flex gap-3">
                  <div>
                    <span className="mr-1 ">$</span>
                    {price}
                  </div>
                  <div className="text-gray-400 line-through ">{priceOff}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Backpacks;
