import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  lettuce: 0.25,
  bacon: 0.5,
  meat: 1,
  cheese: 0.5,
  onion: 0.25,
  tomato: 0.25
};

class BurgerBuilder extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ingredients: {
        tomato: 0,
        onion: 0,
        bacon: 0,
        lettuce: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 5
    };
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };

    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };

    updatedIngredients[type] = updatedCount;
    const priceSubtraction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceSubtraction
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
  };

  render (){
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
        <div><Burger ingredients={this.state.ingredients}/></div>
        <BuildControls
          ingredientsAdded={this.addIngredientHandler}
          ingredientsRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
