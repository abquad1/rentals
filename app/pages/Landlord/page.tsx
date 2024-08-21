import Image from 'next/image'
import React from 'react'
import Properties from '../../Components/Properties'
import { benefit } from '../../Components/Data'

function Landlord() {
  return (
    <div className=' w-full h-full ' id='Landlord'>
        <div className=' w-[80%] m-auto '>

            <div className='w-full'>
                <h1 className='font-bold text-3xl mt-24 '>Minimum Living Cost Takes Care of Everything</h1>
                <hr className='bg-[#F4511E] md:w-80 sm: w-24 h-1'/>
            </div>

            <div className='sm: block md:flex md:items-center md:justify-between mt-10 md:w-full sm: w-full'>

                <div className='sm: ml-0 md:-ml-10 sm: w-full md:w-[40%]'>
                    <Image height={300} width={400} alt='' src="/RentalImages/unsplash_oGmf8o53LeE.png" style={{ width: 'auto', height: 'auto' }}/>
                </div>

                <div className='sm: grid sm: grid-cols-2 md:grid md:grid-cols-3 sm:gap-0 md:gap-10 md:w-[80%] sm: w-full '>
                {benefit.map(item=>(
                        <div key={item.id} className='sm: mb-8 md:mb-0 sm: w-full md:w-full sm: ' >
                            <div className='text-[#F4511E] sm: text-[50px] md:text-4xl mb-4 sm: w-[80%] sm: m-auto'>
                                <div className='md:w-16 sm: w-24 md:h-16 sm: h-24 bg-white  rounded-md shadow-lg shadow-gray-400 md:p-4 sm: p-6 '>
                                    {item.icon}
                                </div>
                             </div>  

                             <div className='md:w-full sm: w-[80%]'>
                                <h1 className=' md:text-lg sm: text-2xl font-bold '>{item.chracteristics}</h1>
                            </div>
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