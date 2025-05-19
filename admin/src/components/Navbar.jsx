import React from 'react'
import { assets } from '../assets/assets'

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center justify-between py-3 px-6 bg-white shadow-md sticky top-0 z-50">
      <img 
        className="w-[max(80px,10vw)] object-contain" 
        src={assets.logo} 
        alt="Logo" 
      />
      <button
        onClick={() => setToken('')}
        className="bg-gray-700 hover:bg-gray-800 transition-colors duration-300 text-white px-6 py-2 rounded-full text-sm sm:text-base shadow-sm"
      >
        Logout
      </button>
    </div>
  )
}

export default Navbar
