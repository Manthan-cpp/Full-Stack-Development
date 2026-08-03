import React from 'react'

const RightCardContent = () => {
    return (
        <div className='h-full absolute left-0 top-0 w-full p-5 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full w-12 h-12 flex justify-center items-center text-2xl font-bold'>1</h2>
            <div>
                <p className='text-xl leading-normal text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, harum distinctio inventore quam asperiores modi?</p>
                <div>
                    <button className='bg-blue-500 px-3 py-2 font-medium text-white rounded-full'>Satisfied</button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent