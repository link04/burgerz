import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {

  render(){

    return (
      <div className="BurgerContainer">
        <BurgerFilter  handleBurgerFilterchange={this.props.handleBurgerFilterchange} />

        <BurgerList handleBurgerDelete={this.props.handleBurgerDelete} handleBurgerShow={this.props.handleBurgerShow} burgerz={this.props.burgerz} />
      </div>
    )
  }
}
