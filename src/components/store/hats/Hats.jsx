import Section from "@/components/Section";

import hat1 from "@/assets/store/hats/hat1.webp";
import hat2 from "@/assets/store/hats/hat2.webp";
import hat3 from "@/assets/store/hats/hat3.webp";
import hat4 from "@/assets/store/hats/hat4.webp";
import { useEffect } from "react";

const Hats = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dozo = [
    {
      id: 1,
      title: "hat1",
      price: "90.000",
      img: hat1,
      priceOff: "$180.000",
    },
    {
      id: 2,
      title: "hat2",
      price: "90.000",
      img: hat2,
      priceOff: "$180.000",
    },
    {
      id: 3,
      title: "hat3",
      price: "90.000",
      img: hat3,
      priceOff: "$180.000",
    },
    {
      id: 4,
      title: "hat4",
      price: "90.000",
      img: hat4,
      priceOff: "$180.000",
    },
    {
      id: 5,
      title: "hat5",
      price: "90.000",
      img: hat1,
      priceOff: "$180.000",
    },
    {
      id: 6,
      title: "hat6",
      price: "90.000",
      img: hat2,
      priceOff: "$180.000",
    },
    {
      id: 7,
      title: "hat7",
      price: "90.000",
      img: hat3,
      priceOff: "$180.000",
    },
    {
      id: 8,
      title: "hat8",
      price: "90.000",
      img: hat4,
      priceOff: "$180.000",
    },
  ];

  return (
    <Section
      id="dozo"
      customPaddings="pt-8 md:pb-14"
      crossesOffset="lg:translate-y-[1.25rem]"
    >
      <div className="max-w-[1500px] mx-auto md:px-10">
        <div className="flex items-center justify-center rounded-xl overflow-hidden md:min-h-[24rem] mx-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 w-full gap-2">
            {dozo.map(({ id, img, title, price, priceOff }) => (
              <div
                key={id}
                className=" bg-[#f4f4f4] rounded-2xl flex flex-col overflow-hidden relative group cursor-pointer"
              >
                {/* Imagen con botón de Más información en hover */}
                <div className="relative  ">
                  <img
                    src={img}
                    alt="Producto"
                    className="w-full h-full object-cover  "
                  />

                  {/* Etiqueta de 30% de descuento */}
                  <div className="absolute top-4 left-4 bg-n-6 text-white text-xs font-bold px-2 py-1 rounded">
                    50% OFF
                  </div>

                  {/* Botón de Más información en hover */}
                  <div className="absolute inset-0 bg-n-6 bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="text-white bg-n-6 px-4 py-3 rounded-xl">
                      Más información
                    </button>
                  </div>
                </div>

                {/* Información del producto */}
                <div className=" bg-[] h-full pt-1  pl-1  text-[#6B6B6B]    ">
                  <div className="h6 mt-1  ">{title}</div>
                </div>
                <div className=" font-bold pl-1 flex gap-3 pb-6">
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

export default Hats;
