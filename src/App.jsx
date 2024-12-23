import ButtonGradient from "@/assets/svg/ButtonGradient";

import Home from "@/components/home/Home";
import About from "@/components/about/About";
import Store from "@/components/store/Store";
import { FaWhatsapp } from "react-icons/fa";

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
const App = () => {
  return (
    <>
      <div id="hola" />
      <Header />
      <div className="pt-[4.7rem] lg:pt-[5.25rem] overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store/*" element={<Store />} />
        </Routes>
      </div>
      <div
        className={`fixed flex items-center justify-center hover:scale-110 duration-700 rounded-full w-12 h-12 bg-[#00E676] text-yellow-500 z-[100] md:right-14 right-2 bottom-20 md:bottom-16   `}
      >
        <a
          href="https://api.whatsapp.com/send/?phone=573237531775&text&type=phone_number&app_absent=0"
          className=""
          target="_blank"
        >
          <FaWhatsapp className="text-white text-3xl" />
        </a>
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
