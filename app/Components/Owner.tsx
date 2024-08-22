'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { ImQuotesLeft } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import {motion, AnimatePresence} from "framer-motion"

function Owner() {

    const data =[
        {
            id: 1,
            about: " A creative problem-solver and software developer. My expertise lies in JavaScript and React, and I’m currently expanding my horizons with Next.js and Tailwind CSS. I love the challenge of turning ideas into reality through code, and I’m particularly excited about my latest project—a quiz app that combines functionality with sleek design. Outside of the tech world, I enjoy painting, playing the guitar, and spending time with my family and friends. I’m always eager to learn new things and take on new challenges.",
            name: "Harry Wilson",
            title: "Property Owner"
        },
        {
            id: 2,
            about: "A passionate software developer with a keen interest in building dynamic and user-friendly web applications. With a background in JavaScript and React, I enjoy solving complex problems and creating seamless user experiences. Currently, I’m working on a quiz app using Next.js and Tailwind CSS, which has been an exciting journey of learning and innovation. When I’m not coding, you can find me exploring new technologies, reading tech blogs, or contributing to open-source projects.",
            name: "Quadri Abiodun",
            title: "CEO"
        },
        {
            id: 3,
            about: "A tech enthusiast and avid learner. My journey in software development started with a curiosity for how things work, and it has grown into a full-fledged passion. I love working with JavaScript and React, and I’m currently diving into Next.js to build a quiz app. Beyond coding, I enjoy photography, hiking, and exploring new places. I believe in continuous learning and strive to improve my skills every day, both professionally and personally.",
            name: "Bamidele Adeboye",
            title: "Manager"
        }
    ]

    const indicators = [ {  id:1, icon: <GoDotFill/>}, { id:2, icon: <GoDotFill/>}, { id:3,icon: <GoDotFill/>}]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('right')

    const handleRight =()=>{
        if (currentIndex < data.length -1 ) {
            setDirection('right')
            setCurrentIndex(currentIndex + 1)
            
        }
    }

    const handleLeft =()=>{
        if (currentIndex > 0) {
            setDirection('left')
            setCurrentIndex(currentIndex - 1)
        }
    }

    
  return (
    <div className='relative -z-2 '>
        <div className='md:flex sm: block w-full md:h-[400px] sm: h-[750px]'>

            <div className='flex md:w-1/2 sm: w-full md:h-full sm: h-[550px] ' >
                {data.map((item,index)=>(
                    <motion.div
                    
                    key={index} style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }} 
                    className={`transition-transform duration-500 transformn text-sm w-[65%] py-10 m-auto   ${index === currentIndex? 'block translate-x-0' : 'hidden translate-x-full'} `}
                    >
                        <p className=' z-50 text-justify'>
                            {item.about}
                        </p>

                         <ImQuotesLeft className='text-[#e6b2a2] text-6xl absolute md:bottom-[82%] sm: bottom-[85%] -left-12 -z-50 ' />


                        <div className='flex items-center gap-6 mt-4'>
                            <Image alt='' height={100} width={100} src="/RentalImages/Ellipse4.png" style={{ width: 'auto', height: 'auto' }}></Image>

                                <div className='flex flex-col '>
                                    <h2 className='text-[#F4511E] font-bold'>{item.name}</h2>
                                    <h4 className=''>{item.title}</h4>
                                </div>
                        </div>

                        <div className='flex mt-4  '>
                            {indicators.map((indicator,index)=>(
                                <div key={index} className={`  ${index === currentIndex? 'text-red-500' : 'text-white'} `}>
                                    <p className='text-2xl'>{indicator.icon}</p>
                                </div>
                            ))}
                        </div>

                    
                    </motion.div>
                ))}

                <IoIosArrowBack className='absolute md:top-[50%] sm: top-[45%] text-6xl text-[#F4511E] hover:bg-white z-10' onClick={()=>handleLeft()}/>
                <IoIosArrowForward className='absolute md:top-[50%] sm: top-[45%] md:left-[45%] sm: left-[80%] text-6xl text-[#F4511E] z-10 hover:bg-white' onClick={()=>handleRight()}/>
               
            </div>


            
            <div className='md:w-1/2 sm: w-full md:h-full sm: h-[200px]' >
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/JzPfMbG1vrE?si=_W90oSy0vMCUezeh" title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </div>
        </div>
    </div>
  )
}

export default Owner