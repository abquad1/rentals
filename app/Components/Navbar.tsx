'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa"

function Navbar() {

    const [open,setOpen] = useState(false)

    const handleClick = () =>{
        setOpen(!open)
    }

  return (
    <div className={` ${open? " h-[40%]" : " "} bg-black w-full h-[10%] fixed top-0 bottom-0 left-0 right-0 z-0`}>
    <div className='  md:w-[80%] md:mx-auto   transition-all flex sm: justify-between md:justify-between h-[10%] pt-6 sm: px-4 md:px-0  ' >
        <div className='xs: h-5'>
            <Link href="#Landing">
                <Image width={100} height={10} alt='' src="/RentalImages/logo.png" style={{ width: 'auto', height: 'auto' }}></Image>
            </Link>
        </div>

        <div className={`${ open? "block" : "hidden"} sm: block md:block sm: mt-10 md:mt-0`}>
            <ul className='no-underline sm:block md:flex lg:flex '>
                <li className='text-lg font-semibold text-white sm: mb-12 md:mr-10 md:mt-0'>
                    <Link href="#Landing">Home</Link>
                </li>

                <li className='text-lg font-semibold text-white sm: mb-12 md:mr-10 md:mt-0'>
                    <Link href="#Landlord">Landlord</Link>
                </li>

                <li className='text-lg font-semibold text-white sm: mb-12 md:mr-10 md:mt-0'>
                    <Link href="#Tenant">Tenant</Link>
                </li>

                <li className='text-lg font-semibold text-white sm: mb-12 md:mr-10 md:mt-0'>
                    <Link href="#Contact">Contacts</Link>
                </li>
            </ul>
        </div>

        <div className='text-white text-3xl sm:block md:hidden lg:hidden' onClick={handleClick}>
            {open? (<FaTimes />) : (<FaBars />)}
        </div>
    </div>
    </div>
  )
}

export default Navbar