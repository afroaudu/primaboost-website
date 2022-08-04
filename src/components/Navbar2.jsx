import React from "react";
import logo from "../images/primaboost.png";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <>

    <div className="flex justify-center">
    <nav className="flex justify-between items-center rounded-lg flex-wrap mt-10 min-h-16 bg-white text-black relative shadow-sm font-mono w-4/5 border-solid border-2 border-grey text-sm">
      <Link to="/">
        {" "}
        <img className="w-56 px-9 sm:w-64" src={logo} alt="" />
      </Link>

      <div className="px-4 cursor-pointer md:hidden">
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
        <Link className="p-4" to="/">
          Home
        </Link>
        <Link className="p-4" to="/vision">
          Vision
        </Link>
        <Link className="p-4" to="/services">
          Services
        </Link>
        <Link className="p-4" to="/about">
          About
        </Link>
        <Link className="p-4" to="/technology">
          Technology
        </Link>
        <Link className="p-4" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
    </div>
    </>
  );
};

export default Navbar2;
