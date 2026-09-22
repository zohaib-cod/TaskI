import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
     <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <Link className="mr-5 hover:text-gray-900" href="/">Home</Link>
      <Link className="mr-5 hover:text-gray-900" href="#">Men</Link>
      <Link className="mr-5 hover:text-gray-900" href="#">Women</Link>
      <Link className="hover:text-gray-900" href="#">Accessories</Link>
    </nav>
    <Link className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0" href="/">
      <img src="zohaib-removebg-preview.png" alt="" />
        
      
      
    </Link>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 cursor-pointer">Cart
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      </button>
    </div>
  </div>
</header> 
    </div>
  )
}

export default Navbar
