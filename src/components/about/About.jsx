import HeroAbout from "@/components/about/HeroAbout";
import Footer from "@/components/Footer";

import { useEffect } from "react";
import StoryAncora from "@/components/about/StoryAncora";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroAbout />
      <StoryAncora />
      <Footer />
    </>
  );
};

export default Home;
