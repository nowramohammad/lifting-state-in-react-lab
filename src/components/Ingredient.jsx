import React from 'react';
const Ingredient = ({ ingredient, onAction, actionText }) => {
  return (
    <li style={{ color: ingredient.color }}>
      {ingredient.name}
      <button onClick={() => onAction(ingredient)}>{actionText}</button>
    </li>
  );
};


export default Ingredient;