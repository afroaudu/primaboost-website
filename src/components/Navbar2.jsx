import React from "react";
import logo from "../images/primaboost.png";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <>
      <div className="flex mt-16  justify-center">
        <nav className="bg-white fixed m-0 border-2 rounded-lg px-5 py-2 flex items-center border-slate-500 "
          role="navigation"
        >
          <Link to="/">
            {" "}
            <img className="w-56 px-9 " src={logo} alt="" />
          </Link>

          <div className="py-5 pr-8 pl-16 cursor-pointer md:hidden">
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
          <div className=" py-5 pr-8 md:block hidden">
            <Link className="p-4  text-slate-500  " to="/">
              Home
            </Link>
            <Link className="p-4 text-slate-500  " to="/vision">
              Vision
            </Link>
            <Link className="p-4 text-slate-500  " to="/services">
              Services
            </Link>
            <Link className="p-4 text-slate-500 " to="/about">
              About
            </Link>
            <Link className="p-4 text-slate-500 " to="/technology">
              Technology
            </Link>
            <Link className="p-4 text-slate-500 " to="/contact">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar2;
