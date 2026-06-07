import React from 'react'
import Navbar from '../../Components/Navbar'
import dynamic from 'next/dynamic';
const Jumbotron = dynamic(() => import('../../Components/Jumbotron'), { ssr: false });

function Landing() {

  return (
    <div id='Landing' className="h-screen bg-[url('/RentalImages/bgImg.png')] bg-no-repeat bg-cover bg-center font-sans relative">
       
        <Navbar />
        <Jumbotron />
      
    </div>
       

    
    

  )
}

export default Landing