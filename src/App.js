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

switchNameHandler = () => {
  // console.log("Was clicked")
  // DON"T DO THIS. We should not/cannot change the state directly like this:
  //this.state.persons[0].name = 'Sarah'
  //Change the state with React's special method in the React extended {Component} object: setState(). This ensures React updates the state and the DOM
  this.setState({
    persons: [
      {name: 'Haras', age: 63},
      {name: 'Ellezeg', age: 50},
      {name: 'Ylloh', age: 90}
    ]
  })
  console.log(this.state)
}

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age ={this.state.persons[1].age}>My Hobbies: Eating Poo</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'))
  }
}

export default App;
