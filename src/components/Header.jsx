import { useLocation } from "react-router-dom";

import { disablePageScroll, enablePageScroll } from "scroll-lock";

import logo from "@/assets/logo.png";

import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

import { Link } from "react-router-dom";

const Header = () => {
  const navigation = [
    {
      id: "1",
      title: "Inicio",
      url: "/",
    },
    {
      id: "2",
      title: "Nosotros",
      url: "/about",
    },

    {
      id: "3",
      title: "Hablemos",
      url: "/",
    },
  ];
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div
      className={`fixed top-0 left-0 w-full z-[100]  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 pb-1">
        <Link
          onClick={scrollTop}
          className="block w-[20rem] xl:mr-8 my-3"
          to="/"
        >
          <div className="flex items-center justify-start ml-5 py-2     ">
            <img
              src={logo}
              className=" hover:scale-105 duration-300 md:w-[150px] md:h-[50px] w-[150px] h-[55px] "
              alt=""
            />
            {/*  <div className="text-center mt-3 text-n text-[12px] md:text-[16px]  text-n-1">
              <p>Siempre parchados </p>con Delta Land
            </div> */}
          </div>
        </Link>
        <nav
          className={` ${
            openNavigation ? "flex" : "hidden"
          }  fixed top-[7rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row  md:mr-[230px]">
            {navigation.map((item) => (
              <div key={item.id}>
                <Link to={item.url}>
                  <div
                    onClick={handleClick}
                    className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-white ${
                      item.onlyMobile ? "lg:hidden" : ""
                    } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                      item.url === pathname.hash
                        ? "z-2 lg:text-white"
                        : "lg:text-n-1/50"
                    } lg:leading-5 lg:hover:text-white xl:px-12`}
                  >
                    {item.title}
                  </div>
                </Link>
              </div>
            ))}

            <div onClick={toggleNavigation} className="">
              <Link to="/store">
                <Button className="lg:hidden flex mt-6" href="/productos/dozo">
                  Tienda
                </Button>
              </Link>
            </div>
          </div>
          <HamburgerMenu />
        </nav>

        <Link to="/store">
          <Button className="hidden lg:flex" href="/productos/dozo">
            Tienda
          </Button>
        </Link>
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
