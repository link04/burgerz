import React from 'react';

const BurgerItem = (props) => {

  return (
    <div>
      <div className="BurgerItem">
        {props.burger.name}
      </div>
      <div className="BurgerBottomBun">
        <button onClick={ () => props.handleBurgerShow(props.burger) }>Show</button>
        <button onClick={ () => props.handleBurgerDelete(props.burger.id) }>Delete</button>
      </div>
    </div>
  )
}

export default BurgerItem
