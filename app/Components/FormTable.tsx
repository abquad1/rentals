'use client'

import React, { useState } from 'react'
import { states } from '../pages/api/Data'
import { cities } from '../pages/api/Data'
import { roomTypes } from '../pages/api/Data'


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

const handleChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
   const {name, value} = e.target;
   setFormData({
    ...formData, [name]: value
   })

}

const handleSelect =(e: React.ChangeEvent<HTMLSelectElement>)=>{
    const {name, value} = e.target;
    setFormData({
     ...formData, [name]: value
    })
 
 }

const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();


    const response = await fetch("http://localhost:5000/v1/hotel", {

        method: 'POST ',
        headers: {
            'content-type':' application/json'
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
        <div className='sm:block md:grid grid-cols-3 m-auto w-[82%] gap-5 mt-4'>
            <div className='flex flex-col md:mt-0 sm: mt-4  '>
                <label className='text-lg font-semibold'>Name<span className='text-[#F4511E] font-bold ml-2'>*</span></label>
                 <input onChange={handleChange} name='name' value={formData.name} required
                 className=' bg-gray-50 rounded-md border border-gray-200 w-[90%] pl-4 h-[40px] '
                  type='text' placeholder='Enter Name'/>
            </div>

            <div className="flex flex-col md:mt-0 sm: mt-4   ">
                <label className='text-lg font-semibold'>Address<span className='text-[#F4511E] font-bold ml-2'>*</span></label>
                 <input onChange={handleChange} name='address' value={formData.address} required
                  className=' bg-gray-50 rounded-md border border-gray-200 w-[90%] pl-4 h-[40px]' 
                 type='text' placeholder='Enter Address'/>
            </div>

            <div className="flex flex-col  sm: mt-4  md:mt-0  ">
                <label className='text-lg font-semibold'>Unit Number<span className='text-[#F4511E] font-bold ml-2'>*</span></label>
                 <input onChange={handleChange} name='unit' value={formData.unit} required min={1}
                 className=' bg-gray-50 rounded-md border border-gray-200 w-[90%] pl-4 h-[40px]'
                  type= 'number' placeholder='Enter Unit'/>
            </div>

            <div className="flex flex-col md:mt-0 sm: mt-4  ">
                <label className='text-lg font-semibold'>Cities<span className='text-[#F4511E] font-bold ml-2'>*</span></label>
                <select name="city" onChange={handleSelect} value={formData.city} required 
                 className=' bg-gray-50 rounded-md border border-gray-200 w-[90%] 30-4 h-[40px] pl-4 placeholder: text-gray-400'>
                    <option>Select City</option>
                    {cities.map((city)=>(
                        <option key={city}  value={city}>{city}</option>
                    ))}
                </select>
            </div>

            <div className="flex flex-col md:mt-0 sm: mt-4  ">
                <label className='text-lg font-semibold'>State<span className='text-[#F4511E] font-bold ml-2'>*</span></label>
                <select name='state' value={formData.state} onChange={handleSelect} required 
                 className=' bg-gray-50 rounded-md border border-gray-200 w-[90%] 30-4 h-[40px] pl-4 placeholder: text-gray-400'>
                    <option>Select State</option>
                    {states.map((state)=>(
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>
                 
            </div>

            <div className="flex flex-col md:mt-0 sm: mt-4  ">
                <label className='text-lg font-semibold'>Room Type<span className='text-[#F4511E] font-bold ml-2'>*</span></label>
                <select name='room' value={formData.room} onChange={handleSelect} required 
                 className=' bg-gray-50 rounded-md border border-gray-200 w-[90%] 30-4 h-[40px] pl-4 placeholder: text-gray-400'>
                    <option>Select Room Type</option>
                    {roomTypes.map((roomType)=>(
                        <option key={roomType} value={roomType}>{roomType}</option>
                    ))}
                </select>
                 
            </div>

            <div className="flex flex-col md:mt-0 sm: mt-4  ">
                <label className='text-lg font-semibold'>Price<span className='text-[#F4511E] font-bold ml-2'>*</span></label>
                 <input onChange={handleChange} name='price' value={formData.price} required
                  className=' bg-gray-50 rounded-md border border-gray-200 w-[90%] pl-4 h-[40px]'  type='number' placeholder='Enter Price'/>
            </div>
        </div>

        {/* for the text box */}

        <div className="flex flex-col  sm: mt-4  m-auto w-[82%] pb-8 md:mt-8">
            <label className='text-lg font-semibold'>Desription<span className='text-[#F4511E] font-bold ml-2'>*</span></label>
            <input onChange={handleChange} name='description' value={formData.description} required
            className=' bg-gray-50 rounded-md border border-gray-200 md:w-[97%] sm: w-[90%] h-[150px]  pl-4 placeholder: text-gray-400 placeholder:absolute placeholder:top-4 placeholder:left-4' placeholder='Enter decription'/>
        </div>

        {/* for media upload */}

        <div className='md:w-[45%] m-auto sm: w-[80%] '>
            <button type='submit' className='sm: w-full sm:m-auto bg-[#F4511E] rounded-md text-white text-xl font-bold h-[50px] hover:opacity-65'>Add New property</button>
        </div>
        

        </form>
        </div>
    </div>
  )
}

export default FormTable