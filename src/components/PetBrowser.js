import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let filteredPets = this.props.petsArr.pets
    let petCardsToPrint = filteredPets.map( pet => {return <Pet key={pet.id} petObj={pet} onChangeStatus={this.props.onChangeStatus}/> })

    return <div className="ui cards">{petCardsToPrint}</div>
  }
}

export default PetBrowser
