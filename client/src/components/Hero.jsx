import heroImg from "../imgs/heroImage.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div id="inicio" className="flex flex-wrap font-Nunito">
      <img
        src={heroImg}
        alt="doctorsIMG"
        className="w-full h-19 object-cover sm:h-screen sm:w-4/12"
      ></img>
      <div className="w-full sm:w-8/12 mb-10">
        <div className="container mx-auto h-full sm:p-10">
          <div className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
            <div className="w-full">
              <h1 className="text-4xl lg:text-6xl font-bold text-white">
                Agiliza la atención de las clinicas con
                <span className="text-blue-300"> IA </span> eficiente.
              </h1>
              <div className="w-20 h-1 bg-blue-300 my-4"></div>
              <p className="text-xl mb-10 text-white tracking-tight ">
                Medibot es un servicio avanzado de chatbot diseñado para mejorar
                la atención en las clínicas. Con tecnología de inteligencia
                artificial, Medibot responde consultas médicas y
                administrativas, proporcionando recomendaciones y apoyo
                personalizado a los pacientes. Pruebe nuestra versión demo
                gratuita durante 3 días y experimente cómo Medibot puede
                transformar la interacción con sus pacientes.
              </p>

              <button className="bg-[#0B0064] text-white px-7 py-2 rounded-full mr-4">
                <Link to="/Login">
                  Pruebalo ahora <span className="ml-2">→</span>
                </Link>
              </button>
              <button className="bg-white text-[#0B0064] px-7 py-2 rounded-full ">
                <a href="#plan">
                  Mediplan+ <span className="ml-2">→</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
