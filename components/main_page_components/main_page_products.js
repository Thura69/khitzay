import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { BiZoomIn } from 'react-icons/bi'
import Link from 'next/link';
import {useRouter} from 'next/router'
function MainPageProducts({ data, handleQuickView }) {
    const [adidasData, setAdidasData] = useState(data);
  const router = useRouter();
  
  const handleDetails = (id) => {
     router.push(`/${id}`)
   }

    

  return (
      <div className='text-center mt-32'>
          <h1 className='mx-auto text-3xl'>Adidas</h1>    
          <div className=' max-w-[1400px] lg:mx-auto mt-20 flex flex-wrap items-start justify-center gap-10 gap-y-20'>
              
        
           {
              adidasData.map((adidas) => (
              
                <div key={adidas.id} className="flex flex-col justify-center items-center gap-5  md:w-[230px] w-[40%]  text-center">
                      <div className=' cursor-pointer' onClick={()=>handleDetails(adidas.id)}>
                    
                      <p className=' text-xs mb-6'>{adidas.name}</p>   
                      <div className='relative group  flex  overflow-hidden border'>
                      {/* <div className='absolute bg-blue-500 top-0 left-0 right-0 bottom-0 bg-opacity-50 hover:bg-red-500 group-hover'></div> */}
                          <Image className='lg:group-hover:hidden' src={adidas.img[0].img1} width={230} height={240} alt='hello'></Image>  
                     <Image className='hidden group-hover:block' src={adidas.img[1].img2} width={230} height={240} alt='hello'></Image>       
                    </div>
                     </div>
                      <button onClick={()=>handleQuickView(adidas)} className='hover:bg-black group w-full py-2 flex justify-center items-center'><BiZoomIn size={"20px"} className='group-hover:text-white'/></button>
                      <p className='mb-3 font-bold text-sm'>KS-{adidas.price}</p>
                 
                  
        </div>
               
           ))   
              }
       
          
        </div>
            
<Link href={'/allItems/items'}><button className= 'mt-10 bg-black text-white px-5 py-2'>VIEW ALL</button></Link>
    </div>
  )
}

export default MainPageProducts