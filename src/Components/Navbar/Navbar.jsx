import React, { useEffect, useRef } from 'react'
import logo from '../../images/logo.svg'
import {
    Collapse,
    Dropdown,
    initTE,
  } from "tw-elements";

 


export default function Navbar() {
    let navRef =useRef()
    useEffect(()=>{

      let links=document.querySelectorAll('nav ul li a')
      console.log(links)
      links.forEach((ele)=>{
        ele.addEventListener('click',function(e){
          links.forEach((ele)=>{
            ele.classList.remove('active')
          })
      e.target.classList.add('active')
         
        })
        
      })


     
        initTE({ Collapse, Dropdown })
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 100){
                navRef.current.style.backgroundColor='#061524'
                navRef.current.style.padding='3rem'
            }
            else{
                navRef.current.style.backgroundColor='transpirant'
                navRef.current.style.padding='2rem'
            }
        })

    },[])
  return <>

<nav ref={navRef} id="scrollspy1"
  className=" transition-all duration-200 z-10 w-full fixed  flex  flex-nowrap items-center justify-between py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4"
  data-te-navbar-ref>
  <div className="flex container mx-auto w-full flex-wrap items-center justify-between px-3">
    <div className="ml-2">
      <a className="text-xl text-white-800 dark:text-neutral-200" href="#"
        ><img src={logo} className='w-1/2' alt="logo" /></a>
    </div>
   
    <button
      className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
      type="button"
      data-te-collapse-init
      data-te-target="#navbarSupportedContent2"
      aria-controls="navbarSupportedContent2"
      aria-expanded="false"
      aria-label="Toggle navigation">
   
      <span className="[&>svg]:w-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7">
          <path
           fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd" />
        </svg>
      </span>
    </button>

   
    <div
      className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
      id="navbarSupportedContent2"
      data-te-collapse-item>
    
      <ul
        className="list-style-none ml-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
        data-te-navbar-nav-ref>
       
        <li
          className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
          data-te-nav-item-ref>
          <a 
            className="active text-white lg:px-2 hover:text-teal-500 hover:ease-in-out focus:text-teal-500 active:text-teal-500 [&.active]:text-teal-500 "
            aria-current="page"
            href="#hero"
            data-te-nav-link-active
            data-te-nav-link-ref
            >Hero</a >
        </li>
        
        <li
          className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
          data-te-nav-item-ref>
          <a
            className="p-0 text-white transition duration-200 hover:text-teal-500 hover:ease-in-out focus:text-teal-500 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-teal-500"
            href="#feature"
            data-te-nav-link-ref
            >Features</a>
        </li>
        
        <li
          className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
          data-te-nav-item-ref>
          <a
            className="p-0 text-white transition duration-200 hover:text-teal-500 hover:ease-in-out focus:text-teal-500 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-teal-500 dark:[&.active]:text-neutral-400"
            href="#productive"
            data-te-nav-link-ref
            >Productive</a >
        </li>
        <li
          className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
          data-te-nav-item-ref>
          <a
            className="p-0 text-white transition duration-200 hover:text-teal-500 hover:ease-in-out focus:text-teal-500 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-teal-500 dark:[&.active]:text-neutral-400"
            href="#slider"
            data-te-nav-link-ref
            >Slider</a >
        </li>
        <li
          className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
          data-te-nav-item-ref>
          <a
            className="p-0 text-white transition duration-200 hover:text-teal-500 hover:ease-in-out focus:text-teal-500 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-teal-500 dark:[&.active]:text-neutral-400"
            href="#contact"
            data-te-nav-link-ref
            >Contact</a >
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
  
  
  </>
}
