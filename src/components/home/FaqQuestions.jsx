import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "¿ Cómo puedo hacer para que dure más mi batería ? ",
    answer:
      "Lo mas recomendable es no cargar directamente a la luz ya que por la cantidad de voltios del toma corriente la batería podría presentar fallas a futuro, trata de cargarla desde un computador o cualquier otro dispositivo que tenga puerto USB.",
  },
  {
    id: 2,
    question: "¿Se pueden recargar los productos de la marca DOZO ? ",
    answer:
      "No, puesto que este producto es 100% importado y cada contiene una batería que es desechable.",
  },

  {
    id: 5,
    question: "Sativa",
    answer:
      "Este tipo de variedad va a producir un efecto más “para arriba”, alegre y energizante, con efectos cerebrales estimulantes.",
  },
  {
    id: 6,
    question: "Índica",
    answer:
      "Esta variedad produce una sensación más tranquilizante, es genial para descansar y relajarse.",
  },
  {
    id: 7,
    question: "Híbrida",
    answer:
      "Esta mezcla de cepas produce todo un abanico de sensaciones, fuertemente asociadas a las variedades originales, índica o sativa.",
  },

  {
    id: 8,
    question: "Sativa",
    answer:
      "Este tipo de variedad va a producir un efecto más “para arriba”, alegre y energizante, con efectos cerebrales estimulantes.",
  },
  {
    id: 9,
    question: "Índica",
    answer:
      "Esta variedad produce una sensación más tranquilizante, es genial para descansar y relajarse.",
  },
  {
    id: 10,
    question: "Híbrida",
    answer:
      "Esta mezcla de cepas produce todo un abanico de sensaciones, fuertemente asociadas a las variedades originales, índica o sativa.",
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
          className="border border-red-500 rounded-2xl overflow-hidden p-4"
        >
          <button
            onClick={() => toggleQuestion(index)}
            className="w-full text-left focus:outline-none"
          >
            <div className="flex justify-between items-center">
              <span className="h6">{question}</span>
              <svg
                className={`w-6 text-color-1 h-6 transform transition-transform duration-200 ${
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
