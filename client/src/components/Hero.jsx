const Hero = () => {
  return (
    <div id="inicio" className="flex flex-wrap">
      <img
        src="/public/heroimage.png"
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
              <p className="text-xl mb-10 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae maiores neque eaque ea odit placeat, tenetur illum
                distinctio nulla voluptatum a corrupti beatae tempora aperiam
                quia id aliquam possimus aut.
              </p>

              <button className="bg-[#0B0064] text-white px-7 py-2 rounded-full mr-4">
                Pruebalo ahora
              </button>
              <button className="bg-blue-100 text-[#0B0064] px-7 py-2 rounded-full ">
                Mediplan+
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
