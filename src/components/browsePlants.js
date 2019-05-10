import React from 'react';
import Nav from './nav'
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class BrowsePlants extends React.Component {
  constructor(props) {
    super();
  }
  log = e => {
    console.log(e.target)
  }
  render() {
    return (
      <section className="browsePlants">
        <Nav />
        <h1>Browse Plants</h1>
      </section>
    )
  }
}

export default BrowsePlants;