import Hero from "@/components/home/Hero";
import ProductsDetails from "@/components/home/ProductsDetails";
import Footer from "@/components/Footer";
import Faq from "@/components/home/Faq";

import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      {/* <Header /> */}

      <ProductsDetails />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
