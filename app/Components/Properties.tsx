import React from 'react'
import { Property} from './Data'
import Image from 'next/image'

function properties() {
  return (
    <div className='w-[80%] m-auto '>
        <div className='flex items-center justify-between'>
            <div>
                <h1 className='font-bold text-3xl '>List of Properties</h1>
                <hr className='bg-[#F4511E] w-16 h-1 text-white'/>
            </div>
            

            <button className='bg-[#F4511E] h-[50px] text-white w-1/11 px-5 mr-5'>View All Property</button>
        </div>

      <div className='sm: block md:grid md:grid-cols-3 gap-12 mt-16 '>
        {Property.map(items=>(
            <div className='md:w-[360px] sm: w-[480px]  sm: m-auto md:m-0  border border-gray-300 rounded-2xl sm: mb-10 md:mb-0'>
              <Image height={200} width={500} alt='' src={items.src}/>
              <h3 className='font-semibold w-[250px] ml-4 mt-3 text-lg'>{items.Address}</h3>
              <h6 className='ml-4 mt-4 text-sm text-gray-500'>{items.room}</h6>
              <h2 className='text-[#F4511E] ml-4 font-semibold'>{items.price}</h2>
              <div className='flex mt-3'>
                <p className=' flex items-center border border-gray-300 w-1/3 h-[40px] px-8 rounded-bl-2xl'>{items.iconOne}<span className='ml-2'>4</span></p>
                <p className=' flex items-center border border-gray-300 w-1/3 h-[40px] px-8'>{items.iconTwo}<span className='ml-2'>2</span></p>
                <p className=' flex items-center border border-gray-300 w-1/3 h-[40px] px-8 rounded-br-2xl'>{items.iconThree}<span className='ml-2'>2</span></p>

              </div>
            </div>
        ))}
      </div>
        

    </div>
  )
}

export default properties