import React from 'react';

const Button = (props) => 
    <button className="waves-effect waves-light btn">
      {props.children}
    </button>;

export default Button;