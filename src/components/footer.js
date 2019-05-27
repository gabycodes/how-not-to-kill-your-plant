import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

// library.add(faStroopwafel)

class Footer extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <footer>
        <a href="/">Made with ♡ by Gaby Küpfer</a>
        <div className="socialLinks">
          <a href="/">
            {/* <FontAwesomeIcon icon="stroopwafel" /> */}
          </a>
          <a href="/">
            {/* <FontAwesomeIcon icon="stroopwafel" /> */}
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer;