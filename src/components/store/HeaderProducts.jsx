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

import { Link } from "react-router-dom";

const HeaderProducts = () => {
  // Nombres, descripciones y rutas de imágenes para los productos
  const products = [
    {
      name: "Backpacks",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cupiditate saepe magni ex odit qui quod suscipit, magnam atque, sunt sequi culpa itaque et, laboriosam nihil possimus. Voluptate, dolores iste?",
      image: backpacks,
      url: "/store/backpacks",
    },
    {
      name: "Fannypacks",
      description:
        "Descripción del Producto 2: Perfecto para tus necesidades diarias.",
      image: fannypacks,
      url: "/store/fannypacks",
    },
    {
      name: "Complementos",
      description:
        "Descripción del Producto 3: Diseño y funcionalidad impecables.",
      image: complements,
      url: "/store/complements",
    },
    {
      name: "Happy Dogs",
      description:
        "Descripción del Producto 4: Calidad y rendimiento superior.",
      image: dozo4,
    },
  ];

  return (
    <Section
      id="dozo"
      customPaddings="pt-36 md:pt-28 "
      /* crosses */
      crossesOffset="lg:translate-y-[1.25rem]"
    >
      <div className="container">
        <div className={`max-w-[50rem] mx-auto md:text-center`}>
          <h2 className="h2">Productos</h2>
          <TagLine className="mb-4 md:justify-center">tag line</TagLine>
          <p className="body-2 mt-4 text-n-4">
            Conoce toda la variedad de productos y nuestras nuevas innovaciónes
          </p>
        </div>

        <div className="pt-6 px-4  ">
          <ul className="flex flex-col md:flex-row items-center justify-between py-6 shadow-sm rounded-xl shadow-gray-600">
            {products.map((product, index) => (
              <li key={index} className={`cursor-pointer  py- mx-10 `}>
                <Link to={product.url}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default HeaderProducts;
