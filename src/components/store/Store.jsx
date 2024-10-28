import { Routes, Route } from "react-router-dom";
import Section from "@/components/Section";
import HeaderProducts from "@/components/store/HeaderProducts";
import Backpacks from "@/components/store/backpacks/Backpacks";
const Store = () => {
  return (
    <Section>
      <HeaderProducts />

      <Routes>
        <Route path="backpacks/*" element={<Backpacks />} />
      </Routes>
    </Section>
  );
};

export default Store;
