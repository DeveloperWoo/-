import React, { Component } from 'react';

class MyName extends Component{

static defaultProps = {
  name: 'React'
}

render(){
   return(
      <div> 
        Hi, My name is <b>{this.props.name}</b> :) 
      </div>
    );
  }
}

export default MyName;
