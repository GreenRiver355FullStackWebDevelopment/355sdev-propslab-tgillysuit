import RecipeContainer from './components/RecipeContainer.jsx'
import { recipes } from './data/data.js'
import './App.css'

function App() {

  return (
    <>
      <h1>Recipe Book</h1>
      <RecipeContainer recipes={recipes}/>
    </>
  )
}

export default App
