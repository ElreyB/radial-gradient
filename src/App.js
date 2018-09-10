import React, { Component } from 'react';
import logo from './logo.svg';
import style from 'styled-components';

const Card = style.div`
  width: 500px;
  height: 500px;
  background: radial-gradient(ellipse farthest-corner at center, red 0, blue, green 100%);
`;

class App extends Component {
  render() {
    return <Card />;
  }
}

export default App;
