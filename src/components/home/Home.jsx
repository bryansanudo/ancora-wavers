import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Collaboration from "@/components/Collaboration";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
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
      <Benefits />
      <ProductsDetails />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
