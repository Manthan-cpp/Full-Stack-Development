import React from 'react'
import RightCard from './RightCard'

const RightCOntent = () => {
  return (
    <div className='h-full flex overflow-x-auto gap-10 rounded-4xl flex-nowrap p-6 w-2/3'>
      <RightCard/>
      <RightCard/>
      <RightCard/>
    </div>
  )
}

export default RightCOntent