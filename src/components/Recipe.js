import React from 'react';
import RecipeItem from './RecipeItem';

const Recipe = (props) => {
    const { recipes } = props;
    return (
        <div className="row">
            {recipes.map(recipe =>
             <RecipeItem 
                name={recipe.recipe.label}  
                image= {recipe.recipe.image}
                ingredientLines={recipe.recipe.ingredientLines}
             />
            )}
        </div>
    );

}

export default Recipe;