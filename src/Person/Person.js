import React from 'react';

import classes from './Person.css'

const person = (props) => {
    console.log(props)
    // const style = {
    //     '@media (min-width: 500px)' : {
    //         width: '450px'
    //     }
    // };
    return (
    <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </div>
    );
}

export default person;