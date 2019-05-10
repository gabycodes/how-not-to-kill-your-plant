import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/index'
import AuthPage from './components/authPage'
import BrowsePlants from './components/browsePlants'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: '',
      userAuth: false,
      userEmail: '',
    }
  }
  
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-in-or-sign-up" component={AuthPage} />
          <Route exact path="/browse-plants" component={BrowsePlants} />
          {/* <Route exact path="/app" render={(props) => (
            <UserInputPage {...props} token={this.state.accessToken} handleChange={this.handleChange} handleSubmit={this.handleSubmit} userLocation={this.state.userLocation} sliceRestaurants={this.state.restaurantList} loading={this.state.isLoading} header={this.state.header} noSlice={this.state.noSlice} setOffset={this.setOffset} offset={this.state.apiOffset} />
          )}/> */}
				</Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
