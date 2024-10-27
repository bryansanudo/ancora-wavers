import { Routes, Route } from "react-router-dom";
import Bolso1 from "@/components/store/Bolso1";
const Backpacks = () => {
  return (
    <>
      <div>backpacks</div>
      <Routes>
        <Route path="bolso1" element={<Bolso1 />} />
      </Routes>
    </>
  );
};

export default Backpacks;
