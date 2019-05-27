import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super();
  }
  log = e => {
    console.log(e.target)
  }
  render() {
    return (
      <section className="nav">
        <div className="logo">
          <Link to='/'>HNTKYP🌱</Link>
        </div>
        <nav>
          <li>
            <Link to='/sign-in-or-sign-up'>Sign In</Link>
          </li>
          <li>
            <Link to='/browse-plants'>Browse Plants</Link>
          </li>
          <li>Search</li>
        </nav>
      </section>
    )
  }
}

export default Nav;