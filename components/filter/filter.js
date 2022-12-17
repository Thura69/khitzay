import React, { useRef } from 'react'
import {BsChevronDown,BsFilter} from 'react-icons/bs'
import FilterMobile from './filterMobile';

function Filter({initialData,setMenCheck,setWomenCheck,setKidsCheck,setAccessoriesCheck,setApparelCheck,setFootwearCheck}) {
    const filterMenu = useRef();
    const handleClick = () => {
       filterMenu.current.classList.toggle('hidden')
    }
    const handleFilterMenu = () => {
        document.querySelector('.mobile_filter').classList.toggle("active")
        document.querySelector('.wrapper').classList.toggle("active")

    }
  return (
     
      <div className='flex  justify-between my-4'>
          {/* filterBy */}
          <div className='w-[45%] md:hidden'>
          <button onClick={handleFilterMenu} className='w-full border border-black justify-center   gap-3 flex items-center px-0 text-sm  py-2  select-none cursor-pointer bg-gray-100 font-light'><BsFilter size={'20px'}/> Filter By</button>    
          </div>


          {/* filter */}
          <div className='w-[45%] hidden  relative'>
              <div onClick={handleClick} className='border border-black flex items-center px-0 text-sm justify-center py-2  select-none cursor-pointer bg-gray-100 font-light'>Date, new to old</div>
              <ul ref={filterMenu} className=' z-10 hidden absolute top-[50px]  bg-white right-0 border border-gray-200 left-0 font-light text-sm'>
                  <li className='px-2 py-2    hover:pl-4 cursor-pointer'>Featured</li>
                  <li className='px-2 py-2 hover:pl-4 cursor-pointer'>Alphabetically, A-Z</li>   
                  <li className='px-2 py-2 hover:pl-4 cursor-pointer'>Alphabetically, Z-A</li>   
                  <li className='px-2 py-2 hover:pl-4 cursor-pointer'>Price, low to high</li>
                  <li className='px-2 py-2 hover:pl-4 cursor-pointer'>Price, high to low</li>
                  <li className='px-2 py-2 hover:pl-4 cursor-pointer'>Date, new to old</li>

                  
              </ul>
          </div>
          <FilterMobile initialData={initialData} setMenCheck={setMenCheck} setWomenCheck={setWomenCheck} setKidsCheck={setKidsCheck} setAccessoriesCheck={setAccessoriesCheck} setApparelCheck={setApparelCheck} setFootwearCheck={setFootwearCheck} />
          
          </div>     

  )
}

export default Filter