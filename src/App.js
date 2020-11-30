import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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

  nameChangeHandler = (event, id) => {
    //use findIndex() method to check if the id is equal to the id of the person and if true return the index of the person we are updating.
    const personIndex = this.state.persons.findIndex(p => {
      return p.id===id;
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
    let btnClass = '';

    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <ErrorBoundary key={person.id}>
                <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangeHandler(event, person.id)} />
              </ErrorBoundary>
            })}
        </div>
      );
      btnClass = classes.Red;
    }

    //set classes dynamically
    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); //classes = ['red', 'bold']
    }

    return (
        <div className={classes.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
    );
  }
}

export default App;
