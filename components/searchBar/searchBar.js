import React from 'react'
import {BsSearch} from 'react-icons/bs'
function SearchBar() {
  return (
      <div className='flex border items-center justify-start py-2 px-3  border-gray-200  text-sm gap-3 w-[100%] mt-6  mx-auto '>
      <BsSearch/>
      <input placeholder='Search Products' type="text" className='border-0  w-full  outline-0 '></input>    
    </div>
  )
}

export default SearchBar