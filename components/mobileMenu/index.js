import React, { useState } from 'react'
import { MdCancel } from 'react-icons/md'
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai'
import Link from 'next/link';

function MobileMenu() {
    const [men, SetMen] = useState(['APPAREL', 'FOOTWEAR', 'ACCESSORIES', 'BEAUTY & HEALTH']);
    const [checkMen, setCheckMen] = useState(false);
    const [women, SetWomen] = useState(['APPAREL', 'FOOTWEAR', 'ACCESSORIES', 'BEAUTY & HEALTH']);
    const [checkWomen, setCheckWomen] = useState(false);

    const [kids, SetKids] = useState(['APPAREL', 'FOOTWEAR', 'TOY']);
    const [checkKid, setCheckKids] = useState(false);


      const handleCallMenu = () => {
          document.querySelector('.mobile_menu').classList.toggle('active')
        document.querySelector('.wrapper').classList.toggle('active')
          
    }

  return (
      <>
       <div className='mobile_menu w-4/6 border overflow-scroll z-20 bg-white fixed left-0 bottom-0 top-0'>
          <ul className=' font-light'>
              <li className='px-3 py-2 flex justify-between items-center  bg-gray-400 '><button>Close menu</button>  <MdCancel onClick={handleCallMenu}  size={"20"}/></li>
                  <li><Link href={'/'}><button className=' w-full px-3 py-4 border border-slate-100 flex justify-between items-center '><p>HOME</p></button></Link></li>
                  

                  <li><button onClick={()=>{setCheckMen(!checkMen)}} className='w-full px-3 py-4 border border-slate-100 flex justify-between items-center '><p>MEN</p>  {
                      checkMen?<AiOutlineMinus size={'20'}/>:<AiOutlinePlus size={'20'} />
                  } </button></li>

                   {/* Men_details */}
                  <div className={`overflow-hidden ${checkMen?'h-auto':'h-0'}`}>
                      <ul className='text-sm  rounded bg-white ' >
                              {
                                  men.map((menValues) => (
                                      <li  className=' bg-slate-100 p-3  ' key={menValues}>{menValues}</li>
                                  ))
                              }
                        </ul>
                  </div>
                      



                  <li><button onClick={()=>{setCheckWomen(!checkWomen)}}  className='w-full px-3 py-4 border border-slate-100 flex justify-between items-center '><p>WOMEN</p>  {
                      checkWomen?<AiOutlineMinus size={'20'}/>:<AiOutlinePlus size={'20'} />
                  } </button></li>
                  {/* Women_details */}
                  <div className={`overflow-hidden ${checkWomen ? 'h-auto' : 'h-0'}`}>
                      
                        <ul className=' text-sm  rounded border border-slate-200 bg-white' >
                              {
                                  women.map((menValues) => (
                                      <li className='bg-slate-100 p-3  ' key={menValues}>{menValues}</li>
                                  ))
                              }
                        </ul>

                  </div>
                 



                  <li><button onClick={() => { setCheckKids(!checkKid) }} className='w-full px-3 py-4 border border-slate-100 flex justify-between items-center '><p>KIDS</p> {
                      checkKid?<AiOutlineMinus size={'20'}/>:<AiOutlinePlus size={'20'} />
                  }  </button></li>
                    {/* Kids_details */}
                     <div className={`overflow-hidden ${checkKid ? 'h-auto' : 'h-0'}`}>
                      
                        <ul className=' text-sm  rounded border border-slate-200 bg-white' >
                              {
                                  kids.map((menValues) => (
                                      <li className='bg-slate-100 p-3  ' key={menValues}>{menValues}</li>
                                  ))
                              }
                        </ul>

                  </div>




                <li><button className=' w-full px-3 py-4 border border-slate-100 flex justify-between items-center '><p>OFFICIAL BRANDS</p></button></li>
               <li><button className=' w-full px-3 py-4 border border-slate-100 flex justify-between items-center '><p>ALL ITEMS</p></button></li>
               <li><button className=' w-full px-3 py-4 border border-slate-100 flex justify-between items-center '><p>ORDER TRACKING</p></button></li>

              
          </ul>   
          </div>
          {/* wrapper */}
          <div className='wrapper  h-full  z-10 fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80'></div>
      </>
  )
}

export default MobileMenu