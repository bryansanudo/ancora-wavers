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
import iconBackpacks from "@/assets/headerProducts/backpacks.png";
import iconfannypacks from "@/assets/headerProducts/fannypacks.png";
import iconbucket from "@/assets/headerProducts/bucket.png";
import iconcomplements from "@/assets/headerProducts/complements.png";
import icontshirt from "@/assets/headerProducts/tshirt.png";
import iconpets from "@/assets/headerProducts/pets.png";

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
      icon: iconBackpacks,
    },
    {
      name: "Fannypacks",
      description:
        "Descripción del Producto 2: Perfecto para tus necesidades diarias.",
      image: fannypacks,
      url: "/store/fannypacks",
      icon: iconfannypacks,
    },
    {
      name: "Hats",
      description:
        "Descripción del Producto 2: Perfecto para tus necesidades diarias.",
      image: fannypacks,
      url: "/store/fannypacks",
      icon: iconbucket,
    },
    {
      name: "Complementos",
      description:
        "Descripción del Producto 3: Diseño y funcionalidad impecables.",
      image: complements,
      url: "/store/complements",
      icon: iconcomplements,
    },
    {
      name: "T-Shirt",
      description:
        "Descripción del Producto 3: Diseño y funcionalidad impecables.",
      image: complements,
      url: "/store/complements",
      icon: icontshirt,
    },
    {
      name: "Mascotas",
      description:
        "Descripción del Producto 4: Calidad y rendimiento superior.",
      image: dozo4,
      iconpets,
      icon: iconpets,
    },
  ];

  return (
    <Section
      id="dozo"
      customPaddings="pt-10 "
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

        <div className="py-6   ">
          <ul className="grid md:grid-cols-6 grid-cols-3 md:gap-[60px]  gap-2   py-6   ">
            {products.map((product, index) => (
              <Link to={product.url} key={index}>
                <div className="flex items-center justify-center flex-col mb-8 md:mb-0 cursor-pointer  ">
                  <img
                    src={product.icon}
                    alt=""
                    className="md:w-full w-[80%]"
                  />
                  <li
                    className={`cursor-pointer mt-2 md:text-[16px] text-[12px] text-center`}
                  >
                    {product.name}
                  </li>
                </div>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default HeaderProducts;
