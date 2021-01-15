import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary';
import classes from './Person.css'

const person = (props) => {
    return (
        // <div className={classes.Person}>
        <Auxiliary>        
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </Auxiliary>
        // </div>

    );
}

export default person;