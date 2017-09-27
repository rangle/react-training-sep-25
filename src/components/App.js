import React, { Component } from 'react';
import { HomeContainer } from '../containers/HomeContainer';

export class App extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return <HomeContainer />;
  }
}
