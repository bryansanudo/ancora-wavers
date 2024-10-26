import ButtonGradient from "@/assets/svg/ButtonGradient";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "@/components/Collaboration";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";
const App = () => {
  return (
    <>
      <div className="pt-[4.7rem] lg:pt-[5.25rem] overflow-hidden">
        <Hero />
        <Header />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Footer />
      </div>
      <div
        className={`fixed flex items-center justify-center hover:scale-110 duration-700 rounded-full w-14 h-14 bg-[#00E676] text-yellow-500 z-[100] md:right-14 right-6 bottom-6   `}
      >
        <a href="https://wa.link/svfaqz" className="" target="_blank">
          <FaWhatsapp className="text-white text-3xl" />
        </a>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
