import React from 'react'
import "../assets/hero.png"

const Hero = () => {
  return (

    <header className='bg-hero1 bg-cover bg-center w-full h-[100vh] z-0'>
    {/* bg-hero: backgroundImage configed in tailwindcss.config.js file */}
      <div className='px-[10%] py-[10%]'>
          <div className='w-[60%] flex flex-col mt-8 '>
            <p className='text-[50px] font-bold'> Transforming Enterprises</p>
            <p className='mt-2 text-[30px]'>with cutting-edge, scalable, privacy-focused Generative AI Solutions</p>

            <p className='text-[20px] w-[70%] mt-24'>Founded in 2017, Bluetick Consultants is a technology-driven firm that has made a significant impact in the Indian and US startup ecosystems.</p>
          </div>

          <div  
            className= 'flex text-[24px] text-white mt-10 w-[300px] h-14  justify-center items-center bg-primary rounded-[10px] cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300'
            onClick={() => (window.open("https://www.bluetickconsultants.com/generative-ai.html"))}
          > 
            See More
          </div>
      </div>

      
      
    </header>
  )
}

export default Hero