import React from 'react'

class Pet extends React.Component {
  
  
  
  render() {
    let opt2 = "ui primary button"
    let opt1 = "ui disabled button"
    if (this.props.petObj.isAdopted === true) {
      opt1 = "ui primary button"
      opt2 = "ui disabled button"
    }
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.petObj.gender === "male" ? '♀' :'♂' }
            {this.props.petObj.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.petObj.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.petObj.age}</p>
            <p>Weight: {this.props.petObj.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className={opt1}>Already adopted</button>
          <button className={opt2} onClick={() => this.props.onChangeStatus(this.props.petObj)}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
