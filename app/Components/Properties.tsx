'use client'
import React, { useState } from 'react'
import { Property} from './Data'
import Image from 'next/image'

function properties() {

const [currentPage, setCurrentPage] = useState (1)

const perPage = 6
const lastElement = currentPage * perPage;
const firstElement = lastElement - perPage
const datas = Property.slice(firstElement, lastElement)
const index = (Property.length)/perPage

const handleNext = ()=>{
  if (currentPage <= index) {
    setCurrentPage (currentPage + 1)
    
  } 
}

const handlePrev = ()=>{
  if ( currentPage > 0) {
  setCurrentPage (currentPage - 1)
  }
}



  return (
    <div className='w-full '>
        <div className='w-[80%] m-auto '>
          <div className='md:flex sm:block items-center justify-between sm: w-[80%] md:w-full  sm: m-auto'>
              <div className=' '>
                  <h1 className='font-bold text-3xl '>List of Properties</h1>
                  <hr className='bg-[#F4511E] w-16 h-1 text-white'/>
              </div>
              
              <div className=' '>
                <button className='bg-[#F4511E] h-[50px] text-white w-1/11 px-5 mr-5 sm: mt-4 hover:opacity-70'>View All Property</button>
              </div>
              
          </div>

          <div className={`sm: block md:grid md:grid-cols-3 gap-12 mt-16 w-full ${index === currentPage? "block" : ""}`}>
            {datas.map(items=>(
              <div className='md:w-full sm: w-[80%]  sm: m-auto md:m-0  border border-gray-300 rounded-2xl sm: mb-10 md:mb-0' key={items.id}>
                <Image height={200} width={700} alt='' src={items.src} />
                <h3 className='font-semibold w-[250px] ml-4 mt-3 text-lg'>{items.Address}</h3>
                <h6 className='ml-4 mt-4 text-sm text-gray-500'>{items.room}</h6>
                <h2 className='text-[#F4511E] ml-4 font-semibold'>{items.price}</h2>

                <div className='flex mt-3 text-lg w-full'>
                  <p className=' flex items-center border border-gray-300 w-1/3 h-[40px] px-8 rounded-bl-2xl  '>
                    <span className='mr-2 text-lg'>{items.iconOne}</span>4
                  </p>

                  <p className=' flex items-center border border-gray-300 w-1/3 h-[40px] px-8'>
                    <span className='mr-2 text-lg'>{items.iconTwo}</span>2
                  </p>

                  <p className=' flex items-center border border-gray-300 w-1/3 h-[40px] px-8 rounded-br-2xl'>
                  <span className='mr-2 text-lg'>{items.iconThree}</span>2
                  </p>

                </div>
              </div>
            ))}
          </div>

          <div className='flex md:w-[20%] sm: w-[75%] m-auto pt-6'>
            <button id='btnPrev' onClick={()=>handlePrev()} className={`h-12 border border-gray-400 font-semibold text-[#F4511E] py-2 px-4 rounded-tl-md rounded-bl-md ${lastElement === perPage ? "bg-gray-200 text-gray-400" : ""}`} disabled={lastElement === perPage}>
              Prev</button>
            <button onClick={()=>setCurrentPage(1)} className={`h-12 border border-gray-400 font-semibold text-[#F4511E] py-2 px-4  ${currentPage ===1 ? "bg-[#F4511E] text-white" : "bg-transparent"}`}>1</button>
            <button onClick={()=>setCurrentPage(2)} className={`h-12 border border-gray-400 font-semibold text-[#F4511E] py-2 px-4  ${currentPage ===2 ? "bg-[#F4511E] text-white" : "bg-transparent"}`}>2</button>
            <button onClick={()=>setCurrentPage(3)} className={`h-12 border border-gray-400 font-semibold text-[#F4511E] py-2 px-4  ${currentPage ===3 ? "bg-[#F4511E] text-white" : "bg-transparent"}`}>3</button>
            <button id='btnNext' onClick={()=>handleNext()} className={`h-12 border border-gray-400 font-semibold text-[#F4511E] py-2 px-4 rounded-tr-md rounded-br-md ${lastElement === Property.length ? "bg-gray-200 text-gray-400" : ""} `} disabled={lastElement === Property.length}>
              Next
            </button>

          </div>
        </div>
    </div>
  )
}

export default properties