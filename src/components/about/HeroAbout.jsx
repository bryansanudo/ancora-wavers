import Section from "@/components/Section";

import CardsAbout from "@/components/about/CardsAbout";

import { GradientAbout as X } from "@/components/design/Services";
import heroImage from "@/assets/about-01.png";
import TagLine from "@/components/Tagline";

const HeroAbout = () => {
  return (
    <Section crosses>
      <div className="container lg:flex mt-20 ">
        <div className="md:max-w-[35rem] ">
          <div className={` max-w-[50rem] mx-auto mb-12 lg:mb-10 text-center `}>
            {<h2 className="h2 ">Welcome Ancora Wavers</h2>}
            {<TagLine className="mb-4 justify-center ">We are</TagLine>}
            {}
          </div>

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

          <div className="mb-10 md:mb-14  w-full ">
            <CardsAbout />
          </div>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          {/*  <p className="body-2 mb-8 text-n-4 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p> */}

          <div className=" relative left-1/2 flex  aspect-square  -translate-x-1/2 ">
            <img src={heroImage} className="z-[90] rounded-2xl" alt="" />

            <X />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroAbout;
