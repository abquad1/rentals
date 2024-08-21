import React from 'react'
import Navbar from '../../Components/Navbar'
import Jumbotron from '../../Components/Jumbotron'





function Landing() {
  return (
    
        <div  id='Landing' className="h-screen bg-[url('/RentalImages/bgImg.png')] bg-no-repeat bg-cover bg-center font-sans" >
        <Navbar />
        
        {/* <hr className="w-[80%] mx-36 bg-gray-100 relative top-[10%]  sm: hidden md:block"></hr> */}

        <Jumbotron />

    </div>

    
    
    


  )
}

export default Landing