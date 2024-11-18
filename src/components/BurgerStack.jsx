// `src/components/BurgerStack.jsx`
import { useState } from 'react'
import Ingredient from './Ingredient';

const BurgerStack = ({stack, removeFromBurger }) => {
    return (
        <div>
          <h2>Your Burger</h2>
          <ul>
            {stack.length === 0 ? (
              <li>No Ingredients</li>
            ) : (
              stack.map((ingredient) => (
                <Ingredient
                  key={ingredient.id}
                  ingredient={ingredient}
                  onAction={removeFromBurger} // pass the removeFromBurger function
                  actionText="X"
                />
              ))
            )}



    </ul>
    </div>
    );
  };
  




  export default BurgerStack;
  