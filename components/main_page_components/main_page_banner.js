import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function MainPageBanner() {
  return (
      <div className='mt-5'>
          <div className='h-[300px] lg:h-[450px] lg:w-[80%]   w-[90%] relative mx-auto'>  
        <Image src='/promotion_banner.jpeg' alt="hello" className='mx-auto' objectFit="cover" fill priority></Image>
        
        <Image src="/images/Adidas-Logo.wine.png" className='absolute top-3 right-0' width={90} height={100} alt="logo" objectFit='container'></Image>  
        
          </div>
          {/* New_arrivals */}
      <div className='kinds_cards mt-10 flex gap-3 items-center justify-center px-8  flex-wrap lg:px-36'>
        
        <div className='relative cursor-pointer lg:w-[31%]'>
            <Link href={'/allItems/items'}>
          
          <Image src="/images/new_arrivalss.webp" width={400} height={500} alt="original"></Image>      
          
         
          <Image src="/images/Adidas-Logo.wine.png" className='absolute top-3 right-0' width={70} height={80} alt="logo" objectFit='container'></Image>  
         
          
                  <h1 className=' bg-gray-50 text-center font-extrabold text-2xl p-3 w-[80%] left-[10%] right-[10%]  absolute bottom-3 '>New Arrivals </h1>
        </Link>     
        </div>
              
            {/* Originals */}
        <div className='relative cursor-pointer   lg:w-[31%] '>
            <Link href={'/allItems/items'}>
          
          <Image src="/images/original2.webp" width={400} height={500} alt="original"></Image>      
          
          <Image src="/images/Adidas-Logo.wine.png" className='absolute top-3 right-0' width={70} height={80} alt="logo" objectFit='container'></Image>  
                  <h1 className=' bg-gray-50 font-extrabold text-2xl p-3 text-center w-[80%] left-[10%] right-[10%]   absolute bottom-3 '>Originals </h1>
        </Link>      
        </div> 

              {/* Men */}
      
        <div className='relative cursor-pointer  lg:w-[31%]'>
            <Link href={'/allItems/men'}>
          <Image src="/images/men.webp" width={400} height={500} alt="original"></Image> 
          <Image src="/images/Adidas-Logo.wine.png" className='absolute top-3 right-0' width={70} height={80} alt="logo" objectFit='container'></Image>  
                  <h1 className=' bg-gray-50 font-extrabold text-2xl p-3  text-center w-[80%] left-[10%] right-[10%] absolute bottom-3 '>Men</h1>
          </Link>        
        </div>  
      
              {/* Women */}
        <div className='relative cursor-pointer  lg:w-[31%]'>
          <Link href={'/allItems/women'}>
          <Image src="/images/women.webp" width={400} height={500} alt="original" objectFit='container'></Image>      
          <Image src="/images/Adidas-Logo.wine.png" className='absolute top-3 right-0' width={70} height={80} alt="logo" objectFit='container'></Image>  
                 <h1 className=' bg-gray-50 font-extrabold text-2xl p-3  absolute bottom-3 text-center w-[80%] left-[10%] right-[10%]'>Women</h1>
        </Link>     
        </div>  
              {/* Kids */}
        <div className='relative cursor-pointer lg:w-[31%] '>
            <Link href={'/allItems/kids'}>
          <Image src="/images/kids.webp" width={400} height={500} alt="original" objectFit='cover'></Image>
         <Image src="/images/Adidas-Logo.wine.png" className='absolute top-3 right-0' width={70} height={80} alt="logo" objectFit='container'></Image>  
                 
          <h1 className=' bg-gray-50 font-extrabold text-2xl p-3  absolute bottom-3 text-center w-[80%] left-[10%] right-[10%]'>Kids</h1>
          </Link>
        </div> 
              
          </div>
    </div>
  )
}

export default MainPageBanner