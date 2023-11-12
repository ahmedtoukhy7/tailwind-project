import React from 'react'
import icon1 from '../../images/icon-access-anywhere.svg'
import icon2 from '../../images/icon-any-file.svg'
import icon3 from '../../images/icon-collaboration.svg'
import icon4 from '../../images/icon-security.svg'
import curve from '../../images/bg-curvy-desktop.svg'

export default function Feature() {
  return <div className='feature py-20' id='feature'>
    <img src={curve} className='w-full h-[200px]' alt="curve" />
    <div className='container mx-auto '>
    <h1 className='text-3xl text-white text-center mb-20 border-b-2 border-white w-fit mx-auto'>Fetures Section</h1>
        <div className='grid gap-[100px] place-items-center grid-cols-1 md:grid-cols-2 w-[70%] mx-auto'>
            <div className='item text-center text-white'>
                <img src={icon1} className='block mx-auto mb-3' alt="icon" />
                <h2 className='text-2xl mb-3'>access-anywhere</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa corporis ut quasi in officiis repudiandae?</p>

            </div>
            <div className='item text-center text-white'>
                <img src={icon2} className='block mx-auto mb-3' alt="icon" />
                <h2 className='text-2xl mb-3'>any-file</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa corporis ut quasi in officiis repudiandae?</p>

            </div>
            <div className='item text-center text-white'>
                <img src={icon3} className='block mx-auto mb-3' alt="icon" />
                <h2 className='text-2xl mb-3'>collaboration</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa corporis ut quasi in officiis repudiandae?</p>

            </div>
            <div className='item text-center text-white'>
                <img src={icon4} className='block mx-auto mb-3' alt="icon" />
                <h2 className='text-2xl mb-3'>security</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa corporis ut quasi in officiis repudiandae?</p>

            </div>
        </div>
    </div>
  </div>
}
