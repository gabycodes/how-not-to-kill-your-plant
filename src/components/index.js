import React from 'react';
import Nav from './nav'
import Footer from './footer'
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
        <div className="blocksContainer">
          <div className='block text'>
            <div className="noFlex">
              <h2><span className='br'>this is</span>How <span className="accentWord">not</span> to kill your plant.</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dicta ducimus dignissimos facere modi necessitatibus nihil adipisci assumenda quis, tempora eligendi, explicabo quas repudiandae amet?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex labore libero quia quaerat laboriosam vero!</p>
              <button>Browse Plant Library</button>
            </div>
          </div>
          <div className='block backgroundImg firstImg'></div>
          <div className='block backgroundImg secondImg'></div>
          <div className="block text">
            <div className='noFlex'>
              <h2>Sign up to save and share your plants!</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dicta ducimus dignissimos facere modi necessitatibus nihil adipisci assumenda quis, tempora eligendi, explicabo quas repudiandae amet?</p>
              <button>Sign Up</button>
            </div>
          </div>
          <div className='block text'>
            <div className="noFlex">
              <h2>Not sure what kind of plant you have?</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dicta ducimus dignissimos facere modi necessitatibus nihil adipisci assumenda quis, tempora eligendi, explicabo quas repudiandae amet?</p>
              <button>Take the quiz</button>
            </div>
          </div>
          <div className='block backgroundImg thirdImg'></div>
        </div>
        <Footer />
      </section>
    )
  }
}

export default Home;