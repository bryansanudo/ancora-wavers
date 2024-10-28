import Section from "@/components/Section";

import aboutImage from "@/assets/about.png";

const StoryAncora = () => {
  return (
    <Section
      id="dozo"
      customPaddings=""
      /* crosses */
      crossesOffset="lg:translate-y-[1.25rem]"
    >
      <div className="container ">
        <div className={` max-w-[50rem] mx-auto mb-8 md:text-center `}>
          {<h2 className="h2 text-center">Nuestra Historia</h2>}
          {/*   {
            <TagLine className="mb-4 md:justify-center ">
              Nuestra Historia
            </TagLine>
          } */}
        </div>

        <div className="relative  ">
          <div className="relative z-1 grid gap-5 lg:grid-cols-1">
            <div className=" flex flex-col justify-between border shadow-sm shadow-gray-600  rounded-xl overflow-hidden lg:min-h-[35rem] max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center ">
              <div className="py-6 px-2">
                <p className="body-2 mt-4 text-n-4 text-center">
                  Soy Sara, fundadora de Áncorawave, un sueño que nació hace
                  cinco años y que ha crecido con dedicación y pasión. Desde mis
                  primeros recuerdos, la creatividad y el impulso de compartir
                  ideas han sido parte de mi vida. Comencé vendiendo pequeños
                  accesorios y creando productos únicos, hasta que, mientras
                  estudiaba Diseño Industrial, descubrí mi verdadera
                  inspiración: un artesano orfebre de Santa Elena que recorría
                  kilómetros para mostrar su arte. Así surgió Áncorawave, con el
                  propósito de dar vida a accesorios que combinan tradición y
                  diseño.
                </p>
                <p className="body-2 mt-4 text-n-4 text-center">
                  Cada pieza de Áncorawave es una fusión de ideas, bocetos y
                  materiales cuidadosamente seleccionados. Confeccionamos
                  accesorios de cuero y bolsos únicos, hechos a mano en
                  Colombia, que reflejan nuestra herencia artesanal y el encanto
                  de lo hecho a mano.
                </p>
                <p className="body-2 mt-4 text-n-4 text-center">
                  Gracias por formar parte de nuestra comunidad. Aquí, cada
                  accesorio cuenta una historia, y esperamos que la lleves
                  contigo en cada paso de tu camino.
                </p>
              </div>

              <div className="     rounded-b-xl overflow-hidden ]">
                <img
                  src={aboutImage}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default StoryAncora;
