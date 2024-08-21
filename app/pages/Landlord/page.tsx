import Image from 'next/image'
import React from 'react'
import Properties from '../../Components/Properties'
import { benefit } from '../../Components/Data'

function Landlord() {
  return (
    <div className=' h-full ' id='Landlord'>
        <div className=' m-auto sm: w-[80%] md:w-[80%] '>

        
        <h1 className='font-bold text-3xl mt-24 '>Minimum Living Cost Takes Care of Everything</h1>
        <hr className='bg-[#F4511E] w-80 h-1'/>

        <div className='sm: block md:flex md:items-center md:justify-between mt-10'>

            <div className='sm: ml-0 md:-ml-10 sm: w-[300px] md:w-auto'>
                <Image height={400} width={400} alt='' src="/RentalImages/unsplash_oGmf8o53LeE.png"/>
            </div>

            <div className='sm: block md:grid md:grid-cols-3 sm:gap-0 md:gap-10 md:w-[70%] sm: w-[90%] sm: m-auto'>
            {benefit.map(item=>(
                    <div key={item.id} className='sm: mb-8 md:mb-0 sm: w-[50%] md:w-full sm: m-auto ' >
                        <div className='text-[#F4511E] sm: text-[50px] md:text-4xl  bg-white  md:w-16 sm: w-24 md:h-16 sm: h-24 rounded-md shadow-lg shadow-gray-400 md:p-4 sm: p-6 mb-4 '>
                            {item.icon}
                        </div>
                        <h1 className=' md:text-lg sm: text-2xl font-bold md:w-11/12 sm: w-full'>{item.chracteristics}</h1>
                    </div>
                ))}
            </div>

           
        </div>

        </div>

        <div className='bg-[#f5f5f5] pt-8 pb-8 '>
        <Properties />

        </div>
    </div>
  )
}

export default Landlord