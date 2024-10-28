import { Routes, Route } from "react-router-dom";
import Section from "@/components/Section";
import HeaderProducts from "@/components/store/HeaderProducts";
import Backpacks from "@/components/store/backpacks/Backpacks";
import Footer from "@/components/Footer";
const Store = () => {
  return (
    <>
      <HeaderProducts />

      <Routes>
        <Route path="/" element={<Backpacks />} />
        <Route path="backpacks/*" element={<Backpacks />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Store;
