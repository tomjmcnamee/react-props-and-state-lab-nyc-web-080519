import React from 'react'

class Filters extends React.Component {
  render() {
    console.log("this is the petsArr upon Fi.ltersRender", this.props)
    // console.log("filtes:5 this.props", this.props)
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" selected={this.props.state.filters.type} onChange={this.props.onChangeType}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          {console.log("filters:19 filters.type: ", this.props.state)}
          <button className="ui secondary button" onClick={() => this.props.onFindPetsClick(this.props.state.filters.type)}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
