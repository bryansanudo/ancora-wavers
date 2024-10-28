import Section from "@/components/Section";

import { useState } from "react";

import TagLine from "@/components/Tagline";

import fannypacks from "@/assets/fannypacks.jpg";
import complements from "@/assets/complements.jpg";
import iconBackpacks from "@/assets/headerProducts/backpacks.png";
import iconfannypacks from "@/assets/headerProducts/fannypacks.png";
import iconbucket from "@/assets/headerProducts/bucket.png";
import iconcomplements from "@/assets/headerProducts/complements.png";
import icontshirt from "@/assets/headerProducts/tshirt.png";
import iconpets from "@/assets/headerProducts/pets.png";

import { Link } from "react-router-dom";

const ProductsDetails = () => {
  // Nombres, descripciones y rutas de imágenes para los productos
  const products = [
    {
      icon: iconBackpacks,
      name: "Backpacks",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cupiditate saepe magni ex odit qui quod suscipit, magnam atque, sunt sequi culpa itaque et, laboriosam nihil possimus. Voluptate, dolores iste?",
      image: fannypacks,
      url: "/store/backpacks",
    },
    {
      icon: iconfannypacks,
      name: "Fannypacks",
      description:
        "Descripción del Producto 2: Perfecto para tus necesidades diarias.",
      image: fannypacks,
      url: "/store/fannypacks",
    },
    {
      icon: iconbucket,
      name: "Hats",
      description:
        "Descripción del Producto 4: Calidad y rendimiento superior.",
      image: fannypacks,
      url: "/store/hats",
    },
    {
      icon: iconcomplements,
      name: "Complementos",
      description:
        "Descripción del Producto 3: Diseño y funcionalidad impecables.",
      image: complements,
      url: "/store/complements",
    },
    {
      icon: icontshirt,
      name: "T-Shirt",
      description:
        "Descripción del Producto 4: Calidad y rendimiento superior.",
      image: fannypacks,
      url: "/store/tshirts",
    },
    {
      icon: iconpets,
      name: "Mascotas",
      description:
        "Descripción del Producto 4: Calidad y rendimiento superior.",
      image: fannypacks,
      url: "/store/pets",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <Section
      id="dozo"
      customPaddings="pt-36 md:pt-28 md:pb-14"
      /* crosses */
      crossesOffset="lg:translate-y-[1.25rem]"
    >
      <div className="container">
        <div className={`max-w-[50rem] mx-auto md:text-center`}>
          <h2 className="h2">Productos</h2>
          <TagLine className="mb-4 md:justify-center">tag line</TagLine>
          <p className="body-2 mt-4 text-n-4">Comprar por categoría</p>
        </div>

        <div className="relative">
          <div className="relative z-1 grid gap-5 lg:grid-cols-1  ">
            <div className="p-1 flex flex-col justify-between rounded-3xl overflow-hidden lg:min-h-[35rem]">
              <div className="py-6   ">
                <ul className="grid md:grid-cols-6 grid-cols-3 md:gap-[60px]     py-6   ">
                  {products.map((product, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center   flex-col mb-8 md:mb-0 cursor-pointer  "
                      onClick={() => setSelectedProduct(product)}
                    >
                      <img
                        src={product.icon}
                        alt=""
                        className="md:w-full w-[80%]"
                      />
                      <li
                        className={`cursor-pointer  mt-2   ${
                          selectedProduct.name === product.name
                            ? "md:text-[16px] text-[12px] border-b border-gray-500"
                            : "md:text-[16px] text-[12px]"
                        }`}
                      >
                        {product.name}
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
              <div className="grid md:grid-cols-6 grid-cols-1 items-center justify-center shadow-sm shadow-gray-600 rounded-xl overflow-hidden md:h-[24rem]">
                <div className="col-span-3 md:col-span-2 mb-3 h-[24rem]   w-full md:rounded-none shadow-sm shadow-gray-600 md:shadow-[#f2f2f2]">
                  <img
                    src={selectedProduct.image}
                    className="w-full h-full object-cover"
                    alt={selectedProduct.name}
                  />
                </div>
                <div className="col-span-3 md:col-span-4  xl:mx-40 flex flex-col items-center justify-center text-center mb-4 p-4 text-n-4">
                  {selectedProduct.description}
                  <br className="pt-2" />
                  {selectedProduct.description}
                  <div className="mt-10">
                    <Link to={selectedProduct.url}>
                      <button className="w-[200px] shadow-sm shadow-gray-600 hover:shadow-red-500 p-2 rounded-xl">
                        Todos los productos
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  <Gradient /> */}
        </div>
      </div>
    </Section>
  );
};

export default ProductsDetails;
