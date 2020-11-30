import React from 'react';

import classes from './Person.css'

const person = (props) => {
    const randNum = Math.random();
    console.log(randNum)

    if (randNum > 0.95) {
        throw new Error('something went wrong')
    }
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </div>
    );
}

export default person;