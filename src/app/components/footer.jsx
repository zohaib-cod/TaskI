import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SHOP</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Men</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Women</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Accessories</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">New Arrivals</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">HELP</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">FAQs</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Shipping Info</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Returns & Exchanges</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Track Order</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ABOUT</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Our Story</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Our Team</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Careers</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Blog</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CUSTOMER SERVICE</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Contact Us</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Size Guide</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Payment Options</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">FOLLOW US</h2>
        <nav className="list-none mb-10">
          <li>
            <Link target='blank' href="https://www.linkedin.com/in/ali-zohaib-906294401/" className="text-gray-600 hover:text-gray-800">LinkedIn</Link>
          </li>
          <li>
            <Link target="_blank" href="https://github.com/zohaib-cod" className="text-gray-600 hover:text-gray-800">GitHub</Link>
          </li>
          <li>
            <Link target="_blank" href="https://www.fiverr.com/zohaibiq/buying?source=avatar_menu_profile" className="text-gray-600 hover:text-gray-800">Fiverr</Link>
          </li>
          <li>
            <Link target="_blank" href="https://www.upwork.com/freelancers/~0176feb220181f1365" className="text-gray-600 hover:text-gray-800">Upwork</Link>
          </li>
          <li>
            <Link target="_blank" href="http://ali-zohaib.vercel.app/" className="text-gray-600 hover:text-gray-800">Portfolio</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">LEGAL</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Terms of Service</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Refund Policy</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Cookie Policy</Link>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="border-t border-gray-200">
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2026 Zohaib Task —
        <Link href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@Zohaib</Link>
      </p>
      <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Get in touch with Zohaib</span>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
