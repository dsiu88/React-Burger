import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

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
      }
    };
  }

  render (){
    return (
      <Aux>
        <div><Burger ingredients={this.state.ingredients}/></div>
        <div>Build Controller</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
