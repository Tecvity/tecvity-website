import React from 'react'
import FeaturedWork from '../components/FeaturedWork'
import CustomServices from "../components/CustomServices"
import WhatWeDo from '../components/WhatWeDo'

function Portfolio() {
  return (
    <div>
      <WhatWeDo />
      <div className='ml-12 -mt-80'>
      <div className='pt-60'>

      <FeaturedWork />
      </div>
      <CustomServices />
      </div>

    </div>
  )
}

export default Portfolio