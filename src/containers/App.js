import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      {id: 'fvnk', name: 'Sarah', age: 36},
      {id: 'v35j', name: 'Gazelle', age: 5},
      {id: 'ne98', name: 'Holly', age: 9}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount')
  }

  componentDidMount() {
    console.log('[App.js] component mounted')
  };

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
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <div>
            <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandler} 
            changed={this.nameChangeHandler}/>
        </div>
      )};

    return (
        <div className={classes.App}>
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler} />          
          {persons}
        </div>
      );
    }
  }

export default App;
