import React, { useEffect, useState } from 'react'
import SearchBar from '../../components/searchBar/searchBar'
import Filter from '../../components/filter/filter'
import Image from 'next/image'
import { GiShoppingBag } from 'react-icons/gi'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import Link from 'next/link'
import FilterDesktop from '../../components/filter/filterDesktop'
function AllItems({ data }) {
  const [initialImg, setInitialImg] = useState(data[0].img[0].img1);
  const [initialData, setInitialData] = useState(data);
  const [menCheck, setMenCheck] = useState(false);
  const [womenCheck, setWomenCheck] = useState(false);
  const [kidsCheck, setKidsCheck] = useState(false);
  const [accessoriesCheck, setAccessoriesCheck] = useState(false);
  const [apparelCheck, setApparelCheck] = useState(false);
  const [footwearCheck, setFootwearCheck] = useState(false);

  useEffect(() => {
   
      const men = data.filter((data) => (data.gender == "men"));
      setInitialData(men)
  
  }, [menCheck])
  
  useEffect(() => {
   
      const women = data.filter((data) => (data.gender == "women"));
      setInitialData(women)
   
  }, [womenCheck])
  
  useEffect(() => {
   
      const kids = data.filter((data) => (data.gender == "kids"));
      setInitialData(kids)
  
  }, [kidsCheck])
  
  useEffect(() => {
   
      const accessories = data.filter((data) => (data.type == "apparel"));
      setInitialData(accessories)
   
  },[apparelCheck])
  
  useEffect(() => {
   
      const footwear = data.filter((data) => (data.type == "footwear"));
      setInitialData(footwear)
   
  }, [footwearCheck])
  
  useEffect(() => {
    setInitialData(data)
  },[])
  
  
  

  return (
    <div className=''>
      {/* header */}
      <div><h1 className=' py-4 text-center bg-gray-100 border-gray-600'>ADIDAS</h1></div>
      <div className='px-6 flex gap-7'>
        <div className='w-[20%] hidden md:block'>
       <FilterDesktop initialData={initialData} setMenCheck={setMenCheck} setWomenCheck={setWomenCheck} setKidsCheck={setKidsCheck} setAccessoriesCheck={setAccessoriesCheck} setApparelCheck={setApparelCheck} setFootwearCheck={setFootwearCheck} />   

       </div>
          {/* mobile_view */}
          <div className='w-[100%] md:w-[77%]'>
        <SearchBar />
          <Filter initialData={initialData} setMenCheck={setMenCheck} setWomenCheck={setWomenCheck} setKidsCheck={setKidsCheck} setAccessoriesCheck={setAccessoriesCheck} setApparelCheck={setApparelCheck} setFootwearCheck={setFootwearCheck} />

          {/* products */}
          <div className='flex flex-wrap justify-center items-center gap-10 my-9'>
            {
              initialData.map((e) => (
                <div key={e.id} className="w-[40%] md:w-[20%] mx-auto">
                 
                   <Link href={`/${e.id}`}>
                   <div className='flex group relative  max-w-[200px] overflow-hidden mx-auto'>
                    <Image className='group-hover:hidden' src={e.img[0].img1} alt="Products" width={200} height={200} />    
                      <Image className='' src={e.img[1].img2} alt="Products" width={200} height={200} /> 

                  </div>
                  
                  <h3 className=' text-xs my-4'>{e.name}</h3>
                  <p className='my-4 text-sm'>KS:{e.price}</p>
                  <div className='mb-4 flex items-center justify-start gap-2 '>
                     {
                      e.sizes.map((size,index) => (
                          <div className='sizesTrigger bg-gray-100 lg:w-[35px] w-[30px] md:w-[26px] md:h-[26px] h-[30px] flex justify-center items-center lg:h-[35px] cursor-pointer text-xs ' key={size.size}>{size.size}</div>
                  ))
               }
                  </div>
                  </Link>
                  <button className=' group border hover:bg-black  max-w-[300px] flex justify-center items-center w-full  border-black gap-4 py-1'>
                    <GiShoppingBag className='  group-hover:text-white' sizes={"12px"}/> 
                    <p className=' group-hover:text-white'>Add to cart</p>
                    </button>
                </div>
              ))
          }
          </div>  

          </div>  
      </div>    
    </div>
  )
}

export default AllItems
export async function getServerSideProps(context) {
  const { allItems } = context.query;
  console.log(allItems)
  let queryString;
  if (allItems == "items" ) {
    queryString = ''
  } else if (allItems == "men") {
    queryString = '?gender=men'
  } else if (allItems == "women") {
    queryString = '?gender=women'
  }else if (allItems == "kids") {
    queryString = '?gender=kids'
  }
  console.log(queryString)

  const response = await fetch(`http://localhost:4000/adidasData${queryString}`);
  const data = await response.json();

  return {
    props:{data:data}
  }
}