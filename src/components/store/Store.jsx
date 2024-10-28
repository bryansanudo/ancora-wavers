import { Routes, Route } from "react-router-dom";
import Section from "@/components/Section";
import HeaderProducts from "@/components/store/HeaderProducts";
import Backpacks from "@/components/store/backpacks/Backpacks";
import Fannypacks from "@/components/store/fannypacks/Fannypacks";
import Hats from "@/components/store/hats/Hats";
import Complements from "@/components/store/complements/Complements";
import Tshirts from "@/components/store/tshirts/Tshirts";
import Pets from "@/components/store/pets/Pets";
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
        <Route path="complements/*" element={<Complements />} />
        <Route path="tshirts/*" element={<Tshirts />} />
        <Route path="pets/*" element={<Pets />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Store;
