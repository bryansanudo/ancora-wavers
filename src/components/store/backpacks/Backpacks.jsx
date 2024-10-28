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
      title: "sour tangie patch sativa ",
      price: "180.000",
      img: dozo1,
    },
    {
      id: 2,
      title: "watermelon zkittlez sativa ",
      price: "180.000",
      img: dozo2,
    },
    {
      id: 2,
      title: "watermelon zkittlez sativa ",
      price: "180.000",
      img: dozo3,
    },
    {
      id: 2,
      title: "watermelon zkittlez sativa ",
      price: "180.000",
      img: dozo4,
    },
    {
      id: 1,
      title: "sour tangie patch sativa ",
      price: "180.000",
      img: dozo1,
    },
    {
      id: 2,
      title: "watermelon zkittlez sativa ",
      price: "180.000",
      img: dozo2,
    },
    {
      id: 2,
      title: "watermelon zkittlez sativa ",
      price: "180.000",
      img: dozo3,
    },
    {
      id: 2,
      title: "watermelon zkittlez sativa ",
      price: "180.000",
      img: dozo4,
    },
  ];
  return (
    <Section
      id="dozo"
      customPaddings="pt-8 md:pb-14"
      /* crosses */
      crossesOffset="lg:translate-y-[1.25rem]"
    >
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-center justify-center  rounded-xl overflow-hidden md:min-h-[24rem] mx-4 ">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  w-full gap-2   ">
            {dozo.map(({ id, img, title, price }) => (
              <div key={id}>
                <div className="border  bg-[#f4f4f4]   rounded-xl   flex  flex-col overflow-hidden">
                  <img src={img} alt="Shoes" />
                  <div className="flex flex-col bg-[#f2f2f2]  h-full   items-center justify-between text-center uppercase py-4">
                    <div className="h6 mx-4">{title}</div>
                    <div className="py-4">
                      <span className="mr-1">$</span>
                      {price}
                    </div>
                  </div>
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
