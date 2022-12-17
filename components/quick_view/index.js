import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {RxCross2} from 'react-icons/rx'
function QuickView({ viewAdidas,viewClickCheck,setViewClickCheck }) {
    const [count, SetCount] = useState(0);

  const handleClose = () => {
      setViewClickCheck(false);
      document.querySelector('.wrapper').classList.remove('active');
      SetCount(0);

  }
    
    const handleSize = (e) => {
     
        const sizes = document.querySelectorAll('.sizesTrigger');
        sizes.forEach((size) => {
           size.classList.remove('border-2')
       })

        e.target.classList.add('border-2')
        e.target.classList.add('border-black')

    }

   

    if (viewAdidas) {
      return (
      <div id='quick_view' className={` fixed   flex md:gap-3 flex-col md:flex-row md:justify-between justify-center items-center md:items-start lg:p-5 top-[3%] md:top-[10%] h-[auto]   lg:top-[10%] z-20 border overflow-scroll  left-[10%] lg:left-[6%] right-0 p-3 bg-white  w-[80%] ${viewClickCheck?``:`hidden`}`}>
          <div className='w-[90%] md:w-[60%] md:m-0 mt-7'>
              <Image blurDataURL='https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png' placeholder="blur" src={viewAdidas.img[0].img1} alt="quickView" width={500} height={500} />
          </div>
          <div className='md:w-2/4 lg:w-2/4'>
              <h1 className=' text-xs lg:text-2xl lg:py-4 md:text-lg md:mt-3 py-2'>{viewAdidas.name}</h1>
              <p className=' text-green-800 lg:pb-3 md:pb-3 pb-1 text-sm'>In Stock</p>
              <p className=' lg:text-2xl text-md lg:pb-2 pb-1'>K{viewAdidas.price}</p>
              <p className='hidden md:block font-light  text- lg:text-md md:text-sm md:mt-2 lg:pb-4 md:pb-5 pb-2'>{viewAdidas.description}</p>
              <p className='font-light text-xs'>SIZE:</p>
              <div className=' flex items-center justify-start lg:pb-3 pb-1 pt-2 gap-2'>
                  {
                      viewAdidas.sizes.map((size) => (
                          <div onClick={(e)=>handleSize(e)} className='sizesTrigger bg-gray-100 lg:w-[35px] w-[20px md:w-[26px] md:h-[26px] h-[20px] flex justify-center items-center px-2 lg:h-[35px] cursor-pointer text-xs ' key={size.size}>{size.size}</div>
                  ))
               }
              </div>
              <div className='flex  justify-start md:mt-2 items-center'>
                  <div className=' flex lg:py-4 py-2'>
                          <button className='lg:px-3 px-2   border bg-gray-100 text-xl lg:text-3xl' onClick={()=>SetCount((prev)=>(prev === 0 ? 0 : prev-1))} >-</button><p className='lg:px-4 px-2 flex justify-center border items-center'>{count}</p><button className='lg:px-3 px-2  border bg-gray-100 text-xl lg:text-2xl' onClick={()=>SetCount((prev)=>(prev+1))}>+</button>
                  </div>
                  <button className='bg-black lg:py-2 px-3  py-2 border border-black text-xs lg:text-sm text-white '>ADD TO CART</button>
              </div>
          </div>
          <div className='absolute top-2 right-1 cursor-pointer' ><RxCross2 onClick={handleClose} size={"25px"}/></div>
    </div>
  )
    } else if (!viewAdidas) {
        return (
            <div></div>
        )
  }
}

export default QuickView