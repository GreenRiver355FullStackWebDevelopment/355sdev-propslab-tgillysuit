// Presentational Component

const Recipe = ({props}) => {
    
    return (
        <div className="recipe">
            <h2>{props.name}</h2>
            <h3>Ingredients</h3>
            <ul>
                {props.ingredients.map((item, index) => (
                <li key={index}>
                    {item}
                </li>))}
            </ul>
            <ol>
                <li>{props.instructions}</li>
            </ol>
        </div>
    );
}

export default Recipe;