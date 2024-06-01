import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Mediplan = () => {
  return (
    <div className=' min-h-[75vh] flex items-center justify-center bg-celeste'>
        <div className='bg-primary w-7/12 max-w-[400px] my-10 rounded-lg flex flex-col py-5 px-10'>     
            <h2 className='py-3 uppercase font-bold text-2xl text-center text-white'>
                  mediplan+
                </h2>
                <p className='text-center text-white font-medium text-xl py-8'><span className='text-3xl'>$30</span>/mes</p>
                <div className='flex md:pl-10 pr-4 items-center py-2 font-bold'>
                    <FontAwesomeIcon className='text-xl mr-3 text-white' icon={faCheck}/>
                    <p className='text-white capitalize'>Se agregara a tu web</p>
                </div>
                <div className='flex md:pl-10 pr-4 items-center py-2 font-bold'>
                    <FontAwesomeIcon className='text-xl mr-3 text-white' icon={faCheck}/>
                    <p className='text-white capitalize'>consultas ilimitadas</p>
                </div>
                <div className='flex md:pl-10 pr-4 items-center py-2 font-bold'>
                    <FontAwesomeIcon className='text-xl mr-3 text-white' icon={faCheck}/>
                    <p className='text-white capitalize'>respuestas personalizadas</p>
                </div>
                <button className='my-8 bg-secondary w-8/12 md:w-6/12 block mx-auto text-xs rounded-3xl text-white py-2 uppercase'>
                    comprar
                </button>
        </div>
    </div>
  )
}

export default Mediplan