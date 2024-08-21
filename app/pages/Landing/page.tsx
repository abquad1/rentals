import React from 'react'
import Navbar from '../../Components/Navbar'
import Jumbotron from '../../Components/Jumbotron'





function Landing() {
  return (
    <div id='Landing' className="h-screen bg-[url('/RentalImages/bgImg.png')] bg-no-repeat bg-cover bg-center font-sans relative">
       {/* <div > */}
        <Navbar />
        <Jumbotron />
      {/* </div> */}
    </div>
       

    
    

  )
}

export default Landing