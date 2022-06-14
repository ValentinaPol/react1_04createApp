
import React from 'react';
import './App.css';
import Car from './Car/Car';

function App() {
  const divStyle = {
    textAlign: 'center'
  }
  return (
    <div style={divStyle}>
      <h1>Hello world!</h1>

      <Car />
      <Car />
    </div>
  );
  /*return React.createElement(
    'div',
    {
      className: 'App'
    },
    React.createElement(
      'h1',
      null,
      'Hello world!'
    )
  )*/
}

export default App;
