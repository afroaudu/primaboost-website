import React from 'react'
import bridges from "../images/bridges.jpg"

const Contact = () => {
  return (
    <div className='w-full h-screen mt-24'>
    <div className='w-full h-[700px] absolute'>
    <img className="w-full h-full object-cover mix-blend-overlay" src={bridges} alt="star" />
    </div>
    <div className=" text-white mt-14 sm:ml-20 lg:mr-40 lg:ml-36 md:mr-32 md:ml-24 mr-7 font-mono h-screen ml-16 flex flex-col justify-center align-middle ">
  <h1 className=" font-normal text-yellow-400	 lg:text-6xl md:text-4xl sm:text-3xl text-2xl mb-10">
    Get in touch with us
  </h1>
  <p>We would love to speak with you. Please feel free to send us an email</p>

<p>primaboost@gmail.com</p>


  </div>

</div>
  )
}

export default Contact