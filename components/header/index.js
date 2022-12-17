import React from 'react'
import { AiOutlinePhone, AiOutlineMenu, AiOutlineDown } from 'react-icons/ai'
import { IoPersonOutline } from 'react-icons/io5'
import { BsSearch, BsBag } from 'react-icons/bs'
import { IoBagOutline } from 'react-icons/io5';
import { useState } from 'react';
import Link from 'next/link';

import Image from 'next/image'


function Header() {
    const [men, SetMen] = useState(['APPAREL', 'FOOTWEAR', 'ACCESSORIES', 'BEAUTY & HEALTH']);
    const [women, SetWomen] = useState(['APPAREL', 'FOOTWEAR', 'ACCESSORIES', 'BEAUTY & HEALTH']);
    const [kids, SetKids] = useState(['APPAREL', 'FOOTWEAR', 'TOY']);

   
    const handleCallMenu = () => {
        document.querySelector('.mobile_menu').classList.toggle('active')
        document.querySelector('.wrapper').classList.toggle('active')

    }
    

  return (
      <header className=''>
          {/* Header_one */}
          <div className='header_one flex py-2 font-light justify-center lg:justify-between items-center px-4 text-white bg-stone-900'>
              <div className='header_one_part_one'>
                  <ul className='flex gap-1 text-xs justify-between items-center'>
                      <li ><a className='hover:text-gray-400' href='#'><AiOutlinePhone size={"20px"} /></a></li>
                      <li><a className='hover:text-gray-400' href='#'>09941303524,</a></li>
                      <li><a className='hover:text-gray-400' href='#'>09757005801,</a> </li>
                      <li><a className='hover:text-gray-400' href='#'>09960251276</a></li>

                  </ul>
              </div>

              <div className='header_one-part_two hidden lg:flex  gap-3 text-xs'>
                  <div><a className='hover:text-gray-400' href='#'>MY ACCOUNT</a></div>   
               <div><a className='hover:text-gray-400' href='#'>WISHLIST</a></div>   
                  
              </div>

          </div>
          {/* header_two */}
          <div className='header_two bg-white border py-3 lg:py-5 flex items-center justify-between px-4 lg:px-14'>
                  {/* mobile_menu */}
                  <div className='gap-3 flex sm:hidden'>
                       <div><a href='#'><AiOutlineMenu onClick={handleCallMenu} size={"25px"} /></a></div>
                  <div><a href='#'> <IoPersonOutline size={"25px"} /></a></div>
                 </div>
                  {/* logo */}
                  <div className='logo'>
                  <Link href={'/'}>
                   <Image src="/images/logo.webp" alt='logo' width={"150"} height={"80"}></Image>
                  </Link>
                  </div> 
                  {/* nav_bar */}
                  <div className='hidden lg:flex'>
                      <ul className='flex gap-10 text-sm font-bold'>
                          <li className='cursor-pointer hover:text-blue-500'>HOME</li>
                      <li className='flex relative items-center group gap-1 cursor-pointer'><p className=' hover:text-blue-500 '>MEN</p> <AiOutlineDown />

                          <ul className='absolute z-10  top-5 w-56 font-light text-sm  rounded border border-slate-200 bg-white hidden  group-hover:block ' >
                              {
                                  men.map((menValues) => (
                                      <li className='hover:pl-6  hover:bg-slate-200 p-3  border border-slate-200' key={menValues}>{menValues}</li>
                                  ))
                              }
                        </ul>
                      
                      
                      </li>  
                      <li className='flex relative group items-center gap-1 cursor-pointer'><p className=' hover:text-blue-500 '>WOMEN</p> <AiOutlineDown />
                      
                        <ul className='absolute z-10  top-5 w-56 font-light text-sm  rounded border border-slate-200 bg-white hidden  group-hover:block' >
                              {
                                  women.map((menValues) => (
                                      <li className='hover:pl-6  hover:bg-slate-200 p-3  border border-slate-200' key={menValues}>{menValues}</li>
                                  ))
                              }
                        </ul>
                      
                      
                      
                      </li>
                      <li className='flex items-center gap-1 cursor-pointer group relative'><p className=' hover:text-blue-500'>KIDS</p> <AiOutlineDown />
                      
                        <ul className='absolute z-10 top-5 w-56 font-light text-sm  rounded border border-slate-200 bg-white hidden  group-hover:block' >
                              {
                                  kids.map((menValues) => (
                                      <li className='hover:pl-6 hover:bg-slate-200  p-3  border border-slate-200' key={menValues}>{menValues}</li>
                                  ))
                              }
                        </ul>
                      
                      
                      
                      
                      </li>
                          <li className=' cursor-pointer hover:text-blue-500'>OFFICIAL BRANDS</li>  
                          <li className=' cursor-pointer hover:text-blue-500'>ALL ITEMS</li>  
                          <li className=' cursor-pointer hover:text-blue-500'>ORDER TRACKING</li>   
                      </ul>    
                  </div>
                  {/* cart_nav */}
                  <div className='cart_nav flex gap-6 items-center justify-between'>
                      <div><BsSearch size={"20px"} /></div>  
                      <div className=' relative'><IoBagOutline size={"20px"}/><span className=' absolute bottom-3 left-4 bg-black px-1 text-xs text-white rounded-xl'>0</span></div>
                  </div>
            
          </div>
              
            

    </header>
  )
}

export default Header