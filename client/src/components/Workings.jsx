import React from 'react'
import ItemWorking from './ItemWorking'

const Workings = () => {
  return (
    <div className='w-full flex justify-center items-center min-h-[75vh] bg-primary'>
        <div className='w-10/12 max-w-[900px] rounded-2xl bg-white  my-4 py-5'>
            <h2 className='text-lg py-4 font-extrabold text-center text-primary uppercase'>¿Como Funciona <span className='text-[#568281]'>MEDIBOT</span>?</h2>
            <div className='block mx-auto w-3/4 mt-5'>
                <ItemWorking number={1} />
                <ItemWorking number={2} /> 
                <ItemWorking number={3} /> 
            </div>
            <button className='mx-auto block px-10 py-2 rounded-3xl bg-secondary'>
               <span className='text-white text-sm'>empezar ahora</span>
            </button>
        </div>
        
    </div>
  )
}

export default Workings