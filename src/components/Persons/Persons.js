import React from 'react';
import Person from './Person/Person'

const Persons = (props) => props.persons.map((person, index) => {
    console.log(props);
    return <Person 
        click={() => props.clicked(index)}
        key={person.id}
        name={person.name}
        age={person.age}
        changed={(event) => props.changed(event, person.id)} />
    });

export default Persons;