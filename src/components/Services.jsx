import React from 'react'

const Services = () => {
  return (
    <div className='w-full h-screen mt-24'>
    <div className=" sm:ml-20 lg:mr-40 lg:ml-36 md:mr-32 md:ml-24 mr-7 font-mono absolute bg-white h-screen ml-16 flex flex-col justify-center ">
      <h1 className=" font-normal text-cyan-600	 lg:text-6xl md:text-4xl sm:text-3xl text-2xl mb-10">
        Our Services
      </h1>
      <div className=" text-stone-500 font-normal lg:text-lg md:text-base sm:text-sm text-xs">
      <p>Some of our services include</p>
 <br></br>
<p>Serverless Consulting - </p>
<p className='ml-7'> Primaboost assists you in developing apps for the serverless stack while keeping costs in mind. In addition, we assist you in making architectural decisions that enhance performance and best practices.</p>

<p>Application Development -</p>
<p className='ml-7'>We collaborate with customers to completely comprehend their requirements, and then we transform those insights into practical solutions that match their goals.</p>

<p>Serverless Datalake - </p>
<p className='ml-7'>We're experts in the sector, leading the design of the client's cloud-based lake management system, which covers the configuration, management, integration, and reporting.</p>

<p>Elevate And Transform -</p>
<p className='ml-7'>We will help you ease the transition of legacy applications to serverless and save costs by utilizing our tried-and-true strategy, which includes premium solutions for migration, and installation services.</p>
        </div>
    </div>
    </div>
    
  )
}

export default Services