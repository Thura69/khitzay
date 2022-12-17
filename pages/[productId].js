import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ProductDetails from '../components/productDetails'
import ReturnAndExchanges from '../components/returnAndExchanges'
import Delivery from '../components/delivery'
import RelatedProducts from '../components/relatedProducts'
import {useRouter} from 'next/router'

 
function ProductId({ data }) {
    const [count, SetCount] = useState(0);
    const [instock, SetInstock] = useState(100);
    const [mainPhoto, SetMainPhoto] = useState();
    const [changePart, SetChangePart] = useState("1");
    const router = useRouter();
     useEffect(() => {
        data.map((img) => {
        SetMainPhoto(img.img[0].img1)
     })   
    },[])
    
    
    
   

    const handleSize = (e, data,index) => {
       
        SetInstock(data[index].number);
     
        const sizes = document.querySelectorAll('.sizesTrigger');
        sizes.forEach((size) => {
           size.classList.remove('border-2')
       })

        e.target.classList.add('border-2')
        e.target.classList.add('border-black')

    }
    const handleMiniPhoto = (e) => {
        SetMainPhoto(e.target.alt)
        
         const sizes = document.querySelectorAll('.miniPhotos');
        sizes.forEach((size) => {
           size.classList.remove('border-2')
       })

        e.target.classList.add('border-2')
        e.target.classList.add('border-black')

    }
    const handleChangePart = (e) => {
        const sizes = document.querySelectorAll('.change_part');
        sizes.forEach((size) => {
           size.classList.remove('border-b')
       })
        SetChangePart(e.target.id);
        e.target.classList.add('border-b')
        e.target.classList.add('border-black')

    }

   

  return (
      <div>
          {
              data.map((data) => (
                  <div key={data.id}>
         <div className='flex bg-gray-100 lg:gap-4  gap-2 text-xs py-2 px-4 lg:px-16'>
              <p>Home</p>
              <span>&gt;</span>
              <p>Products</p>
              <span>&gt;</span>
              <p className='text-xs'>{data.name}</p>
          
          </div> 
          
          <div className='flex flex-col gap-5 md:justify-center md:items-start md:flex-row mt-8 md:px-16 px-5'>
              <div className='img   md:w-[50%] flex flex-col-reverse md:flex-row gap-2'>
                   <div className='img_one  flex md:flex-col flex-row lg:flex-col gap-2'>
                  <div>
                  <Image onClick={(e)=>handleMiniPhoto(e)} className="miniPhotos" src={data.img[0].img1} alt={data.img[0].img1} width={100} height={100}></Image>
                  </div> 
                    <div>
                  <Image  onClick={(e)=>handleMiniPhoto(e)} className="miniPhotos" src={data.img[1].img2} alt={data.img[1].img2} width={100} height={100}></Image>
                  </div> 
                    <div>
                  <Image  onClick={(e)=>handleMiniPhoto(e)} className="miniPhotos" src={data.img[2].img3} alt={data.img[2].img3} width={100} height={100}></Image>
                  </div> 
                    <div>
                          <Image onClick={(e) => handleMiniPhoto(e)} className="miniPhotos" src={data.img[3].img4} alt={data.img[3].img4} width={100} height={100}></Image>
                  </div> 
                    <div>
                  <Image  onClick={(e)=>handleMiniPhoto(e)} className="miniPhotos" src={data.img[4].img5} alt={data.img[4].img5} width={100} height={100}></Image>
                  </div> 
              </div>
              <div className='img_two max-w-[500px] h-[380px]'>
                  <Image src={mainPhoto} alt="photo" width={500} height={100}></Image>
                  
              </div>
            </div>
              <div className='content mt-9 md:mt-0 md:w-[50%]'>
                  <p className=' lg:text-2xl text-sm font-light  mb-5'>{data.name}</p>  
                  <div className='flex gap-10 items-center mb-5'>
                      <p className=' text-green-800 text-xs'>In Stock</p>
                      <p className=' text-xs font-light '>SKU:{data.SKU}</p>
                  </div>
                  <p className=' text-2xl font-bold mb-3'>K:{data.price}</p>
                  <p className='font-light'>{data.description}</p>

                
                      {
                       
                             instock < 10 ?  <div className=' border-4 border-blue-400 border-dashed flex items-center justify-center py-2 my-5'><p className=' text-blue-400'>Hurry! Only {instock} left in stock</p>  </div>:''
                        
                }      
              




                    <p className='font-light text-xs mb-3'>SIZE:</p>
              <div className=' flex items-center justify-start lg:pb-3 pb-1 pt-2 gap-2'>
                  {
                      data.sizes.map((size,index) => (
                          <div onClick={(e)=>handleSize(e,data.sizes,index)} className='sizesTrigger bg-gray-100 lg:w-[35px] w-[30px] md:w-[26px] md:h-[26px] h-[30px] flex justify-center items-center lg:h-[35px] cursor-pointer text-xs ' key={size.size}>{size.size}</div>
                  ))
               }
                  </div>
                  
                   <div className='flex  justify-start md:mt-2 items-center mt-4'>
                  <div className=' flex lg:py-4 py-2'>
                          <button className='lg:px-3 px-3    border bg-gray-100 text-xl lg:text-3xl' onClick={()=>SetCount((prev)=>(prev === 0 ? 0 : prev-1))} >-</button><p className='lg:px-4  px-5 flex justify-center border items-center'>{count}</p><button className='lg:px-3  px-3   border bg-gray-100 text-xl lg:text-2xl' onClick={()=>SetCount((prev)=>(prev+1))}>+</button>
                  </div>
                  <button className='bg-black lg:py-2  px-5  py-2 border border-black text-xs lg:text-sm text-white '>ADD TO CART</button>
              </div>
                  
            </div>
    

          </div>

          <div className='lg:px-16 hidden lg:block  px-4  mt-20 text-gray-600'>
              <ul className='flex  mb-14  border-b border-gray-300 justify-start font-light text-sm items-end  '>
                  <li id="1" onClick={(e)=>handleChangePart(e)} className=' cursor-pointer change_part font-bold border-b border-black py-2 px-4 '>PRODUCT DETAILS</li>
                  <li id="2" onClick={(e)=>handleChangePart(e)} className=' cursor-pointer change_part font-bold py-2 px-4'>RETURNS AND EXCHANGE</li>
                  <li id="3" onClick={(e)=>handleChangePart(e)} className=' cursor-pointer change_part font-bold py-2 px-4'>DELIVERY</li>
              </ul>    
              {
             
                  changePart == 1 ?  <ProductDetails name={data.name} description={data.description} />:''
              }
              {
                  changePart == 2 ?   <ReturnAndExchanges /> : ''
             }
              {
                  changePart == 3 ? <Delivery/> :''
             }
          </div>
              
      </div>                
              ))
          } 
          <RelatedProducts/>
       
    
    </div>
  )

   
}

export default ProductId
export async function getStaticPaths() {
    return {
        paths: [
            { params: { productId: "1" } },
            {params:{productId:"2"}},
            {params:{productId:"3"}},
            {params:{productId:"4"}},
            { params: { productId: "5" } },
            { params: { productId: "6" } },
            { params: { productId: "7" } },
            { params: { productId: "8" } },
            { params: { productId: "9" } },
            { params: { productId: "10" } },
            { params: { productId: "11" } },
            { params: { productId: "12" } },
            { params: { productId: "13" } },
            { params: { productId: "14" } },
            { params: { productId: "15" } },
            { params: { productId: "16" } },
            { params: { productId: "17" } },
            { params: { productId: "18" } },
            { params: { productId: "19" } },
            { params: { productId: "20" } },
            { params: { productId: "21" } },
            { params: { productId: "22" } },
            { params: { productId: "23" } },
            { params: { productId: "24" } },
            { params: { productId: "25" } },
           
                                          
            
        ],
        fallback:false,
    }
}
export async function getStaticProps(context) {
    const { params } = context;
    const response = await fetch(`http://localhost:4000/adidasData?id=${params.productId}`);
    const data = await response.json();

    return {
        props:{data}
    }
}