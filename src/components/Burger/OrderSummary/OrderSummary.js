import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
        return (
          <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>:{this.props.ingredients[igKey]}
          </li>
        );
      });

      return (
        <Aux>
          <h3>Your Order</h3>
          <p>Your Burger contains the following:</p>
          <ul>
              {ingredientSummary}
          </ul>
          <p><strong>Total: ${this.props.cost.toFixed(2)}</strong></p>
          <p>Continue to Checkout?</p>
          <Button btnType="Danger" clicked={this.props.cancelBuy}>Cancel?</Button>
          <Button btnType="Success" clicked={this.props.continueBuy}>Continue?</Button>
        </Aux>
      )
  }
}

export default OrderSummary;
