import React, { useState, useTransition } from 'react'
import { z } from 'zod'

const recipeSchema = z.object({
    name: z.string().min(1, "Recipe Name Is REQUIRED"),
    ingredients: z.string().min(10, "Add More Ingredients"),
    time: z.number().min(1, "Cooking Time More Than Zero")
});

function Recipeform({ onAdd }) {
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [time, setTime] = useState("");
    const [errors, setErrors] = useState({});
    const [isPending, startTransition] = useTransition();

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = recipeSchema.safeParse({
            name, ingredients, time: Number(time)
        });
        if (!result.success) {
            const fieldError = {};
            result.error.issues.forEach((err) => {
                fieldError[err.path[0]] = err.message;

            });
            setErrors(fieldError);
            return;
        }
        setErrors({});
        startTransition(() => {
            onAdd({
                name, ingredients, time
            });
        });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add a Recipe</h2>
                <input type="text" value={name} placeholder='Recipe Name' onChange={(e) => setName(e.target.value)} />
                <br />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                <br />
                <textarea placeholder='Add Ingredients' value={ingredients} onChange={(e) => setIngredients(e.target.value)} ></textarea>
                <p>{ingredients.length}</p>
                {errors.ingredients && <p style={{ color: 'red' }}>{errors.ingredients}</p>}
                <br />
                <input type="number" placeholder='Cooking Time in Minutes' value={time} onChange={(e) => setTime(e.target.value)} />
                {errors.time && <p style={{ color: 'red' }}>{errors.time}</p>}
                <br />
                <button type='Submit' disabled={isPending} >{isPending ? 'Adding...' : 'Add Recipe'}</button>
            </form>
        </div >
    )
}

export default Recipeform