import { Link } from "react-router-dom";
const Steps = [
  {
    id: 1,
    title: "Regístrate Fácilmente",
    description:
      "Accede a nuestra plataforma y completa un sencillo registro para comenzar a usar Medibot.",
  },
  {
    id: 2,
    title: "Chatea con Medibot",
    description:
      "Interactúa con nuestro chatbot, que te ofrecerá respuestas personalizadas y seguras.",
  },
  {
    id: 3,
    title: "Prueba Gratuita de 3 Días",
    description:
      "Disfruta de todas las funcionalidades de Medibot sin costo durante 3 días y evalúa cómo puede mejorar la atención en tu clínica.",
  },
];

const Stepper = () => {
  return (
    <div
      id="funcionamiento"
      className="bg-white  py-12 my-10 rounded-md font-Nunito"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
            ¿Cómo
            <span className="text-[#3D5A98]"> Funciona?</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Steps.map((feature) => (
            <div
              key={feature.id}
              className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
            >
              <div className="flex justify-center items-center mb-4">
                <div className="h-12 w-12 bg-[#0B0064] text-white rounded-full flex items-center justify-center text-lg font-bold">
                  {feature.id}
                </div>
              </div>
              <h3 className="text-xl leading-6 font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-4 text-base leading-6 text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-10">
          <button className="bg-[#0B0064] text-white px-7 py-2 rounded-full mr-4">
            <Link to="/Login">
              Pruébalo ahora <span className="ml-2">→</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
