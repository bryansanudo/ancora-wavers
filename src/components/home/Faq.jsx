import Section from "@/components/Section";

import FaqQuestions from "@/components/home/FaqQuestions";

const Faq = () => {
  return (
    <Section
      className="overflow-hidden"
      id="faq"
      crosses
      crossesOffset="lg:translate-y-[1.25rem]"
      customPaddings="md:pt-32 pt-10 pb-14"
    >
      <div className="container relative z-2 mt-6">
        <h2 className="h2 text-center">Preguntas Frecuentes</h2>
        <div className="relative">
          <FaqQuestions />
        </div>
      </div>
    </Section>
  );
};

export default Faq;
