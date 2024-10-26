import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Arrow from "@/assets/svg/Arrow";
import ClipPath from "@/assets/svg/ClipPath";

import { GradientLight } from "@/components/design/Benefits";
import benefitCard1 from "@/assets/benefits/card-1.svg";
import benefitCard2 from "@/assets/benefits/card-2.svg";
import benefitCard3 from "@/assets/benefits/card-3.svg";
import benefitCard4 from "@/assets/benefits/card-4.svg";
import benefitCard5 from "@/assets/benefits/card-5.svg";
import benefitCard6 from "@/assets/benefits/card-6.svg";
import benefitIcon1 from "@/assets/benefits/icon-1.svg";
import benefitIcon2 from "@/assets/benefits/icon-2.svg";
import benefitIcon3 from "@/assets/benefits/icon-3.svg";
import benefitIcon4 from "@/assets/benefits/icon-4.svg";
import benefitImage2 from "@/assets/benefits/image-2.png";
import product from "@/assets/product.jpg";
const Benefits = () => {
  const benefits = [
    {
      id: "0",
      title: "Backpacks",
      text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      backgroundUrl: "src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon1,
      imageUrl: product, // Imagen específica de fondo para la primera tarjeta
    },
    {
      id: "1",
      title: "Fannypacks",
      text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
      backgroundUrl: "src/assets/benefits/card-2.svg",
      iconUrl: benefitIcon2,
      imageUrl: product, // Imagen específica de fondo para la segunda tarjeta
    },
    {
      id: "2",
      title: "Complementos",
      text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
      backgroundUrl: "src/assets/benefits/card-3.svg",
      iconUrl: benefitIcon3,
      imageUrl: product, // Imagen específica de fondo para la tercera tarjeta
      light: true,
    },
    {
      id: "3",
      title: "Dog",
      text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      backgroundUrl: "src/assets/benefits/card-4.svg",
      iconUrl: benefitIcon4,
      imageUrl: product, // Imagen específica de fondo para la cuarta tarjeta
    },
  ];

  return (
    <Section id="features" className="text-white ">
      <div className="container relative z-2 mt-4">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10 mb-10">
          {benefits.map((item) => (
            <div key={item.id}>
              <h5 className="h5 ml-4 text-n-5">{item.title}</h5>
              <div
                className="block  relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                style={{
                  backgroundImage: `url(${item.backgroundUrl})`,
                }}
              >
                <div className="flex flex-col ">
                  <div className="relative  z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                    <div className="flex items-center mt-auto">
                      <img
                        src={item.iconUrl}
                        width={48}
                        height={48}
                        alt={item.title}
                      />
                      <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                        Explore more
                      </p>
                      <Arrow />
                    </div>
                  </div>
                  {item.light && <GradientLight />}
                  <div
                    className="absolute inset-0.5 bg-n-8"
                    style={{
                      clipPath: "url(#benefits)",
                      backgroundImage: `url(${item.imageUrl})`, // Imagen específica para cada tarjeta
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <ClipPath />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
