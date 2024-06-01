import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Mediplan = () => {
  return (
    <div className=' min-h-[75vh] flex items-center justify-center my-5'>
        <div className='bg-container w-10/12 max-w-[900px] rounded-lg flex flex-col items-center py-5'>
            <h2 className='py-2 w-8/12 uppercase font-bold text-lg text-center text-white'>Nuestro<span className='text-[#568281]'>mediplan</span>mensual</h2>
            <div className='w-8/12 bg-[#568281] rounded-xl mt-2 mb-5 py-8 overflow-hidden'>
                <p className='text-center text-white font-medium text-xl py-4'><span className='text-3xl'>$30</span>/mes</p>
                <div className='flex pl-10 pr-4 md:pl-32 items-center py-2 font-bold'>
                    <FontAwesomeIcon className='text-xl mr-3 text-white' icon={faCheck}/>
                    <p className='text-white capitalize'>Se agregara a tu web</p>
                </div>
                <div className='flex pl-10 pr-4 md:pl-32 items-center py-2 font-bold'>
                    <FontAwesomeIcon className='text-xl mr-3 text-white' icon={faCheck}/>
                    <p className='text-white capitalize'>consultas ilimitadas</p>
                </div>
                <div className='flex pl-10 pr-4 md:pl-32 items-center py-2 font-bold'>
                    <FontAwesomeIcon className='text-xl mr-3 text-white' icon={faCheck}/>
                    <p className='text-white capitalize'>respuestas personalizadas</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mediplan