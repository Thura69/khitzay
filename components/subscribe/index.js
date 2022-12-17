import React from 'react'
import { AiFillFacebook,AiFillInstagram } from 'react-icons/ai'
function Index() {
  return (
      <div className=' bg-gray-100 py-6 mt-10 md:flex justify-around items-center'>
          <div className='md:flex justify-center items-center md:w-[60%]  '>
              <div className='flex md:w-[20%] md:flex-col justify-center gap-2 md:gap-0 items-center md:items-start font-light'>
                  <p className=''>SIGN UP FOR</p>
              <h3 className='lg:text-xl'>NEWS LETTER</h3>    
              </div>
              <div className=' md:w-[80%]  mt-5 flex justify-center items-center'>
                  <input className='w-[60%]  py-2 px-2  border ' placeholder='Email address'></input>  
               <button className='bg-black text-white px-2 py-2 font-light'>SUBSCRIBE</button>   
              </div>
          </div>      
          <div className='flex justify-center items-center mt-7 gap-4'>
              <AiFillFacebook size={"20px"} />
              <AiFillInstagram size={"20px"}/>
          </div>
    </div>
  )
}

export default Index