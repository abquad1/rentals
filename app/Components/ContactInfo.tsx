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
    <div className='w-full h-full] text-white bg-black'>
        <div className='h-[400px] w-[80%] m-auto flex items-center '>
            <div className='w-[50%]'>
                <Image src='/RentalImages/logo.png' alt='' height={200} width={200}></Image>

                {/* <h1 className='text-6xl font-bold ml-12'>Logo</h1> */}
            </div>

            <div className='block w-[50%]  text-lg '>
                <div className='flex gap-4 mb-12'>
                    <FaLocationDot className='text-[#F4511E]'/>
                    <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>

                </div>

                <div className='flex items-center mb-12 gap-x-10'>
                    <div className='flex gap-4'><IoCall className='text-[#F4511E] '/> <p>(+234) 8143967609</p></div>
                    <div className='flex gap-4'><IoPrint  className='text-[#F4511E] '/> <p>(+234) 8149027201</p></div>
                </div>

                <div className='flex items-center gap-8'>
                    <p className='text-lg text-gray-400'>Social Media</p>
                    <div className='text-[#F4511E] flex gap-10'>
                    <FaTwitter />
                    <FaFacebook />
                    <FaLinkedin />
                    <FaYoutube />
                    <FaInstagram />
                    <FaTwitter />
                    <FaPinterest />
                    <FaGooglePlusG />
                    </div>
                </div>
                
            </div>
        </div>

        <div className='flex w-[80%] m-auto justify-between pb-12'>
            <div className=''>
                <ul className='flex items-center gap-8'>
                    <li>
                        <Link href="/">ABOUT US</Link>
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

            <div className='text-gray-400'>
                <p>Copyright @{new Date().getFullYear()} Minimumlivingcost. All rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default ContactInfo