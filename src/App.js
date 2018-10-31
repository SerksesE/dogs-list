import React, { Component } from 'react';
import './App.css';
import DogList from './components/DogList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <DogList />
        </main>
      </div>
    );
  }
}

export default App;
