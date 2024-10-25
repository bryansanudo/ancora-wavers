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
      id: "4",
      title: "Todos los Productos",
      url: "#productos",
    },
    {
      id: "4",
      title: "dozo",
      url: "#dozo",
    },

    {
      id: "4",
      title: "Vapes Nicotina",
      url: "#prime",
    },
    {
      id: "4",
      title: "preguntas frecuentes",
      url: "#faq",
    },
    {
      id: "4",
      title: "Terminos y condiciones",
      url: "/policy",
    },

    /*  {
      id: "5",
      title: "Sign in",
      url: "#login",
      onlyMobile: true,
    }, */
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
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 pb-1">
        <Link
          onClick={scrollTop}
          className="block w-[20rem] xl:mr-8 my-3"
          to="/home"
        >
          <div className="flex items-center justify-start   ">
            <img
              src={logo}
              className="rounded-full hover:scale-105 duration-300 mr-5"
              width={80}
              height={80}
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
          }  fixed top-[8rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-color-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-color-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}

            <div onClick={toggleNavigation} className="">
              <Button className="lg:hidden flex mt-6" href="/productos/dozo">
                Todos los productos
              </Button>
            </div>
          </div>
          <HamburgerMenu />
        </nav>

        {/* <Button className="hidden lg:flex" href="/productos/dozo">
          Todos los productos
        </Button> */}
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
