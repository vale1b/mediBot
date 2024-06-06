import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faSquareFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="flex bg-primary px-3 py-20 flex-wrap justify-center text-white">
        <p className="m-4 w-6/12 max-w-[250px] text-justify md:w-4/12 p-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
          mollitia iure voluptas officiis sed? Molestiae voluptates eius, quos
          mollitia neque eum, eveniet veritatis repudiandae minima maiores
          beatae assumenda eos atque.
        </p>
        <p className="m-4 w-6/12 max-w-[250px] text-justify md:w-4/12 p-2 text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
          mollitia iure voluptas officiis sed? Molestiae voluptates eius, quos
          mollitia neque eum, eveniet veritatis repudiandae minima maiores
          beatae assumenda eos atque.
        </p>
        <p className="m-4 w-6/12 max-w-[250px] text-justify md:w-4/12 p-2 text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
          mollitia iure voluptas officiis sed? Molestiae voluptates eius, quos
          mollitia neque eum, eveniet veritatis repudiandae minima maiores
          beatae assumenda eos atque.
        </p>
      </div>
      <div className="bg-secondary flex items-center justify-between py-4 px-2 lg:px-10 mx-auto">
        <ul className="flex items-center font-semibold text-white">
          <li className="border-r-2 px-3">&copy; 2024 medibot</li>
          <li className="border-r-2 px-3">All Rights Reserved</li>
        </ul>
        <div>
          <FontAwesomeIcon
            className="text-2xl pr-2 text-white drop-shadow-2xl cursor-pointer"
            icon={faCircleXmark}
          />
          <FontAwesomeIcon
            className="text-2xl pr-2 text-[#0077B5] drop-shadow-2xl cursor-pointer"
            icon={faLinkedin}
          />
          <FontAwesomeIcon
            className="text-2xl pr-2 text-blue-700 drop-shadow-2xl cursor-pointer"
            icon={faSquareFacebook}
          />
          <FontAwesomeIcon
            className="text-2xl pr-2 text-white drop-shadow-2xl cursor-pointer"
            icon={faSquareInstagram}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
