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

const ProductsDetails = () => {
  // Nombres, descripciones y rutas de imágenes para los productos
  const products = [
    {
      name: "Backpacks",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cupiditate saepe magni ex odit qui quod suscipit, magnam atque, sunt sequi culpa itaque et, laboriosam nihil possimus. Voluptate, dolores iste?",
      image: backpacks,
    },
    {
      name: "Fannypacks",
      description:
        "Descripción del Producto 2: Perfecto para tus necesidades diarias.",
      image: fannypacks,
    },
    {
      name: "Complementos",
      description:
        "Descripción del Producto 3: Diseño y funcionalidad impecables.",
      image: complements,
    },
    {
      name: "Happy Dogs",
      description:
        "Descripción del Producto 4: Calidad y rendimiento superior.",
      image: dozo4,
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <Section
      id="dozo"
      customPaddings="pt-36 md:pt-28 md:pb-14"
      crosses
      crossesOffset="lg:translate-y-[1.25rem]"
    >
      <div className="container">
        <div className={`max-w-[50rem] mx-auto md:text-center`}>
          <h2 className="h2">DOZO</h2>
          <TagLine className="mb-4 md:justify-center">
            Indica - Sativa - Hibrida
          </TagLine>
          <p className="body-2 mt-4 text-n-4">
            Conoce toda la variedad de productos y la nueva innovación Mushroom
            de diferentes gramos.
          </p>
        </div>

        <div className="relative">
          <div className="relative z-1 grid gap-5 lg:grid-cols-1  ">
            <div className="p-4 flex flex-col justify-between rounded-3xl overflow-hidden lg:min-h-[35rem]">
              <div className="py-6   ">
                <ul className="flex flex-col md:flex-row items-center justify-between py-6 shadow-sm rounded-xl shadow-gray-600">
                  {products.map((product, index) => (
                    <li
                      key={index}
                      onClick={() => setSelectedProduct(product)}
                      className={`cursor-pointer px-4 py-2 rounded-xl ${
                        selectedProduct.name === product.name
                          ? "bg-n-8 text-red-500"
                          : "text-n-4"
                      }`}
                    >
                      {product.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid md:grid-cols-6 grid-cols-1 items-center justify-center shadow-sm shadow-gray-600 rounded-xl overflow-hidden md:h-[24rem]">
                <div className="col-span-3 md:col-span-2 h-[24rem]  w-full md:rounded-none">
                  <img
                    src={selectedProduct.image}
                    className="w-full h-full object-cover"
                    alt={selectedProduct.name}
                  />
                </div>
                <div className="col-span-3 md:col-span-4  md:mx-40 flex items-center justify-center text-center mb-4 p-4">
                  {selectedProduct.description}
                  <br className="pt-2" />
                  {selectedProduct.description}
                </div>
              </div>
              ----
            </div>
          </div>

          {/*  <Gradient /> */}
        </div>
      </div>
    </Section>
  );
};

export default ProductsDetails;
