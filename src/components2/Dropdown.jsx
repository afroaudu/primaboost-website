import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown
 = ({isOpen, toggle}) => {
  return (
    <div className={
isOpen ? 'grid grid-rows-6 text-center items-center bg-yellow-500' : 'hidden'
    }
    onClick={toggle}>
<Link
                to="/"
                className=" p-4 text-base text-slate-500 hover:text-cyan-500 duration-500 "
              >
                Home
              </Link>
            

      
              <Link
                to="/vision"
                className=" p-4 text-lg text-slate-500 hover:text-cyan-500 duration-500 "
              >
                Vision
              </Link>
            

              <Link
                to="/services"
                className=" p-4 text-base text-slate-500 hover:text-cyan-500 duration-500 "
              >
                Services
              </Link>
         
           
              <Link
                to="/about"
                className=" p-4 text-base text-slate-500 hover:text-cyan-500 duration-500 "
              >
                About
              </Link>
            
              <Link
                to="/technology"
                className=" p-4 text-base text-slate-500 hover:text-cyan-500 duration-500 "
              >
                Technology
              </Link>
           
              <Link
                to="/about"
                className=" p-4 text-base text-slate-500 hover:text-cyan-500 duration-500 "
              >
                About
              </Link>
          
    </div>
  )
}

export default Dropdown
