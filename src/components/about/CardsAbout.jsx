import styles, { layout } from "@/style";

import { Link } from "react-router-dom";
/* import { motion } from "framer-motion";
import { staggerContainer, zoomIn, fadeIn } from "@/utils/motion"; */
import { GrCertificate } from "react-icons/gr";
import { FaRegHandPointer } from "react-icons/fa";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

export const features = [
  {
    id: "feature-1",
    motionTime: 1,
    icon: <FaRegHandPointer />,
    title:
      "Somos atrevidos, los que gustan de las combinaciones,todo lo que es fuera de lo común.",
    content:
      "Somos atrevidos, los que gustan de las combinaciones,todo lo que es fuera de lo común.",
  },
  {
    id: "feature-2",
    motionTime: 2,
    icon: <HiOutlineComputerDesktop />,
    title: "Plataforma Intuitiva y Accesible",
    content:
      "Nos parcha lo tropical,llevamos la vida veraniega en nuestro ser.",
  },
  {
    id: "feature-3",
    motionTime: 3,
    icon: <GrCertificate />,
    title: "Certificado de Asistencia",
    content:
      "Valoramos lo diferente, nos sentimos únicos siguiendo nuestros instintos con un estilo propio.",
  },
  {
    id: "feature-4",
    motionTime: 4,
    icon: <GrCertificate />,
    title: "Certificado de Asistencia",
    content: "Hey ancorawaver, ¿eres tú?",
  },
];

const FeatureCard = ({ icon, title, content, index, motionTime }) => (
  <div
    /* variants={fadeIn("up", "spring", motionTime * 0.5, 0.5)} */
    className={`flex items-center  flex-col gap-2 md:gap-0 p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } 
     shadow-md shadow-black hover:scale-105 duration-500
    `}
  >
    {/*  <div
      className={`w-[64px] h-[64px] rounded-full  ${styles.flexCenter} bg-primary `}
    >
      <span className="text-white text-3xl">{icon}</span>
    </div> */}
    <div className="flex-1 flex flex-col ml-3">
      {/* <h4 className={`${styles.title} mb-1`}>{title}</h4> */}
      <p className={`${styles.subtitle} text-center `}>{content}</p>
    </div>
  </div>
);

const CardsAbout = () => (
  <section id="features">
    <div
      /*  variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }} */
      className={`flex-col  w-full`}
    >
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default CardsAbout;
