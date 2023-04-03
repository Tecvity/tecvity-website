import React from 'react'
import Lottie from "lottie-react"
import Error from "../assets/404.json"

function NotFound() {
  return (
      <div className='py-80'>
          <div className='w-4/5 justify-center items-center flex text-center mx-auto'> 
              <Lottie animationData={Error} loop={true} />
          </div>
    </div>
  )
}

export default NotFound;