import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

function jumbotron() {
  return (
    <div className='text-white sm: block md:flex md:items-center md:justify-around sm: mt-0 md:mt-0 md:pt-[10%] sm: pt-0'>

      <div className='sm:w-full md:w-[40%] sm: text-center md:text-left sm: pt-32 md:pt-0 '>
        <h1 className='sm: text-5xl sm: px-4 md:px-0 md:text-6xl font-bold sm: mt-0 md:mt-12 sm: ml-0 md:ml-10 '>The Most Affortable Place To Stay in the San Franciso Bay Area</h1>
      </div>


      <div className=''>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15854.141675418989!2d3.3400267895038063!3d6.580159511093549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9210951dba3d%3A0xc3d4b92e003891c!2sIkeja%20GRA%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1723278181634!5m2!1sen!2sng" 
        width="400" height="280" className='sm: mx-auto sm: mt-16 md:mt-0 md:mx-0 md:mr-16 rounded-lg sm: w-50px ' 
        loading="lazy"    
        ></iframe>

      <div className='bg-white w-[400px] h-[80px] mt-10 sm: mx-auto md:mx-0 rounded-xl relative p-4 '>
      <select className='text-black border border-gray-400 bg-gray-100 h-full rounded-bl-md rounded-tl-md ml-3 w-[100px] p-2'
        // onChange={(e) => setMapType(e.target.value)} value={mapType}
        >
          <option value="roadmap">All type</option>
          <option value="roadmap">Roadmap</option>
          <option value="satellite">Satellite</option>
          <option value="hybrid">Hybrid</option>
          <option value="terrain">Terrain</option>
        </select>

        <input className='w-[190px] border border-gray-400 bg-gray-100 h-full placeholder-black p-4'
          type="text"
          placeholder="Enter a location"
          // value={searchInput}
          // onChange={(e) => setSearchInput(e.target.value)}
        />

        <button className='bg-blue-500 h-full p-4 '><IoSearchSharp className='text-white text-[25px] '/></button>
      </div>
      </div>
    </div>
  )
}

export default jumbotron