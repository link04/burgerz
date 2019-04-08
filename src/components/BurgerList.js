import React from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = (props) => {

    const burgersToMap = props.burgerz;
    const mappedBurgerz = burgersToMap.map(burger => <BurgerItem handleBurgerDelete={props.handleBurgerDelete} handleBurgerShow={props.handleBurgerShow} key={burger.id} burger={burger} /> )

  return (

    <div className="BurgerList">
      {mappedBurgerz}
    </div>
  )
}

export default BurgerList
