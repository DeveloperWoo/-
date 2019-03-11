import React, { Component } from 'react';

class Css extends Component {
  render() {
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '36px'
    };
    return (
      <div style={style}>
      Hello World!
      </div>
    );
  }
}

export default Css;
