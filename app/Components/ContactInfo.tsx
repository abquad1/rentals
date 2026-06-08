'use client'
import Image from 'next/image'
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoPrint } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import Link from 'next/link';

const socialIcons = [
    { icon: FaTwitter, name: "Twitter" },
    { icon: FaFacebook, name: "Facebook" },
    { icon: FaLinkedin, name: "LinkedIn" },
    { icon: FaYoutube, name: "YouTube" },
    { icon: FaInstagram, name: "Instagram" },
    { icon: FaPinterest, name: "Pinterest" },
    { icon: FaGooglePlusG, name: "Google+" }
  ];
  

function ContactInfo() {
  return (
    <div className='w-full h-full text-white bg-[#333] py-8'>
        <div className='md:h-[250px] sm: h-[250px] md:w-[80%] sm: w-[90%] m-auto md:flex sm: block items-center gap-x-3'>
            <div className='w-[30%] sm: m-auto md:m-0 '>
                <Image src='/RentalImages/logo.png' alt='' height={100} width={100}></Image>

                {/* <h1 className='text-6xl font-bold ml-12'>Logo</h1> */}
            </div>

            <div className='block md:w-[70%] sm: w-[90%] m-auto  text-sm '>
                <div className='flex sm: mt-6 md:mt-0 gap-2'>
                    <FaLocationDot className='text-[#F4511E]'/>
                    <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>

                </div>

                <div className='flex items-center  md:gap-24 sm: gap-12 mt-6'>
                    <div className='flex gap-4'><IoCall className='text-[#F4511E] '/> <p>(+234) 8143967609</p></div>
                    <div className='flex gap-4'><IoPrint  className='text-[#F4511E] '/> <p>(+234) 8149027201</p></div>
                </div>

                <div className='block md:flex md:items-center gap-8 mt-8 '>
                    <p className='text-gray-400 font-bold'>Social Media</p>
                    {/* <div className='text-[#F4511E]  sm:grid md:flex sm:grid-cols-4  sm:gap-4 md:gap-10'> */}
                    {/* <div className='text-[#F4511E] '> */}
                    <div className="flex gap-16">
                        {socialIcons.map(({ icon: Icon, name }, index) => (
                            <Icon 
                            key={index} 
                            className="text-[#F4511E] sm:text-4xl md:text-md cursor-pointer hover:translate-y-1 transition-all duration-300" 
                            title={name}
                            />
                        ))}
                    </div>

                    {/* </div> */}
                </div>
            </div>
        </div>

        <div className='md:flex sm: block md:w-[80%] sm: w-[80%] m-auto justify-between pb-12'>
            <div className='text-[12px] sm: mt-24 md:mt-0'>
                <ul className='md:flex sm: grid grid-cols-3 items-center gap-8'>
                    <li className=''>
                        <Link href="/" >ABOUT US</Link>
                    </li>

                    <li>
                        <Link href="/">CONTACT US</Link>
                    </li>

                    <li>
                        <Link href="/">HELP</Link>
                    </li>

                    <li>
                        <Link href="/">PRIVACY POLICY</Link>
                    </li>

                    <li>
                        <Link href="/">DISCLAIMER</Link>
                    </li>
                </ul>
            </div>

            <div className='text-gray-400 md:mt-0 sm: mt-4'>
                <p className='text-[10px]'>Copyright @{new Date().getFullYear()} Minimumlivingcost. All rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default ContactInfo