import React from 'react'
import { content} from './Data'
import Image from 'next/image'
import autoprefixer from 'autoprefixer'

function Content() {

  return (
    <div className='flex justify-between m-auto w-[80%] gap-[110px] my-24'>
        <div className='grid grid-cols-2  '>
            {content.map((item)=>(
               <div key={item.id}>
               <Image src={item.src} alt='' style={{height:item.height, marginTop:item.margin_top, marginLeft:item.margin_left}}  width={item.width} height={item.height}  id='image'></Image>
                <p className={`  text-lg text-white w-[140px] text-center relative font-medium left-8 bottom-[${item.bottom}]`}>{item.caption}</p>
               </div>
            ))}
        </div>

        <div>
        `<div className='ml-10'>
            <h1 className='font-bold text-[50px] w-[90%]'>Flexibility and options to suit your lifestyle.</h1>
            <p className='mt-4 w-[90%] text-2xl'>You need it? We got it. We make finding your next home easy, comfortable, and simple. From our happiness guarantee to our selective roommate
             finder option. We provide you the flexibility that you most desire.</p>
         </div>

             <button type='button' className='mt-4 ml-8 h-[50px] w-[150px] bg-[#F4511E] text-[#fff] rounded-lg font-semibold '>Search Rooms</button>
        </div>
    </div>
  )
}

export default Content