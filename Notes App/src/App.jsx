import { useState } from 'react'
import './App.css'

function App() {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form Submitted !');

  }
  return (
    <div className='h-screen lg:flex bg-black  text-white'>
      <form onSubmit={(e) => {
        submitHandler(e);
      }} action="" className='flex p-10 lg:w-1/2 flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Add Notes</h1>
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 border-2 rounded py-2' />
        <textarea
          type="text"
          placeholder='Write Details'
          className='px-5 border-2 rounded py-2 h-20' />
        <button className='px-5 py-2 bg-white text-black rounded'>Add Note</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10 bg-black'>
        <h1 className='text-2xl font-bold'>Your Notes</h1>
        <div className='gap-5 flex flex-wrap mt-5 h-full overflow-auto'>
          <div className='h-52 w-40 bg-white rounded-2xl'></div>
          <div className='h-52 w-40 bg-white rounded-2xl'></div>
          <div className='h-52 w-40 bg-white rounded-2xl'></div>
        </div>
      </div>
    </div>
  )
}

export default App
