import Section from "@/components/Section";
import { collabContent, collabText, collabApps } from "@/constants";
import { check, brainwaveSymbol } from "@/assets";
import Button from "@/components/Button";
import { LeftCurve, RightCurve } from "@/components/design/Collaboration";
import CardsAbout from "@/components/about/CardsAbout";
import tha from "@/assets/tha.png";
import { GradientAbout as X } from "@/components/design/Services";

const HeroAbout = () => {
  return (
    <Section crosses>
      <div className="container lg:flex my-20 ">
        <div className="md:max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">We Are</h2>

          {/* <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li key={item.id} className="mb-3 py-3">
                <div className="flex items-center">
                  <img src={check} alt="check" width={24} height={24} />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
            </ul> */}

          <div className="mb-10 md:mb-14  w-full">
            <CardsAbout />
          </div>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          {/*  <p className="body-2 mb-8 text-n-4 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p> */}

          <div className=" relative left-1/2 flex  aspect-square  -translate-x-1/2 ">
            <img src={tha} className="z-[90]" alt="" />

            <X />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroAbout;
