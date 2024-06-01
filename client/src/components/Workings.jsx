import React from 'react'
import ItemWorking from './ItemWorking'
import { FaCircleArrowRight } from "react-icons/fa6";

const Workings = () => {
  return (
    <div className='w-full flex justify-center items-center min-h-[75vh]'>
        <div className='w-10/12 max-w-[900px] rounded-md bg-container my-4 py-5'>
            <h2 className='text-xl py-4 font-bold text-center text-white uppercase'>¿Como Funciona <span className='text-[#568281]'>MEDIBOT</span>?</h2>
            <div className='block mx-auto w-3/4 mt-5'>
                <ItemWorking number={1} />
                <ItemWorking number={2} /> 
                <ItemWorking number={3} /> 
            </div>
            <button className='mx-auto flex items-center py-2 px-3 rounded-3xl bg-white'>
               <span className='mr-5'>empezar ahora</span>
               <FaCircleArrowRight className='text-2xl' />
            </button>
        </div>
        
    </div>
  )
}

export default Workings