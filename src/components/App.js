import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HomeContainer } from '../containers/HomeContainer';
import { DetailsContainer } from '../containers/DetailsContainer';

export class App extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="ma3">
            <Link className="f4 ttu tracked blue link mr3" to="/">
              Home
            </Link>
            <Link className="f4 ttu tracked blue link" to="/details">
              Details
            </Link>
          </nav>

          <Route exact path="/" component={HomeContainer} />
          <Route path="/details/:uid" component={DetailsContainer} />
        </div>
      </Router>
    );
  }
}
