import React from 'react'
import { content} from './Data'
import Image from 'next/image'
import autoprefixer from 'autoprefixer'
import { relative } from 'path'

function Content() {

  return (
    <div className='w-full'>
        <div className='w-[80%] m-auto md:flex sm: block'>
          <div className='grid grid-cols-2 md:w-[50%] sm:w-[40%] md:gap-y-4 sm: gap-y-0 sm: gap-x-12 md:gap-x-0'>
              {content.map((item)=>(
                <div key={item.id} className=''>
                  <div className='relative md:-left-3 sm: left-0 md:w-[220px] sm:w-[180px]'  style={{top:item.bottom}}>
                  <p className=" text-white font-bold md:text-center  " >
                    {item.caption}
                  </p>
                  </div>

                <Image src={item.src} alt='' 
                style={{height:item.height, marginTop:item.margin_top, marginLeft:item.margin_left}} 
                  width={item.width} height={item.height} className=''
                  ></Image>
                  
                </div>
              ))}
          </div>

          <div className='md: w-[50%] sm: w-full'>
          ` <div className=''>
              <h1 className='font-bold text-[52px] '>Flexibility and options to suit your lifestyle.</h1>
              <p className=' text-2xl'>You need it? We got it. We make finding your next home easy, comfortable, and simple. From our happiness guarantee to our selective roommate
              finder option. We provide you the flexibility that you most desire.</p>
            </div>

              <div className='md:w-full sm: w-[50%] sm: m-auto pb-8'>
                <button type='button' className='mt-4 h-[50px] w-[150px] bg-[#F4511E] text-[#fff] rounded-lg font-semibold '>Search Rooms</button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Content