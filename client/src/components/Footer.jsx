import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareFacebook, faSquareInstagram } from  '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
        <div className='flex px-3 py-10 my-10 flex-wrap justify-center'>
            <p className='m-4 w-6/12 max-w-[250px] text-justify md:w-4/12 p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque mollitia iure voluptas 
                officiis sed? Molestiae voluptates eius, quos mollitia neque eum, eveniet veritatis
                 repudiandae minima maiores beatae assumenda eos atque.
             </p>
            <p className='m-4 w-6/12 max-w-[250px] text-justify md:w-4/12 p-2'>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque mollitia iure voluptas 
                officiis sed? Molestiae voluptates eius, quos mollitia neque eum, eveniet veritatis
                 repudiandae minima maiores beatae assumenda eos atque.
            </p>
            <p className='m-4 w-6/12 max-w-[250px] text-justify md:w-4/12 p-2'>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque mollitia iure voluptas 
                officiis sed? Molestiae voluptates eius, quos mollitia neque eum, eveniet veritatis
                 repudiandae minima maiores beatae assumenda eos atque.
            </p>
        </div>
        <div className='bg-[#568281] flex items-center justify-between py-4 px-2 lg:px-10 mx-auto'>
            <ul className='flex items-center font-semibold text-white'>
                <li className='border-r-2 px-3'>&copy; 2024 medibot</li>
                <li className='border-r-2 px-3'>All Rights Reserved</li>
            </ul>
            <div>
               <FontAwesomeIcon className='text-2xl pr-2 text-white' icon={faCircleXmark} />
               <FontAwesomeIcon className='text-2xl pr-2 text-blue-400' icon={faLinkedin} />
               <FontAwesomeIcon className='text-2xl pr-2 text-blue-800' icon={faSquareFacebook} />
               <FontAwesomeIcon className='text-2xl pr-2 text-container' icon={faSquareInstagram} />
            </div>
        </div>
    </div>
  )
}

export default Footer