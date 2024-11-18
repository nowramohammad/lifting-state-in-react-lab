// src/components/IngredientList.jsx
import { useState } from 'react'
import Ingredient from './Ingredient';

const IngredientList = ({ availableIngredients, addToBurger }) => {
  return (
    <div>
      <h2>Available Ingredients</h2>
      <ul>
        {availableIngredients.map((ingredient) => (
          <Ingredient
            key={ingredient.name}
            ingredient={ingredient}
            onAction={addToBurger}
            actionText="+"
          />
        ))}
      </ul>
    </div>
  );
};
  
  export default IngredientList;
  