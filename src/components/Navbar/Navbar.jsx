import React from 'react'

const Navbar = () => {
  return (
    <div className="flex space-x-16 items-center justify-end py-6 pl-24 pr-14 bg-white shadow rounded-lg" style={{width: '1055px', height: '76px'}}>
          <p className="text-2xl font-extrabold text-gray-500">Primaboost</p>
          <p className="text-base font-semibold text-gray-500">Home</p>
          <p className="text-base font-semibold text-gray-500">Vision</p>
          <p className="text-base font-semibold text-gray-500">Services</p>
          <p className="text-base font-semibold text-gray-500">About</p>
          <p className="text-base font-semibold text-gray-500">Technology</p>
          <p className="text-base font-semibold text-gray-500">Contact</p>
        </div>

  )
}

export default Navbar