import React from 'react'
import heroimg from '../../images/illustration-intro.png'

export default function Hero() {
  return <>

  <div className='hero py-20' id='hero'>
  <div className='flex flex-col container mx-auto  items-center'>
    
    <div className='heroimg mt-40 '>
        <img src={heroimg} className='w-full ' alt="" />
    </div>
    <h1 className='text-xl text-center md:text-3xl mt-10 text-white'>All your files in one secure location accessible anywhere .</h1>
    <p className='text-white mt-8 text-center md:w-[600px] max-w-[100%] text-lg '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti dolore deserunt suscipit ipsam voluptates at officia vitae dolorum repellat. Esse?</p>

    <button
  type="button"
  className=" mt-5 inline-block rounded-full bg-info px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]">
  Get Started
</button>
  </div>
  </div>
  
  
  </>
}
