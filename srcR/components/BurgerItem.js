import React, { Component } from 'react';

const BurgerItem = (props) => {
  return (
    <div>
      <div className="BurgerItem">
        { /* Name of Burger Here */ }
      </div>
      <div className="BurgerBottomBun">
        <button onClick={console.log}>Show</button>
        <button onClick={console.log}>Delete</button>
      </div>
    </div>
  )
}

export default BurgerItem
