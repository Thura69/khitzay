import React, { useState } from 'react'
import { BsChevronDown,BsChevronUp } from 'react-icons/bs'
import {AiOutlinePhone,AiOutlineMail} from 'react-icons/ai'

function Footer() {
    const [click, setClick] = useState({
        'link': false,
        'help': false,
        'account':false,
    });
    const handleLink = () => {
    setClick({
        'link':!click.link,
        'help': click.help,
        'account':click.account,
    })
    }

    const handleHelp = () => {
        setClick({
        'link':click.link,
        'help':!click.help,
        'account':click.account,
    })
    }

    const handleAccount = () => {
       setClick({
        'link':click.link,
        'help':click.help,
        'account':!click.account,
    })
    }





  return (
      <footer className='bg-black text-white p-5 flex flex-col justify-center items-center'>
          
                <div className='footer_nav  flex lg:flex-row lg:justify-between lg:items-start  flex-col gap-3 py-5 lg:p-5 lg:w-[80%] w-full'>
<div className='quick_link lg:border-0 border-b py-2 transition-all ease-in-out duration-[1500ms]'>
                  <button className='flex w-full  justify-between items-center' name="quick_link" onClick={handleLink}>QUICK LINK <div className='lg:hidden'>{click.link?<BsChevronUp />:<BsChevronDown />}</div></button >   
                  
                  
                  <ul className={`overflow-hidden lg:h-auto lg:py-4 overflow-y-auto ${click.link?`h-auto py-4`:`h-0 py-0`}`} >
                      <li><p className='hover:underline cursor-pointer hover:text-gray-500'>About Us</p></li>
                      <li><p className='hover:underline cursor-pointer hover:text-gray-500'>Privacy Policy</p></li>
                      <li><p className='hover:underline cursor-pointer hover:text-gray-500'>How TO Buy Guide?</p></li>
                      <li><p className='hover:underline cursor-pointer hover:text-gray-500'>Order Tracking</p></li>

            </ul>
              </div>
              
<div className='help lg:border-0 border-b py-2'>
                  <button onClick={handleHelp} className='flex w-full justify-between items-center'>HELP <div className='lg:hidden'>{click.help?<BsChevronUp />:<BsChevronDown />}</div></button>   
                  
                   <ul className={`overflow-hidden lg:h-auto lg:py-4 overflow-y-auto ${click.help?`h-auto py-4`:`h-0 py-0`}`}>
                      <li><p className='hover:underline cursor-pointer hover:text-gray-500'>Payment</p></li>
                      <li><p className='hover:underline cursor-pointer hover:text-gray-500'>Return & Exchange</p></li>
                      <li><p className='hover:underline cursor-pointer hover:text-gray-500'>Delivery</p></li>
                      <li><p className='hover:underline cursor-pointer hover:text-gray-500'>FAQ</p></li>

            </ul>
              </div>   

<div className='my_account lg:border-0 border-b py-2'>
                  <button onClick={handleAccount} className='flex w-full  justify-between items-center'>MY ACCOUNT<div className='lg:hidden'>{click.account?<BsChevronUp />:<BsChevronDown />}</div></button>   
                  
                  <div className={`overflow-hidden lg:h-auto lg:py-4 overflow-y-auto ${click.account?`h-auto py-4`:`h-0 py-0`}`}><h3 className='hover:underline cursor-pointer hover:text-gray-500'>My Personal Information</h3></div>
</div>            

  <div className='lg:border-0 border-b pb-12 contact_us flex flex-col  font-light mt-4 lg:m-0'>
              <h2 className='text-lg mb-4'>Contact Us</h2>
              <div className='flex gap-2 items-center justify-start'><AiOutlinePhone/><p>09251123707</p></div>
             <div className='flex gap-2 items-center justify-start'><AiOutlineMail/><p>service@khitzay.com</p></div>
              
          </div>                    
          </div>
          
        
         
        
           <div className='pt-7 pb-5'>
                <p >&#169; 2020 KhitZay. All Rights Reserved.</p>
        </div>
     </footer>
  )
}

export default Footer