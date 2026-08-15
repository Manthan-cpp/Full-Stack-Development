import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [userData, setUserData] = useState([]);
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=15');
    setUserData(response.data);
    console.log(response.data);

  }
  let printUserData = "No user data available";
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div>
        <div className='h-40 w-44 bg-white rounded-xl overflow-hidden'>
        <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
      </div>
      <h2>{elem.author}</h2>
      </div>
    })
  }
  return (
    <div className='bg-black h-screen text-white'>
      <button className='bg-green-600 mb-3 px-5 py-2 rounded text-white active:scale-95'
        onClick={getData}>
        Get Data
      </button>
      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div>
    </div>
  )
}

export default App
