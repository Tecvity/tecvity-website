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
        <div className='pl-12'>

      <CustomServices />
        </div>
      </div>

    </div>
  )
}

export default Portfolio