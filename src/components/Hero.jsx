import curve from "@/assets/curve.png";
import heros from "@/assets/hero/hero-video.mp4";

import Section from "@/components/Section";
import { BackgroundCircles, Gradient } from "@/components/design/Hero";
import { Gradient as X } from "@/components/design/Services";

import { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";

import pink from "@/assets/diamond-pink.png";
import blue from "@/assets/diamond-blue.png";
import yellow from "@/assets/diamond-yellow.png";

import hero0 from "@/assets/hero/hero0.png";
import hero1 from "@/assets/hero/hero1.png";
import hero2 from "@/assets/hero/hero2.png";
import hero3 from "@/assets/hero/hero3.png";
import hero4 from "@/assets/hero/hero4.png";
import hero5 from "@/assets/hero/hero5.png";
import hero6 from "@/assets/hero/hero6.png";
import hero7 from "@/assets/hero/hero7.png";
import hero8 from "@/assets/hero/hero8.png";
const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <>
      <Section className="pt-[8rem] -mt-[2.5rem]" id="hero">
        <div className="container relative   " ref={parallaxRef}>
          <div className="relative z-50 max-w-[62rem] mx-auto text-center  ">
            <ScrollParallax isAbsolutelyPositioned>
              <div className="hidden xl:flex absolute top-[10rem] -left-[14rem]">
                <img src={hero0} className="w-[70%] " alt="" />
              </div>
            </ScrollParallax>
            <ScrollParallax isAbsolutelyPositioned>
              <div className="hidden xl:flex absolute top-[40rem] -right-[3rem]">
                <img src={hero1} className="w-[30%] " alt="" />
              </div>
            </ScrollParallax>
            <ScrollParallax isAbsolutelyPositioned>
              <div className="hidden xl:flex absolute top-[28rem] -left-[18rem]">
                <img src={hero2} className="w-[50%]" alt="" />
              </div>
            </ScrollParallax>
            <ScrollParallax isAbsolutelyPositioned>
              <div className="hidden xl:flex absolute top-[9rem] -right-[7rem]">
                <img src={hero3} className="w-[60%]" alt="" />
              </div>
            </ScrollParallax>
            <ScrollParallax isAbsolutelyPositioned>
              <div className="hidden xl:flex absolute top-[18rem] -right-[20rem]">
                <img src={hero4} className="w-[70%]" alt="" />
              </div>
            </ScrollParallax>
            <ScrollParallax isAbsolutelyPositioned>
              <div className="hidden xl:flex absolute top-[18rem] left-[-2rem] ">
                <img src={hero8} className="w-[100%]" alt="" />
              </div>
            </ScrollParallax>

            <h1 className="h2 mb-6">
              Explora las poisibilidades con &nbsp;
              {/*  <span className="inline-block relative">
                Delta Land{" "}
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span> */}
            </h1>
          </div>
          <X />
          <div className="relative max-w-[24rem] mx-auto    ">
            <div className="relative z-1  p-0.5 rounded-2xl bg-conic-gradient">
              <div className="relative  bg-n-8 rounded-[1rem]">
                <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

                <div>
                  <video
                    src={heros}
                    autoPlay
                    loop
                    type="video/mp4"
                    playsInline
                    muted
                    className="h-full   w-full  rounded-b-xl "
                  />
                </div>
              </div>

              <Gradient />
            </div>

            {/* <BackgroundCircles /> */}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Hero;
