import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  {
    name: "Brandon",
    img: "https://via.placeholder.com/150",
    description:
      "Con una sólida formación en ingeniería informática y más de una década de experiencia en desarrollo de software y sistemas de inteligencia artificial, Brandon lidera el equipo de desarrollo, asegurando que Medibot esté a la vanguardia de la tecnología.",
  },
  {
    name: "Valentín",
    img: "https://via.placeholder.com/150",
    description:
      "Es la mente creativa detrás de las capacidades de Medibot. Con un doctorado en inteligencia artificial y varios años de experiencia en la creación de chatbots y sistemas inteligentes, Valentín se asegura de que Medibot ofrezca respuestas precisas y útiles a los usuarios.",
  },
  {
    name: "José",
    img: "https://via.placeholder.com/150",
    description:
      "Es responsable de la gestión operativa de Medibot. Con una amplia experiencia en administración de empresas y un enfoque en la eficiencia operativa, José garantiza que nuestras operaciones diarias se realicen sin contratiempos, permitiendo al equipo centrarse en la innovación.",
  },
  {
    name: "Martina",
    img: "https://via.placeholder.com/150",
    description:
      "Con más de 15 años de experiencia en el sector de la salud, ha liderado proyectos que integran tecnología y medicina para mejorar la atención al paciente. Su compromiso con la innovación y la excelencia ha sido fundamental para el desarrollo de Medibot.",
  }

];

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="quienes" className="bg-[#0B0064] rounded-md py-10 font-Nunito">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg p-6 flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/2">
            <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 mt-20">
              ¿Quiénes
              <span className="text-[#3D5A98]"> Somos?</span>
            </h1>

            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400 text-justify">
            En Medibot, somos un equipo apasionado de profesionales dedicados a revolucionar 
            la atención médica a través de la tecnología. Combinamos experiencia en salud, 
            inteligencia artificial y desarrollo de software para crear soluciones innovadoras
             que mejoran la interacción entre clínicas y pacientes.
            </p>
            <button className="bg-[#0B0064] text-white px-5 py-1 rounded-full">
              Contáctanos
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900  ml-4">
              Nuestro Equipo
            </h1>
            <Slider {...settings}>
              {teamMembers.map((member, index) => (
                <div key={index} className="p-4">
                  <div className="bg-[#3D5A98] rounded-lg p-4 shadow-md w-full h-90">
                    <img
                      className="w-full h-32 object-cover rounded-lg mb-4"
                      src={member.img}
                      alt={member.name}
                    />
                    <p className="text-white font-bold text-center">{member.name}</p>
                    <p className="text-white">{member.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
