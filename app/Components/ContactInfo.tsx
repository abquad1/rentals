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
import { FaWifi } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import Link from 'next/link';


function ContactInfo() {
  return (
    <div className='w-full h-full text-white bg-[#333] py-8'>
        <div className='md:h-[250px] sm: h-[250px] md:w-[80%] sm: w-[90%] m-auto md:flex sm: block items-center gap-x-3'>
            <div className='w-[30%] sm: m-auto md:m-0 '>
                <Image src='/RentalImages/logo.png' alt='' height={100} width={100}></Image>

                {/* <h1 className='text-6xl font-bold ml-12'>Logo</h1> */}
            </div>

            <div className='block md:w-[70%] sm: w-[90%] m-auto  text-sm '>
                <div className='flex sm: mt-6 md:mt-0'>
                    <FaLocationDot className='text-[#F4511E]'/>
                    <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>

                </div>

                <div className='flex items-center  md:gap-24 sm: gap-12 mt-6'>
                    <div className='flex gap-4'><IoCall className='text-[#F4511E] '/> <p>(+234) 8143967609</p></div>
                    <div className='flex gap-4'><IoPrint  className='text-[#F4511E] '/> <p>(+234) 8149027201</p></div>
                </div>

                <div className='md:flex sm: block items-center gap-8 mt-8 sm: text-center '>
                    <p className='text-sm sm: mb-4 text-gray-400'>Social Media</p>
                    <div className='text-[#F4511E] md:flex sm: grid sm: grid-cols-4 md:gap-10 sm: gap-4'>
                        <FaTwitter className='sm: text-4xl md: text-md' />
                        <FaFacebook className='sm: text-4xl md: text-md'/>
                        <FaLinkedin className='sm: text-4xl md: text-md'/>
                        <FaYoutube className='sm: text-4xl md: text-md'/>
                        <FaInstagram className='sm: text-4xl md: text-md'/>
                        <FaTwitter className='sm: text-4xl md: text-md'/>
                        <FaPinterest className='sm: text-4xl md: text-md' />
                        <FaGooglePlusG className='sm: text-4xl md: text-md'/>
                    </div>
                </div>
                
            </div>
        </div>

        <div className='md:flex sm: block md:w-[80%] sm: w-[80%] m-auto justify-between pb-12'>
            <div className='text-[12px] sm: mt-12 md:mt-0'>
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