import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Recipeform from './components/Recipeform'
import { z } from 'zod'
import Recipelist from './components/Recipelist'

function App() {
  const [recipes, setRecipes] = useState([]);
  const [count, setCount] = useState(0)
  const addRecipe = (recipe) => {
    setRecipes((prev) => [...prev, recipe])
  }
  const removeRecipe = (index) => {
    setRecipes((prev) => prev.filter((_, i) => i !== index))
}
return (
  <>
    <h2>Recipe App</h2>
    <Recipeform onAdd={addRecipe} />
    <Recipelist recipes={recipes} onRemove={removeRecipe} />
  </>
)
}

export default App
