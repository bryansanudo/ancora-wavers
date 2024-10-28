import Section from "@/components/Section";

import { LeftLine, RightLine } from "@/components/design/Pricing";

import FaqQuestions from "@/components/home/FaqQuestions";

const Faq = () => {
  return (
    <Section
      className="overflow-hidden"
      id="faq"
      crosses
      crossesOffset="lg:translate-y-[1.25rem]"
      customPaddings="pt-32 pb-14"
    >
      <div className="container relative z-2 mt-6">
        <h2 className="h2 text-center">Preguntas Frecuentes</h2>
        <div className="relative">
          <FaqQuestions />
          <LeftLine />
          <RightLine />
        </div>
      </div>
    </Section>
  );
};

export default Faq;
