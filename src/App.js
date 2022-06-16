
import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';


class App extends Component {

  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2010}
    ], 
    pageTitle: 'React components'
  }

  changeTitleHandler = () => {
    console.log('Clicked')
  }

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    const cars = this.state.cars
  
    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.changeTitleHandler}>Change title</button>

        <Car  name={cars[0].name} year={cars[0].year} />
        <Car  name={cars[1].name} year={cars[1].year} />
        <Car  name={cars[2].name} year={cars[2].year} />
      </div>
    );
  }
}

export default App;

/*function App() {

  React.state = {
    cars: [
      {name: "Ford", year: 2018},
      {name: "Audi", year: 2016},
      {name: "Mazda", year: 2010}
    ]
  }

  const divStyle = {
    textAlign: 'center'
  }

  const cars = React.state.cars

  return (
    <div style={divStyle}>
      <h1>Hello world!</h1>

      <Car  name={cars[0].name} year={cars[0].year} />
      <Car  name={cars[1].name} year={cars[1].year} />
      <Car  name={cars[2].name} year={cars[2].year} />
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
  )
}*/ //For 16 version
