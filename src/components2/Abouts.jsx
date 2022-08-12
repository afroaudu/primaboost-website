import React from 'react'
import people from "../images/people.jpg"

const backgroundImage = {
    backgroundImage: `url("${people}")`,
    backgroundSize: 'cover',
  }; 
const Abouts = () => {
  return (
    <div>
         
        
        <div className=" w-full min-h-screen" style={backgroundImage}>
       < div className='font-oswald bg-gradient-to-r from-black px-20 py-60'>
        <div className="max-w-4xl mx-20">
        <h1 className="text-6xl md:text-7xl  text-yellow-500 mb-9">About</h1>
          <p className='text-lg text-white'>Primaboost is a software and web development firm based in Lagos, Nigeria, that creates dedicated teams with expertise in JavaScript, Node.js, React, AWS, Azure, and Serverless.
          <br></br>
          

We work with intelligent people intelligently.

Long-term well-being goes hand-in-hand with creativity, organization, and high performance.

We want to offer companies the best possible working environment, so they can be successful, learn continuously and reach their full potential to deliver the highest level of quality. Outstanding performance, commitment, transparency, team spirit and respect are the key values of Primaboost</p>
        </div>
        </div>
    
        </div>

    </div>
  )
}

export default Abouts