import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

function jumbotron() {
  return (
    <div className="relative "  >

      <div className='md:flex md:items-center gap-x-10  sm: block w-[78%] m-auto md:pt-32 sm: py-32'>
        <div className='sm: w-full md:w-[70%] '>
            <h1 className='md:text-6xl sm: text-3xl text-[#fff] w-[90%]'>The Most Affortable Place To Stay in the San Franciso Bay Area</h1>
        </div>


        <div className='sm: w-full md:w-[32%] block'>
            <div className='w-full'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15854.141675418989!2d3.3400267895038063!3d6.580159511093549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9210951dba3d%3A0xc3d4b92e003891c!2sIkeja%20GRA%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1723278181634!5m2!1sen!2sng" 
              width="auto" height="auto" className='rounded-md w-full md:h-[300px] sm: h-[200px] sm: mt-4 md:mt-0' 
              loading="lazy"    
              ></iframe> 
            </div>

            <div className='flex bg-gray-100 rounded-md h-16 px-2 py-2 w-full mt-4'>
              <div className='w-[70%]'>
                <select className='h-12 w-full border border-gray-200 px-2 rounded-bl-md rounded-tl-md'
                  // onChange={(e) => setMapType(e.target.value)} value={mapType}
                  >
                    <option value="roadmap">All type</option>
                    <option value="roadmap">Roadmap</option>
                    <option value="satellite">Satellite</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="terrain">Terrain</option>
                  </select>
              </div>

               <div className='w-[80%]'>
                  <input className='h-12 w-full border border-gray-200 px-1 '
                    type="text"
                    placeholder="Neighbourhood"
                    // value={searchInput}
                    // onChange={(e) => setSearchInput(e.target.value)}
                    />
               </div>

                <div className=''>
                  <button className='h-12 bg-blue-500 w-10 p-3 rounded-tr-md rounded-br-md '><IoSearchSharp className='text-2xl text-white '/></button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default jumbotron