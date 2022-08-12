import React from 'react'
import stars from "../images/people.jpg"

const About = () => {
  return (
    <div className='w-full h-screen mt-24'>
        <div className='w-full h-[700px] absolute'>
        <img className="w-full h-full object-cover mix-blend-overlay" src={stars} alt="star" />
        </div>
        <div className=" text-white mt-14 sm:ml-20 lg:mr-40 lg:ml-36 md:mr-32 md:ml-24 mr-7 font-mono h-screen ml-16 flex flex-col justify-center align-middle ">
      <h1 className=" font-normal text-yellow-400	 lg:text-6xl md:text-4xl sm:text-3xl text-2xl mb-10">
        Our vision
      </h1>
      <p>Primaboost is a software and web development firm based in Lagos, Nigeria, that creates dedicated teams with expertise in JavaScript, Node.js, React, AWS, Azure, and Serverless.</p>

<p>We work with intelligent people intelligently.</p>

<p>Long-term well-being goes hand-in-hand with creativity, organization, and high performance.</p>

<p>We want to offer companies the best possible working environment, so they can be successful, learn continuously and reach their full potential to deliver the highest level of quality. Outstanding performance, commitment, transparency, team spirit and respect are the key values of Primaboost</p>
      </div>
    
    </div>
  )
}

export default About