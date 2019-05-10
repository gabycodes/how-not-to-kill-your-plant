import React from 'react';
import Nav from './nav'
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super();
  }
  log = e => {
    console.log(e.target)
  }
  render() {
    return (
      <section className="home">
        <Nav />
        <div class='block text'>
          <h2>this is How <span>not</span> to kill your plant.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dicta ducimus dignissimos facere modi necessitatibus nihil adipisci assumenda quis, tempora eligendi, explicabo quas repudiandae amet?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex labore libero quia quaerat laboriosam vero!</p>
          <button>Browse Plant Library</button>
        </div>
        <div class='block photo'>
          <img src="https://res.cloudinary.com/gabycodes-/image/upload/v1557286749/how-not-to-kill-your-plants/katya-austin-554633-unsplash.jpg" alt="Hand making a thumbs-up gesture on a background of exotic plants."/>
        </div>
        <div class='block photo'>
          <img src="https://res.cloudinary.com/gabycodes-/image/upload/v1557286849/how-not-to-kill-your-plants/emily-rudolph-543369-unsplash.jpg" alt="Colorful table decorated with a copper kettle, mug with coffee, and tropical houseplant."/>
        </div>
        <div class='block text'>
          <h2>Sign up to save and share your plants!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dicta ducimus dignissimos facere modi necessitatibus nihil adipisci assumenda quis, tempora eligendi, explicabo quas repudiandae amet?</p>
          <button>Sign Up</button>
        </div>
        <div class='block text'>
          <h2>Not sure what kind of plant you have?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dicta ducimus dignissimos facere modi necessitatibus nihil adipisci assumenda quis, tempora eligendi, explicabo quas repudiandae amet?</p>
          <button>Take the quiz</button>
        </div>
        <div class='block photo'>
          <img src="https://res.cloudinary.com/gabycodes-/image/upload/v1554819948/how-not-to-kill-your-plants/julie-johnson-719955-unsplash.jpg" alt="Potted sansevieria plant in a seemingly empty room with hardwood flooring, with late aftenoon sun peeking in from an unseen window."/>
        </div>
      </section>
    )
  }
}

export default Home;