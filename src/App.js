import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person'

class App extends Component {
state = {
  persons: [
    {id: 'fvnk', name: 'Sarah', age: 36},
    {id: 'v35j', name: 'Gazelle', age: 5},
    {id: 'ne98', name: 'Holly', age: 9}
  ],
  otherState: 'some other value',
  showPersons: false
}

  // switchNameHandler = (newName) => {
  //   //Change the state with React's special method in the React extended {Component} object: setState(). This ensures React updates the state and the DOM
  //   this.setState({
  //     persons: [
  //       {name: newName, age: 63},
  //       {name: 'Ellezeg', age: 50},
  //       {name: 'Ylloh', age: 90}
  //     ]
  //   })
  //   console.log(this.state)
  // }


  nameChangeHandler = (event, id) => {
    //use findIndex() method to check if the id is equal to the id of the person and if true return the index of the person we are updating.
    const personIndex = this.state.persons.findIndex(p => {
      return p.id ===id;
    })

    //Using the index returned above we can set a constant person to update the state with the input value. Make sure not to update the object in the state directly, use spread operator or Object.Assign:
    //const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    //work with copy of persons array to 
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    //set the state to the updated persons array
    this.setState( {
      persons: persons
    })
  }

  deletePersonHandler = (personsIndex) => {
    // const persons = this.state.slice();
    const persons = [...this.state.persons];
    persons.splice(personsIndex, 1);
    this.setState({persons: persons});
  }
  //use the arrow function whereby we assign an arrow function rather than just creating a function (togglePersonsHandler()) because, due to the nature of javascript, it will assure that the 'this' reference return to the class to execute this method.
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
            })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    //set classes dynamically
    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold'); //classes = ['red', 'bold']
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'))
  }
}

export default Radium(App);
