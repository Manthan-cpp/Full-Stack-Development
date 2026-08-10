import { useState } from 'react'
import './App.css'
import { X } from 'lucide-react';

function App() {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
    console.log(task);
    setDetails('')
    setTitle('')
  }
  function deleteNote(idx){
    const copyTask = [...task];
    copyTask.splice(idx,1);
    setTask(copyTask);
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
          className='px-5 border-2 rounded py-2'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }} />
        <textarea
          type="text"
          placeholder='Write Details'
          className='px-5 border-2 rounded py-2 h-20'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }} />
        <button className='px-5 py-2 active:scale-98 hover:bg-gray-200 bg-white text-black rounded'>Add Note</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10 bg-black'>
        <h1 className='text-2xl font-bold'>Your Notes</h1>
        <div className='gap-5 flex flex-wrap mt-5 h-full overflow-auto'>
          {task.map(function (elem, idx) {
            return <div key={idx} className='h-50 relative bg-cover text-black py-6 px-6 w-50 bg-[url("https://png.pngtree.com/png-vector/20260807/ourmid/pngtree-cute-note-paper-flat-cartoon-vector-png-image_19927998.webp")] rounded-2xl'>
              <div className='flex justify-between'>
                <h3 className='leading-tight mt-5 text-sm font-bold'> {elem.title}</h3>
                <h2 onClick={()=>{
                  deleteNote(idx)
                }} className='bg-red-500 active:scale-95 h-8 w-8 flex justify-center items-center rounded-full'><X /></h2>
              </div>
              <p className='font-medium mt-2 leading-tight text-xs text-gray-500'>{elem.details}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
