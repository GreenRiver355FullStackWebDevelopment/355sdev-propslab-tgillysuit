// HOC Component
import Recipe from "../components/Recipe.jsx";

const RecipeContainer = ({ recipes }) => {
   return (
    <div className="recipe-container"> 
            {
                recipes.map((recipes, index) => (
                    <Recipe key={index} props={recipes}/>
                ))
            }
    </div> 
   )
}

export default RecipeContainer;