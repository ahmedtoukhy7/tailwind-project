import React from 'react'
import prod from '../../images/illustration-stay-productive.png'
import arrow from '../../images/icon-arrow.svg'

export default function Productive() {
  return <>

  <div className='productive py-20' id='productive'>
    <div className='container mx-auto'>
    <h1 className='text-3xl text-white text-center mb-20 border-b-2 border-white w-fit mx-auto'>Productivty Section</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[100px] place-items-center'>
            <div className='image'>
                <img src={prod} alt="Productive" className='w-full' />
            </div>
            <div className='item text-white'>
                <h2 className='text-lg md:text-3xl'>Stay Productive</h2>
                <h2 className='text-lg md:text-3xl'>Where Yoy Are</h2>
                <p className='my-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias corporis nihil itaque quasi blanditiis! Molestiae aspernatur impedit vel! Ut, nemo!</p>
                <p className='my-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias corporis nihil itaque quasi blanditiis! Molestiae aspernatur impedit vel! Ut, nemo!</p>
                <a href="" className='no-underline text-teal-400 flex items-center border-b-2 w-fit border-teal-400'>
               <span className='text-xl'> Say who flyo work</span>
               <img src={arrow} className='w-8 animate-move' alt="arrow" />
                </a>
            </div>
        </div>
    </div>
  </div>
  
  
  </>
}
