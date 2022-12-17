import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { data } from 'autoprefixer';
import { BiZoomIn } from 'react-icons/bi'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import QuickView from '../quick_view';
import 'swiper/css';
import "swiper/css/navigation";

function RelatedProducts() {
  const [adidasData, setAdidasData] = useState([]);
  const [viewAdidas, setViewAdidas] = useState();
  const [viewClickCheck, setViewClickCheck] = useState(false);

  
 
  useEffect(() => {
    async function fetcher() {
      const response = await fetch(`http://localhost:4000/adidasData`);
      const data = await response.json();
      setAdidasData(data)
     
    } 
    fetcher()
  }, [])
  
  const handleQuickView = (adidas) => {
    console.log("hello")
    setViewAdidas(adidas);
    setViewClickCheck(!viewClickCheck);
    document.querySelector('.wrapper').classList.add('active');
  }

  return (
    <div className='px-16 mt-28'>
      <h1 className='text-center mb-20'>RELATED PRODUCTS</h1>
     
      <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={5}
        navigation={true}
        loop={true}
      onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
    // when window width is >= 640px
          0: {
      slidesPerView: 1,
            
          },
    640: {
     
      slidesPerView: 3,
    },
    // when window width is >= 768px
    1024: {
     
      slidesPerView: 4,
          },
     1280: {
     
      slidesPerView: 5,
    },
  }}
        
        className=" mySwiper select-none"
    >



      {
        adidasData.map((adidas) => (
              
          <SwiperSlide key={adidas.id}>
         <div  className="flex flex-col  mx-auto justify-center items-center gap-5  w-[230px]   text-center">
            <div className=''>
                    
              <p className=' text-xs mb-6'>{adidas.name}</p>
              <div className='relative group mx-auto  flex  overflow-hidden border bg-black'>
                {/* <div className='absolute bg-blue-500 top-0 left-0 right-0 bottom-0 bg-opacity-50 hover:bg-red-500 group-hover'></div> */}
                <Image className='lg:group-hover:hidden' src={adidas.img[0].img1} width={230} height={240} alt='hello'></Image>
                <Image className='' src={adidas.img[1].img2} width={230} height={240} alt='hello'></Image>
              </div>
            </div>
            <button onClick={() => handleQuickView(adidas)} className='hover:bg-black group w-full py-2 flex justify-center items-center'><BiZoomIn size={"20px"} className='group-hover:text-white' /></button>
            <p className='mb-3 font-bold text-sm'>KS-{adidas.price}</p>
                 
                  
          </div>     
        </SwiperSlide>
               
        ))}

        </Swiper>
      <QuickView viewAdidas={viewAdidas} setViewClickCheck={setViewClickCheck} viewClickCheck={viewClickCheck} />
   
    </div>
  )
}

export default RelatedProducts