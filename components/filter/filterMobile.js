import React, { useEffect, useRef, useState } from 'react'
import {AiOutlineClose,AiOutlineDown} from 'react-icons/ai'

function FilterMobile({ initialData,setMenCheck,setWomenCheck,setKidsCheck,setAccessoriesCheck,setApparelCheck,setFootwearCheck }) {
    const GenderRef = useRef();
    const CategoryRef = useRef();
    const menRef = useRef();
    const womenRef = useRef();
    const kidRef = useRef();
    const accessoriesRef = useRef();
    const apparelRef = useRef();
    const footwearRef = useRef();

    const [menLength, setMenLength] = useState();
    const [men, setMen] = useState();
    const [womenLength, setWomenLength] = useState();
    const [women, setWomen] = useState();
    const [kidsLength, setKidsLength] = useState();
    const [kids, setKids] = useState();
    const [accessoriesLength, setAccessoriesLength] = useState();
    const [accessories, setAccessories] = useState();
    const [apparelLength, SetApparelLength] = useState();
    const [apparel, setApparel] = useState();
    const [footwearLength, setFootwearLength] = useState();
    const [footwear, setFootwear] = useState();

    useEffect(() => {
       
        const men = initialData.filter((data) => (data.gender == "men"));
        setMenLength(men.length)
        setMen(men)

        const women = initialData.filter((data) => (data.gender == "women"));
        setWomenLength(women.length)
        setWomen(women)

         const kids = initialData.filter((data) => (data.gender == "kids"));
        setKidsLength(kids.length)
        setKids(kids)

         const accessories = initialData.filter((data) => (data.type == "accessories"));
        setAccessoriesLength(accessories.length)
        setAccessories(accessories)

         const apparel = initialData.filter((data) => (data.type == "apparel"));
        SetApparelLength(apparel.length)
        setApparel(apparel)

         const footwear = initialData.filter((data) => (data.type == "footwear"));
        setFootwearLength(footwear.length)
        setFootwear(footwear)
        
       
    },[])

    const handleGender = () => {
        
        GenderRef.current.classList.toggle('h-0');
        GenderRef.current.classList.toggle('h-auto');

    }
    const handelCategory = () => {
      
        CategoryRef.current.classList.toggle('h-0');
        CategoryRef.current.classList.toggle('h-auto');

    }
    const handleFilterMenuMobile = () => {
         document.querySelector('.mobile_filter').classList.toggle("active")
        document.querySelector('.wrapper').classList.toggle("active")
    }
    const handleMenCheck = (e) => {
        kidRef.current.checked = false;
        womenRef.current.checked = false;
        apparelRef.current.checked = false;
        footwearRef.current.checked = false;
        
        

        e.target.checked = true
       
        setMenCheck((prev) => (!prev));
        document.querySelector('.mobile_filter').classList.remove('active');
        document.querySelector('.wrapper').classList.remove('active');
    }
    const handleWomenCheck = (e) => {
        kidRef.current.checked = false;
        menRef.current.checked = false;
        apparelRef.current.checked = false;
        footwearRef.current.checked = false;
        
        

        e.target.checked = true
        setWomenCheck((prev) => (!prev));
         document.querySelector('.mobile_filter').classList.remove('active');
        document.querySelector('.wrapper').classList.remove('active');
    }
    const handleKidsCheck = (e) => {
        womenRef.current.checked = false;
        menRef.current.checked = false;
        apparelRef.current.checked = false;
         footwearRef.current.checked = false;

           
        
        e.target.checked = true
        setKidsCheck((prev) => (!prev));
         document.querySelector('.mobile_filter').classList.remove('active');
        document.querySelector('.wrapper').classList.remove('active');
    }

     const handleApparelCheck = (e) => {
        womenRef.current.checked = false;
         menRef.current.checked = false;
         kidRef.current.checked = false;
         footwearRef.current.checked = false;


           
        
        e.target.checked = true
        setApparelCheck((prev) => (!prev));
         document.querySelector('.mobile_filter').classList.remove('active');
        document.querySelector('.wrapper').classList.remove('active');
     }
    
    const handleFootwearCheck = (e) => {
         womenRef.current.checked = false;
         menRef.current.checked = false;
         kidRef.current.checked = false;
        apparelRef.current.checked = false;

          
        
        e.target.checked = true
        setFootwearCheck((prev) => (!prev));
         document.querySelector('.mobile_filter').classList.remove('active');
        document.querySelector('.wrapper').classList.remove('active');
    }


    
  return (
      <div className='mobile_filter z-20 fixed w-[80%] bg-gray-50 top-0 left-0 bottom-0'>
          <button onClick={handleFilterMenuMobile} className='border-b  w-full flex justify-between px-5 items-center font-bold py-4 text-gray-600'>FILTER BY <AiOutlineClose size={"25px"} /> </button> 
          {/* Gender */}
          <ul className=''>
              <li className=' select-none cursor-pointer py-4 font-bold text-sm border flex items-center px-4 gap-2' onClick={handleGender}><AiOutlineDown size={"15px"} />GENDER</li>  
              {/* GenderMenu */}
              <ul ref={GenderRef} className=' overflow-hidden h-auto'>
                  <li className='flex justify-between items-center py-4 px-4'>
                      <div className='flex items-center gap-4 font-light  '>
                          {
                              menLength==0? <input disabled ref={menRef}  className='scale-[2]'  type="checkbox" />: <input ref={menRef}  className='scale-[2]' onClick={(e)=>handleMenCheck(e)} type="checkbox" />
                         }
                          
                          <p>Men</p></div>
                      <div>({menLength})</div>
                      
                  </li>
                   <li className='flex py-4 justify-between items-center px-4'>
                      <div className='flex items-center gap-4 font-light  '>
                          {
                              womenLength==0? <input disabled ref={womenRef}  className='scale-[2]'  type="checkbox" />: <input ref={womenRef}  className='scale-[2]' onClick={(e)=>{handleWomenCheck(e)}} type="checkbox" />
                         }
                          
                          <p>Women</p></div>
                      <div>({womenLength})</div>
                      
                  </li>   
                   <li className='flex py-4 justify-between items-center px-4'>
                      <div className='flex items-center gap-4 font-light  '>
                          
                          {
                              kidsLength==0? <input disabled ref={kidRef}  className='scale-[2]'  type="checkbox" />: <input ref={kidRef}  className='scale-[2]' onClick={(e)=>{handleKidsCheck(e)}} type="checkbox" />
                         }
                          
                          <p>kids</p></div>
                      <div>({kidsLength})</div>
                      
                  </li>  
              </ul>

              {/* Category */}
              <li onClick={handelCategory} className='py-4 font-bold text-sm border flex items-center px-4 gap-2 select-none cursor-pointer'><AiOutlineDown size={"15px"} />CATEGORY</li> 
              {/* CategoryMenu */}
                <ul ref={CategoryRef} className=' overflow-hidden h-auto'>
                  <li className='flex justify-between items-center py-4 px-4'>
                      <div className='flex items-center gap-4 font-light  '>
                          {
                              accessoriesLength==0? <input disabled ref={accessoriesRef}  className='scale-[2]'  type="checkbox" />: <input ref={accessoriesRef}  className='scale-[2]' type="checkbox" />
                         }
                          
                          
                          <p>Accessories</p></div>
                      <div>({accessoriesLength})</div>
                      
                  </li>
                   <li className='flex py-4 justify-between items-center px-4'>
                      <div className='flex items-center gap-4 font-light  '>
                          {
                              apparelLength==0? <input disabled ref={apparelRef}  className='scale-[2]'  type="checkbox" />: <input ref={apparelRef}  className='scale-[2]' onClick={(e)=>{handleApparelCheck(e)}} type="checkbox" />
                         }
                          
                          <p>Apparel</p></div>
                      <div>({apparelLength})</div>
                      
                  </li>   
                    <li className='flex py-4 justify-between items-center px-4'>
                      <div className='flex items-center gap-4 font-light  '>
                         {
                              footwearLength==0? <input disabled ref={footwearRef}  className='scale-[2]'  type="checkbox" />: <input ref={footwearRef}  className='scale-[2]' onClick={(e)=>{handleFootwearCheck(e)}} type="checkbox" />
                         }
                          
                          <p>Footwear</p></div>
                      <div>({footwearLength})</div>
                      
                  </li>   
              </ul>
              
              <li className='py-4 font-bold text-sm border flex items-center px-4 gap-2'><AiOutlineDown size={"15px"} />PRICE</li>    
              
              
          </ul>
    </div>
  )
}

export default FilterMobile