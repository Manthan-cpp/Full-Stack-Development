import React, { useState } from 'react'

function App() {
  const [celcius, setCelcius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  function handleFahrenheit(e) {
    const value = e.target.value;
    let i = (5 / 9) * (value - 32);
    setFahrenheit(value);
    setCelcius(i.toFixed(2));
  }
  function handleCelcius(e) {
    const value = e.target.value;
    let j = (((9 / 5) * value) + 32);
    setCelcius(value);
    setFahrenheit(j.toFixed(2));
  }
  return (
    <div>
      <h2>Temperature Converter </h2>
      <input type="number" placeholder='Fahrenheit' value={fahrenheit} onChange={handleFahrenheit} />
      <input type="number" placeholder='Celcius' value={celcius} onChange={handleCelcius} />
    </div>
  )
}

export default App