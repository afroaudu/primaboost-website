import React from 'react'
import stars from "../images/moo.jpg"

const backgroundImage = {
  backgroundImage: `url("${stars}")`,
  backgroundSize: 'cover',
}; 

const Visions = () => {
  return (
    <div id='visions'>
        
    <div className="px-20 py-60 w-full min-h-screen" style={backgroundImage}>
    <div className=" font-oswald max-w-4xl mx-20">
    <h1 className="md:text-6xl text-5xl text-yellow-500 mb-9">Our Vision</h1>
      <p className='md:text-lg text-sm text-white'>Primaboost helps you design applications for the serverless stack.
  
  Through our proven methodology, we assist you in making architectural decisions that<br></br>
   maximise performance and best practises, simplify migration of legacy applications to  <br></br>
    serverless, and reduce costs. This includes cost-effective solutions for application <br></br>
     modernization, migration, and installation services.</p>
    </div>
    </div>

    </div>
  )
}

export default Visions