// import React from 'react'
import { useState } from 'react'

function App() {
  const [number, setNumber] = useState(0);
  function generatenum() {
    const num = Math.floor(Math.random()*1000000)
    setNumber(num)
  }
  return (
    <div>
      <h2>Random Number Generator :</h2>
      <button onClick={generatenum}>Generate</button>
      <br />
      {number}
    </div>
  )
}

export default App