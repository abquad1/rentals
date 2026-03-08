'use client'
import "./Navbar.css"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa"

const navLinks = [
  { href: "#Landing", label: "Home" },
  { href: "#Landlord", label: "Landlord" },
  { href: "#Tenant", label: "Tenant" },
  { href: "#Contact", label: "Contacts" },
];


function Navbar() {

    const [open,setOpen] = useState(false)

    const handleClick = () =>{
        setOpen(!open)
    }

    const [active, setActive] = useState("#Landing");


    useEffect(()=>{
      const handleScroll = ()=>{
        const sections = navLinks.map(link=>document.querySelector(link.href) as HTMLElement | null
      )
        const scrollPos = window.scrollY + 100

        sections.forEach(section => {
          if (section && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
            setActive(`#${section.id}`);
          }
        });
  
      }

      window.addEventListener('scroll',handleScroll)
      return ()=>window.removeEventListener('scroll',handleScroll)
    },[])

  return (
 <div className="relative w-full ">
      <div className="w-full transition-all bg-black fixed top-0 left-0 right-0 z-50 h-[63px] py-8 md:py-4 px-4 md:px-0">
       <div className="w-full md:w-[80%] mx-auto flex items-center justify-between">
       <div className="relative h-6 w-24 animate-move ">
          <Link href="#Landing">
            <Image fill alt="logo" src="/RentalImages/logo.png"  />
          </Link>
        </div>
        
        <div
      className={`
      text-white z-40 transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:relative md:top-0 md:h-auto md:transform-none md:transition-none md:w-auto md:bg-transparent md:p-0
      `}
    >
      <ul className="flex flex-col md:flex-row gap-16">
        {navLinks.map(({ href, label }) => (
          <li
            key={href}
            
            className={`text-lg font-semibold transition-colors duration-200 
              ${active === href ? "text-[#F4511E]" : "hover:text-gray-400"}`}
            
          >
            <Link href={href}>{label}</Link>
          </li>
        ))}
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
    </div>
  )
}

export default Navbar