import Section from "./Section";
import { FaTiktok, FaFacebookF, FaInstagram } from "react-icons/fa";
const Footer = () => {
  const socials = [
    {
      id: "0",
      title: "Facebook",
      iconUrl: <FaFacebookF className="text-white " />,
      url: "https://www.facebook.com/ancorawave",
    },
    {
      id: "1",
      title: "Instagram",
      iconUrl: <FaInstagram className="text-white" />,
      url: "https://www.instagram.com/ancorawave/?hl=es-la",
    },
    {
      id: "2",
      title: "Tiktok",
      iconUrl: <FaTiktok className="text-white" />,
      url: "https://www.tiktok.com/@ancorawave?_t=8br6qmnu7i1&_r=1",
    },
  ];
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-11 h-11 bg-n-7 rounded-full transition-all hover:bg-n-6 hover:scale-105 duration-300 "
            >
              {item.iconUrl}
              {/* <img src={item.iconUrl} width={16} height={16} alt={item.title} /> */}
            </a>
          ))}
        </ul>
        <ul className="flex flex-col md:flex-row gap-3 items-center justify-center text-n-4 ">
          <li className="hover:text-black transition-colors duration-300 cursor-pointer">
            Términos y condiciones
          </li>
          <li className="hover:text-black transition-colors duration-300 cursor-pointer">
            Política de privacidad
          </li>
        </ul>

        <p className="caption text-n-4 lg:block text-center">
          © {new Date().getFullYear()}. AncoraWave. Todos los derechos
          reservados.
        </p>
      </div>
    </Section>
  );
};

export default Footer;
