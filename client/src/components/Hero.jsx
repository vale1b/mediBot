const Hero = () => {
  return (
    <div className=" max-w-5xl p-6 md:p-2 my-20 mx-20  ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <img
            src="../public/heroImage.png"
            alt="DoctorIMG"
            className="rounded-2xl w-auto md:w-auto md:max-w-sm "
          />
        </div>
        <div className="flex-1 mt-6 md:mt-0 md:ml-12 text-center md:text-left justify-center  ">
          <h2 className="text-2xl font-bold text-white">MEDITOBOT SOLUTIONS</h2>
          <p className="mt-4 text-white">
            Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus
            est mist aliquet elit ac nisl. Lorem ipsum praesent ac massa at
            ligula reet est iaculis. Vivamus est mist.
          </p>
          <div className="flex w-full justify-center md:justify-start">
            <button className="bg-white text-black py-1 px-5 flex items-center rounded-full hover:bg-[#0B0064] hover:text-white mt-4 ">
              pruebalo ahora <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
