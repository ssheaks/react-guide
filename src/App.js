import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
state = {
  persons: [
    {name: 'Sarah', age: 36},
    {name: 'Gazelle', age: 5},
    {name: 'Holly', age: 9}
  ]
}

  switchNameHandler = (newName) => {
    //Change the state with React's special method in the React extended {Component} object: setState(). This ensures React updates the state and the DOM
    this.setState({
      persons: [
        {name: newName, age: 63},
        {name: 'Ellezeg', age: 50},
        {name: 'Ylloh', age: 90}
      ]
    })
    console.log(this.state)
  }

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        {name: this.state.persons[0].name, age: 63},
        {name: event.target.value, age: 50},
        {name: this.state.persons[2].name, age: 90}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Haras')}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age ={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Sarah')}
        changed={this.nameChangeHandler}>My Hobbies: Eating Poo</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'))
  }
}

export default App;
