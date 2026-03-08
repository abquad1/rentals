'use client'

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger, TooltipProvider,
  } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
        if(window.scrollY  > window.innerHeight * 2.8){
            setShowButton(true)
        }else{
            setShowButton(false)
        }
    })
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  }

return (
    <div className='fixed bottom-10 right-10 z-50'>
        {showButton && (
            <TooltipProvider >
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button onClick={handleScrollToTop} variant="outline" 
                            className="bg-[#F4511E] text-white p-2 rounded-full cursor-pointer transition-all duration-300">
                            <ArrowUp className="w-8 h-8 font-bold" />
                        </Button>

                    </TooltipTrigger>
                    <TooltipContent className=" bg-[#F4511E] text-white mr-2" sideOffset={5}>
                        Scroll To The Top
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        )}
    </div>
    )
};

export default ScrollToTop;