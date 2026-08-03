import React from 'react'
import LeftContent from './LeftContent'
import RightCOntent from './RightCOntent'

const Page1content = () => {
  return (
    <div className='py-10 px-18 h-[90vh] gap-10 flex justify-between '>
    <LeftContent/>
    <RightCOntent/>
    </div>

  )
}

export default Page1content