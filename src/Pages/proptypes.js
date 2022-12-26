// npm install prop-types --save
import PropTypes from 'prop-types';
import React, { useState } from 'react';

class Greeting extends React.Component {
    constructor(props) {  
        super(props);  
        this.state = {  
            name: 'ff' 
        };
    } 
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}
export default Greeting;

Greeting.defaultProps = {
    name: 'Stranger'
  };
Greeting.propTypes = {
  name: PropTypes.string
};