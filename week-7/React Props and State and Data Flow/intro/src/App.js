import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class Company extends Component {
  render() {
    let explodedRevenue = this.props.revenue * 100

    return (
      <div>
        <p>{this.props.name} earns {explodedRevenue}</p>
      </div>
    )
  }
}

class App extends Component {
  render() {

    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }]

    return (
      <Company name={companies[0].name} revenue={companies[0].revenue} />
    )
  }
}

export default App;
