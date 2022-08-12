import React from 'react'
import logo from "../images/primaboost.png"


const Navbar = () => {
  return (
    <>
    <div className='flex justify-center'>
    <div className='flex w-9/12 max-h-56 rounded-lg z-10 drop-shadow-lg mt-10 border-solid border-2 border-grey bg-white' >
      <div className='px-2 flex justify-between items-center w-full'>
        <div className='flex items-center justify-between' >
          <img className=" w-3" src={logo} alt="" />
          
           <ul className="  hidden sm:flex ">
            <li>Home</li>
            <li>Vision</li>
            <li>Services</li>
            <li>About</li>
            <li>Technology</li>
            <li>Contact</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
    
    </>

  )
}

export default Navbar