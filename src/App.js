
import React from 'react';
import './App.css';

function App() {
  const divStyle = {
    textAlign: 'center'
  }
  return (
    <div style={divStyle}>
      <h1 style={{color: 'blue', fontSize: '20px'}}>Hello world!</h1>
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
