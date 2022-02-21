import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

fetchAllPats = () => {
  let url = '/api/pets';
  console.log(this.state.filters.type)

  if (this.state.filters.type !== 'all') {
    url += `?type=${this.state.filters.type}`;
  }
    fetch(url)
      .then(response => response.json())
      .then(pets => 
        this.setState({pets})
        );
  
  
}

setFilterType = (type) => {
  this.setState({
    filters: {
      ...this.state.filters,
      type: type,
    }
  })
}

handleAdopt = (petId) => {
  let filteredPets = this.state.pets.map(pet => {
    if (pet.id === petId) {
      pet.isAdopted = !pet.isAdopted
      return pet
    } else {return pet}
  });

  this.setState({
    pets: filteredPets
  })
}

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                filters = {this.state.filters}
                onChangeType={this.setFilterType}
                onFindPetsClick={this.fetchAllPats}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets ={this.state.pets}
                onAdoptPet={this.handleAdopt}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
