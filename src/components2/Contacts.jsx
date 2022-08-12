import React from 'react'
import Bridges from "../images/bridges.jpg"
import logo from "../images/primabooster.png"


const backgroundImage = {
  backgroundImage: `url("${Bridges}")`,
  backgroundSize: 'cover',
}; 

const Contacts
 = () => {
  return (
    <div id='contacts'>
         
         
        
         <div className=" w-full min-h-screen" style={backgroundImage}>
        < div className='font-oswald bg-gradient-to-r from-black px-20 py-60'>
         <div className="max-w-4xl mx-20">
         <h1 className="md:text-5xl text-4xl text-yellow-500 mb-9">Get in touch with us!</h1>
           <p className='text-white'>We would love to speak with you.
           <br></br>
            Please feel free to send us an e-mail</p>
            
         </div>
         <img className=" ml-10 my-7 md:w-80 w-60 px-9 " src={logo} alt="" />
         </div>
     
         </div>
 
         
          
    </div>
  )
}

export default Contacts
