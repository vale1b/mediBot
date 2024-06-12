import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section id="plan" className="bg-white rounded-md font-Nunito">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
            MEDIPLAN+
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            La mejor opción para las clínicas, chatbot personalizado con IA
            integrada para la mayor eficiencia posible.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-[#0B0064] rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:text-white">
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold text-blue-100">
                $30
              </span>
              <span className="text-blue-100">/ mes</span>
            </div>
            <ul className="mb-8 space-y-4 text-left text-blue-100">
              <li className="flex items-center space-x-3 ">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-blue-100"
                />
                <span>Se agrega a tu web</span>
              </li>
              <li className="flex items-center space-x-3 ">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-blue-100"
                />
                <span>Consultas ilimitadas</span>
              </li>
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-blue-100"
                />
                <span>Respuestas 100% personalizables</span>
              </li>
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-blue-100"
                />
                <span>Acceso rápido</span>
              </li>
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-blue-100"
                />
                <span>Actualizaciones constantes</span>
              </li>
            </ul>
            <button className="bg-white text-black px-7 py-2 rounded-full mr-4">
              <Link to="/Login">
                Pruébalo ahora <span className="ml-2">→</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
