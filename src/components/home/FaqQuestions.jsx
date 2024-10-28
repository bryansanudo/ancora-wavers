import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "¿Cómo son los tamaños de los backpacks? ",
    answer:
      "Trabajamos generalmente el tamaño M y L. Tamaño M es aproximadamente entre 35cm de alto y 29cm de ancho. Tamaño L es aproximadamente entre 40cm de alto y 33cm de ancho.Igualmente, por el backpack que estés interesado nos preguntas y te responderemos.",
  },
  {
    id: 2,
    question: "¿Siempre tienen disponibilidad de los productos?",
    answer:
      "No, ya que sacamos pocas unidades al momento de la fabricación para que sea un accesorio único, pero si te encuentras interesado en alguno que no se encuentre disponible, se te podría fabricar por medio de encargo comunicándote directamente con nosotros.",
  },

  {
    id: 5,
    question: "¿Y si es por encargo… cómo sería y cuánto tardaría?",
    answer:
      "Para que comencemos la fabricación debesde transferir al # de cuenta la mitad del valor del backpack que quieras, a más tardar 15 días el producto estaría listo. Te contactaremos para avisarte que ya está listo tu backpack, debes de consignar el restante para proceder al envío.",
  },
  {
    id: 6,
    question:
      "¿Cuánto tarda mi backpack en llegar a mi destino luego de la compra?",
    answer:
      "Si el producto está disponible y estás situado en Medellín te llegaría en el transcurso del día ó máximo 1 día hábil. Todo depende del horario en el que realices el pago. Si te encuentras en otra ciudad de Colombia, tarda aproximadamente de 2 a 4 días hábiles. Para compras fuera del país contáctanos vía Whatsapp o a nuestro correo electrónicohablemos@ancorawave.com",
  },
  {
    id: 7,
    question: "¿Qué garantía tengo sobre mi producto?",
    answer: "Tienes 6 meses de garantía por defectos de fabricación.",
  },

  {
    id: 8,
    question: "¿Y si al llegarme mi producto prefiero cambiarlo por otro?",
    answer:
      "Para cambios y devoluciones tu asumes el valor del envío hasta Áncorawave, y Áncorawave asume el valor del envío de regreso hasta tu ubicación. Tu producto solo podrá ser cambiado en un plazo menor a 15 días calendario. Puedes elegir cualquier articulo de igual valor. Si es de mayor valor, debes dar el excedente.",
  },
];

const FaqQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto py-4  ">
      {questions.map(({ id, question, answer }, index) => (
        <div
          key={id}
          className="border border-gray-300 rounded-2xl overflow-hidden p-4"
        >
          <button
            onClick={() => toggleQuestion(index)}
            className="w-full text-left focus:outline-none"
          >
            <div className="flex justify-between items-center">
              <span className="h6">{question}</span>
              <svg
                className={`w-6 text-n-6 h-6 transform transition-transform duration-200 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>
          {activeIndex === index && (
            <div className="body-2 mt-4 text-n-4">
              <p>{answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqQuestions;
