import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/primabooster.png";

const Navbars = ({toggle}) => {
  return (
    
      <nav className="top-0 left-0 right-0 mx-auto rounded-xl fixed mt-9 w-4/5 p-5 bg-white shadow-2xl  flex items-center justify-between">
        
          <div className="">
            <Link to="/">
              <img className="w-40 px-1 " src={logo} alt="" />
            </Link>
          </div>
          <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          </div>
          <div className="text-sm ml-10 pr-0 md:block hidden">
            
              <Link
                to="/"
                className=" p-2 md:p-4  text-slate-500 hover:text-cyan-500 duration-500 "
              >
                Home
              </Link>
            

      
              <Link
                to="/visions"
                className=" p-2 md:p-4  text-slate-500 hover:text-cyan-500 duration-500 "
              >
                Vision
              </Link>
            

              <Link
                to="/services"
                className=" p-2 md:p-4 text-slate-500 hover:text-cyan-500 duration-500 "
              >
                Services
              </Link>
         
           
              <Link
                to="/abouts"
                className=" p-2 md:p-4  text-slate-500 hover:text-cyan-500 duration-500 "
              >
                About
              </Link>
            
              <Link
                to="/technologys"
                className=" p-2 md:p-4 t text-slate-500 hover:text-cyan-500 duration-500 "
              >
                Technology
              </Link>
           
              <Link
                to="/contacts"
                className=" p-2 md:p-4  text-slate-500 hover:text-cyan-500 duration-500 "
              >
                Contacts
              </Link>
          
    </div>
        
      </nav>
   
  );
};

export default Navbars;
