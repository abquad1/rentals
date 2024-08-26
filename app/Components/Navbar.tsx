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
    // block bg-black absolute top-10 text-center left-0 w-screen z-50

  return (
    <div className={` ${open? " h-[10%]" : " "} md:h-[10%] sm: h-[15%] w-full bg-black fixed top-0 bottom-0 left-0 right-0 z-50`} >
        <div className='  md:w-[80%] md:mx-auto   transition-all flex sm: justify-between md:justify-normal  md:p-4 sm: p-8 sm: px-4 md:px-0  ' >
            <div className='xs: h-1 w-2/5'>
                <Link href="#Landing">
                    <Image width={80} height={10} alt='' src="/RentalImages/logo.png" style={{ width: 'auto', height: 'auto' }}></Image>
                </Link>
            </div>

            <div className={`${ open? " bg-black absolute left-0 top-20 text-left pl-4 w-[40%] z-50" : "absolute top-0 left-[-20%]  "} transition-transform ease-in-out 0.2s sm: block md:block sm: mt-3 md:mt-0 w-3/5 md:left-[0%] md:relative md:bg-transparent md:top-0`}>
                <ul className='no-underline sm:block md:flex lg:flex '>
                    <li className='text-lg font-semibold text-white sm: mb-12 md:mr-10 md:mt-0'>
                        <Link href="#Landing " >Home</Link>
                    </li>

                    <li className='text-lg font-semibold text-white sm: mb-12 md:mr-10 md:mt-0'>
                        <Link href="#Landlord"  >Landlord</Link>
                    </li>

                    <li className='text-lg font-semibold text-white sm: mb-12 md:mr-10 md:mt-0'>
                        <Link href="#Tenant" >Tenant</Link>
                    </li>

                    <li className='text-lg font-semibold text-white sm: mb-12 md:mr-10 md:mt-0'>
                        <Link href="#Contact"  >Contacts</Link>
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