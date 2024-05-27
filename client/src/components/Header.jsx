const Header = () => {
  return (
    <header className="bg-[#89BAC7] flex justify-between items-center p-4">
      <div className="text-white text-2xl font-bold">MEDIBOT</div>
      <nav className="flex gap-4">
        <a href="#" className="text-white text-lg hover:text-[#568281]">
          Inicio
        </a>
        <a href="#" className="text-white text-lg hover:text-[#568281]">
          Quienes Somos
        </a>
        <a href="#" className="text-white text-lg hover:text-[#568281]">
          Cómo Funciona
        </a>
        <a href="#" className="text-white text-lg hover:text-[#568281]">
          Contacto
        </a>
      </nav>
      <button className="bg-white text-black py-2 px-4 flex items-center rounded-full hover:bg-[#568281] hover:text-white">
        Iniciar Sesión <span className="ml-2">→</span>
      </button>
    </header>
  );
};

export default Header;
