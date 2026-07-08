import React, { useContext } from 'react'
import { ThemeContext } from '../../ThemeContext'

function Home() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <h2>Current Theme : {theme} </h2>
            <br />
            <button onClick={toggleTheme}>
                Switch To {theme==="light"?"dark":"light"} theme
            </button>
        </div>
    )
}

export default Home