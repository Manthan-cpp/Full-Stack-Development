import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Test from './test'
import { useRef } from 'react'

function App() {
  const testref = useRef();
  const btnclicked = () => {
    console.log(testref.current);
  };

  return (
    <div>
      <Test ref={testref} />
      <button onClick={btnclicked}>Console</button>
    </div>
  )
}

export default App
