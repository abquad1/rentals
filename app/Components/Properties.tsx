import React from 'react'
import { Property} from './Data'
import Image from 'next/image'

function properties() {
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

          <div className='sm: block md:grid md:grid-cols-3 gap-12 mt-16 w-full '>
            {Property.map(items=>(
              <div className='md:w-full sm: w-[80%]  sm: m-auto md:m-0  border border-gray-300 rounded-2xl sm: mb-10 md:mb-0' key={items.id}>
                <Image height={200} width={500} alt='' src={items.src} style={{ width: 'auto', height: 'auto' }}/>
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
        </div>
    </div>
  )
}

export default properties