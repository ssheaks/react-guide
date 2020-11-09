import React from 'react';

const person = (props) => {
    console.log(props)
    return (
    <div>
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
        {/* <p>{props.children}</p> */}
        {props.children}
    </div>
    );
}

export default person;