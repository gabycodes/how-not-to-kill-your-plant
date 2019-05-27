import React from 'react';
import Nav from './nav'
import Footer from './footer'
import PlantCard from './plantCard'
import data from './sampleData'
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class BrowsePlants extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  log = e => {
    console.log(e.target)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  state = {
    value: ''
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <section className="browsePlants">
          <h2>Plant Database</h2>
          <form action="">
            <input type="text" name="searchInput" htmlFor="searchInput" value={this.state.value} onChange={this.handleChange} placeholder="Start typing to search" />
          </form>
          <h3>Results</h3>
          <div className="resultsHolder">
            {data.map(plant => {
            return (
              <React.Fragment>
                <PlantCard plant={plant} key={plant.id} />
              </React.Fragment>
            )
          })}
          </div>
        </section>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default BrowsePlants;