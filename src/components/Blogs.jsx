import React from 'react'
import { blogs } from '../constants'
const Blogs = () => {
  return (
    <section className='px-[5%] my-[5%]'>
            <p className='text-[36px] font-bold text-blue-700'>Explore Blogs </p>
            <ul className='flex flex-col gap-6 mt-6'>
                {blogs.map((item) => (
                    <li key={item.title} className='bg-gray-50 rounded-[10px] flex justify-between'>
                        <div className='flex flex-col w-[60%] my-4 mx-4'>
                            <h1 className='text-[22px] font-semibold'>{item.title}</h1>
                            <p className='mt-4 mb-4'>{item.desc}</p>
                            <p 
                                onClick={() => (window.open(item.link))} 
                                className='text-primary cursor-pointer'>Read more</p>
                        </div>
                        <div 
                            className='w-[30%] my-4 mx-4 border-black border-[3px] cursor-pointer'
                            onClick={() => (window.open(item.link))}
                        >
                            <img 
                                src={item.imgUrl}
                            />
                        </div>

                    </li>
                    
                ))}
            </ul>
    </section>
  )
}

export default Blogs