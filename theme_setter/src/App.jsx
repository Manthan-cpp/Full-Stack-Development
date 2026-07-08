import React from 'react'
import { ThemeContext } from './ThemeContext'
import Home from './assets/Components/home'
import './App.css'
import { useState } from 'react'

function App() {
  const [ theme, setTheme ] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <>
      <ThemeContext.Provider value={{theme,toggleTheme}}>
        <div className={theme === "dark" ? "darkmode" : "lightmode"}>
          <Home />
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App