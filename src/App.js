import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

//Using a functional component with useState()
const app = () => {
  //useState allows us to manage state in a functional component by passing in the state object and storing as a state array consant
  //using array destructuring, personsState gives you access to the state object, setPersonsState is a function that allows you to update the state
  const [ personsState, setPersonsState ] = useState({
      persons: [
        {name: 'Sarah', age: 36},
        {name: 'Gazelle', age: 5},
        {name: 'Holly', age: 9}
      ],
      otherState: 'some other state'
    });
  
    console.log(personsState);

  //use a function in a function to create the setPersonsState function
  const switchNameHandler = () => {
  console.log("Was clicked")
  //call the setPersonsState to update the state
  setPersonsState({
    persons: [
      {name: 'Haras', age: 63},
      {name: 'Ellezeg', age: 50},
      {name: 'Ylloh', age: 90}
    ],
    otherState: personsState.otherState
  });
  // console.log(personsState)
};

  //use personsState instead of this.state
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age ={personsState.persons[1].age}>My Hobbies: Eating Poo</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'))
}

export default app;
