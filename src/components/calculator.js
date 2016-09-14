import React from 'react';
import Numpad from './numpad';

class Calculator extends React.Component {
  constructor() {
    super();
    this.output = [''];
    this.state = {
      total: ''
    };

    this.handleEvent = this.handleEvent.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleEvent, false);
  }

  handleEvent(e) {
    var value = '';
    if (e.type == 'click') {
      value = $(e.target).text();

      if (value === String.fromCharCode(215)) {
        value = '*';
      }
      if (value == String.fromCharCode(247)) {
        value = '/';
      }
      if (value == String.fromCharCode(183)) {
        value = '.';
      }
    }
    if (e.type == 'keydown') {
      value = e.key;
      if (value == 'Enter') {
        value = '=';
      }
    }
    // Process numerical and period key presses for the first and third input
    if (((value >= 0 && value < 10) || value == '.') &&
      (this.output.length == 1 || this.output.length == 3) &&
      this.output[this.output.length - 1].length < 20) {
      this.setOutput(value);
    }
    // Process mathematical operation only if numbers are present in the current string
    if ((value == '/' || value == '*' || value == '-' || value == '+') &&
      (this.output[this.output.length - 1].length > 0)) {
      this.setOperation(value);
    }
    // Process equal operation on the third input
    if (value == '=' && this.output.length == 3 && this.output[this.output.length - 1].length > 0) {
      this.equal();
    }
    if (value == 'c') {
      this.clear();
    }
  }
  setOperation(value) {
    if (this.output.length == 3) {
      this.equal();
      this.setOperation(value);
    } else {
      this.output.push('');
      this.setOutput(value);
      this.output.push('');
    }
  }
  setOutput(value) {
    if (value == '.' && this.output[this.output.length - 1].indexOf(value) > 0) {
      return;
    }
    this.output[this.output.length - 1] += value;
    let total = this.output.join('');
    this.setState({ total: total });
  }
  equal() {
    let total = '' + Math.round(eval(this.output.join('')) * 1000) / 1000;
    this.output = [total];
    this.setState({ total: total });
  }
  clear() {
    this.output = [''];
    this.setState({ total: '' });
  }
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div id="output"><bdi>{this.state.total}</bdi></div>
          <Numpad onClick={this.handleEvent}/>
        </div>
      </div>
    );
  }
}

export default Calculator;