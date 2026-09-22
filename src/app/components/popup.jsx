// 'use client'
// import React, { useState, useEffect } from 'react'

// const Popup = () => {
//   const [showPopup, setShowPopup] = useState(false)

//   useEffect(() => {
//     const popupClosed = localStorage.getItem('popupClosed')
//     if (!popupClosed) {
//       setShowPopup(true)
//     }
//   }, [])

//   const closePopup = () => {
//     setShowPopup(false)
//     localStorage.setItem('popupClosed', 'true')
//   }

//   if (!showPopup) return null

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-5 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
//         <button
//           onClick={closePopup}
//           className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl leading-none"
//         >
//           &times;
//         </button>
//         <h2 className="text-2xl font-bold text-gray-900 mb-3">Welcome to Our Store!</h2>
//         <p className="text-gray-600 mb-4">
//           Get 10% off your first order. Use code WELCOME10 at checkout.
//         </p>
//         <button
//           onClick={closePopup}
//           className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600"
//         >
//           Shop Now
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Popup














'use client'
import React, { useState, useEffect } from 'react'

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const popupClosed = localStorage.getItem('popupClosed')
    if (!popupClosed) {
      setShowPopup(true)
    }
  }, [])

  const closePopup = () => {
    setShowPopup(false)
    localStorage.setItem('popupClosed', 'true')
  }

  if (!showPopup) return null

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative shadow-2xl">
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl leading-none"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-red-500 mb-3">Note! </h2>
        <p className="text-gray-600 mb-4">
          Dear Sir, I am Ali Zohaib and I have developed this website (without using Any Ai) as a task for internship. I hope you like it. So as you said its just a dummy landing page.
        </p>
      </div>
    </div>
  )
}

export default Popup