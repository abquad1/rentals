'use client'

import React, { useState } from 'react'
import { states } from './Data'
import { cities } from './Data'
import { roomTypes } from './Data'


function FormTable() {

const [formData, setFormData] = useState({
    name: '', 
    address: '',
    unit: '',
    city: '',
    state: '',
    room: '',
    price: '',
    description: ''
})

const handleChange =(e)=>{
   const {name, value} = e.target;
   setFormData({
    ...formData, [name]: value
   })

}

const handleSubmit = async(e) =>{
    e.preventDefault();
    const response = await fetch('api/submit', {
        method: 'POST ',
        headers: {
            'content-type':' application.json'
        },
         body: JSON.stringify(formData)
    } );

    const result = await response.json();
    console.log('form submitted:', result)
}

// console.log(formData)

  return (
    <div className='mt-8'>
        <div className='m-auto w-[80%] pt-10 shadow-lg shadow-gray-400 min-h-full pb-6'>

            <h1 className='text-center text-[#F4511E] font-bold text-2xl'>Add a new property</h1>

<form 
onSubmit={handleSubmit}
>
{/* for the whole inputBox apart from textbox */}
        <div className='grid grid-cols-3 m-auto w-[82%] gap-5 mt-4'>
            <div className='flex flex-col '>
                <label className='text-lg font-semibold'>Name<span className='text-[#F4511E] font-bold ml-2'>*</span></label>
                 <input onChange={handleChange} name='name' value={formData.name} required
                 className=' bg-gray-50 rounded-md border border-gray-200 w-[300px] pl-4 h-[40px] '
                  type='text' placeholder='Enter Name'/>
            </div>

            <div className="flex flex-col ">
                <label className='text-lg font-semibold'>Address<span className='text-[#F4511E] font-bold ml-2'>*</span></label>
                 <input onChange={handleChange} name='address' value={formData.address} required
                  className=' bg-gray-50 rounded-md border border-gray-200 w-[300px] pl-4 h-[40px]' 
                 type='text' placeholder='Enter Address'/>
            </div>

            <div className="flex flex-col ">
                <label className='text-lg font-semibold'>Unit Number<span className='text-[#F4511E] font-bold ml-2'>*</span></label>
                 <input onChange={handleChange} name='unit' value={formData.unit} required
                 className=' bg-gray-50 rounded-md border border-gray-200 w-[300px] pl-4 h-[40px]'
                  type= 'number' placeholder='Enter Unit'/>
            </div>

            <div className="flex flex-col ">
                <label className='text-lg font-semibold'>Cities<span className='text-[#F4511E] font-bold ml-2'>*</span></label>
                <select name="city" onChange={handleChange} value={formData.city} required 
                 className=' bg-gray-50 rounded-md border border-gray-200 w-[300px] 30-4 h-[40px] pl-4 placeholder: text-gray-400'>
                    <option>Select City</option>
                    {cities.map((city)=>(
                        <option key={city}  value={city}>{city}</option>
                    ))}
                </select>
            </div>

            <div className="flex flex-col ">
                <label className='text-lg font-semibold'>State<span className='text-[#F4511E] font-bold ml-2'>*</span></label>
                <select name='state' value={formData.state} onChange={handleChange} required 
                 className=' bg-gray-50 rounded-md border border-gray-200 w-[300px] 30-4 h-[40px] pl-4 placeholder: text-gray-400'>
                    <option>Select State</option>
                    {states.map((state)=>(
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>
                 
            </div>

            <div className="flex flex-col ">
                <label className='text-lg font-semibold'>Room Type<span className='text-[#F4511E] font-bold ml-2'>*</span></label>
                <select name='room' value={formData.room} onChange={handleChange} required 
                 className=' bg-gray-50 rounded-md border border-gray-200 w-[300px] 30-4 h-[40px] pl-4 placeholder: text-gray-400'>
                    <option>Select Room Type</option>
                    {roomTypes.map((roomType)=>(
                        <option key={roomType} value={roomType}>{roomType}</option>
                    ))}
                </select>
                 
            </div>

            <div className="flex flex-col ">
                <label className='text-lg font-semibold'>Price<span className='text-[#F4511E] font-bold ml-2'>*</span></label>
                 <input onChange={handleChange} name='price' value={formData.price} required
                  className=' bg-gray-50 rounded-md border border-gray-200 w-[300px] pl-4 h-[40px]'  type='number' placeholder='Enter Price'/>
            </div>
        </div>

        {/* for the text box */}

        <div className="flex flex-col m-auto w-[82%] pb-8 mt-8">
            <label className='text-lg font-semibold'>Desription<span className='text-[#F4511E] font-bold ml-2'>*</span></label>
            <input onChange={handleChange} name='description' value={formData.description} required
            className=' bg-gray-50 rounded-md border border-gray-200 w-[97%] h-[150px]  pl-4 placeholder: text-gray-400 placeholder:absolute placeholder:top-4 placeholder:left-4' placeholder='Enter decription'/>
        </div>

        {/* for media upload */}

        <div className='w-[45%] m-auto'>
            <button type='submit' className='w-[500px] bg-[#F4511E] rounded-md text-white text-xl font-bold h-[50px] hover:opacity-65'>Add New property</button>
        </div>
        

        </form>
        </div>
    </div>
  )
}

export default FormTable