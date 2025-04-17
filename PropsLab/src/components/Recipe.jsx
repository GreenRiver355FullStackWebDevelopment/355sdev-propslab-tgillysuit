// MUI import for styling
import { FormControlLabel, Checkbox, Card } from '@mui/material';
// Presentational Component

const Recipe = ({props}) => {
    
    return (
        <Card sx={{ width: 750 }} className="recipe">
            {/* Data read in for the Recipe */}
            <h2>{props.name}</h2>
            <h3>Ingredients:</h3>
            <ul>
                {props.ingredients.map((ingredient, index) => (
                    <li key={index}>
                        <FormControlLabel control={<Checkbox />} label={ingredient}/>
                    </li>))}
            </ul>
            <h3>Instructions:</h3>
            <ol>
                {props.instructions.map((step, index) => (<li key={index}> {step}</li>))}
            </ol>
            <ol>
                {/* Data read in for Optional Glaze Recipe */}
                {props.optionalGlaze && (
                <div className="optional-glaze">
                    <h2>Optional: {props.optionalGlaze.name}</h2>
                    <h3>Ingredients:</h3>
                    <ul>
                        {props.optionalGlaze.ingredients.map((ingredient, index) => (
                            <li key={index}>
                                <FormControlLabel control={<Checkbox />} label={ingredient} />
                            </li>))}
                    </ul>
                    <h3>Instructions:</h3>
                    <ol>
                        {props.optionalGlaze.instructions.map((step, index) => (<li key={index}> {step}</li>))}
                    </ol>
                </div>)}
            </ol>
        </Card>
    );
}

export default Recipe;