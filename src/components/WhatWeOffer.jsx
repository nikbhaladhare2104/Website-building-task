import React from 'react'
import { whatWeOffer } from '../constants'

const WhatWeOffer = () => {
  return (
    <section className='px-[5%] my-[5%]'>
            <p className='text-[36px] font-bold text-blue-700'>What We Offer</p>
            <ul className='grid gap-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8'>
                {whatWeOffer.map((item) => (
                    <li key={item.title} 
                      className='bg-gray-100 rounded-[10px] cursor-pointer transition ease-in-out 
                        hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300 '>
                        <div className='flex flex-col justify-center items-center text-center my-4 mx-4'>
                            <h1 className='text-[22px] font-semibold'>{item.title}</h1>
                            <p className='mt-4 mb-4'>{item.desc}</p>
                        </div>
                    </li>
                    
                ))}
            </ul>
    </section>
  )
}

export default WhatWeOffer