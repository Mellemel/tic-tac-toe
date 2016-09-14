import React from 'react';
import Button from './button';

const Numpad = (props) => {
  return (
    <div id="numpad" onClick={props.onClick}>
      <div className="numpad">
        <Button>7</Button>
        <Button>4</Button>
        <Button>1</Button>
      </div>
      <div className="numpad">
        <Button>8</Button>
        <Button>5</Button>
        <Button>2</Button>
        <Button>0</Button>
      </div>
      <div className="numpad">
        <Button>9</Button>
        <Button>6</Button>
        <Button>3</Button>
        <Button>&middot;</Button>
      </div>
      <div className="numpad">
        <Button>&divide;</Button>
        <Button>&times;</Button>
        <Button>-</Button>
        <Button>+</Button>
      </div>
      <div className="numpad">
        <Button>c</Button>
        <Button>=</Button>
      </div>
    </div>
  );
};

export default Numpad;