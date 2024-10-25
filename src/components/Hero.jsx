import curve from "@/assets/curve.png";
import heros from "@/assets/hero.png";

import Section from "@/components/Section";
import { BackgroundCircles, Gradient } from "@/components/design/Hero";
import { Gradient as X } from "@/components/design/Services";

import { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";

import pink from "@/assets/diamond-pink.png";
import blue from "@/assets/diamond-blue.png";
import yellow from "@/assets/diamond-yellow.png";
const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <>
      <Section className="pt-[8rem] -mt-[2.5rem]" id="hero">
        <div className="container relative   " ref={parallaxRef}>
          <div className="relative z-50 max-w-[62rem] mx-auto text-center  ">
            <ScrollParallax isAbsolutelyPositioned>
              <div className="hidden xl:flex absolute top-[10rem] -left-[14rem]">
                <img src={pink} className="w-[25%] " alt="" />
              </div>
            </ScrollParallax>
            <ScrollParallax isAbsolutelyPositioned>
              <div className="hidden xl:flex absolute top-[40rem] -right-[3rem]">
                <img src={pink} className="w-[25%] " alt="" />
              </div>
            </ScrollParallax>
            <ScrollParallax isAbsolutelyPositioned>
              <div className="hidden xl:flex absolute top-[28rem] -left-[7rem]">
                <img src={blue} className="w-[25%]" alt="" />
              </div>
            </ScrollParallax>
            <ScrollParallax isAbsolutelyPositioned>
              <div className="hidden xl:flex absolute top-[9rem] -right-[7rem]">
                <img src={blue} className="w-[25%]" alt="" />
              </div>
            </ScrollParallax>
            <ScrollParallax isAbsolutelyPositioned>
              <div className="hidden xl:flex absolute top-[18rem] -right-[20rem]">
                <img src={yellow} className="w-[25%]" alt="" />
              </div>
            </ScrollParallax>
            <ScrollParallax isAbsolutelyPositioned>
              <div className="hidden xl:flex absolute top-[18rem] left-[8rem]">
                <img src={yellow} className="w-[25%]" alt="" />
              </div>
            </ScrollParallax>

            <h1 className="h2 mb-6">
              Explora las poisibilidades con &nbsp;
              <span className="inline-block relative">
                Delta Land{" "}
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            </h1>
          </div>
          <X />
          <div className="relative max-w-[24rem] mx-auto    ">
            <div className="relative z-1  p-0.5 rounded-2xl bg-conic-gradient">
              <div className="relative  bg-n-8 rounded-[1rem]">
                <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

                <div>
                  <img src={heros} className="rounded-b-xl   " alt="AI" />
                </div>
              </div>

              <Gradient />
            </div>

            <BackgroundCircles />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Hero;
