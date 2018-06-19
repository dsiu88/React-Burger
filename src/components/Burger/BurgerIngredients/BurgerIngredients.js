import React from 'react';
import classes from './BurgerIngredient.css';

const burgerIngredient = (props) => {
    let ingredients = null;

    switch ( props.type ) {
      case ('bread-bottom'):
        ingredients = <div className={classes.BreadBottom}></div>;
        break;

      case ('bread-top'):
        ingredients = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;

      default:
      ingredients = null;

      case ('meat'):
      ingredients = <div className={'classes.Meat'}></div>;
      break;

      case ('cheese'):
      ingredients = <div className={'classes.Cheese'}></div>;
      break;

      case ('bacon'):
      ingredients = <div className={'classes.Bacon'}></div>;
      break;

      case ('lettuce'):
      ingredients = <div className={'classes.Lettuce'}></div>;
      break;
  };

  return ingredients;

}
export default burgerIngredient;