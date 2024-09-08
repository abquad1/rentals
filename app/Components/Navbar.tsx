'use client'
import "./Navbar.css"
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
 <div className="h-[63px] w-full bg-black fixed top-0 left-0 right-0 z-50">
      <div className="md:w-[80%] md:mx-auto transition-all flex sm:justify-between md:justify-normal md:p-4 sm:p-8 sm:px-4 md:px-0">
        <div className="h-1 w-2/5 pt-3 pl-3 animate-move md:pt-0 md:pl-0">
          <Link href="#Landing">
            <Image width={80} height={10} alt="" src="/RentalImages/logo.png" style={{ width: 'auto', height: 'auto' }} />
          </Link>
        </div>
        
        <div
          className={`
            fixed top-[10%] left-0 h-[90%] w-64 bg-black text-white p-4 z-40
            transform transition-transform duration-300 ease-in-out
            ${open ? 'translate-x-0' : '-translate-x-full'}
            md:relative md:top-0 md:h-auto md:transform-none md:transition-none md:w-auto md:bg-transparent md:p-0
          `}
        >
          <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
            <li className="text-lg font-semibold hover:text-gray-400 transition-colors duration-200">
              <Link href="#Landing">Home</Link>
            </li>
            <li className="text-lg font-semibold hover:text-gray-400 transition-colors duration-200">
              <Link href="#Landlord">Landlord</Link>
            </li>
            <li className="text-lg font-semibold hover:text-gray-400 transition-colors duration-200">
              <Link href="#Tenant">Tenant</Link>
            </li>
            <li className="text-lg font-semibold hover:text-gray-400 transition-colors duration-200">
              <Link href="#Contact">Contacts</Link>
            </li>
          </ul>
        </div>
        
        <button
          className="fixed top-4 right-4 text-white text-3xl z-50 md:hidden focus:outline-none"
          onClick={handleClick}
        >
          <span className={`transition-transform duration-300 inline-block ${open ? 'rotate-180' : 'rotate-0'}`}>
            {open ? <FaTimes /> : <FaBars />}
          </span>
        </button>
      </div>
    </div>
  )
}

export default Navbar