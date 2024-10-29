import heros from "@/assets/hero/hero-video.mp4";

import Section from "@/components/Section";
import { Gradient } from "@/components/design/Hero";
import { Gradient as X } from "@/components/design/Services";

import { useRef, useState } from "react";
import { ScrollParallax } from "react-just-parallax";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

import hero0 from "@/assets/hero/hero0.png";
import hero7 from "@/assets/hero/hero7.png";
import hero2 from "@/assets/hero/hero2.png";
import hero3 from "@/assets/hero/hero3.png";
import hero6 from "@/assets/hero/hero6.png";
import hero8 from "@/assets/hero/hero8.png";
const Hero = () => {
  const parallaxRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef();
  const handleVideoPause = () => {
    videoRef.current.pause();
    setIsVideoPlaying(false);
  };

  const handleVideoPlay = () => {
    videoRef.current.play();
    setIsVideoPlaying(true);
  };
  return (
    <>
      <Section className="pt-[8rem] -mt-[2.5rem]" id="hero">
        <div className="container relative   " ref={parallaxRef}>
          <div className="relative z-50 max-w-[62rem] mx-auto text-center  ">
            <ScrollParallax isAbsolutelyPositioned>
              <div className="hidden xl:flex absolute top-[12rem] -left-[14rem]">
                <img src={hero0} className="w-[70%] " alt="" />
              </div>
            </ScrollParallax>
            <ScrollParallax isAbsolutelyPositioned>
              <div className="hidden xl:flex absolute top-[20rem] -right-[7rem]">
                <img src={hero7} className="w-[70%] " alt="" />
              </div>
            </ScrollParallax>
            <ScrollParallax isAbsolutelyPositioned>
              <div className="hidden xl:flex absolute top-[28rem] -left-[18rem]">
                <img src={hero2} className="w-[80%]" alt="" />
              </div>
            </ScrollParallax>
            <ScrollParallax isAbsolutelyPositioned>
              <div className="hidden xl:flex absolute top-[9rem] right-[2rem]">
                <img src={hero3} className="w-[70%]" alt="" />
              </div>
            </ScrollParallax>
            <ScrollParallax isAbsolutelyPositioned>
              <div className="hidden xl:flex absolute top-[18rem] -right-[20rem]">
                <img src={hero6} className="w-[70%]" alt="" />
              </div>
            </ScrollParallax>
            <ScrollParallax isAbsolutelyPositioned>
              <div className="hidden xl:flex absolute top-[18rem] left-[-2rem] ">
                <img src={hero8} className="w-[100%]" alt="" />
              </div>
            </ScrollParallax>

            <h1 className="h2 mb-6">
              Envíos free Colombia
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
          {/*    <X /> */}
          <div className="relative md:max-w-[330px] w-[300px] mx-auto    ">
            <div className="relative z-1  p-0.5 rounded-2xl bg-conic-gradient">
              <div className="relative  bg-n-8 rounded-[1rem]">
                <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

                <video
                  src={heros}
                  ref={videoRef}
                  autoPlay
                  loop
                  type="video/mp4"
                  playsInline
                  muted
                  className="md:h-[37rem] h-[33rem] w-full rounded-b-xl"
                />
                <div className="absolute bottom-10 right-[45%]  ">
                  {isVideoPlaying ? (
                    <FaPauseCircle
                      size={35}
                      onClick={handleVideoPause}
                      className="cursor-pointer hover:scale-105 duration-300 text-white"
                    />
                  ) : (
                    <FaPlayCircle
                      size={35}
                      onClick={handleVideoPlay}
                      className="cursor-pointer hover:scale-110 duration-300 text-white"
                    />
                  )}
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
