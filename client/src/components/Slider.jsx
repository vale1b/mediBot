import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  {
    name: "Miembro 1",
    img: "https://via.placeholder.com/150",
    description:
      "Lorem ipsum praesert ac massa at ligula reet est iaculis. Vivamus est mist.",
  },
  {
    name: "Miembro 2",
    img: "https://via.placeholder.com/150",
    description:
      "Lorem ipsum praesert ac massa at ligula reet est iaculis. Vivamus est mist.",
  },
  {
    name: "Miembro 3",
    img: "https://via.placeholder.com/150",
    description:
      "Lorem ipsum praesert ac massa at ligula reet est iaculis. Vivamus est mist.",
  },
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
    <div className="bg-blue-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg p-6 flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl lg:text-4xl font-bold text-black mb-5 mt-20">
              ¿QUIENES
              <span className="text-[#3D5A98]"> SOMOS?</span>
            </h1>

            <p className="mb-5 text-gray-600 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae maiores neque eaque ea odit placeat, tenetur illum
              distinctio nulla voluptatum a corrupti beatae tempora aperiam quia
              id aliquam possimus aut.
            </p>
            <button className="bg-[#0B0064] text-white px-5 py-1 rounded-full">
              contactanos
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl lg:text-4xl font-bold text-[#3D5A98] mb-5 ml-4">
              NUESTRO EQUIPO
            </h1>
            <Slider {...settings}>
              {teamMembers.map((member, index) => (
                <div key={index} className="p-4">
                  <div className="bg-[#3D5A98] rounded-lg p-4 shadow-md w-full h-80">
                    <img
                      className="w-full h-32 object-cover rounded-lg mb-4"
                      src={member.img}
                      alt={member.name}
                    />
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
