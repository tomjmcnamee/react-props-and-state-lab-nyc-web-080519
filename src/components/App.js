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

  componentDidMount = () => {
    this.fetchData(this.state.filters.type)
  }

  fetchData = (arg) => {
    let url = '/api/pets?type='
    arg==="all" ? url="/api/pets" : url= url + arg
    fetch(url)
    .then( resp => resp.json())
    .then( data => {
      let newArr = data
      this.setState({
        pets: newArr
      })
    })
  }

  onChangeType = (event) => {
    let newFiltersHash = {...this.state.filters, type: event.target.value}
    this.setState({
      filters: newFiltersHash
    })
  }
  
  onFindPetsClick = (filterDetails) => { 
    this.fetchData(filterDetails)
    // debugger
}


  onChangeStatus = (obj) => {
    let newArr = [...this.state.pets]
    let objToUpdate = newArr.find(object => object === obj )
    objToUpdate.isAdopted = true
      this.setState({
        pets: newArr
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
              <Filters onChangeType={this.onChangeType} state={this.state} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser petsArr={this.state} onChangeStatus={this.onChangeStatus}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
