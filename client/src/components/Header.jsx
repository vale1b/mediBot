import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#0B0064] p-4 flex justify-between items-center">
      <div className="text-white text-2xl font-bold">MEDIBOT</div>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-16  right-2 w-60  bg-[#0B0064] p-4 md:relative md:flex md:p-0 md:bg-transparent md:w-auto md:top-0 md:left-0`}
      >
        <a
          href="#"
          className="block text-white text-lg py-2 hover:text-[#96B7FF] md:py-0 md:px-4"
        >
          Inicio
        </a>
        <a
          href="#"
          className="block text-white text-lg py-2 hover:text-[#96B7FF] md:py-0 md:px-4"
        >
          Quienes Somos
        </a>
        <a
          href="#"
          className="block text-white text-lg py-2 hover:text-[#96B7FF] md:py-0 md:px-4"
        >
          Cómo Funciona
        </a>
        <a
          href="#"
          className="block text-white text-lg py-2 hover:text-[#96B7FF] md:py-0 md:px-4"
        >
          Contacto
        </a>
        <button className="bg-white text-black py-2 px-4 flex items-center rounded-full hover:bg-[#3D5A98] hover:text-white mt-4 md:hidden">
          Iniciar Sesión <span className="ml-2">→</span>
        </button>
      </nav>
      <button className="bg-white text-black text-base py-1 px-5  flex items-center rounded-full hover:bg-[#3D5A98] hover:text-white hidden md:flex">
        Iniciar Sesión <span className="ml-2">→</span>
      </button>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white text-2xl   ">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>
    </header>
  );
};

export default Header;
