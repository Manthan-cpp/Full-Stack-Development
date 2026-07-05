import React from 'react'
import Recipeitem from './Recipeitem'

function Recipelist({ recipes, onRemove }) {
    return (
        <div>
            <h2>Recipes</h2>
            {recipes.length === 0 ? 'No Recipes Left' : ''}
            {recipes.map((r, idx) => {
                return (
                    <Recipeitem recipe={r} key={idx} onRemove={() => onRemove(idx)} />
                );
            })}
        </div>
    )
}

export default Recipelist