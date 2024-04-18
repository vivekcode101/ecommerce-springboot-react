import React from 'react'

const ProductCard = () => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
        <div className='h-[20rem'>
            <img className='h-full w-full object-cover object-left-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/dress/3/9/c/m-552-sanwariya-creation-original-imagqsmykwmkg9yr.jpeg?q=70" alt="" />
        </div>
        <div className='textPart bg-white p-3'>
            <div>
                <p className='font-bold opacity-60'>SHRI RADHA RANI CREATIONS</p>
                <p>Women A-line Yellow Dress</p>
            </div>
            <div className='flex items-center space-x-2'>
                <p className='font-semibold'>$199</p>
                <p className='line-through opacity-50'>$1999</p>
                <p className='text-green-600 font-semibold'>70% off</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard