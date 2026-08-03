import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = () => {
    return (
        <div className='h-full w-80 shrink-0 overflow-hidden relative bg-red-800 rounded-4xl'>
            <img className='h-full w-full object-cover' src="https://media.istockphoto.com/id/1477871401/photo/portrait-of-happy-young-businesswoman-arms-crossed-with-looking-at-camera-on-white-background.jpg?s=1024x1024&w=is&k=20&c=DHbWtsuz_HqLj0YIqKsf6jp53j7ScbnrvgVoMiPknS8=" alt="" />
            <RightCardContent/>
        </div>
    )
}

export default RightCard