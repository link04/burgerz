import React from 'react';

const BurgerDisplay = (props) => {
  return (
    <div className="BurgerDisplay">
      <img alt={props.burger.name} src={props.burger.imgURL}/>
      <br/>
      <h1>{props.burger.name}</h1>
      <br/>
      <select  value={props.burger.category} onChange={(event) => props.handleBurgerCategory(event, props.burger.id)}>
        <option  value="Relatable">Relatable</option>
        <option  value="Bougie">Bougie</option>
      </select>
    </div>
  )
}

export default BurgerDisplay
