import React from 'react'

class Pet extends React.Component {
  render() {
    const {pet: {name, type, gender, age, weight,isAdopted}} = this.props
    return (
      <div className="card">
        <div className="content">
          <a className="header"> 
            {name}
            {gender === 'male' ? '♂' : '♀' }
            {/*'♀' OR '♂' */}
          </a>
          <div className="meta">
            <span className="date">PET TYPE:{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
            <p>Adopted: {isAdopted}</p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted ? 
          <button className="ui disabled button">Already adopted</button>
          :
          <button 
            className="ui primary button"
            onClick={() => this.props.onAdoptPet(this.props.pet.id)}
            >Adopt pet</button>
        }
          
         
        </div>
      </div>
    )
  }
}

export default Pet
