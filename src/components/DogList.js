import React, { Component } from 'react'
import * as request from 'superagent'

export default class DogList extends Component {
  state = { dogBreeds: null }



  componentDidMount() {
    request
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => this.updateBreeds(Object.keys(response.body.message)))
      .catch(console.error)
  }

  updateBreeds(breeds) {
    this.setState({
      dogBreeds: breeds
    })
  }
  
  renderDogBreed(breed) {
    return <li key={breed}>{breed}</li>
  }

  render() {
    return (
      <div className="dog-list">
        <h1>Dog List</h1>
        {/*{first render when state is null shows loading text}*/} 
        {!this.state.dogBreeds && 'Loading...'}   
        {/*{when the API is loaded shows the mapped list}
        {.map takes all breeds an passes them into list items inside of the ul when rendering}*/} 
        {this.state.dogBreeds && 
          <ul>
            {this.state.dogBreeds.map(dogBreed => <li key={dogBreed}>{dogBreed}</li>)}
          </ul>}
      </div>
    )
  }
}

