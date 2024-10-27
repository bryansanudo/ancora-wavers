import Section from "@/components/Section";
import Heading from "@/components/Heading";

import { Gradient } from "@/components/design/Services";

import { useRef, useState } from "react";

import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

import tha from "@/assets/tha.png";
import tha2 from "@/assets/tha2.jpeg";

import Button from "@/components/Button";

import TagLine from "@/components/Tagline";

const StoryAncora = () => {
  return (
    <Section
      id="dozo"
      customPaddings="pt-36 md:pt-28 md:pb-14"
      crosses
      crossesOffset="lg:translate-y-[1.25rem]"
    >
      <div className="container ">
        <div
          className={` max-w-[50rem] mx-auto mb-12 lg:mb-10 md:text-center bg-red-500`}
        >
          {<h2 className="h2">THC A Mushroom</h2>}
          {
            <TagLine className="mb-4 md:justify-center ">
              Indica - Sativa - Hibrida
            </TagLine>
          }
          {}
        </div>

        <div className="relative  ">
          <div className="relative z-1 grid gap-5 lg:grid-cols-1">
            {/* <div className=" relative min-h-[39rem] border border-n-1/10   rounded-3xl overflow-hidden">
              <div className="absolute inset-0 z-50">
                <img
                  src={tha2}
                  className="h-full w-full object-cover "
                  alt="robot"
                />
              </div>
            </div> */}

            <div className="p-4 flex flex-col justify-between border border-red-800  rounded-3xl overflow-hidden lg:min-h-[35rem] max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center ">
              <div className="py-6 px-2">
                <p className="body-2 mt-4 text-n-4 text-center">
                  Cada desechable está diseñado por expertos para ofrecer una
                  experiencia consistente y agradable en todo momento, teniendo
                  en cuenta la comodidad, cada Dozo + THCA contiene 2,5 gramos,
                  siendo elegante y portátil para usarlo en cualquier lugar.
                  <br />
                  Acepta el poder de la naturaleza y desbloquea un nuevo nivel.
                </p>
              </div>

              <div className="relative    border-n-1/10  rounded-xl overflow-hidden md:h-[24rem]">
                <img
                  src={tha}
                  className="w-full h-full object-contain"
                  alt="Selected"
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

export default StoryAncora;
