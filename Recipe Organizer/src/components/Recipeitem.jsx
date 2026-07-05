import React from 'react'

function Recipeitem({ recipe, onRemove }) {
    return (
        <>
            <h2>{recipe.name}</h2>
            <p>
                <strong>Ingredients : </strong>{recipe.ingredients}
            </p>
            <p>
                <strong>Cooking Time : </strong>{recipe.time} mins
            </p>
            <button onClick={onRemove}>Remove</button>
        </>
    )
}

export default Recipeitem