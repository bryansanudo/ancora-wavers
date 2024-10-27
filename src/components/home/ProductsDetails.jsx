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

const ProductsDetails = () => {
  // Nombres, descripciones y rutas de imágenes para los productos
  const products = [
    {
      name: "Producto 1",
      description: "Descripción del Producto 1: Innovador y único en su tipo.",
      image: dozo1,
    },
    {
      name: "Producto 2",
      description:
        "Descripción del Producto 2: Perfecto para tus necesidades diarias.",
      image: dozo2,
    },
    {
      name: "Producto 3",
      description:
        "Descripción del Producto 3: Diseño y funcionalidad impecables.",
      image: dozo3,
    },
    {
      name: "Producto 4",
      description:
        "Descripción del Producto 4: Calidad y rendimiento superior.",
      image: dozo4,
    },
    {
      name: "Producto 5",
      description:
        "Descripción del Producto 5: La elección preferida de los usuarios.",
      image: dozo6,
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
          <div className="relative z-1 grid gap-5 lg:grid-cols-1">
            <div className="p-4 flex flex-col justify-between border border-n-1/10 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[35rem]">
              <div className="py-6 px-2">
                <ul className="flex items-center justify-between py-6">
                  {products.map((product, index) => (
                    <li
                      key={index}
                      onClick={() => setSelectedProduct(product)}
                      className={`cursor-pointer px-4 py-2 rounded-xl ${
                        selectedProduct.name === product.name
                          ? "bg-n-8 text-white"
                          : "text-n-4"
                      }`}
                    >
                      {product.name}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative border border-n-1/10 bg-n-8 rounded-xl overflow-hidden md:h-[24rem] p-4">
                <p className="text-white text-center mb-4">
                  {selectedProduct.description}
                </p>
                <img
                  src={selectedProduct.image}
                  className="w-full h-full object-contain rounded-xl"
                  alt={selectedProduct.name}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 w-full flex items-center justify-center">
            <a href="#productos">
              <Button className="flex">Descubre Dozo</Button>
            </a>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default ProductsDetails;
