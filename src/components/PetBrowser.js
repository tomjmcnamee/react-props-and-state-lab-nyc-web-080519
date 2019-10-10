import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    // debugger
    // console.log(this.props.petsArr.pets)
    // let filter = this.props.petsArr.filters.type
    // let filteredPets = filter === "all" ? this.props.petsArr.pets : this.props.petsArr.pets.filter( petObj => petObj.type === filter)
    let filteredPets = this.props.petsArr.pets
    let petCardsToPrint = filteredPets.map( pet => {return <Pet key={pet.id} petObj={pet} onChangeStatus={this.props.onChangeStatus}/> })


    // return <div className="ui cards">hi</div>
    return <div className="ui cards">{petCardsToPrint}</div>
  }
}

export default PetBrowser
