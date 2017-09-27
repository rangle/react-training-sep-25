import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { asyncComponent } from '../asyncComponent';

const AsyncHomeContainer = asyncComponent(() =>
  import(/* webpackChunkName: "home" */ '../containers/HomeContainer'),
);
const AsyncDetailsContainer = asyncComponent(() =>
  import(/* webpackChunkName: "details" */ '../containers/DetailsContainer'),
);

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

          <Route exact path="/" component={AsyncHomeContainer} />
          <Route path="/details/:uid" component={AsyncDetailsContainer} />
        </div>
      </Router>
    );
  }
}
