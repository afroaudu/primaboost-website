import React from 'react'
import Bridges from "../images/bridges.jpg"
import logo from "../images/primaboost.png"


const backgroundImage = {
  backgroundImage: `url("${Bridges}")`,
  backgroundSize: 'cover',
}; 

const Contacts
 = () => {
  return (
    <div>
         
         
        
         <div className=" w-full min-h-screen" style={backgroundImage}>
        < div className='bg-gradient-to-r from-black px-20 py-60'>
         <div className="max-w-4xl mx-11">
         <h1 className="text-5xl  text-yellow-500 mb-9">Get in touch with us!</h1>
           <p className='text-white'>We would love to speak with you.
           <br></br>
            Please feel free to send us an email</p>
            
         </div>
         <img className=" ml-1 my-7 w-80 px-9 " src={logo} alt="" />
         </div>
     
         </div>
 
         
          
    </div>
  )
}

export default Contacts
