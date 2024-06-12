import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom"; // Importa Link y useNavigate de react-router-dom

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const logeado = localStorage.getItem("logeado");
    setIsLoggedIn(logeado === "true");

    const handleStorageChange = () => {
      const logeado = localStorage.getItem("logeado");
      setIsLoggedIn(logeado === "true");
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("logeado");
    setIsLoggedIn(false);
    navigate("/");
    window.dispatchEvent(new Event("storage")); // Dispatch storage event
  };

  return (
    <header className="bg-[#0B0064] p-4 flex justify-between items-center font-Nunito">
      <div className="text-white text-2xl font-bold">
        <Link to="/">MEDIBOT</Link>
      </div>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-16 right-2 w-60 bg-[#0B0064] p-4 md:relative md:flex md:p-0 md:bg-transparent md:w-auto md:top-0 md:left-0`}
      >
        <a
          href="#inicio"
          className="block text-white text-lg py-2 hover:text-[#96B7FF] md:py-0 md:px-4"
        >
          Inicio
        </a>
        <a
          href="#quienes"
          className="block text-white text-lg py-2 hover:text-[#96B7FF] md:py-0 md:px-4"
        >
          Quiénes Somos
        </a>
        <a
          href="#funcionamiento"
          className="block text-white text-lg py-2 hover:text-[#96B7FF] md:py-0 md:px-4"
        >
          Cómo Funciona
        </a>
        <a
          href="#plan"
          className="block text-white text-lg py-2 hover:text-[#96B7FF] md:py-0 md:px-4"
        >
          Plan Premium
        </a>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-white text-black py-2 px-4 flex items-center rounded-full hover:bg-[#3D5A98] hover:text-white mt-4 md:hidden"
          >
            Cerrar Sesión <span className="ml-2">→</span>
          </button>
        ) : (
          <button className="bg-white text-black py-2 px-4 flex items-center rounded-full hover:bg-[#3D5A98] hover:text-white mt-4 md:hidden">
            <Link to="/login">
              Iniciar Sesión <span className="ml-2">→</span>
            </Link>
          </button>
        )}
      </nav>
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="bg-white text-black text-base py-1 px-5 items-center rounded-full hover:bg-[#3D5A98] hover:text-white hidden md:flex"
        >
          Cerrar Sesión <span className="ml-2">→</span>
        </button>
      ) : (
        <button className="bg-white text-black text-base py-1 px-5 items-center rounded-full hover:bg-[#3D5A98] hover:text-white hidden md:flex">
          <Link to="/login">
            Iniciar Sesión <span className="ml-2">→</span>
          </Link>
        </button>
      )}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white text-2xl">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>
    </header>
  );
};

export default Header;
