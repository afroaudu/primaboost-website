import React from 'react'
import stars from "../images/moo.jpg"

const backgroundImage = {
  backgroundImage: `url("${stars}")`,
  backgroundSize: 'cover',
  
}; 
const Vision = () => {
  return (
    <div className='w-full h-screen pt-24 relative' style={backgroundImage}>
      <div className="mx-60 pb-7 ">
      <h1></h1>
      </div>
    </div>
  )
}

export default Vision