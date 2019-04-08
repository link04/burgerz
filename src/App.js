import React, { Component } from 'react';

import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {

  state = {
    burgerz: [],
    filteredBurgerz: [],
    burgerToDisplay: {},
    filter:{
      type:''
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/burgers')
    .then(reponse => reponse.json())
    .then(parsedResponse => this.setState({
      burgerz: parsedResponse,
      filteredBurgerz:parsedResponse,
      burgerToDisplay: parsedResponse[0],
      filter:{
        type:'All'
      }
    }))
  }

  handleBurgerShow = (burgerObject) =>{
    this.setState({
      burgerToDisplay: burgerObject
    })
  }

  handleBurgerFilter(){
    let filteredBurgerz;
    const filterType = this.state.filter.type;
    if (filterType !== 'All'){
      filteredBurgerz = this.state.burgerz.filter(burger => burger.category === filterType);
    } else {
      filteredBurgerz = this.state.burgerz;
    }
     this.setState({
      filteredBurgerz:filteredBurgerz
    })
  }

  handleBurgerFilterchange = (event) => {
    this.setState({
      filter:{
        type:event.target.value
      }
    }, () => this.handleBurgerFilter())
  }

  handleBurgerCategory = (event,id) =>{
    fetch('http://localhost:3001/burgers/' + id,{
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({category: event.target.value})
    })
    .then(response => response.json())
    .then(parsedResponse => this.setState({
        burgerToDisplay:parsedResponse
        }, () => this.updateBurgersArray(this.state.burgerToDisplay))
    )
  }

  updateBurgersArray = (newBurger) => {
    const burgersCopy = this.state.burgerz;
    const updatedBurger = burgersCopy.find(burger => burger.id === newBurger.id);
    updatedBurger.category = newBurger.category;
    this.setState({
      burgerz:burgersCopy
    }, () => this.handleBurgerFilter())
  }

  handleBurgerDelete = (id) => {

    const burgersCopy = this.state.burgerz;
    const index = burgersCopy.findIndex(burger => burger.id === id);
    let newBurgerToShow;
    if(this.state.burgerToDisplay.id === burgersCopy[index].id)
    {
      burgersCopy.splice(index, 1);
      newBurgerToShow =  burgersCopy[0];
    } else {
      burgersCopy.splice(index, 1);
      newBurgerToShow = this.state.burgerToDisplay
    }

    this.setState({
      burgerz:burgersCopy,
      burgerToDisplay:newBurgerToShow
    }, () => this.handleBurgerFilter())
  }

  render() {

    return (
      <div id="App">
        <BurgerContainer handleBurgerDelete={this.handleBurgerDelete} handleBurgerFilterchange={this.handleBurgerFilterchange} handleBurgerShow={this.handleBurgerShow} burgerz={this.state.filteredBurgerz} />
         {this.state.filteredBurgerz.length > 0 ?
           <BurgerDisplay handleBurgerCategory={this.handleBurgerCategory} burger={this.state.burgerToDisplay} />
           :
           <div className="BurgerDisplay">
              <h2>No Burgerz Found</h2>
           </div>
         }

    </div>
    );
  }
}

export default App;
