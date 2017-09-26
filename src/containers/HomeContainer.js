import React, { Component } from 'react';
import { ProfileCard } from '../components/ProfileCard';
import { RobotList } from '../components/RobotList';
import { getUsers } from '../api/users';

export class HomeContainer extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    getUsers().then(users => {
      this.setState(() => ({
        users,
      }));
    });
  }

  render() {
    return (
      <RobotList>
        {this.state.users.map(user => (
          <ProfileCard key={user.uid} {...user} className="w5 ma3" />
        ))}
      </RobotList>
    );
  }
}
