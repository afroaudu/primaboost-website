import React from 'react'
import js from "../images/js.png"
import figma from "../images/figma.png"
import github from "../images/github.png"
import microsoft from "../images/microsoft.png"


const microsoftLogo = {
  backgroundImage: `url("${microsoft}")`,
  backgroundSize: 'cover',
}; 

const jsLogo = {
  backgroundImage: `url("${js}")`,
  backgroundSize: 'cover',
}; 
const figmaLogo = {
  backgroundImage: `url("${figma}")`,
  backgroundSize: 'cover',
}; 
const githubLogo = {
  backgroundImage: `url("${github}")`,
  backgroundSize: 'cover',
}; 

const Technologys = () => {
  return (
    
        <div className="w-full min-h-screen bg-white px-20 py-20">
      <div className="  mx-11 text-base"> 
      <h1 className="flex justify-center text-6xl text-cyan-500 mb-9">Our Services</h1>
      <p className='text-large flex justify-center text-zinc-800'>Some of our services include <br></br>
      </p>
      
      <div className='grid grid-cols-4 place-items-center mt-16'>
        <div className='w-16 h-16 bg-black' style={jsLogo}>
        </div>
        <div className='w-16 h-16 bg-black' style={figmaLogo}>
        </div>
        <div className='w-16 h-16 bg-black' style={githubLogo}>
        </div>
        <div className='w-16 h-16 bg-black' style={microsoftLogo}>
        </div>
      </div>

      <div className='grid grid-cols-4 place-items-center mt-16'>
        <div className='w-16 h-16 bg-black' style={jsLogo}>
        </div>
        <div className='w-16 h-16 bg-black' style={figmaLogo}>
        </div>
        <div className='w-16 h-16 bg-black' style={githubLogo}>
        </div>
        <div className='w-16 h-16 bg-black' style={microsoftLogo}>
        </div>
      </div>

      <div className='grid grid-cols-4 place-items-center mt-16'>
        <div className='w-16 h-16 bg-black' style={jsLogo}>
        </div>
        <div className='w-16 h-16 bg-black' style={figmaLogo}>
        </div>
        <div className='w-16 h-16 bg-black' style={githubLogo}>
        </div>
        <div className='w-16 h-16 bg-black' style={microsoftLogo}>
        </div>
      </div>

      <div className='grid grid-cols-4 place-items-center mt-16'>
        <div className='w-16 h-16 bg-black' style={jsLogo}>
        </div>
        <div className='w-16 h-16 bg-black' style={figmaLogo}>
        </div>
        <div className='w-16 h-16 bg-black' style={githubLogo}>
        </div>
        <div className='w-16 h-16 bg-black' style={microsoftLogo}>
        </div>
      </div>

      <div className='grid grid-cols-4 place-items-center mt-16'>
        <div className='w-16 h-16 bg-black' style={jsLogo}>
        </div>
        <div className='w-16 h-16 bg-black' style={figmaLogo}>
        </div>
        <div className='w-16 h-16 bg-black' style={githubLogo}>
        </div>
        <div className='w-16 h-16 bg-black' style={microsoftLogo}>
        </div>
      </div>


      

        
        
        

      </div>

  </div>
        
  )
  
}

export default Technologys