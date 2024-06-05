import React from 'react'

const ItemWorking = ({number}) => {
  return (
    <div className='my-5 md:w-5/6 md:mx-auto flex items-center'>
        <div className='bg-secondary basis-4/12 md:basis-2/12 min-w-14 min-h-14 flex grow-0 items-center justify-center rounded-full mr-5'>
            <span className='font-bold text-white text-lg'>{number}</span>
        </div>
        <div className='bg-celeste py-2 min-h-14 rounded-sm'>
            <p className='basis-8/12 px-2 text-xs text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit sunt et, 
                similique vel ipsam rem explicabo laudantium voluptate doloremque,
            </p>
        </div>
    </div>
  )
}

export default ItemWorking