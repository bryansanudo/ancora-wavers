import { Routes, Route } from "react-router-dom";
import Section from "@/components/Section";
import HeaderProducts from "@/components/store/HeaderProducts";
import Backpacks from "@/components/store/backpacks/Backpacks";
import Fannypacks from "@/components/store/fannypacks/Fannypacks";
import Hats from "@/components/store/hats/Hats";
import Footer from "@/components/Footer";
const Store = () => {
  return (
    <>
      <HeaderProducts />

      <Routes>
        <Route path="/" element={<Backpacks />} />
        <Route path="backpacks/*" element={<Backpacks />} />
        <Route path="fannypacks/*" element={<Fannypacks />} />
        <Route path="hats/*" element={<Hats />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Store;
